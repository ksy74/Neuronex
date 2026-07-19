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
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Phase 3 trials ongoing · 2025",
    title: "Trontinemab clears amyloid in 92% of patients with far fewer side effects",
    plain: "One of the biggest problems with existing amyloid-clearing drugs is a serious side effect called ARIA, which involves brain swelling or bleeding. Trontinemab, Roche's next-generation antibody, uses a technology called a 'brain shuttle' to cross the blood-brain barrier roughly 50 times more efficiently than conventional antibodies. In early trial data presented at the 2025 CTAD conference, <strong>92% of patients had no measurable amyloid plaques within 28 weeks</strong>, and the ARIA rate was under 5% — compared to 20–35% for existing approved drugs. Phase 3 trials (TRONTIER 1 and 2) began enrolling in late 2025.",
    jargon: "Brainshuttle AD Phase 1b/2a trial, n=114. Trontinemab is coupled to a transferrin-receptor-binding fragment enabling active transcytosis across the blood-brain barrier. 91–92% of patients on the 3.6 mg/kg dose achieved amyloid-PET negativity below 24 centiloids at 28 weeks. ARIA-E rate under 5% versus 20–35% for lecanemab/donanemab. TRONTIER 1 and 2 Phase 3 trials began enrolling late 2025; PrevenTRON preclinical prevention trial also planned. Regulatory submission expected ~2028 if Phase 3 confirms.",
    cite: "Roche CTAD 2025 data; Psychiatric Times, December 2025"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Early research · 2025",
    title: "An experimental drug may block Alzheimer's before memory loss even begins",
    plain: "Most current Alzheimer's treatments target amyloid plaques that have already built up over years. A drug called <strong>NU-9</strong> works differently: it targets a toxic protein fragment called C99, which researchers believe triggers the very earliest stages of Alzheimer's pathology, potentially years before plaques form. Early findings suggest it may be possible to intervene at this upstream point — before the brain damage cascades.",
    jargon: "NU-9 is a small-molecule inhibitor targeting the C99 fragment of amyloid precursor protein (APP), which accumulates in mitochondria-associated membranes prior to amyloid-beta production. Preclinical findings (December 2025) suggest C99 may represent an earlier pathological trigger than extracellular amyloid-beta plaques. Human trials have not yet begun.",
    cite: "ScienceDaily, December 2025"
  },
  {
    tag: "prevention", tagLabel: "Prevention", status: "Research finding · December 2025",
    title: "Obesity accelerates Alzheimer's biomarkers much faster than previously understood",
    plain: "Researchers measuring Alzheimer's-related proteins in blood found that people with obesity showed <strong>significantly faster rises in these warning markers</strong> than people of healthy weight, and the acceleration was more dramatic than prior studies suggested. This adds obesity to the list of modifiable risk factors that may directly speed up Alzheimer's pathology — not just correlate with it.",
    jargon: "Blood-based biomarker study published December 2025 measuring p-tau, amyloid-beta 42/40 ratio, and GFAP across BMI categories in longitudinal cohorts. Findings showed obesity is associated with accelerated trajectory of Alzheimer's biomarker accumulation, independent of other vascular risk factors.",
    cite: "ScienceDaily, December 2025"
  },
  {
    tag: "prevention", tagLabel: "Prevention", status: "Research finding · January 2026",
    title: "Disrupted sleep rhythms are strongly linked to dementia risk",
    plain: "A study of older adults found that those with <strong>weaker, more irregular daily activity patterns</strong>, including disrupted sleep-wake cycles, were far more likely to develop dementia than those with consistent daily rhythms. This builds on growing evidence that circadian rhythm disruption is not just a symptom of Alzheimer's but may be an early warning sign — and potentially a modifiable risk factor.",
    jargon: "Prospective cohort study published January 2026 using actigraphy-derived rest-activity rhythm metrics (interdaily stability, intradaily variability) in older adults. Participants with weaker circadian amplitude and greater fragmentation showed significantly elevated dementia incidence over follow-up. Mechanistically, sleep disruption is associated with impaired glymphatic amyloid clearance (Xie et al., Science 2013) and elevated p-tau and GFAP in plasma.",
    cite: "ScienceDaily, January 2026; InSleep46 study, Alzheimer's & Dementia, 2025"
  },
  {
    tag: "diagnostics", tagLabel: "Diagnostics", status: "Research finding · January 2026",
    title: "Young blood may protect aging brains; older blood may accelerate decline",
    plain: "In mouse experiments, researchers found that transfusing older blood into younger animals <strong>worsened memory performance and accelerated Alzheimer's-like brain changes</strong>, while younger blood offered measurable protection to older animals. The findings point toward age-related factors in the blood — not just the brain — as drivers of Alzheimer's pathology, and open a new direction for therapeutic research.",
    jargon: "Heterochronic parabiosis and plasma transfer experiments published January 2026. Older plasma accelerated amyloid accumulation and cognitive decline in recipient animals; young plasma reduced neuroinflammatory markers and partially reversed memory deficits. Specific circulating factors (GDF11, CCL11) are under investigation. Human translation is very early-stage.",
    cite: "ScienceDaily, January 2026"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Pipeline · 2026",
    title: "An oral Alzheimer's drug would be a major accessibility breakthrough",
    plain: "Every approved Alzheimer's disease-modifying treatment currently requires IV infusions every few weeks at an infusion center, which is expensive, time-consuming, and inaccessible for many patients. Researchers and pharmaceutical companies are actively developing <strong>pill-based treatments</strong> that could be taken at home. Several candidates are in Phase 2/3 trials, and success here would transform who can actually access treatment.",
    jargon: "Multiple oral small-molecule candidates are in Phase 2/3 development targeting amyloid production (BACE1 inhibitors, gamma-secretase modulators), tau aggregation, and neuroinflammation. Key challenge: earlier BACE1 inhibitors (verubecestat, atabecestat) failed due to worsening cognition; newer candidates use different mechanisms. BrightFocus Foundation, 2026 forecast.",
    cite: "BrightFocus Foundation, March 2026"
  },
  {
    tag: "genetics", tagLabel: "Genetics", status: "Preclinical · NIH funded",
    title: "APOE gene therapy reduced amyloid buildup in animal models",
    plain: "The APOE gene is the strongest known genetic risk factor for late-onset Alzheimer's. A variant called APOE ε4 significantly raises risk, while APOE ε2 appears protective. NIH-funded research now shows that delivering APOE ε2 via gene therapy to mice that carry the ε4 variant <strong>reduced amyloid deposits and improved markers of brain inflammation</strong>. Human trials have not started, but the approach is advancing toward them.",
    jargon: "NIH-funded study using adeno-associated virus (AAV) vector to deliver APOE ε2 in APOE ε4 mouse models of AD. Outcomes: reduced amyloid-beta deposition on immunohistochemistry, improved neuroinflammation markers (GFAP, IBA1), and reduced neurodegeneration markers. Cited in 2025 NIH Alzheimer's Disease Research Progress Report (NIA).",
    cite: "NIH/NIA 2025 Alzheimer's Research Progress Report"
  },
  {
    tag: "diagnostics", tagLabel: "Diagnostics", status: "Active pipeline · 2026",
    title: "The drug pipeline has never been broader: 138 drugs in 182 trials right now",
    plain: "As of 2026, the Alzheimer's research pipeline is the largest it has ever been. <strong>138 drugs are being tested across 182 clinical trials</strong>, targeting 15 different disease processes — from amyloid and tau to brain inflammation, metabolism, gut-brain connections, and circadian rhythms. This matters because it means the field is no longer betting everything on a single target, which was the strategy that led to decades of failures.",
    jargon: "Cummings et al., Alzheimer's & Dementia: Translational Research & Clinical Interventions, 2026 pipeline report. 73% of candidates are biological or small-molecule disease-modifying agents; 14% cognitive enhancers; 11% neuropsychiatric symptom treatments. 27% of trials now use biomarkers as primary outcome measures. Growth areas versus 2025: transmitter-based candidates (+8), multi-target agents (+6), inflammatory/immune modulators (+4).",
    cite: "Cummings et al., Alzheimer's & Dementia: TRCI, May 2026"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Early research · June 2026",
    title: "Scientists may have found how Alzheimer's tau protein spreads between brain cells",
    plain: "Researchers found that Arc, a protein brain cells normally use to communicate with each other, also gets hijacked by toxic tau protein to move from a diseased neuron into healthy ones nearby. Tau attaches itself to Arc inside the same tiny transport packets the cell already uses for messaging, essentially hitching a ride to spread the damage. <strong>Blocking that transport step</strong> before it reaches healthy neurons could be a new way to slow the disease, though this is still lab-stage work in cells and animal models.",
    jargon: "Published in Cell, June 30, 2026 (University of Utah Health). Arc packages toxic tau into extracellular vesicles that are released from diseased neurons and taken up by neighboring healthy cells, propagating tau pathology through the brain's existing intercellular communication machinery. Builds on Arc's known role in synaptic plasticity via a retrovirus-like capsid structure. Blocking vesicle release or uptake is proposed as a potential intervention point; not yet tested as a therapy in humans.",
    cite: "University of Utah Health, Cell, June 2026"
  },
  {
    tag: "treatment", tagLabel: "Treatment", status: "Early research · 2025",
    title: "A newly found 'death switch' inside brain cells may explain how Alzheimer's kills neurons",
    plain: "Researchers identified a toxic partnership between two proteins on the surface of brain cells that, once triggered, sets off a chain reaction that kills the cell. In mouse studies, an experimental compound that breaks up this partnership <strong>slowed disease progression and preserved memory</strong>, suggesting a way to protect neurons directly instead of only targeting amyloid plaques.",
    jargon: "Published in Molecular Psychiatry, 2025 (Heidelberg University with Shandong University). NMDA receptors and TRPM4 ion channels form a toxic 'death complex' that drives excitotoxic neuronal death in Alzheimer's models. The compound FP802 disrupted this NMDAR–TRPM4 interaction, slowing disease progression and preserving memory in mouse models. A downstream, non-amyloid therapeutic target; human trials have not begun.",
    cite: "Heidelberg University / Shandong University, Molecular Psychiatry, 2025"
  },
  {
    tag: "diagnostics", tagLabel: "Diagnostics", status: "Real-world study · July 2026",
    title: "A blood test brought primary care doctors' diagnostic accuracy close to specialists'",
    plain: "In a real-world study of more than 1,300 patients and 165 physicians, giving primary care doctors the results of a blood-based Alzheimer's test raised their diagnostic accuracy from 65% to 93%, nearly matching specialists, whose accuracy rose from 74% to 89% with the same test. Results changed the diagnosis or care plan for <strong>more than half of all patients</strong> involved, suggesting a blood draw at a regular checkup could catch Alzheimer's earlier without a specialist referral.",
    jargon: "Presented at the Alzheimer's Association International Conference (AAIC) 2026, London, July 2026. Real-world, multi-site study measuring plasma amyloid-beta and phosphorylated tau (p-tau) in patients undergoing cognitive evaluation. Primary care physician diagnostic accuracy rose from 65% pre-test to 93% post-test; specialist accuracy rose from 74% to 89%. Test results altered diagnosis or management plan in over 50% of cases across both settings.",
    cite: "Alzheimer's Association International Conference (AAIC), July 2026"
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
