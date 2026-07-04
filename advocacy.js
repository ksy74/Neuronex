const STEPS = ['Introduced', 'Committee', 'Floor Vote', 'Passed', 'Signed'];

const bills = [
  {
    id: 'H.R.6130 / S.3267',
    filter: 'screening',
    status: 'committee',
    statusLabel: 'In Committee',
    stepIndex: 1,
    title: "ASAP Act — Alzheimer's Screening and Prevention Act",
    plain: "Right now, Medicare cannot automatically cover new blood tests for Alzheimer's even after the FDA approves them. Congress has to authorize each one individually, which can take years. <strong>The ASAP Act would fix that</strong> by requiring Medicare to cover FDA-approved blood biomarker tests for early Alzheimer's detection, so seniors can get screened at a regular doctor visit instead of waiting for bureaucratic delays.",
    sponsors: 'Rep. Buchanan (R-FL), Rep. Tonko (D-NY), Sen. Collins (R-ME), Sen. Cortez Masto (D-NV)',
    updated: 'November 2025',
    link: 'https://www.congress.gov/bill/119th-congress/house-bill/6130',
    template: `Dear [Representative's Name],

I am writing as a constituent and advocate for Alzheimer's disease awareness to urge your support for the Alzheimer's Screening and Prevention Act (ASAP Act, H.R.6130 / S.3267).

Blood-based biomarker tests can now detect Alzheimer's risk years before symptoms appear, but Medicare's outdated coverage rules prevent most seniors from accessing them without out-of-pocket costs. The ASAP Act would modernize that process so that FDA-approved tests are covered promptly, giving families more time to plan, pursue treatment, and participate in clinical trials.

As someone who works closely with Alzheimer's families through the NeuroNex nonprofit, I have seen firsthand how critical early detection is. I urge you to co-sponsor and advance this bipartisan legislation.

Thank you for your time and service.

Sincerely,
[Your Name]
[Your City, State]`
  },
  {
    id: 'FY2026 Appropriations',
    filter: 'funding',
    status: 'signed',
    statusLabel: 'Signed into Law',
    stepIndex: 4,
    title: "$100 Million Increase for Alzheimer's Research at NIH",
    plain: "Congress reached a bipartisan agreement in January 2026 to increase Alzheimer's and dementia research funding at the NIH by <strong>$100 million</strong> for fiscal year 2026, bringing the total to $3.9 billion annually. It also includes $41.5 million for the BOLD Infrastructure Act at the CDC, which funds public health programs at the state level.",
    sponsors: 'Bipartisan agreement led by Sen. Collins, Sen. Murray, Rep. Cole, Rep. DeLauro',
    updated: 'January 2026',
    link: 'https://www.alz.org/news/2026/congress-100-million-funding-increase-alzheimers-dementia-research',
    template: `Dear [Representative's Name],

I am writing to thank you for Congress's bipartisan commitment to Alzheimer's research reflected in the FY2026 appropriations agreement, which included a $100 million increase for NIH dementia research.

I am an Alzheimer's awareness advocate and founder of NeuroNex, a nonprofit dedicated to translating Alzheimer's science for families and caregivers. Sustained federal investment in this research is what makes breakthroughs like blood-based biomarkers and new treatment approvals possible.

I urge you to continue championing this level of funding and to support future increases consistent with the NIH's own professional judgment budget requests. The $113.5 million increase recommended by NIH scientists should remain the benchmark.

Thank you for your leadership on this critical issue.

Sincerely,
[Your Name]
[Your City, State]`
  },
  {
    id: 'AADAPT Act',
    filter: 'care',
    status: 'introduced',
    statusLabel: 'Introduced',
    stepIndex: 0,
    title: "Accelerating Access to Dementia and Alzheimer's Provider Training Act",
    plain: "Only half of people living with Alzheimer's ever receive a formal diagnosis, and most initial diagnoses come from primary care doctors who say they do not feel prepared to recognize or manage the disease. <strong>The AADAPT Act would fund free, remote continuing education</strong> for primary care providers, especially in rural and underserved areas, so more patients get diagnosed earlier and more accurately.",
    sponsors: 'Bipartisan Senate and House reintroduction, March 2026',
    updated: 'March 2026',
    link: 'https://www.alz.org/news/2026/senate-reintroduces-bipartisan-legislation-strengthen-dementia-workforce',
    template: `Dear [Representative's Name],

I am writing to urge your co-sponsorship of the Accelerating Access to Dementia and Alzheimer's Provider Training (AADAPT) Act, recently reintroduced in the Senate and House.

Only half of the more than seven million Americans living with Alzheimer's have received a diagnosis, largely because primary care providers lack specialized training in early detection and care. This gap is especially acute in rural communities. The AADAPT Act would fund free, remote continuing education for these providers, helping close the diagnostic gap and connecting more patients to timely care.

Through my work with NeuroNex, I regularly interact with families who went years without understanding what their loved one was experiencing. Earlier diagnosis changes everything for these families.

I urge your support for this important bipartisan legislation.

Sincerely,
[Your Name]
[Your City, State]`
  },
  {
    id: 'H.R.3674',
    filter: 'global',
    status: 'committee',
    statusLabel: 'In Committee',
    stepIndex: 1,
    title: "Global Alzheimer's Initiative Now (GAIN) Act",
    plain: "Alzheimer's affects nearly 60 million people worldwide, with cases growing fastest in low- and middle-income countries that have the fewest resources to respond. <strong>The GAIN Act would formally authorize U.S. participation</strong> in the Davos Alzheimer's Collaborative, a global initiative raising over $700 million to accelerate drug development and transform how countries prevent, diagnose, and treat the disease.",
    sponsors: 'Rep. Bera (D-CA), Rep. Fitzpatrick (R-PA), Rep. Kim (R-CA)',
    updated: 'June 2025',
    link: 'https://www.congress.gov/bill/119th-congress/house-bill/3674',
    template: `Dear [Representative's Name],

I am writing to urge your support for the Global Alzheimer's Initiative Now (GAIN) Act (H.R.3674), which would authorize United States participation in the Davos Alzheimer's Collaborative.

Alzheimer's disease affects nearly 60 million people globally and costs the world economy over $1.3 trillion annually. The United States has a strong tradition of leading multilateral health initiatives, and the Davos Alzheimer's Collaborative represents exactly the kind of coordinated, international effort needed to accelerate research and make new treatments accessible worldwide.

As a student researcher and nonprofit founder focused on Alzheimer's awareness, I believe U.S. leadership in this space is essential. I urge you to co-sponsor and advance this bipartisan legislation.

Sincerely,
[Your Name]
[Your City, State]`
  },
  {
    id: 'H.R.3389',
    filter: 'care',
    status: 'introduced',
    statusLabel: 'Introduced',
    stepIndex: 0,
    title: "Alzheimer's Law Enforcement Education Act of 2025",
    plain: "People with Alzheimer's frequently encounter law enforcement, whether they wander from home, become confused in public, or are involved in an incident. Officers with no dementia training can misread confusion as intoxication or aggression, with serious consequences. <strong>This bill would fund training programs</strong> teaching officers how to recognize dementia, communicate effectively, and avoid unsafe use of physical restraints with Alzheimer's patients.",
    sponsors: 'Introduced May 2025, 119th Congress',
    updated: 'May 2025',
    link: 'https://www.congress.gov/bill/119th-congress/house-bill/3389',
    template: `Dear [Representative's Name],

I am writing to urge your support for the Alzheimer's Law Enforcement Education Act of 2025 (H.R.3389).

People living with Alzheimer's disease frequently interact with law enforcement when they become disoriented or wander from home. Without specialized training, officers may misinterpret symptoms of dementia as intoxication or noncompliance, putting vulnerable patients at serious risk. This bill would fund training programs to help law enforcement recognize dementia, communicate safely, and respond with appropriate care.

Through my work with NeuroNex, I have seen how isolating and frightening a dementia episode can be for both patients and families. Training officers to respond appropriately is a straightforward, commonsense step that could prevent harm and save lives.

I urge your co-sponsorship and support for this legislation.

Sincerely,
[Your Name]
[Your City, State]`
  }
];

const billList = document.getElementById('billList');
const searchInput = document.getElementById('search');
const filterBar = document.getElementById('filterBar');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const billCount = document.getElementById('billCount');
let activeFilter = 'all';

function render() {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = bills.filter(b => {
    const matchesFilter = activeFilter === 'all' || b.filter === activeFilter;
    const haystack = (b.title + ' ' + b.plain + ' ' + b.id).toLowerCase();
    const matchesSearch = q === '' || haystack.includes(q);
    return matchesFilter && matchesSearch;
  });

  resultCount.textContent = filtered.length + (filtered.length === 1 ? ' bill' : ' bills');
  emptyState.classList.toggle('show', filtered.length === 0);

  billList.innerHTML = filtered.map(b => `
    <div class="bill">
      <div class="bill-top">
        <div class="bill-tags">
          <span class="status-badge ${b.status}">${b.statusLabel}</span>
          <span class="bill-id">${b.id}</span>
        </div>
        <span class="bill-id">Updated ${b.updated}</span>
      </div>
      <h3>${b.title}</h3>
      <p class="bill-plain">${b.plain}</p>
      <div class="bill-progress">
        <div class="progress-steps">
          ${STEPS.map((s, si) => `
            <div class="pstep">
              <div class="pstep-dot ${si < b.stepIndex ? 'done' : si === b.stepIndex ? 'current' : ''}"></div>
              <div class="pstep-label ${si < b.stepIndex ? 'done' : si === b.stepIndex ? 'current' : ''}">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="bill-bottom">
        <div class="bill-meta">Sponsors &nbsp;<span>${b.sponsors}</span></div>
      </div>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
        <button class="act-btn" data-id="${b.id}">Contact my representative</button>
        <a class="act-btn" href="${b.link}" target="_blank">View on Congress.gov</a>
      </div>
    </div>
  `).join('');

  billList.querySelectorAll('.act-btn[data-id]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-id')));
  });
}

searchInput.addEventListener('input', render);
filterBar.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeFilter = e.target.getAttribute('data-filter');
    render();
  }
});

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalTemplate = document.getElementById('modalTemplate');
const copyConfirm = document.getElementById('copyConfirm');
let activeBill = null;

function openModal(id) {
  const b = bills.find(bill => bill.id === id);
  if (!b) return;
  activeBill = b;
  modalTitle.textContent = b.title;
  modalTemplate.textContent = b.template;
  copyConfirm.style.display = 'none';
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.getElementById('copyBtn').addEventListener('click', () => {
  if (!activeBill) return;
  navigator.clipboard.writeText(activeBill.template).then(() => {
    copyConfirm.style.display = 'block';
  });
});

billCount.textContent = bills.length;
render();
