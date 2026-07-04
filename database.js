const entries = [
  {
    tag: "treatment", tagLabel: "Treatment", status: "FDA approved · 2023",
    title: "Lecanemab (Leqembi) slows early Alzheimer's by about a quarter",
    plain: "This is an antibody, given by IV infusion, that helps the body clear out amyloid plaque — the sticky protein buildup long linked to Alzheimer's. In a large trial of people with early-stage disease, it slowed the rate of decline in memory and daily function by roughly <strong>27% over 18 months</strong> compared to placebo. That's not a cure or a reversal — it's a measurable slowdown, and it only works when started early.",
    jargon: "Phase 3 CLARITY-AD trial: an 18-month, double-blind, placebo-controlled study. Lecanemab reduced decline on the CDR-SB (Clinical Dementia Rating–Sum of Boxes) scale and showed substantial amyloid clearance on PET imaging, measured in centiloids. Most common serious side effect: ARIA (amyloid-related imaging abnormalities), brain swelling or microbleeds, usually in the first year.",
    cite: "McDade et al., FDA approval July 2023"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "FDA approved · 2024",
    title: "Donanemab works similarly — and may let some patients stop early",
    plain: "Donanemab is another amyloid-clearing antibody, approved a year after lecanemab. It showed comparable benefit in slowing decline, and its trial design let patients stop treatment once their amyloid levels dropped low enough — meaning some people may not need indefinite infusions.",
    jargon: "Phase 3 TRAILBLAZER-ALZ 2 trial. Used a 'limited duration' dosing approach: treatment could be paused once amyloid plaque, measured by PET, fell below a defined threshold. EMA marketing authorization followed in July 2025.",
    cite: "Sims et al., JAMA 2023; FDA approval July 2024"
  },
  {
    tag: "diagnostics", tagLabel: "Diagnostics", status: "Emerging · widely studied",
    title: "A simple blood test can now flag Alzheimer's risk years earlier",
    plain: "Instead of an expensive PET brain scan or an invasive spinal tap, researchers can now measure a protein called <strong>p-tau217</strong> in a regular blood draw. Elevated levels track closely with amyloid buildup in the brain — meaning doctors may soon be able to screen for risk during a normal checkup, long before symptoms appear.",
    jargon: "Plasma p-tau217 (phosphorylated tau at threonine 217) has shown strong concordance with amyloid-PET and CSF biomarkers across multiple validation cohorts. It's now used as a screening tool in prevention trials like TRAILBLAZER-ALZ 3 to identify cognitively normal adults with elevated amyloid.",
    cite: "Multiple validation cohorts, 2023–2026"
  },
  {
    tag: "prevention", tagLabel: "Prevention", status: "Trial results · July 2025",
    title: "A structured lifestyle program measurably protected aging brains",
    plain: "In the largest U.S. trial of its kind, over 2,100 older adults at elevated dementia risk were assigned either a self-guided wellness plan or a more structured 2-year program combining exercise, nutrition coaching, social activities, and heart-health monitoring. The structured group showed <strong>significantly better cognitive scores</strong> at the end — real evidence that lifestyle changes can move the needle, not just correlate with it.",
    jargon: "The U.S. POINTER trial, published in JAMA, July 2025. A multidomain intervention (aerobic exercise, Mediterranean-DASH diet, cognitive/social engagement, cardiovascular risk monitoring) outperformed a self-directed comparison arm on a global cognitive composite score over 24 months.",
    cite: "U.S. POINTER Trial, JAMA, 2025"
  },
  {
    tag: "prevention", tagLabel: "Prevention", status: "Trials ongoing",
    title: "Scientists are now trying to treat Alzheimer's before symptoms start",
    plain: "Several major trials are testing whether giving amyloid-clearing drugs to people who look perfectly healthy — but whose blood or brain scans show early amyloid buildup — can delay or even prevent symptoms from ever appearing. This is a real shift: from treating disease to preventing it.",
    jargon: "Key trials: AHEAD 3-45 (lecanemab in cognitively unimpaired adults with intermediate/elevated amyloid), TRAILBLAZER-ALZ 3 (donanemab in cognitively normal adults, screened via plasma p-tau217), and DIAN-TU Tau NexGen (combination therapy in carriers of autosomal-dominant AD mutations). Readouts expected within the next 2–3 years.",
    cite: "AHEAD 3-45 / TRAILBLAZER-ALZ 3, ongoing as of 2026"
  },
  {
    tag: "device", tagLabel: "Devices", status: "Early clinical data · 2025",
    title: "A non-drug headset approach is showing early neuroprotective signals",
    plain: "Some researchers are exploring whether stimulating the brain with specific light and sound patterns (rather than medication) can help protect neurons. Early trial data presented in 2025 suggested measurable effects on brain health markers — promising, but still early-stage compared to approved drug therapies.",
    jargon: "Cognito Therapeutics' Spectris device uses gamma frequency sensory stimulation (40Hz light and sound) intended to support neural synchrony. Data presented at AAIC 2025 highlighted neuroprotective signals; larger confirmatory trials are still needed before any regulatory approval.",
    cite: "Cognito Therapeutics, AAIC 2025"
  },
  {
    tag: "genetics", tagLabel: "Genetics", status: "Early-stage research",
    title: "Gene-based approaches are targeting the biggest known genetic risk factor",
    plain: "The APOE gene is the strongest known genetic risk factor for late-onset Alzheimer's — having one or two copies of the APOE ε4 variant raises risk substantially. Researchers are now exploring gene-therapy approaches that introduce protective APOE variants (like APOE ε2) to potentially counteract that risk, rather than just managing symptoms after the fact.",
    jargon: "APOE ε4 carriers face significantly elevated lifetime AD risk versus ε3/ε3 carriers; ε2 is associated with relative protection. Gene therapy approaches delivering APOE ε2 are in early-phase development and have not yet reached late-stage clinical trials.",
    cite: "Ongoing preclinical/early clinical research"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Important context · April 2026",
    title: "A major independent review urges caution about how much these drugs really help",
    plain: "Not every analysis is as optimistic as the trial press releases. A large independent review of 17 trials covering over 20,000 people concluded that, as a class, amyloid-clearing antibodies <strong>probably make little to no meaningful difference</strong> in real-world outcomes for many patients — a reminder that 'statistically significant' and 'life-changing' aren't always the same thing.",
    jargon: "Cochrane systematic review (Nonino et al., April 2026), 17 RCTs, n=20,342. Found the anti-amyloid monoclonal antibody class 'probably results in little to no difference' on key outcomes for the broader population studied, even as individual trials showed statistically significant slowing on specific cognitive scales.",
    cite: "Nonino et al., Cochrane Review, April 2026"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Discontinued · 2024",
    title: "The first approved amyloid drug was pulled from the market",
    plain: "Aducanumab was the first amyloid-clearing antibody to get accelerated FDA approval, back in 2021 — but it was controversial from the start due to weak and conflicting trial results. Its manufacturer discontinued it in 2024, clearing the way for lecanemab and donanemab, which had stronger supporting evidence.",
    jargon: "Aducanumab received accelerated approval in 2021 under significant controversy regarding conflicting Phase 3 trial results (ENGAGE vs. EMERGE). Biogen discontinued commercial development in early 2024.",
    cite: "Biogen discontinuation announcement, 2024"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Approved dosing update · 2025",
    title: "Maintenance dosing now makes ongoing treatment easier",
    plain: "Originally, lecanemab required frequent infusions indefinitely. In 2025, the FDA approved a less frequent 'maintenance' dosing schedule for patients who've completed initial treatment — making long-term use more practical for patients and caregivers managing infusion schedules.",
    jargon: "FDA approved IV maintenance dosing for Leqembi (lecanemab-irmb) in January 2025, allowing reduced-frequency dosing after the initial biweekly treatment phase for early Alzheimer's disease.",
    cite: "FDA approval, January 2025"
  },
  {
    tag: "diagnostics", tagLabel: "Diagnostics", status: "Active research area",
    title: "AI is helping researchers search for new drug candidates faster",
    plain: "Beyond diagnosis, artificial intelligence is being used to scan huge datasets of brain imaging, genetics, and molecular structures to flag promising new drug targets — compressing research timelines that used to take years into a much faster discovery process.",
    jargon: "AI/machine-learning approaches are increasingly applied across the AD drug-development pipeline: target identification, molecule screening, and biomarker pattern recognition in multi-omics and imaging datasets.",
    cite: "Multiple academic & industry pipelines, 2024–2026"
  },
  {
    tag: "prevention", tagLabel: "Prevention", status: "Established, reinforced 2020",
    title: "Staying socially connected isn't just nice — it's protective",
    plain: "A major international commission reviewing decades of dementia research identified social isolation as one of several modifiable risk factors for dementia. People who maintain regular, meaningful social contact tend to show lower dementia risk than those who become isolated — making relationships a genuine piece of brain health, not just emotional wellbeing.",
    jargon: "Livingston et al., Lancet Commission on dementia prevention, intervention, and care (2020), identified 12 modifiable risk factors across the lifespan, including social isolation, accounting for an estimated 40% of dementia cases globally if addressed.",
    cite: "Livingston et al., The Lancet Commission, 2020"
  }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const filterBar = document.getElementById('filterBar');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
let activeFilter = 'all';

function render(){
  const q = searchInput.value.trim().toLowerCase();
  const filtered = entries.filter(e => {
    const matchesFilter = activeFilter === 'all' || e.tag === activeFilter;
    const haystack = (e.title + ' ' + e.plain + ' ' + e.jargon + ' ' + e.tagLabel).toLowerCase();
    const matchesSearch = q === '' || haystack.includes(q);
    return matchesFilter && matchesSearch;
  });

  resultCount.textContent = filtered.length + (filtered.length === 1 ? ' entry' : ' entries');
  emptyState.classList.toggle('show', filtered.length === 0);

  grid.innerHTML = filtered.map((e, i) => `
    <div class="card">
      <div class="card-top">
        <span class="tag ${e.tag}">${e.tagLabel}</span>
        <span class="status">${e.status}</span>
      </div>
      <h3>${e.title}</h3>
      <p class="plain">${e.plain}</p>
      <div class="meta-row">
        <span class="cite">${e.cite}</span>
        <button class="jargon-toggle" data-idx="${i}">What the study actually measured →</button>
      </div>
      <div class="jargon-box" id="jb-${i}">
        <div class="label">Clinical detail</div>
        ${e.jargon}
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.jargon-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-idx');
      const box = document.getElementById('jb-' + idx);
      box.classList.toggle('show');
      btn.textContent = box.classList.contains('show')
        ? 'Hide clinical detail ↑'
        : 'What the study actually measured →';
    });
  });
}

searchInput.addEventListener('input', render);
filterBar.addEventListener('click', (e) => {
  if(e.target.classList.contains('filter-btn')){
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeFilter = e.target.getAttribute('data-filter');
    render();
  }
});

render();
