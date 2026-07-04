// Hero stat: seconds between diagnoses (Alzheimer's Association ~ every 65 seconds, illustrative)
const target = 65;
const statEl = document.getElementById('statNum');
let cur = 0;
const tick = setInterval(() => {
  cur += 2;
  if(cur >= target){ cur = target; clearInterval(tick); }
  statEl.textContent = cur;
}, 30);

// Fade word subtle pulse to evoke memory dimming/restoring
const fadeWord = document.getElementById('fadeWord');
let dim = false;
setInterval(() => {
  fadeWord.style.opacity = dim ? '1' : '0.45';
  fadeWord.style.filter = dim ? 'blur(0px)' : 'blur(1px)';
  dim = !dim;
}, 2600);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => obs.observe(el));
