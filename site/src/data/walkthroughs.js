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

  // ── 054 ──────────────────────────────────────────────────────
  {
    num: '054',
    slug: 'simplified-travel-policy-wording',
    category: 'POLICY & WORDING',
    title: 'Rewriting a travel insurance policy wording so customers can actually read it — structured, plain-English, and ready to navigate.',
    date: '25.05.26',
    readTime: '10 MIN',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    access: 'free',
    excerpt: 'Standard travel policy wordings are written for lawyers, not travellers. This walkthrough takes a dense, legalese document and rebuilds it as a clean, customer-facing wording with logical sections, plain language, and a structure readers can actually navigate.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'Travel insurance policies are among the most-read documents in insurance — and the least understood.',
        paragraphs: [
          'A customer buys travel insurance. Their bag gets lost at the airport. They file a claim. Then they read the policy for the first time.',
          'The standard travel wording they receive is 40 to 60 pages of dense text, written to satisfy legal and regulatory requirements, cross-referencing definitions buried in section eight, with exclusions scattered across every benefit section. It is not unreadable because insurers are malicious. It is unreadable because nobody has ever been incentivised to fix it.',
          'This creates two real business problems. First, it drives claims disputes — customers claim for things not covered, or miss entitlements they had. Both are expensive. Second, it damages the product\'s perceived value at purchase. A policy that looks impenetrable signals "this won\'t pay out."',
          'AI can rewrite a policy wording in plain English, restructure it around how customers actually use it, and produce an output that is clearer without changing the coverage. This walkthrough shows you exactly how.',
        ],
        image: '[ screenshot — standard travel wording open in PDF viewer, dense legalese across 40+ pages ]',
      },
      {
        num: '02',
        name: 'The Approach',
        heading: 'Three phases: structure first, language second, navigability third. Do not skip the order.',
        paragraphs: [
          'The mistake most people make is asking AI to "simplify this policy" and pasting the whole document at once. What comes back is a flattened rewrite with no structure — readable paragraphs that are still hard to navigate. Worse, the model sometimes quietly drops coverage nuances to make the language flow better.',
          'The right approach has three distinct phases. Phase 1 is structural: before touching a single word, map the document\'s logical architecture and propose a customer-friendly information hierarchy. What does a customer need to know first? What do they only look for when something goes wrong? This becomes the table of contents.',
          'Phase 2 is the rewrite, section by section. Never the whole document at once. Give the model one section at a time, ask it to rewrite in plain English, and review each output against the original. This is where you catch coverage drift — unintentional narrowing or broadening of what the language actually says.',
          'Phase 3 is navigability. This is where you add the structure that lets readers find what they need: numbered section headers, a what\'s covered / what\'s not covered summary box at the top of each benefit, a definitions section written in plain English (not "means hereinafter the following"), and cross-references that point forward instead of back.',
        ],
        image: '[ screenshot — Phase 1 structure map output, proposed section hierarchy for customer navigation ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'The prompts, in order. Starting with a section map, ending with a document ready for legal review.',
        paragraphs: [
          'Start with the structural prompt. Paste your full policy wording and ask the model to read it without rewriting anything. Have it return a proposed section map: the sections it would create, what original content maps to each, and what it thinks the customer needs to find in under 30 seconds. Review this map carefully. The structure it proposes reflects assumptions about your customer — you may want to reorder based on your actual claims enquiry data.',
          'Then rewrite section by section. Use the section prompt from the Steal This box. The key instruction is "match coverage precisely — do not add, remove, or implicitly narrow any coverage." After each section, paste the original and the rewrite side by side and ask the model to identify any coverage divergences. It will usually find one or two. Fix them before moving on.',
          'For each benefit section, ask for a summary box: a two-column table with "What\'s covered" on the left and "What\'s not covered (key exclusions)" on the right. Keep it to five bullet points per side. This is the box your customer reads. The detailed text below is for disputes.',
          'Finally, have the model generate a table of contents with anchor descriptions for each section. In a PDF, these become hyperlinks. In an HTML version, they become real navigation. In a printed document, they at least tell the reader where to go. This is the navigability layer that turns a rewrite into a usable document.',
        ],
        image: '[ screenshot — before/after section comparison, original legalese vs plain English output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A restructured, plain-English draft ready for your legal and compliance team to review — not a finished document.',
        paragraphs: [
          'The output of this process is a draft, not a final document. It needs legal review before it goes anywhere near a customer. The purpose of the AI-assisted rewrite is to move from a blank page to a structured draft in hours rather than days — the legal review is still essential.',
          'What the output gives you: a consistent reading level across all sections (typically Flesch-Kincaid grade 8–10, down from 14–16 in a standard wording), a logical information hierarchy that matches how customers use the product, summary boxes at the top of each benefit section, and a clean table of contents.',
          'What it does not give you: regulatory approval, legal certainty, or a guarantee that coverage meaning has been preserved throughout. One missed qualifier or a subtly reworded exclusion can create a material coverage change. The review step is not a formality.',
          'For teams that want to go further: the same process can produce an HTML version of the policy with genuine anchor navigation — each section header links from the table of contents. This is not a separate project; it is a 20-minute extension of Phase 3 using the HTML prompt in the Steal This box.',
        ],
        image: '[ screenshot — table of contents with clickable sections, benefit summary box ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'The technical work here is straightforward. The hard part is getting internal sign-off to change something that legal has approved for ten years.',
        paragraphs: [
          'AI makes the mechanics of this easy. The bottleneck is never the rewrite itself — it is internal stakeholder alignment. Legal teams are rightly cautious about changing approved wording. Compliance teams worry about what regulators will think. Distribution teams worry brokers will ask questions.',
          'The strongest argument is the one that starts with claims data. If you can show that a category of disputes consistently involves customers who misunderstood a specific coverage section, you have a business case for a simpler wording — and you have the specific section to prioritise.',
          'Start small. Pick one benefit section — medical expenses is usually the highest-enquiry, highest-dispute section in a travel policy. Run the rewrite on that section only. Show the before and after to a non-insurance reader and ask them which one they understand. That comparison is your internal pitch deck.',
        ],
        image: null,
      },
    ],
    stealThis: `# TRAVEL POLICY PLAIN-LANGUAGE REWRITE
# Run in three phases. Review each output before proceeding.

=== PHASE 1: STRUCTURE MAP ===
Read the following travel insurance policy wording in full.
Do not rewrite anything yet.

Return:
1. A proposed section map — the logical sections a customer needs,
   in the order they would look for them (not the original document order)
2. Which original clauses map to each proposed section
3. The three things a customer most urgently needs to find
   (e.g. "how do I make a claim", "what is not covered", "what are my limits")
4. Any structural problems you notice (buried definitions, scattered exclusions, etc.)

[PASTE FULL POLICY WORDING HERE]

=== PHASE 2: SECTION REWRITE ===
Rewrite the following section of a travel insurance policy in plain English.

Rules:
- Target reading level: Grade 8 (conversational but not condescending)
- Match coverage precisely — do not add, remove, or implicitly narrow any coverage
- Replace defined terms with plain equivalents where the definition is simple
  (e.g. "the Insured Person" → "you"); keep defined terms where precision matters
- Use short sentences. One idea per sentence.
- Use active voice wherever possible
- Do not use: "herein", "thereto", "aforementioned", "the said", "notwithstanding"

After the rewrite, identify any places where your language might change
the coverage meaning — even subtly. Flag them explicitly.

[PASTE ONE SECTION HERE]

=== PHASE 3A: SUMMARY BOX ===
For the rewritten section above, create a summary box formatted as two columns:

| WHAT'S COVERED | WHAT'S NOT COVERED |
|---|---|
| (5 bullet points max) | (5 bullet points max, key exclusions only) |

Write for a customer who has 20 seconds. Not a lawyer.

=== PHASE 3B: TABLE OF CONTENTS ===
Based on the complete rewritten policy, generate a table of contents.

For each section, include:
- Section number and title
- One-sentence description of what the customer will find there
- The question it answers (e.g. "What happens if I need a doctor abroad?")

Format for use as a clickable navigation panel.`,
  },

  // ── 053 ──────────────────────────────────────────────────────
  {
    num: '053',
    slug: 'portfolio-review-claude-code',
    category: 'RISK ASSESSMENT',
    title: 'Running a full portfolio analysis — data, charts, and a PowerPoint deck — entirely inside Claude Code.',
    date: '06.07.26',
    readTime: '14 MIN',
    tool: 'Claude Code',
    difficulty: 'Advanced',
    access: 'free',
    excerpt: 'A product committee wants a portfolio analysis in three days. This walkthrough collapses that into two hours — data ingestion, loss ratio analysis, visualisations, and a draft PowerPoint, all generated by Claude Code without leaving the terminal.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'A product committee asks for a portfolio analysis. The traditional path is Excel, charts, PowerPoint, and a late night.',
        paragraphs: [
          'New product development in insurance follows a familiar pattern: someone has an idea, the product committee asks for data to support it, and an underwriter spends two or three days producing an analysis that could have taken two hours.',
          'The data already exists — it lives in your portfolio management system as a CSV export. The analysis required is not complex: loss ratios by class, premium concentration, exposure distribution. The bottleneck is not thinking. It is the mechanical work of cleaning the data, running the calculations, building the charts, and assembling the presentation.',
          'Claude Code — Anthropic\'s agentic coding tool — removes that bottleneck almost entirely. You describe what you need, point it at your data, and it writes and executes the Python that does the work. This walkthrough takes you through the full process end to end.',
        ],
        image: '[ screenshot — multi-tab Excel workbook with manual portfolio analysis, formulas and pivot tables ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Claude Code CLI, a portfolio CSV export, and Python with three libraries. Twenty minutes to install, reusable forever.',
        paragraphs: [
          'What you need: Claude Code (install via the Anthropic website or with npm install -g @anthropic-ai/claude-code), your portfolio data exported as a CSV file, and Python 3 with pandas, matplotlib, and python-pptx installed.',
          'Install the Python dependencies with: pip install pandas matplotlib python-pptx openpyxl',
          'The data format matters, but it does not need to be perfect. At minimum you need columns for risk class or line of business, written premium, and claims paid or incurred. Year of account and policy count are useful extras. If your data has gaps or quality issues, Claude Code will flag them in Phase 1 and work around most of them.',
          'Start a session by opening your terminal, navigating to the folder containing your CSV, and running: claude',
        ],
        image: '[ screenshot — Claude Code session starting in terminal ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Four phases. Claude Code writes the code, executes it, and shows you the results before moving on.',
        paragraphs: [
          'Phase 1 — Data Assessment: Paste the opening section of the Steal This prompt and attach or reference your CSV. Claude Code reads the file, reports the column structure, flags data quality issues, and shows you a sample. Review it carefully. Any misinterpretation here propagates through everything that follows. Correct it before proceeding.',
          'Phase 2 — Analysis: Once you confirm the data interpretation is correct, paste the Phase 2 instructions. Claude Code writes a pandas script, executes it, and prints the results in the terminal — loss ratios by class, concentration analysis, year-on-year movement if your data covers multiple periods. Ask follow-up questions as you review. "Break the property class into residential versus commercial" or "recalculate excluding the large loss in 2023" — it adjusts the code and reruns immediately.',
          'Phase 3 — Visualisations: Claude Code generates matplotlib charts for each output and saves them as PNG files in your working directory. Review them and ask for adjustments. Label changes, colour adjustments, adding a benchmark line — it edits and regenerates in seconds.',
          'Phase 4 — PowerPoint: Give Claude Code the slide structure you need. It writes a python-pptx script that assembles the deck, embeds the charts, and populates the text. Run it. Open the PPTX. You have a draft presentation.',
        ],
        image: '[ screenshot — Phase 2 analysis output in terminal ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A Python analysis script, five to eight charts, and a draft PowerPoint deck — in under two hours.',
        paragraphs: [
          'The output is not presentation-ready without editing. Budget an hour for review and polishing after the generation phase. The analysis is typically 85 to 90 percent correct. The charts need visual tweaks for house style. The PowerPoint structure is logical but the language needs your voice.',
          'What it gets right: the structure of the analysis, the identification of patterns in the data (it found a concentration issue in one test run that I had genuinely missed), the appropriate chart type for each analysis, and the logical flow of the presentation. These are the hard parts. The polish is the easy part.',
          'What to watch: data interpretation errors where the model makes an assumption about column names or categorisations. One wrong assumption in Phase 1 propagates through everything that follows. The Phase 1 confirmation step is not optional.',
        ],
        image: '[ screenshot — generated PowerPoint slide ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'The most ambitious walkthrough in this guide. If this one lands, your relationship with AI at work changes permanently.',
        paragraphs: [
          'Most walkthroughs in this guide save time on a discrete task. This one changes the scope of what you can produce. A portfolio analysis that previously required three days of mechanical work now requires two hours of thinking work. That is a different kind of productivity gain.',
          'The setup investment is real — installing Claude Code, getting the Python dependencies right, and building intuition for how to phrase the phase prompts takes two to three hours the first time. After that, the template works on any portfolio dataset with minor adjustments.',
          'The limiting factor is not the tool. It is the quality of your data export and the clarity of your analysis brief. Both are worth spending time on before you open the terminal.',
        ],
        image: '[ screenshot — final PowerPoint deck open with embedded charts, loss ratio and concentration slides ]',
      },
    ],
    stealThis: `# PORTFOLIO ANALYSIS — NEW PRODUCT ASSESSMENT
# Paste each phase in sequence. Wait for confirmation before proceeding.
# Have your portfolio CSV in the same working directory.

=== PHASE 1: DATA ASSESSMENT ===
I need to conduct a portfolio analysis for a new product opportunity.
My portfolio data is in: <<YOUR-FILENAME.csv>>

Read the file and report:
- Column names and what each likely represents
- Total row count and date range covered
- Data quality issues (nulls, blanks, obvious errors)
- A five-row sample so I can verify your interpretation

Do not proceed until I confirm the data looks correct.

=== PHASE 2: ANALYSIS ===
Using pandas, run the following and print results clearly:
1. Total GWP, total claims incurred, overall loss ratio
2. Loss ratio by risk class/line of business — sorted high to low
3. Premium concentration — classes representing more than 5% of total GWP
4. Year-on-year GWP and loss ratio movement (if multi-year data exists)
5. Flag any class with loss ratio above 70% as an appetite concern

Save full results to: analysis_results.csv
Wait for my confirmation before proceeding.

=== PHASE 3: VISUALISATIONS ===
Using matplotlib, create and save the following charts:

1. loss_ratio_by_class.png
   Horizontal bar chart, sorted descending, benchmark line at 65%

2. premium_concentration.png
   Horizontal bar chart, top 10 classes by GWP, values labelled

3. trend_chart.png (only if multi-year data exists)
   Dual-axis line chart: GWP (left axis) and loss ratio (right axis) by year

Clean professional style. Label all axes. Add a title to each chart.
Wait for my confirmation before proceeding.

=== PHASE 4: POWERPOINT ===
Using python-pptx, build portfolio_analysis.pptx with these slides:

Slide 1 — Title
  "<<NEW PRODUCT NAME>> — Portfolio Opportunity Assessment"
  Subtitle: prepared by <<YOUR NAME>>, <<DATE>>

Slide 2 — Executive Summary
  3 bullets: key finding from the data, opportunity identified, primary risk

Slide 3 — Portfolio Overview
  Data callouts: Total GWP | Policy Count | Overall Loss Ratio

Slide 4 — Loss Ratio by Class
  Embed loss_ratio_by_class.png with a one-sentence observation below

Slide 5 — Premium Concentration
  Embed premium_concentration.png with a one-sentence observation below

Slide 6 — Appetite Implications for <<NEW PRODUCT NAME>>
  Which classes to target (loss ratio <65%, material premium base)
  Which classes to exclude or sub-limit (loss ratio >70%)

Slide 7 — Next Steps
  3 bullets based on the analysis findings

Save the file and confirm when complete.`,
  },

  // ── 052 ──────────────────────────────────────────────────────
  {
    num: '052',
    slug: 'rate-justification-loss-free-account',
    category: 'PRICING & EXPOSURE',
    title: 'Writing a rate justification memo for a loss-free account pushing back hard on renewal pricing.',
    date: '29.06.26',
    readTime: '7 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Intermediate',
    access: 'free',
    excerpt: 'The account has been loss-free for five years and the broker is pushing back on a 35% increase. You\'re right about the rate. This prompt helps you explain why — in language the broker can actually use.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'Five loss-free years is the broker\'s best argument. It is also, technically, much weaker evidence than it looks.',
        paragraphs: [
          'A good loss record is partly good risk management, partly favourable frequency, and partly the insured not yet having exhausted their loss expectancy. But saying that in a renewal conversation sounds dismissive — and it loses accounts.',
          'The rate justification memo is a document that makes the technical case in human terms. It acknowledges the good performance, explains what is driving the increase, and gives the broker something they can take to their client. Most underwriters write this from scratch, which is both time-consuming and inconsistent. The result is either too technical to land, or too soft to hold the rate.',
          'The goal is not to win an argument. It is to help the broker understand well enough that they can either accept the rate or have a productive conversation about alternatives.',
        ],
        image: '[ screenshot — broker email pushing back on renewal pricing, five-year loss-free record cited ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Account details, the rate movement, and the market context. The model structures the argument you already have.',
        paragraphs: [
          'You need four inputs: the account basics, the prior year and proposed renewal premiums, the actual drivers of the increase, and any structural alternatives you are prepared to offer.',
          'The market context input is the most important and the most commonly skipped. "Market hardening in cat-exposed property" is a reason a broker can relay to their client. "Our model says so" is not. If you do not have a market narrative, this is the moment to think about what it is — not because the prompt requires it, but because you need to be able to articulate it regardless of whether you are using AI.',
        ],
        image: '[ screenshot — account details and proposed rate movement entered into Claude prompt ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Justification memo first. Then the risk transfer argument. Then alternative structures.',
        paragraphs: [
          'Turn 1: Run the prompt with your four inputs. The model produces a memo that acknowledges the loss record, explains the drivers, and makes the technical case in accessible terms.',
          'Turn 2: Ask for a specific paragraph on what the premium actually buys — the risk transfer argument. "Write a paragraph that explains what a loss-free record means in the context of the risk the insurer is carrying, not just the claims the insured has had." This is the argument most brokers do not hear and most clients respond to when they do.',
          'Turn 3: Ask for two or three alternative structures that deliver approximately the same technical price — higher deductible, reduced limit, split-trigger arrangement. This gives the broker somewhere to go and prevents the conversation from becoming a binary yes or no on the rate.',
        ],
        image: '[ screenshot — rate justification memo output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A memo that makes the technical case without sounding like a lecture.',
        paragraphs: [
          'The output hits the right tone for most broker relationships — it acknowledges the tension directly rather than ignoring it. The structure is consistently logical: acknowledge performance, explain drivers, present alternatives.',
          'Where it needs the most editing: the rate driver paragraph. The model will use your inputs accurately, but the language needs to be calibrated to your specific market context and the individual broker relationship. This is the paragraph where broker acceptance is won or lost. Spend the edit here.',
        ],
        image: '[ screenshot — four-section rate justification memo output: performance, drivers, risk transfer, alternatives ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'Most useful for underwriters who find this conversation difficult. The structure helps everyone.',
        paragraphs: [
          'An experienced underwriter will rewrite 30 to 40 percent of the output — the arguments are correct but sometimes underspecific. A junior underwriter who finds this conversation difficult will find the prompt significantly reduces the anxiety and improves the output.',
          'The alternative structures turn is consistently the most valuable regardless of experience level. It generates options quickly, and having options ready before the broker calls changes the shape of the conversation.',
        ],
        image: null,
      },
    ],
    stealThis: `I am an insurance underwriter preparing a rate justification for a renewal where I am proposing a significant premium increase on a loss-free account.

ACCOUNT DETAILS:
- Risk type: <<E.G. COMMERCIAL PROPERTY, LIGHT INDUSTRIAL>>
- Insured: <<BRIEF DESCRIPTION — industry, size, years on cover>>
- Loss history: <<E.G. "FIVE CONSECUTIVE LOSS-FREE YEARS" OR SPECIFIC HISTORY>>
- Prior year premium: <<AMOUNT>>
- Proposed renewal premium: <<AMOUNT>> (<<PERCENTAGE>> change)

DRIVERS OF THE INCREASE:
<<LIST THE ACTUAL REASONS — market hardening, exposure changes, reinsurance costs, cat loading, portfolio performance, etc.>>

Please produce a rate justification memo in four sections:

1. ACKNOWLEDGMENT OF PERFORMANCE
One paragraph recognising the loss record genuinely — without sounding as though it contradicts the rate increase. The loss record is real. The rate is also right. Both can be true.

2. RATE DRIVERS
Plain-English explanation of what is driving the increase. No jargon the broker cannot relay to their client. Specific reasons, not generalities.

3. THE RISK TRANSFER ARGUMENT
A paragraph explaining what the premium represents — what the insured is buying, not just what they have claimed. This is the argument most brokers do not make to their clients.

4. ALTERNATIVE STRUCTURES
Two or three structures that deliver approximately the same technical price differently — higher deductible, reduced limit, adjusted coverage scope. For brokers who need something to take back to their client.

Tone: confident and direct, not defensive. The rate is correct. The memo explains why.
Length: 300–400 words.`,
  },

  // ── 051 ──────────────────────────────────────────────────────
  {
    num: '051',
    slug: 'claims-scenario-coverage-check',
    category: 'POLICY & WORDING',
    title: 'Checking whether a claims scenario is covered — before you call the broker back.',
    date: '22.06.26',
    readTime: '8 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Intermediate',
    access: 'free',
    excerpt: 'The broker has a potential claim and needs a preliminary coverage view in twenty minutes. The policy is 84 pages. This prompt finds the relevant clauses and surfaces the exclusions faster than you can.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'A broker calls at 3pm with a potential claim scenario. You have the policy. You have twenty minutes. The wording is not helping.',
        paragraphs: [
          'Coverage questions under time pressure are where underwriting errors happen. The broker needs clarity. Your instinct says covered — but something in the back of your mind is nagging at an exclusion you cannot quite locate in an 84-page wording.',
          'The standard approach is to search the PDF, find the relevant clauses, read them carefully, and form a view. For a straightforward scenario in a familiar wording, fifteen minutes. For an unusual scenario in a manuscript policy you have not touched in two years, much longer.',
          'The question is not whether you should be the one making the coverage determination — you should be, and a model should never be the last word on a claims position. The question is whether AI can do the clause-search and issue-identification faster than you can, so that you are applying judgment to a better-organised set of facts.',
        ],
        image: '[ screenshot — broker email with urgent claims scenario, 20-minute response deadline ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Upload the policy. Describe the scenario in plain English. Let the model find the clauses.',
        paragraphs: [
          'Upload the full policy wording as a PDF. Then describe the claims scenario in plain factual terms — what happened, who is claiming, what they are claiming for, and when it occurred.',
          'One setup discipline worth observing: describe the scenario factually, not in coverage terms. "The insured\'s employee slipped on a wet floor in the insured\'s premises and fractured their wrist" is better than "we have a potential employers liability claim." The factual description gives the model more to work with and avoids anchoring it to a coverage category before it has read the policy.',
        ],
        image: '[ screenshot — policy PDF and factual claims scenario uploaded to Claude ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Three turns: coverage analysis, exclusions check, broker response draft.',
        paragraphs: [
          'Turn 1: Run the coverage analysis prompt. The model identifies which insuring clause potentially responds to the scenario, any applicable extensions, and the sections most directly relevant. It cites clause numbers throughout.',
          'Turn 2: Ask specifically about exclusions and conditions in a separate turn. "Are there any exclusions in this wording that might apply? What conditions must the insured have met for coverage to respond?" This is a separate turn because the model — like a human — sometimes focuses on the coverage case and undersells the exclusions when both are addressed in one go.',
          'Turn 3: Ask it to draft a one-paragraph preliminary response to send to the broker. This is the time-saving turn — the first two gave you the analysis, this one gives you the communication. Review it carefully before sending.',
        ],
        image: '[ screenshot — coverage analysis output with clause citations ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A structured coverage analysis, exclusions review, and draft broker response in under ten minutes.',
        paragraphs: [
          'The coverage analysis is reliable for clear-cut scenarios in standard wordings. It identifies the right sections quickly and cites clause numbers, which makes verification fast.',
          'The exclusions analysis is where you need to apply the most human judgment. The model is good at finding explicit exclusions but occasionally misses the interaction between an exclusion and a buy-back clause, or the relationship between a condition and the coverage trigger. Always verify the exclusions section manually before forming your position.',
          'The broker response draft is useful as a starting point. The model writes conservatively, which is appropriate for preliminary coverage positions. You may want to be either more definitive or more cautious depending on your specific view of the scenario.',
        ],
        image: '[ screenshot — three-part coverage analysis output with clause numbers cited throughout ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'Changes the quality of initial coverage conversations. Not a substitute for legal advice on complex claims.',
        paragraphs: [
          'This prompt earns its place for the 80 percent of coverage questions that are complex enough to require careful reading but not so complex that they require legal counsel. It turns a fifteen-minute search-and-read into a five-minute verify-and-respond.',
          'The discipline it enforces is valuable independent of the AI output: writing out the claims scenario in plain factual terms before reaching for the policy forces you to think clearly about what actually happened. That is always the right starting point for a coverage analysis.',
        ],
        image: null,
      },
    ],
    stealThis: `I am an insurance underwriter reviewing a potential claim scenario against the attached policy wording.

CLAIMS SCENARIO:
<<DESCRIBE WHAT HAPPENED IN PLAIN ENGLISH — what occurred, who is claiming, what they are claiming for, and when it happened. Be factual, not technical.>>

POLICY DETAILS:
- Policy type: <<E.G. PUBLIC AND PRODUCTS LIABILITY / COMMERCIAL PROPERTY>>
- Policy period: <<START DATE TO END DATE>>
- Key limits: <<LIMIT OF LIABILITY AND DEDUCTIBLE>>

Please provide a coverage analysis in three parts:

1. COVERAGE POSITION
Which insuring clause(s) potentially respond to this scenario? Quote the specific clause number and the relevant language. Note any extensions that may apply.

2. EXCLUSIONS AND CONDITIONS
Are there any exclusions in this wording that might apply? Are there any conditions precedent to coverage that the insured must have complied with? Cite the clause number and explain the application to this specific scenario.

3. INFORMATION NEEDED
What additional information from the insured or broker would be needed to form a definitive coverage view?

Be precise. Cite clause numbers throughout. Do not give a definitive coverage opinion — identify the issues clearly and leave the final position to the underwriter.

<<ATTACH POLICY WORDING PDF>>`,
  },

  // ── 050 ──────────────────────────────────────────────────────
  {
    num: '050',
    slug: 'referral-memo-above-authority',
    category: 'REPORTING & COMPLIANCE',
    title: 'Writing the referral memo that actually gets approved — structure, recommendation, and the Q&A the committee will ask.',
    date: '15.06.26',
    readTime: '6 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Beginner',
    access: 'free',
    excerpt: 'Most referral memos describe the risk without making a recommendation. This prompt produces the opposite — a structured memo built around your position, plus the three questions the committee will ask.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The referral memo is a sales document. Most underwriters write it like a fact sheet.',
        paragraphs: [
          'Every underwriting authority structure has above-limit risks that require referral. The memo you write is, in effect, a persuasion document — you are making the case for your assessment to a more senior underwriter or a committee.',
          'The problems with most referral memos: they describe the risk but do not make a recommendation, they present information without prioritising it, and they do not anticipate the objections. A committee member who has to ask "so what do you recommend?" has already mentally moved on.',
          'The other problem is time. A well-structured referral memo takes 45 minutes to write properly. Most underwriters write it in 15 and wonder why the committee asks for more information at the meeting.',
        ],
        image: '[ screenshot — above-authority submission with risk details, referral flag triggered ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Give the model your assessment, not just the facts. It structures the memo around your recommendation.',
        paragraphs: [
          'This prompt requires more input than most in this guide: the risk details, proposed terms, your actual recommendation, and any concerns you want the committee to be aware of.',
          'The critical input is your recommendation. The model structures the memo to support it. If you are uncertain what to recommend, resolve that before writing the memo — not by asking the model. The model will give you a memo that reflects your thinking clearly. It cannot do the thinking for you.',
        ],
        image: '[ screenshot — risk details, proposed terms and recommendation entered into Claude prompt ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Draft the memo. Then run the anticipated Q&A. The second step is the valuable one.',
        paragraphs: [
          'Turn 1: Run the prompt with your inputs. The output is a structured one-page memo: risk summary, key underwriting considerations, proposed terms, recommendation, conditions attached.',
          'Turn 2: Ask the model to anticipate the three questions the committee is most likely to ask, with a one-paragraph prepared response to each. This step is where individual judgment applies — but the model\'s predictions are correct often enough to be genuinely useful as preparation. Senior underwriters ask the same types of questions about similar risks. Knowing the answers before you walk into the room changes the referral conversation.',
          'Edit: verify all numbers and terms, add your signature block, adjust anything that reflects a known preference at your specific committee.',
        ],
        image: '[ screenshot — referral memo and Q&A output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A structured memo and a prepared Q&A — the two things that determine whether a referral gets approved cleanly.',
        paragraphs: [
          'The memo structure is consistently good — it follows the logical flow a committee expects and does not bury the recommendation. The one-page constraint matters. A two-page referral memo signals that the underwriter has not decided what the most important things are.',
          'The Q&A section is where you will need to apply the most judgment. Use it as preparation, not as a script. Even if you do not include it in the memo itself, reviewing it before the meeting changes the quality of your answers.',
        ],
        image: '[ screenshot — one-page referral memo with anticipated committee Q&A below ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'Cuts writing time by two-thirds. More importantly, forces the structure that makes a referral succeed.',
        paragraphs: [
          'The output is better organised than the average referral memo written from scratch under time pressure. The three-part flow — risk, recommendation, conditions — is simple but routinely ignored in practice in favour of narrative that leaves the committee doing the analytical work.',
          'The model writes conservatively, which is appropriate for most referrals. If you are making a bullish case for a risk at the edge of appetite, you may need to push the recommendation language harder than the default output provides.',
        ],
        image: null,
      },
    ],
    stealThis: `I am an insurance underwriter preparing a referral memo for an above-authority risk.

RISK DETAILS:
- Risk type: <<E.G. COMMERCIAL PROPERTY / LIABILITY / PACKAGE>>
- Insured: <<BRIEF DESCRIPTION — industry, size, key operations>>
- Key risk characteristics: <<2–3 BULLETS — the things that matter most to the underwriting>>
- Loss history: <<PAST 5 YEARS, OR "NONE PROVIDED">>

PROPOSED TERMS:
- Premium: <<AMOUNT AND RATE ON LINE>>
- Key conditions or endorsements: <<LIST, OR "STANDARD FORM">>
- Deductible: <<AMOUNT>>
- Limit: <<AMOUNT>>

MY RECOMMENDATION: <<ACCEPT / ACCEPT WITH CONDITIONS / DECLINE — plus one sentence explaining why>>

CONCERNS FOR COMMITTEE AWARENESS: <<ANYTHING TO FLAG, OR "NONE">>

Please produce two things:

1. REFERRAL MEMO (one page maximum)
Structure strictly as follows:
- Risk Summary (2–3 sentences: who the insured is and what we are being asked to cover)
- Key Underwriting Considerations (3–5 bullets: the things that most affect the risk quality)
- Proposed Terms (premium, limit, deductible, key conditions)
- Recommendation (your recommendation and the one-sentence rationale)
- Conditions Attached (any conditions that must be met for acceptance)

2. ANTICIPATED COMMITTEE QUESTIONS
The three questions this committee is most likely to ask about this referral. For each: the question, then a one-paragraph prepared response.

Tone: direct and opinionated. The memo should have a clear position, not a list of facts that leaves the committee to decide.`,
  },

  // ── 049 ──────────────────────────────────────────────────────
  {
    num: '049',
    slug: 'renewal-submission-comparison',
    category: 'SUBMISSIONS & TRIAGE',
    title: 'Comparing this year\'s renewal submission against last year\'s — and catching what changed.',
    date: '08.06.26',
    readTime: '5 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Beginner',
    access: 'free',
    excerpt: 'A good renewal underwriter compares the risk year-on-year. Almost nobody does it consistently because it takes too long manually. This prompt makes it a ten-minute job.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The one task that should happen at every renewal almost never does. Here is a ten-minute fix.',
        paragraphs: [
          'A good renewal underwriter compares the risk they are renewing against the risk they wrote twelve months ago. In practice, almost nobody does this consistently. There is not enough time, the prior year submission is buried in the file, and the assumption is that if nothing has been flagged by the broker, nothing has changed.',
          'That assumption is wrong more often than underwriters like to admit. Occupancy creeps. Sum insured stays flat while replacement costs rise. A new subsidiary gets added in a sentence in the notes section. An exclusion that was accepted in the prior year quietly disappears from the renewal request.',
          'The fix is not more discipline. It is a faster process.',
        ],
        image: '[ screenshot — prior year and renewal submissions open side by side, manual comparison in progress ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Both submissions, clearly labelled, and a note on what you already know changed.',
        paragraphs: [
          'You need both the current renewal submission and the prior year submission. PDFs uploaded to Claude work well. Pasting the key pages as text — the schedules, the risk description, the statement of values — also works and is sometimes faster.',
          'Label them clearly in the prompt: Prior Year and Renewal. If there are changes you already know about (the broker disclosed them in the covering email), mention them so the model can focus its attention on what you do not yet know.',
        ],
        image: '[ screenshot — prior year and renewal PDFs uploaded and labelled in Claude conversation ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'Two turns: first the change log, then the underwriting implications.',
        paragraphs: [
          'Turn 1: Run the comparison prompt. The output is a table of material changes — what is different between the prior year and the renewal submission, organised by section.',
          'Turn 2: For any change that looks material, ask for the underwriting implication. "The sum insured has increased 8% — given the premium is unchanged, is there a rate adequacy concern?" This second turn is where judgment comes in, and the model is consistently useful here as a prompt for your own thinking.',
          'Total time for a standard commercial submission: under ten minutes.',
        ],
        image: '[ screenshot — renewal comparison table output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A change log with an underwriting implication for each material difference.',
        paragraphs: [
          'The output catches the changes you would catch yourself, plus the ones you would miss on a quick skim — particularly occupancy category drift, changes in the business description that shift the risk class, and differences in endorsements or conditions between years.',
          'The implication commentary is useful as a prompt for your own thinking rather than a verdict. It surfaces the right questions. You provide the answers.',
        ],
        image: '[ screenshot — change log table with underwriting implication column, material differences highlighted ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'The best return on ten minutes during renewal season.',
        paragraphs: [
          'This prompt has the highest catch rate of anything in the field guide relative to the time invested. It does not replace judgment, but it makes sure the relevant information is in front of you before you apply it.',
          'Run this on every renewal above your complexity threshold. The one time it catches an undisclosed occupancy change or a quietly dropped exclusion will repay the time investment many times over.',
        ],
        image: null,
      },
    ],
    stealThis: `I am an insurance underwriter conducting a renewal review. I have two submissions for the same insured — one from the prior policy period and one for the upcoming renewal.

Prior year submission: <<ATTACH OR PASTE PRIOR YEAR>>
Renewal submission: <<ATTACH OR PASTE RENEWAL SUBMISSION>>

Risk type: <<E.G. COMMERCIAL PROPERTY / GENERAL LIABILITY / PACKAGE>>
Known changes already disclosed by broker: <<LIST OR "NONE">>

Please produce a renewal comparison in two parts:

PART 1 — MATERIAL CHANGES
A table of every material change between the prior year and renewal submissions.
Columns: Section | Prior Year | Renewal | Change Type

Change types:
- Increase (value has gone up)
- Decrease (value has gone down)
- New (not present in prior year, appears in renewal)
- Removed (present in prior year, absent in renewal)
- Unchanged

Focus specifically on: sum insured / limits, occupancy description, construction details, claims history, business description, endorsements and conditions, coverage extensions requested.

PART 2 — UNDERWRITING IMPLICATIONS
For each material change identified above, one sentence on the underwriting implication. Does this change affect risk quality, rate adequacy, or underwriting appetite? Be specific — not "this may affect pricing" but how and in what direction.

If the submissions are substantially identical, say so clearly rather than listing trivial differences.`,
  },

  // ── 048 ──────────────────────────────────────────────────────
  {
    num: '048',
    slug: 'decline-letter-that-keeps-the-relationship',
    category: 'BROKER COMMS',
    title: 'Writing a decline letter that closes the door cleanly without closing the relationship.',
    date: '01.06.26',
    readTime: '4 MIN',
    tool: 'Claude Sonnet 4.5',
    difficulty: 'Beginner',
    access: 'free',
    excerpt: 'Every underwriter writes fifty decline letters a year. Most are either too blunt or too vague. This prompt produces the version that explains the reason clearly and keeps the broker relationship intact.',
    sections: [
      {
        num: '01',
        name: 'The Problem',
        heading: 'The professional decline is written fifty times a year and almost never taught. Most underwriters get it wrong in one of two directions.',
        paragraphs: [
          'Too blunt: states the reason, thanks the broker, moves on. Technically accurate. Practically damaging. The broker feels dismissed and takes their better business elsewhere.',
          'Too vague: "at this time we are unable to provide terms" with no explanation. The broker resubmits the same risk in a different envelope three months later. The cycle repeats.',
          'The right decline explains the reason clearly enough that the broker understands and can explain it to their client, acknowledges what was good about the risk where something was, and leaves a door open if circumstances change. Getting that calibration right consistently — across fifty different risks, relationships, and reasons — is harder than it sounds.',
        ],
        image: '[ screenshot — inbox showing multiple decline drafts with inconsistent tone and length ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Three inputs and thirty seconds. The model handles the drafting.',
        paragraphs: [
          'You need three things: a brief description of the risk, your actual reason for declining (be specific — "outside appetite" is not a reason, it is a category), and a note about the relationship context.',
          'The relationship context matters more than most underwriters realise. A five-year producing broker gets a different tone than a new submission from an unknown intermediary. A key account that you want to decline on this risk but retain across the broader portfolio needs different handling than a one-off. The prompt handles these distinctions if you tell it the context.',
        ],
        image: '[ screenshot — risk description, decline reason and relationship context entered into Claude ]',
      },
      {
        num: '03',
        name: 'The Walkthrough',
        heading: 'One turn. Read it. Edit the specifics. Send.',
        paragraphs: [
          'Run the prompt with your three inputs. The output is usually 150 to 180 words with a clear three-part structure: a brief acknowledgment of the submission, the specific reason for the decline, and a professional close.',
          'The one thing to always edit: the reason paragraph. The model will use your input accurately, but you often need to sharpen it. "We are not currently writing risks with more than 30 percent manufacturing occupancy in this zone" is better than "the occupancy profile falls outside our current appetite."',
          'Optional second turn: if there are conditions under which you would reconsider, ask the model to add a forward-looking sentence. "Add a note that if they can provide a current fire suppression upgrade certificate we would be willing to review." This turns a hard decline into a conditional invitation and occasionally brings business back.',
        ],
        image: '[ screenshot — decline letter output ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A 160-word decline that holds the relationship while closing the door cleanly.',
        paragraphs: [
          'The output consistently hits the right length, uses a professional tone without being cold, and structures the reason in a way the broker can relay to their client without embarrassment.',
          'Where it occasionally overshoots: the opening acknowledgment can feel slightly formulaic. One edit fixes it. The close sometimes adds unnecessary sentiment — cut anything that sounds like "we hope to have the opportunity to work together in the future." If that is true, say something specific. If it is not, cut it entirely.',
        ],
        image: '[ screenshot — 165-word decline letter with three-part structure: acknowledgment, reason, close ]',
      },
      {
        num: '05',
        name: 'The Verdict',
        heading: 'The simplest demonstration of AI value at the desk. This is where I tell sceptical colleagues to start.',
        paragraphs: [
          'The standard objection to using AI for broker communications is that the tone will be wrong. This prompt disproves that consistently. The output is professional, calibratable to the relationship, and faster than writing from scratch.',
          'The compounding value: after thirty declines, you develop a clear sense of what good decline language looks like for your different risk types and broker relationships. That intuition transfers to every other piece of professional writing you do.',
        ],
        image: null,
      },
    ],
    stealThis: `I am a commercial insurance underwriter. I need to write a decline letter to a broker.

RISK: <<BRIEF DESCRIPTION — type, size, key features>>

REASON FOR DECLINE: <<YOUR SPECIFIC REASON — be precise, not just "outside appetite". E.G. "We are not currently writing coastal property risks with frame construction built before 1990">>

RELATIONSHIP CONTEXT: <<E.G. new broker / long-standing relationship / key account / first submission from this intermediary>>

RECONSIDERATION CONDITIONS: <<Any conditions under which you would review this risk, or "Hard decline — no reconsideration path">>

Please write a professional decline letter with these requirements:
- Open with a brief acknowledgment of the submission (one sentence, no filler)
- State the decline reason clearly and specifically — the broker needs to understand it well enough to explain it to their client
- If reconsideration conditions exist, include them as a specific forward-looking note
- Close professionally and briefly
- Tone: direct, professional, and warm enough to preserve the relationship
- Length: 150–180 words maximum
- No filler phrases ("thank you for your continued support", "we hope to work together in the future", etc.)
- No passive-aggressive softening ("unfortunately", "regrettably", "I am afraid") — state the position directly`,
  },

  // ── 047 (existing) ───────────────────────────────────────────
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
        image: '[ screenshot — 62-page commercial property submission PDF, inbox with eleven other open files ]',
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
        image: '[ screenshot — four-section triage memo output, red flags and missing information sections ]',
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
        image: '[ screenshot — two manuscript wording PDFs open side by side, manual scrolling comparison ]',
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
        image: '[ screenshot — clause-by-clause comparison table, Rewording and Deletion rows with coverage impact notes ]',
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
        image: '[ screenshot — sparse cyber submission vs 200-page 10-K annual report, information gap visible ]',
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
        image: '[ screenshot — six-section cyber profile output: company, IT infrastructure, dependencies, incidents, regulatory, data ]',
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
        image: '[ screenshot — incomplete submission with missing fields highlighted, broker follow-up chain below ]',
      },
      {
        num: '02',
        name: 'The Setup',
        heading: 'Tell the model what risk it is, what you have, and what you need. It writes the email.',
        paragraphs: [
          'The setup is minimal: give the model the risk type, the submission you received, and a list of what\'s missing. It handles the tone, the structure, and the professional framing.',
          'You can paste the original submission or just describe what you received. The output quality is similar either way.',
        ],
        image: '[ screenshot — risk type, submission summary and missing items bullet list entered into Claude ]',
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
        image: '[ screenshot — professional broker email output, three-paragraph structure with numbered information requests ]',
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
        image: '[ screenshot — binder schedule spreadsheet with hundreds of rows, pattern problems invisible at a glance ]',
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
        image: '[ screenshot — Turn 1 pattern analysis output: concentration summary and premium distribution flags ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A pattern summary with specific rows flagged for manual review.',
        paragraphs: [
          'The output identifies statistical outliers and concentration patterns reliably. The specific row flags let you do a targeted manual review rather than reading every line.',
          'Caveat: the model cannot verify whether the data is correct — it can only identify patterns in what you paste. Garbage in, garbage out applies.',
        ],
        image: '[ screenshot — pattern summary with top 5 risks flagged for manual review, postcode concentration identified ]',
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
        image: '[ screenshot — twelve quarterly loss report PDFs stacked, three years of data to synthesise ]',
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
        image: '[ screenshot — Turn 1 consolidated metrics table: twelve quarters, loss ratio and claims trend by line ]',
      },
      {
        num: '04',
        name: 'The Output',
        heading: 'A structured two-page summary that actually tells a story.',
        paragraphs: [
          'The output is consistently better structured than what most people write from scratch. The model is good at identifying the narrative thread across twelve data points.',
          'Where it struggles: contextualising the trend against market benchmarks (it doesn\'t have those unless you provide them) and making forward-looking statements (it correctly declines to speculate without basis).',
        ],
        image: '[ screenshot — two-page board summary: executive summary, three-year trend narrative, key drivers section ]',
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
// Category list — used by FieldGuidePage for sidebar and filters.
// ─────────────────────────────────────────────────────────────
export const FG_CATS = [
  'SUBMISSIONS & TRIAGE',
  'POLICY & WORDING',
  'RISK ASSESSMENT',
  'BROKER COMMS',
  'PRICING & EXPOSURE',
  'REPORTING & COMPLIANCE',
];
