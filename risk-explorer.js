const CHOL_MMOL_THRESHOLD = 6.5;
let cholUnit = 'mgdl'; // 'mgdl' or 'mmol'

const state = {
  age: 45,
  sex: 'female',
  edu: 'high',
  sbp: 120,
  bmi: 24,
  chol_mgdl: 200,
  activity: 'active',
  apoe: 'unknown'
};

function mgdlToMmol(mgdl) { return mgdl / 38.67; }
function mmolToMgdl(mmol) { return mmol * 38.67; }

function pointsAge(age) {
  if (age < 47) return 0;
  if (age <= 53) return 3;
  return (state.apoe !== 'unknown') ? 5 : 4;
}
function pointsEdu(edu) {
  if (edu === 'high') return 0;
  const extended = state.apoe !== 'unknown';
  if (edu === 'mid') return extended ? 3 : 2;
  return extended ? 4 : 3;
}
function pointsSex(sex) { return sex === 'male' ? 1 : 0; }
function pointsSBP(sbp) { return sbp > 140 ? 2 : 0; }
function pointsBMI(bmi) { return bmi > 30 ? 2 : 0; }
function pointsChol(mgdl) { return mgdlToMmol(mgdl) > CHOL_MMOL_THRESHOLD ? 2 : 0; }
function pointsActivity(a) { return a === 'inactive' ? 1 : 0; }
function pointsApoe(a) { return a === 'yes' ? 2 : 0; }

function maxScore() {
  return state.apoe !== 'unknown' ? 19 : 15;
}

function riskBand(score) {
  if (score <= 5) return { pct: '1.0%', label: 'low estimated risk', cls: 'low' };
  if (score <= 7) return { pct: '1.9%', label: 'low-moderate estimated risk', cls: 'lowmod' };
  if (score <= 9) return { pct: '4.2%', label: 'moderate estimated risk', cls: 'mod' };
  if (score <= 11) return { pct: '7.4%', label: 'elevated estimated risk', cls: 'elev' };
  return { pct: '16.4%', label: 'high estimated risk', cls: 'high' };
}

// [background, foreground] pairs tuned for the site's light theme.
const bandColors = {
  low: ['rgba(75,102,80,0.14)', '#3F5A44'],
  lowmod: ['rgba(184,145,46,0.16)', '#8A6F1F'],
  mod: ['rgba(184,145,46,0.2)', '#8A6F1F'],
  elev: ['rgba(168,92,50,0.18)', '#95502B'],
  high: ['rgba(122,46,30,0.18)', '#7A2E1E']
};

function setupSeg(id, key, onchange) {
  const el = document.getElementById(id);
  el.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state[key] = btn.dataset.val;
      onchange && onchange();
      update();
    });
  });
}

setupSeg('seg-sex', 'sex');
setupSeg('seg-edu', 'edu');
setupSeg('seg-act', 'activity');
setupSeg('seg-apoe', 'apoe');

const ageSlider = document.getElementById('slider-age');
ageSlider.addEventListener('input', () => {
  state.age = parseInt(ageSlider.value);
  document.getElementById('val-age').textContent = state.age + ' years';
  update();
});

document.getElementById('input-sbp').addEventListener('input', (e) => {
  state.sbp = parseFloat(e.target.value) || 0;
  update();
});
document.getElementById('input-bmi').addEventListener('input', (e) => {
  state.bmi = parseFloat(e.target.value) || 0;
  update();
});
document.getElementById('input-chol').addEventListener('input', (e) => {
  const v = parseFloat(e.target.value) || 0;
  state.chol_mgdl = cholUnit === 'mgdl' ? v : mmolToMgdl(v);
  update();
});
document.getElementById('chol-unit-btn').addEventListener('click', () => {
  const input = document.getElementById('input-chol');
  const btn = document.getElementById('chol-unit-btn');
  if (cholUnit === 'mgdl') {
    cholUnit = 'mmol';
    input.value = mgdlToMmol(state.chol_mgdl).toFixed(1);
    input.step = '0.1';
    btn.textContent = 'mmol/L';
  } else {
    cholUnit = 'mgdl';
    input.value = Math.round(state.chol_mgdl);
    input.step = '1';
    btn.textContent = 'mg/dL';
  }
});

function update() {
  const pAge = pointsAge(state.age);
  const pEdu = pointsEdu(state.edu);
  const pSex = pointsSex(state.sex);
  const pSbp = pointsSBP(state.sbp);
  const pBmi = pointsBMI(state.bmi);
  const pChol = pointsChol(state.chol_mgdl);
  const pAct = pointsActivity(state.activity);
  const pApoe = pointsApoe(state.apoe);

  document.getElementById('pts-age').textContent = pAge + ' pts';
  document.getElementById('pts-edu').textContent = pEdu + ' pts';
  document.getElementById('pts-sex').textContent = pSex + ' pts';
  document.getElementById('pts-sbp').textContent = pSbp + ' pts';
  document.getElementById('pts-bmi').textContent = pBmi + ' pts';
  document.getElementById('pts-chol').textContent = pChol + ' pts';
  document.getElementById('pts-act').textContent = pAct + ' pts';
  document.getElementById('pts-apoe').textContent = (state.apoe === 'unknown') ? 'n/a' : pApoe + ' pts';

  const total = pAge + pEdu + pSex + pSbp + pBmi + pChol + pAct + (state.apoe !== 'unknown' ? pApoe : 0);
  const max = maxScore();

  document.getElementById('score-num').textContent = total;
  document.getElementById('score-max').textContent = ' / ' + max;

  const band = riskBand(total);
  const badge = document.getElementById('risk-badge');
  badge.textContent = band.label + ' (~' + band.pct + ' 20-yr risk)';
  const [bg, fg] = bandColors[band.cls];
  badge.style.background = bg;
  badge.style.color = fg;

  document.getElementById('apoe-caveat').style.display = (state.apoe !== 'unknown') ? 'block' : 'none';

  const pct = Math.min(total / 15, 1) * 100;
  document.getElementById('scale-marker').style.left = pct + '%';

  renderContributions([
    { name: 'Age', pts: pAge, max: state.apoe !== 'unknown' ? 5 : 4 },
    { name: 'Education', pts: pEdu, max: state.apoe !== 'unknown' ? 4 : 3 },
    { name: 'Sex', pts: pSex, max: 1 },
    { name: 'Systolic BP', pts: pSbp, max: 2 },
    { name: 'BMI', pts: pBmi, max: 2 },
    { name: 'Cholesterol', pts: pChol, max: 2 },
    { name: 'Activity', pts: pAct, max: 1 },
  ].concat(state.apoe !== 'unknown' ? [{ name: 'APOE e4', pts: pApoe, max: 2 }] : []));
}

function renderContributions(items) {
  const container = document.getElementById('contributions');
  container.innerHTML = '';
  items.forEach(item => {
    const pct = item.max > 0 ? (item.pts / item.max) * 100 : 0;
    const row = document.createElement('div');
    row.className = 'risk-contrib-row';
    row.innerHTML = `
      <span class="risk-contrib-name">${item.name}</span>
      <div class="risk-contrib-bar-track"><div class="risk-contrib-bar-fill" style="width:${pct}%;"></div></div>
      <span class="risk-contrib-pts">${item.pts}/${item.max}</span>
    `;
    container.appendChild(row);
  });
}

update();
