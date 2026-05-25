// ─────────────────────────────────────────────────────────────
// ROUNDUP CONTENT
// ─────────────────────────────────────────────────────────────
// To add a new issue, copy the object structure below and append
// it to the TOP of the array (newest first).
//
// Fields:
//   num      → issue number, zero-padded string, e.g. "015"
//   slug     → URL slug for linking (future use)
//   date     → display date, e.g. "01.06.26"
//   type     → "weekly" | "deep-dive"
//   title    → issue title / headline
//   readTime → e.g. "5 STORIES" or "14 MIN READ"
//   summary  → 1–2 sentence description shown in the list view
//   items    → array of news items (weekly issues only)
//              each: { tag, headline, take }

export const roundups = [
  {
    num: '014',
    slug: 'issue-014-claims-data-long-context-model',
    date: '25.05.26',
    type: 'deep-dive',
    title: 'When claims data meets a long-context model.',
    readTime: '14 MIN READ',
    summary: 'A deep look at what happens when you feed three years of claims data to a 200k-context model. The results are useful, the limitations are real, and the right workflow isn\'t what you\'d expect.',
    items: [],
  },
  {
    num: '013',
    slug: 'issue-013-lloyds-triage-pilot',
    date: '18.05.26',
    type: 'weekly',
    title: 'Lloyd\'s pilots AI submission triage across three syndicates — plus six other things you missed this week.',
    readTime: '5 STORIES',
    summary: 'Lloyd\'s triage pilot, Zurich\'s new hire, and the EU AI Act moving faster than anyone expected.',
    items: [
      {
        tag: 'LLOYDS',
        headline: 'Lloyd\'s pilots AI submission triage across three syndicates.',
        take: 'The pilot uses a custom model trained on Lloyd\'s historical data. Early results: triage time down 40%, referral quality up. The interesting question is what happens when this becomes standard and every submission is pre-triaged before it reaches the underwriter.',
      },
      {
        tag: 'ZURICH',
        headline: 'Zurich quietly hires its first "head of prompt engineering".',
        take: 'The job title is new but the role is old — it\'s a technical translator between the underwriting desk and the AI team. Every large insurer will have this function within three years. The question is whether it lives in technology or in underwriting.',
      },
      {
        tag: 'REGULATION',
        headline: 'EU AI Act implementation timeline confirmed: high-risk classification includes automated underwriting decisions.',
        take: 'This matters more than most people in the industry are acknowledging. If your AI tool influences a coverage decision, it may be classified as high-risk under the Act, with significant compliance obligations. Worth reading the guidance document now rather than in 2027.',
      },
      {
        tag: 'TOOLS',
        headline: 'Anthropic launches Claude for Enterprise with expanded file handling and custom system prompts.',
        take: 'The file-handling upgrade is the relevant one here. Previous limit was ~50 pages per session; the enterprise tier removes that constraint. For underwriters dealing with large submissions or multi-document policy reviews, this is meaningful.',
      },
      {
        tag: 'RESEARCH',
        headline: 'McKinsey: 60% of insurance underwriting tasks have "high potential" for AI augmentation.',
        take: 'The number sounds alarming until you read the methodology. "High potential for augmentation" means "this task involves pattern recognition across structured data" — which describes triage and pricing modelling, not the judgment calls. The framing matters.',
      },
    ],
  },
  {
    num: '012',
    slug: 'issue-012-out-prompting-prompt-engineer',
    date: '11.05.26',
    type: 'deep-dive',
    title: 'Out-prompting the prompt engineer.',
    readTime: '11 MIN READ',
    summary: 'Why underwriters are better positioned than AI specialists to write the best insurance prompts — and the one technique that makes the difference.',
    items: [],
  },
  {
    num: '011',
    slug: 'issue-011-reinsurance-cyber-repricing',
    date: '04.05.26',
    type: 'weekly',
    title: 'The reinsurance market quietly reprices cyber. Two stories that explain why.',
    readTime: '5 STORIES',
    summary: 'Reinsurance cyber repricing, six tools you don\'t need yet, and one you actually do.',
    items: [
      {
        tag: 'REINSURANCE',
        headline: 'Munich Re and Swiss Re both revise cyber reinsurance pricing upward at mid-year renewals.',
        take: 'The official line is "loss experience driven". The unofficial line is that the accumulation models are less reliable than hoped. This flows through to primary pricing within 12 months, historically. Watch for it.',
      },
      {
        tag: 'TOOLS',
        headline: 'Six AI tools pitched as "built for insurance" — and what they actually do.',
        take: 'We reviewed six new platforms. Five are wrappers around GPT-4 with insurance-themed marketing. One — NotebookLM for policy document management — is genuinely useful and significantly underused.',
      },
      {
        tag: 'CYBER',
        headline: 'FBI: ransomware incidents up 18% YoY; average payment down 34%.',
        take: 'The frequency/severity divergence continues. More incidents, less payout per incident. The decline in average payment is mostly structural — better backups and incident response, not better security hygiene. Frequency is the risk that matters for accumulation.',
      },
      {
        tag: 'AI MODELS',
        headline: 'OpenAI\'s o3 model outperforms human experts on insurance exam benchmarks.',
        take: 'Benchmark performance is not the same as underwriting competence, but the gap is closing faster than predicted. The more interesting question is what happens to professional education when the exam is no longer the hard part.',
      },
    ],
  },
  {
    num: '010',
    slug: 'issue-010-eu-ai-act-decoded',
    date: '27.04.26',
    type: 'deep-dive',
    title: 'EU AI Act: what the final draft means for life underwriters.',
    readTime: '18 MIN READ',
    summary: 'A plain-English guide to the EU AI Act\'s final draft, specifically for underwriters who use AI in risk assessment and pricing. What\'s a high-risk system, what\'s not, and what you need to do now.',
    items: [],
  },
  {
    num: '009',
    slug: 'issue-009-six-tools',
    date: '20.04.26',
    type: 'weekly',
    title: 'Six tools you don\'t need yet, and one you do.',
    readTime: '5 STORIES',
    summary: 'Separating the genuinely useful AI tools from the noise, plus the Anthropic file-search launch.',
    items: [
      {
        tag: 'TOOLS',
        headline: 'Anthropic launches file-search capability for Claude API.',
        take: 'Now live in the API. You can query across a corpus of documents without pasting the whole thing into context. The underwriting use case: policy library search, precedent lookup, loss history queries across a portfolio. Worth building.',
      },
      {
        tag: 'MARKET',
        headline: 'Five AI insurance "copilots" launched in Q1 2026. A quick scorecard.',
        take: 'Tested all five. Two are worth trialling for specific use cases. Three are enterprise sales pitches with demos that don\'t survive contact with real submissions. Full reviews coming in the Toolkit update.',
      },
      {
        tag: 'REGULATION',
        headline: 'UK FCA issues guidance on AI use in financial services, including underwriting.',
        take: 'More principle-based than the EU approach. The key requirement: firms must be able to explain decisions made with AI assistance. If your AI triage affects a coverage decision and you can\'t explain why, that\'s a problem. Build the audit trail now.',
      },
    ],
  },
];
