// ─────────────────────────────────────────────────────────────
// WALKTHROUGH CONTENT
// ─────────────────────────────────────────────────────────────
// To add a new walkthrough, copy the object structure below and
// append it to the top of this array (newest first).
//
// Fields:
//   num        → issue number, zero-padded string, e.g. "048"
//   slug       → URL slug: /field-guide/[slug]
//   category   → one of the six categories (see FG_CATS below)
//   title      → full article title
//   date       → display date, e.g. "01.06.26"
//   readTime   → e.g. "8 MIN"
//   tool       → primary AI tool used
//   difficulty → "Beginner" | "Intermediate" | "Advanced"
//   access     → "free" | "paid"
//   excerpt    → 1–2 sentence teaser shown on cards
//   sections   → array of { num, name, heading, paragraphs[], image }
//                sections 01–05 are rendered in order; section 06 = stealThis box
//   stealThis  → the exact prompt, ready to copy

export const walkthroughs = [
  {
    num: '047',
    slug: 'triage-60-page-submission',
    category: 'SUBMISSIONS & TRIAGE',
    title: 'Triaging a 60-page commercial property submission in under 4 minutes.',
    date: '25.05.26',
    readTime: '8 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Beginner',
    access: 'free',
    excerpt: 'A 62-page commercial property submission arrives on a Friday afternoon. Here\'s exactly how to triage it in under four minutes using a single prompt.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'A submission lands at 4:47pm on a Friday. It is 62 pages. You have eleven other open files.',
        paragraphs: [
          'Commercial property submissions have been getting longer. What used to arrive as a one-page summary with supporting schedules now arrives as a dense PDF — construction specs, loss histories, financial statements, occupancy breakdowns. Each one competes for the same Friday afternoon hours.',
          'The standard response is to either work late, or to do a quick skim and hope you caught the red flags. Neither is good. A missed exclusion or an overlooked loss trend can follow you for years.',
          'The question isn\'t whether AI can read the submission. It obviously can. The question is whether the output is good enough to trust — and fast enough to actually change your workflow.',
        ],
        image: null,
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Claude Sonnet 4.5, file upload, and a prompt that does most of the work upfront.',
        paragraphs: [
          'Tool: Claude Sonnet 4.5 at claude.ai (the web interface). You don\'t need the API for this. The file-upload feature handles PDFs up to around 100 pages without chunking.',
          'The submission in this walkthrough was a real commercial property risk — 62 pages, lightly anonymised. Occupancy: light manufacturing. Construction: 1987 tilt-slab. Claims: two losses in five years, both weather-related.',
          'One important setup note: the prompt does the heavy lifting. Don\'t just paste the PDF and say "summarise this". Give the model a role, a format, and explicit instructions about what to flag.',
        ],
        image: '[ screenshot — uploading the PDF to Claude ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Three turns. The first is the prompt below. The next two are tightening — nothing fancy.',
        paragraphs: [
          'Turn 1: Paste the Steal This prompt (section 06) and upload the PDF. The model produces a four-section triage memo in roughly eight to twelve seconds.',
          'Turn 2: Ask it to expand on the red flags section only. "The second flag about the roof membrane — what page did you find that, and what exactly does the submission say?" This forces a citation and lets you verify quickly.',
          'Turn 3: Optional. Ask it to draft the two most important questions to send back to the broker. Output quality here is variable — sometimes excellent, sometimes generic. Use your judgment.',
          'Total time including reading the output: under four minutes on the three walkthroughs I tested this on.',
        ],
        image: '[ screenshot — Claude\'s triage memo output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A four-section triage memo. Three sections are usable verbatim. One needs a human eye.',
        paragraphs: [
          'The model produced: (1) risk class with construction and occupancy summary, (2) four red flags in bullet form, (3) a list of six missing information items, (4) three suggested broker questions.',
          'Sections 1, 3, and 4 were solid. The risk class summary was accurate. The missing information list caught two things I\'d have noted myself and one I\'d missed. The broker questions were serviceable.',
          'Section 2 — the red flags — needed a human review. Two of four were correct and specific. One was too vague to act on. One was arguably not a red flag at all (the model flagged age of construction without noting the upgraded electrical that the submission mentioned two pages later). This is the expected failure mode: the model reads linearly and misses context that appears later in the document.',
        ],
        image: null,
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'Solid. Not magic. Exactly what you want from a triage tool.',
        paragraphs: [
          'This prompt earns its place in the workflow. It doesn\'t replace reading the submission — it tells you where to read. That\'s the right job for a triage tool.',
          'What worked: speed, format, the missing information list. What didn\'t: the red flags section requires verification, and the model can miss context that\'s distributed across a long document.',
          'Improvement: add a second turn asking the model to specifically check for anything it flagged in the first 30 pages that might be contradicted or clarified later in the document. This catches most of the context-miss failures.',
        ],
        image: null,
      },
    ],
    stealThis: `You are an experienced commercial property underwriter. I will paste a submission below. Produce a triage memo with four sections:

1. RISK CLASS — occupation, construction type, year built, sum insured
2. RED FLAGS — items that would affect pricing, coverage, or appetite (bullets, specific page references where possible)
3. MISSING INFORMATION — what should be in a submission this size that isn't here
4. BROKER QUESTIONS — the two most important questions to ask before quoting

Be terse. Use bullets. No preamble. No filler. If you cannot find information to answer a section, say "Not provided" rather than speculating.

<<PASTE SUBMISSION HERE>>`,
  },

  {
    num: '046',
    slug: 'comparing-manuscript-wordings',
    category: 'POLICY & WORDING',
    title: 'Comparing two manuscript wordings clause by clause with one prompt.',
    date: '18.05.26',
    readTime: '11 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Intermediate',
    access: 'free',
    excerpt: 'Manuscript wording comparisons used to mean two PDFs side by side and an hour of careful reading. This prompt turns it into a five-minute job.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The broker sends two versions. The cover letter says "minor amendments". It is never minor amendments.',
        paragraphs: [
          'Manuscript wording comparisons are one of the most error-prone tasks in underwriting. The changes are usually presented as minor, the document looks identical at a glance, and the clause that actually matters is buried on page 34.',
          'Most underwriters do this comparison manually — two browser windows, control-F, a lot of scrolling. It works, but it misses the subtle rewordings that change coverage without changing word count.',
        ],
        image: null,
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Two PDFs, one prompt, and a clear instruction about output format.',
        paragraphs: [
          'Upload both wordings as separate files. Name them clearly in the prompt (Wording A / Wording B, or the actual policy numbers). The key setup instruction is to ask for a clause-by-clause diff, not a summary.',
          'Claude can hold two documents in context simultaneously. For wordings under 80 pages each, this works reliably without hitting context limits.',
        ],
        image: '[ screenshot — two wording PDFs uploaded side by side ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'One turn for the diff. One turn for the coverage impact. Done.',
        paragraphs: [
          'Turn 1: Run the comparison prompt. Ask for a table: Clause | Wording A | Wording B | Change Type. Change types: Addition, Deletion, Rewording, Identical.',
          'Turn 2: For any clause marked Rewording or Deletion, ask "What is the coverage impact of each change? Which changes broaden coverage and which restrict it?"',
          'This second turn is where the value compounds. The model is good at identifying what a rewording means for the insured, and flags things like "deletion of the 72-hour aggregation clause broadens coverage for weather events".',
        ],
        image: '[ screenshot — clause comparison table output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A structured diff table plus a plain-English coverage impact summary.',
        paragraphs: [
          'The comparison table was accurate on every clause I checked manually. The coverage impact analysis was correct on five of seven clauses — the two errors were both instances of the model missing a cross-reference to a definitions section.',
          'The output is directly usable in a broker response or a referral memo. Format it and send it.',
        ],
        image: null,
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'The best time-save in this whole field guide. Do this one first.',
        paragraphs: [
          'This is the walkthrough I recommend to every underwriter who asks me where to start. The task is well-defined, the output is verifiable, and the time saving is enormous.',
          'Caveat: always verify the cross-reference clauses manually. The model struggles when a change in one clause only makes sense in the context of a definition that lives elsewhere in the document.',
        ],
        image: null,
      },
    ],
    stealThis: `I am attaching two versions of a manuscript property policy wording. Wording A is the incumbent wording. Wording B is the proposed revised wording.

Please produce a clause-by-clause comparison in table format with four columns:
| Clause | Wording A | Wording B | Change Type |

Change types: Addition (new clause in B), Deletion (clause removed in B), Rewording (same clause, different language), Identical (no change).

After the table, list every Rewording and Deletion with a one-line note on the coverage impact: does this change broaden or restrict coverage for the insured, and how?

Be specific. Cite clause numbers. No preamble.

<<ATTACH WORDING A AND WORDING B>>`,
  },

  {
    num: '045',
    slug: 'cyber-risk-profile-from-10k',
    category: 'RISK ASSESSMENT',
    title: 'Pulling a usable cyber-risk profile from a public 10-K filing.',
    date: '11.05.26',
    readTime: '6 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Intermediate',
    access: 'free',
    excerpt: 'A public 10-K filing contains more underwriting-relevant cyber risk data than most submissions. Here\'s how to extract it in one prompt.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The submission tells you nothing useful about cyber risk. The 10-K tells you almost everything.',
        paragraphs: [
          'Cyber submissions are frustrating because the most useful information is almost never in the submission itself. Revenue by segment, third-party dependencies, prior breach disclosures, regulatory exposure — it\'s all in the public record for any listed company.',
          'The 10-K risk factors section alone is worth reading as a cyber underwriter. The problem is that it\'s 200 pages and structured for investors, not underwriters.',
        ],
        image: null,
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Download the 10-K PDF from SEC EDGAR. Upload it. The prompt does the rest.',
        paragraphs: [
          'US companies: SEC EDGAR (sec.gov/cgi-bin/browse-edgar). Search by company name, select 10-K, download the latest annual report as PDF.',
          'Non-US companies: equivalent annual reports are available on local exchange websites or the company\'s investor relations page.',
          'The 10-K prompt below extracts the six things that actually matter for cyber pricing: revenue, IT spend, third-party dependencies, prior incidents, regulatory exposure, and the nature of data held.',
        ],
        image: '[ screenshot — downloading 10-K from SEC EDGAR ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'One prompt. Six outputs. Under three minutes.',
        paragraphs: [
          'Upload the 10-K PDF and run the prompt below. The model searches the entire document and surfaces the relevant sections.',
          'For a 200-page 10-K, expect the output in 15–20 seconds. The model will cite specific sections and page numbers when it finds them, which makes verification fast.',
        ],
        image: '[ screenshot — cyber risk profile output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A six-section cyber profile ready for your underwriting file.',
        paragraphs: [
          'The output covers: company overview (revenue, sector, employees), IT infrastructure indicators, third-party and cloud dependencies, historical incidents and breach disclosures, regulatory environment, and nature of data held.',
          'Quality is high for items explicitly disclosed. Quality drops for items companies deliberately obscure (e.g., incident response costs are rarely disclosed precisely). The model flags where it\'s inferring vs. citing.',
        ],
        image: null,
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'A genuine edge. Most underwriters don\'t bother reading the 10-K.',
        paragraphs: [
          'This prompt gives you information the submission doesn\'t provide, sourced directly from SEC-filed documents. It takes three minutes and changes the conversation with the broker.',
          'Limitation: works best for US-listed companies with robust SEC disclosure requirements. For private companies, you\'re back to relying on the submission.',
        ],
        image: null,
      },
    ],
    stealThis: `I am attaching a company's annual report / 10-K filing. I am a cyber insurance underwriter assessing this company as a potential insured.

Please extract and summarise the following six items:

1. COMPANY PROFILE — revenue (total and by segment if available), employee count, geographic footprint, primary business activity
2. TECHNOLOGY PROFILE — any disclosed information about IT infrastructure, cloud providers, software platforms, or technology spend
3. THIRD-PARTY DEPENDENCIES — vendors, outsourcing arrangements, supply chain risks mentioned in the filing
4. INCIDENT HISTORY — any disclosed cybersecurity incidents, breaches, or material IT disruptions in the past three years
5. REGULATORY EXPOSURE — applicable data protection regulations, compliance status, any regulatory actions or investigations
6. DATA PROFILE — nature of customer or employee data held (PII, financial, health, etc.) and estimated volume if disclosed

For each item, cite the section of the filing where you found the information. If an item is not disclosed, say "Not disclosed" — do not speculate.

<<ATTACH 10-K OR ANNUAL REPORT>>`,
  },

  {
    num: '044',
    slug: 'broker-needs-more-information-template',
    category: 'BROKER COMMS',
    title: 'A short, polite "we need more information" template that actually lands.',
    date: '04.05.26',
    readTime: '4 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Beginner',
    access: 'free',
    excerpt: 'Every underwriter needs a polished \'needs more information\' template. This one takes 30 seconds to customise and lands better than anything written from scratch.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The "needs more info" email is sent fifty times a year. It should take thirty seconds, not fifteen minutes.',
        paragraphs: [
          'Most underwriters write this email from scratch every time. They know the information they need, but the act of structuring a polite, professional request — explaining what\'s missing, why it matters, and what format is helpful — takes longer than it should.',
          'The other problem: these emails tend to be either too long (making the broker wade through context to find the actual question) or too short (missing information that causes a follow-up round). Getting the calibration right consistently is harder than it looks.',
        ],
        image: null,
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Tell the model what risk it is, what you have, and what you need. It writes the email.',
        paragraphs: [
          'The setup is minimal: give the model the risk type, the submission you received, and a list of what\'s missing. It handles the tone, the structure, and the professional framing.',
          'You can paste the original submission or just describe what you received. The output quality is similar either way.',
        ],
        image: null,
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'One turn. Light editing. Send it.',
        paragraphs: [
          'Fill in the three variables in the prompt: the risk type, a brief summary of what was submitted, and a bullet list of what you need. Run the prompt.',
          'The model produces a three-paragraph email: brief acknowledgment, specific list of requirements with one-line explanations, and a clear close.',
          'Edit: usually just the specific items, the timeline, and occasionally the tone (some brokers prefer more formal, some less). Total time: under two minutes.',
        ],
        image: '[ screenshot — broker email output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A professional email that explains what\'s needed and why — without padding.',
        paragraphs: [
          'The output consistently hits the right length (150–200 words), explains the reason for each request, and closes without unnecessary hedge language.',
          'Where it occasionally overshoots: formal language that\'s slightly too stiff for a relationship you have with a broker. One edit fixes it.',
        ],
        image: null,
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'The quickest win in the whole toolkit. Start here if you\'re new to using AI at your desk.',
        paragraphs: [
          'This is the prompt I recommend to sceptical colleagues. It\'s fast, the output is immediately useful, and it\'s low-stakes enough that you can verify the output easily.',
          'The compounding value: once you\'ve done this twenty times, you\'ve effectively created a template library for every risk type you see regularly.',
        ],
        image: null,
      },
    ],
    stealThis: `I am a commercial insurance underwriter. I have received a submission for [RISK TYPE] that is missing important information before I can provide a quote.

Here is what was submitted: [BRIEF DESCRIPTION OF SUBMISSION — 1–2 sentences]

Here is what I still need:
[BULLET LIST OF MISSING ITEMS]

Please write a short, professional email to the broker requesting this information. Requirements:
- Open by acknowledging the submission briefly
- List each missing item with a one-line explanation of why it matters to the underwriting
- Close with a clear timeline request and offer to discuss if helpful
- Tone: professional and collegial, not bureaucratic
- Length: 150–180 words maximum
- No unnecessary filler phrases ("I hope this email finds you well", etc.)`,
  },

  {
    num: '043',
    slug: 'sense-checking-binder-schedule',
    category: 'PRICING & EXPOSURE',
    title: 'Sense-checking a binder schedule with one careful prompt.',
    date: '27.04.26',
    readTime: '9 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Intermediate',
    access: 'free',
    excerpt: 'Binder schedules can hide exposure problems that are easy to miss in a row-by-row review. This prompt finds the patterns.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'A binder schedule is a spreadsheet. Reading it row by row misses the patterns.',
        paragraphs: [
          'Binder management is one of the most underappreciated sources of underwriting error. The problem is almost never a single risk — it\'s a pattern across the book. Concentration risk in one postcode. Premium that has been consistently below expected for a risk class. Occupancy drift over the past 12 months.',
          'These patterns are invisible when you review row by row. They\'re obvious when you look at the data as a whole.',
        ],
        image: null,
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Export the schedule to CSV. Paste the first 50 rows. Tell the model what to look for.',
        paragraphs: [
          'Export your binder schedule as CSV (or copy from Excel). For longer schedules, the first 50–100 rows plus column headers is usually enough for pattern detection.',
          'The key setup: tell the model your appetite and the binder\'s stated purpose. This lets it flag deviations rather than just describing the data.',
        ],
        image: '[ screenshot — binder schedule data pasted into Claude ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Two turns: one for pattern analysis, one for specific risk flags.',
        paragraphs: [
          'Turn 1: Paste the data and run the pattern analysis prompt. Ask for concentration analysis, premium distribution, and any occupancy categories that appear more than expected.',
          'Turn 2: For any anomaly flagged in turn 1, ask for the specific rows that contribute to it. "Show me the 10 risks with the highest concentration in the flagged postcode area."',
        ],
        image: null,
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A pattern summary with specific rows flagged for manual review.',
        paragraphs: [
          'The output identifies statistical outliers and concentration patterns reliably. The specific row flags let you do a targeted manual review rather than reading every line.',
          'Caveat: the model cannot verify whether the data is correct — it can only identify patterns in what you paste. Garbage in, garbage out applies.',
        ],
        image: null,
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'Changes how you think about binder reviews. Highly recommended.',
        paragraphs: [
          'This prompt is most valuable for binder books that have been running for a year or more — the patterns are more pronounced and the deviations from appetite more detectable.',
          'For a new binder, use the prompt to establish a baseline and repeat quarterly.',
        ],
        image: null,
      },
    ],
    stealThis: `I am reviewing a binder schedule for [BINDER TYPE — e.g. "commercial property SME"]. The binder's stated appetite is [BRIEF DESCRIPTION OF APPETITE].

I am pasting the schedule data below as CSV. Please analyse it and provide:

1. CONCENTRATION ANALYSIS — geographic concentration, occupancy class concentration, any single risk or risk cluster representing more than 5% of the total
2. PREMIUM DISTRIBUTION — distribution of premium across the book; flag any unusual patterns or outliers
3. OCCUPANCY DRIFT — any occupancy classes appearing in the data that seem outside the stated appetite
4. DATA QUALITY FLAGS — missing fields, inconsistent formats, or entries that look like data entry errors
5. TOP 5 RISKS TO REVIEW — based on the above, identify the five specific rows that most warrant manual review, with a one-line explanation for each

<<PASTE CSV DATA HERE>>`,
  },

  {
    num: '042',
    slug: 'board-summary-from-loss-reports',
    category: 'REPORTING & COMPLIANCE',
    title: 'Drafting a board summary from twelve quarterly loss reports.',
    date: '20.04.26',
    readTime: '12 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Advanced',
    access: 'free',
    excerpt: 'Twelve quarterly loss reports. One board summary. Here\'s how to consolidate them in fifteen minutes without losing the signal.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The board wants three years of loss trends in two pages. You have twelve quarterly reports to synthesise.',
        paragraphs: [
          'Board-level loss reporting is a recurring task that never gets easier. The data exists — it\'s in the quarterly reports — but synthesising twelve documents into a coherent two-page narrative with the right level of detail is genuinely hard.',
          'Most underwriters do it in one of two ways: they either spend an afternoon on it, or they recycle last year\'s summary with updated numbers. Neither approach produces a document that actually helps the board understand the trend.',
        ],
        image: null,
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Upload all twelve reports. Give the model context about the audience.',
        paragraphs: [
          'Claude can handle twelve PDFs in a single conversation. Upload them all at the start. Alternatively, paste the key tables from each report as text — this often produces better output because the model doesn\'t have to interpret PDF formatting.',
          'Critical setup: tell the model who the audience is. A board summary is different from a reinsurer pack or a management report. The level of detail, the language, and the emphasis should all be calibrated to what a board member needs.',
        ],
        image: '[ screenshot — twelve quarterly reports uploaded ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Three turns: trend extraction, narrative draft, then sharpening.',
        paragraphs: [
          'Turn 1: Ask the model to extract the key loss metrics from all twelve reports into a single table — by quarter, by line of business, whatever your standard structure is. This step is data extraction, not narrative.',
          'Turn 2: Using the table from turn 1, ask for a two-page board narrative. Specify the structure: executive summary, three-year trend, key drivers, and outlook.',
          'Turn 3: Ask it to sharpen the language. "Make this more direct. A board member has thirty seconds. What are the three things they most need to understand?"',
        ],
        image: null,
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A structured two-page summary that actually tells a story.',
        paragraphs: [
          'The output is consistently better structured than what most people write from scratch. The model is good at identifying the narrative thread across twelve data points.',
          'Where it struggles: contextualising the trend against market benchmarks (it doesn\'t have those unless you provide them) and making forward-looking statements (it correctly declines to speculate without basis).',
        ],
        image: null,
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'Saves a day\'s work. Worth the effort to build the prompt properly.',
        paragraphs: [
          'This is the most time-intensive prompt in the guide to set up well, but once it works for your specific reporting structure, it becomes a template you reuse every quarter.',
          'The investment: 30 minutes the first time. After that: 15 minutes to update.',
        ],
        image: null,
      },
    ],
    stealThis: `I am preparing a board-level summary of loss experience for [COMPANY/PORTFOLIO NAME] covering [TIME PERIOD].

I have attached [NUMBER] quarterly loss reports. Please:

STEP 1 — DATA EXTRACTION
Extract the following metrics from each quarterly report into a table: quarter, gross written premium, net claims incurred, loss ratio, large losses (>$[THRESHOLD]), and any commentary on claims trends.

STEP 2 — BOARD NARRATIVE
Using the extracted data, draft a two-page board summary with the following structure:
- Executive summary (3–4 sentences: the headline trend and the most important thing the board needs to know)
- Three-year loss trend (the data story, not just the numbers)
- Key drivers of the trend (what explains the movement)
- Outlook (what to watch in the next 12 months, based on what the data shows)

Audience: board members who understand the business but are not underwriters. Plain language. Numbers matter but narrative matters more. No jargon without explanation.

<<ATTACH QUARTERLY REPORTS>>`,
  },
];

// ─────────────────────────────────────────────────────────────
// Category list — derived from walkthroughs data.
// Used by FieldGuidePage for the sidebar and filters.
// ─────────────────────────────────────────────────────────────
export const FG_CATS = [
  'SUBMISSIONS & TRIAGE',
  'POLICY & WORDING',
  'RISK ASSESSMENT',
  'BROKER COMMS',
  'PRICING & EXPOSURE',
  'REPORTING & COMPLIANCE',
];
