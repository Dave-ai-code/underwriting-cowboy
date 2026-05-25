// ─────────────────────────────────────────────────────────────
// TOOLKIT CONTENT
// ─────────────────────────────────────────────────────────────
// To add a tool, copy the object structure and append to the
// relevant section. Rating: 1–5 stars.
//
// Fields:
//   name     → tool name
//   maker    → company name
//   category → "LLM" | "Research" | "Document" | "Automation" | "Voice"
//   summary  → one sentence — what it does
//   bestFor  → primary underwriting use case
//   pricing  → e.g. "From $20/mo" or "Free"
//   rating   → star string, e.g. "★★★★★"
//   ratingNum→ number 1–5 (for sorting)
//   link     → URL (opens in new tab)
//   notes    → optional longer note (shown in detail view — future use)

export const toolkitItems = [
  {
    name: 'Claude (Anthropic)',
    maker: 'Anthropic',
    category: 'LLM',
    summary: 'Long-context reasoning, file analysis, and drafting. The best general-purpose model for underwriting tasks.',
    bestFor: 'Submission triage',
    pricing: 'From $20/mo',
    rating: '★★★★★',
    ratingNum: 5,
    link: 'https://claude.ai',
    notes: 'The model used in most walkthroughs on this site. Sonnet 4.5 for most tasks; Opus for complex reasoning tasks where cost is acceptable.',
  },
  {
    name: 'ChatGPT (OpenAI)',
    maker: 'OpenAI',
    category: 'LLM',
    summary: 'Generalist LLM with code interpreter, browsing, and a large plugin ecosystem.',
    bestFor: 'Broker comms',
    pricing: 'From $20/mo',
    rating: '★★★★☆',
    ratingNum: 4,
    link: 'https://chat.openai.com',
    notes: 'Slightly weaker than Claude on long-document tasks, but the code interpreter is excellent for manipulating binder data. Good for writing tasks.',
  },
  {
    name: 'Perplexity',
    maker: 'Perplexity AI',
    category: 'Research',
    summary: 'AI-powered search that cites sources. Excellent for live web research with verifiable references.',
    bestFor: 'Risk research',
    pricing: 'Free / $20/mo',
    rating: '★★★★☆',
    ratingNum: 4,
    link: 'https://perplexity.ai',
    notes: 'Best tool for researching an insured\'s public profile, industry news, or regulatory environment. Sources are cited and checkable. Use for the research step before writing the prompt.',
  },
  {
    name: 'NotebookLM',
    maker: 'Google',
    category: 'Document',
    summary: 'Grounded AI chat over a private corpus of uploaded documents. Cites sources precisely.',
    bestFor: 'Policy lookup',
    pricing: 'Free',
    rating: '★★★★☆',
    ratingNum: 4,
    link: 'https://notebooklm.google.com',
    notes: 'Best tool for building a searchable policy library or querying a set of documents you return to repeatedly. Answers always cite the source document and section.',
  },
  {
    name: 'Cursor',
    maker: 'Anysphere',
    category: 'Automation',
    summary: 'AI code editor. Useful for underwriters who write Excel macros or simple automation scripts.',
    bestFor: 'Spreadsheet macros',
    pricing: 'From $20/mo',
    rating: '★★★☆☆',
    ratingNum: 3,
    link: 'https://cursor.com',
    notes: 'Overkill for most underwriters. Worth it if you regularly write VBA or Python for data work. Dramatically reduces the time to build and debug macros.',
  },
  {
    name: 'ElevenLabs',
    maker: 'ElevenLabs',
    category: 'Voice',
    summary: 'Voice synthesis and transcription. Useful for dictation-to-text workflows and note-taking.',
    bestFor: 'Note-taking',
    pricing: 'From $5/mo',
    rating: '★★★☆☆',
    ratingNum: 3,
    link: 'https://elevenlabs.io',
    notes: 'Best used as a dictation tool: describe your thoughts on a risk verbally, transcribe, then prompt an LLM to structure it. Faster than typing for some people.',
  },
  {
    name: 'Otter.ai',
    maker: 'Otter.ai',
    category: 'Voice',
    summary: 'Meeting transcription and AI meeting summaries. Integrates with Zoom and Teams.',
    bestFor: 'Meeting notes',
    pricing: 'Free / $10/mo',
    rating: '★★★★☆',
    ratingNum: 4,
    link: 'https://otter.ai',
    notes: 'Useful for risk calls with brokers. Transcribes, summarises, and identifies action items automatically.',
  },
  {
    name: 'Claude Projects',
    maker: 'Anthropic',
    category: 'Document',
    summary: 'Persistent AI workspaces with custom instructions and uploaded knowledge bases.',
    bestFor: 'Policy library',
    pricing: 'Included with Claude Pro',
    rating: '★★★★★',
    ratingNum: 5,
    link: 'https://claude.ai',
    notes: 'Build a Project for each class of business. Upload your guidelines, appetite statements, and standard wordings. Every conversation in that Project has your context baked in.',
  },
];

// ─────────────────────────────────────────────────────────────
// PROMPT LIBRARY
// ─────────────────────────────────────────────────────────────
// Standalone prompts organised by task — separate from walkthroughs.
// Each walkthrough also has a "steal this" prompt; these are additional
// quick-use prompts that don't need a full walkthrough.

export const promptLibrary = [
  {
    tag: 'SUBMISSION TRIAGE',
    title: 'Triage a long property submission in four bullets.',
    prompt: 'You are a commercial property underwriter. Review the attached submission and produce a four-bullet triage memo: (1) risk class, (2) red flags, (3) missing information, (4) suggested broker questions. Be terse.',
  },
  {
    tag: 'CLAUSE COMPARE',
    title: 'Compare two manuscript wordings, clause by clause.',
    prompt: 'Compare Wording A and Wording B clause by clause. Produce a table: Clause | Wording A text | Wording B text | Change type (Addition/Deletion/Rewording/Identical). Then list the coverage impact of each Rewording and Deletion.',
  },
  {
    tag: 'BROKER REPLY',
    title: 'Polite "we need more information" template.',
    prompt: 'Write a short professional email requesting additional information for a [RISK TYPE] submission. Missing items: [LIST]. Tone: collegial, not bureaucratic. Max 180 words. No filler phrases.',
  },
  {
    tag: 'BOARD SUMMARY',
    title: 'Quarterly loss roll-up, one page, exec-friendly.',
    prompt: 'Summarise the attached quarterly loss reports for a board audience. Structure: executive summary (3 sentences), three-year trend, key drivers, outlook. Plain language. No jargon without explanation.',
  },
  {
    tag: 'CYBER PROFILE',
    title: 'Extract cyber risk indicators from a 10-K filing.',
    prompt: 'From the attached annual report, extract: (1) company profile, (2) technology infrastructure, (3) third-party dependencies, (4) disclosed incidents, (5) regulatory exposure, (6) data held. Cite section numbers. Say "Not disclosed" where unavailable.',
  },
  {
    tag: 'BINDER CHECK',
    title: 'Identify concentration and drift in a binder schedule.',
    prompt: 'Analyse this binder schedule CSV. Identify: geographic concentration, premium distribution outliers, occupancy class drift from stated appetite, data quality issues, and the top 5 risks warranting manual review.',
  },
];
