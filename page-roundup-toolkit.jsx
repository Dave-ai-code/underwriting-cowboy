// Roundup + Toolkit page variants

// ROUNDUP — A: Split (Digest left / Deep dives right), B: Unified chrono feed
const ROUNDUP_ISSUES = [
  ['014', '25.05.26', 'When claims data meets a long-context model.',     'DEEP DIVE'],
  ['013', '18.05.26', 'Lloyd\'s pilots triage, plus six other things.',   'WEEKLY'],
  ['012', '11.05.26', 'Out-prompting the prompt engineer.',               'DEEP DIVE'],
  ['011', '04.05.26', 'Zurich hires for prompts, and five other moves.',  'WEEKLY'],
  ['010', '27.04.26', 'EU AI Act, final draft: what underwriters owe.',   'DEEP DIVE'],
  ['009', '20.04.26', 'Six tools you don\'t need yet, and one you do.',   'WEEKLY'],
];

const ROUNDUP_WEEKLY = [
  ['014', '25.05.26', 'Lloyd\'s pilots AI submission triage across three syndicates — plus six other things you missed this week.'],
  ['013', '18.05.26', 'Zurich quietly hires its first "head of prompt engineering". And what it means for the rest of us.'],
  ['012', '11.05.26', 'Anthropic ships file-search. Six tools you don\'t need yet, and one you actually do.'],
  ['011', '04.05.26', 'The reinsurance market quietly reprices cyber. Two stories that explain why.'],
];

const ROUNDUP_DEEP = [
  ['When claims data meets a long-context model.', '14 MIN'],
  ['Out-prompting the prompt engineer.', '11 MIN'],
  ['The EU AI Act\'s final draft, decoded for life underwriters.', '18 MIN'],
];

function RoundupA() {
  const [q, setQ] = React.useState('');
  const weekly = ROUNDUP_WEEKLY.filter(([n, d, t]) => matchesQuery(q, n, d, t, 'weekly digest'));
  const deep   = ROUNDUP_DEEP.filter(([t]) => matchesQuery(q, t, 'deep dive essay'));
  const total = weekly.length + deep.length;
  return (
    <Page>
      <Nav active="The Roundup" />
      <div style={{ padding: '64px 80px 40px', borderBottom: `1px solid ${UC.ink}` }}>
        <Eye>THE ROUNDUP — 14 ISSUES · SHIPS FRIDAYS</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 84,
          lineHeight: 0.98, letterSpacing: -1.4, margin: '14px 0 14px',
        }}>
          The Roundup.
        </h1>
        <div style={{
          fontFamily: UC.serif, fontStyle: 'italic', fontSize: 21,
          color: UC.ink2, lineHeight: 1.4, maxWidth: 760,
        }}>
          The weekly digest — five to seven stories with a two-line take.
          Plus the deeper essays, when one is worth writing.
        </div>
        <div style={{ marginTop: 28, maxWidth: 640 }}>
          <SearchBar
            placeholder="Search issues, stories, essays…"
            value={q} onChange={setQ}
            count={total} label={total === 1 ? 'match' : 'matches'}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr' }}>
        {/* WEEKLY DIGEST */}
        <div style={{ padding: '48px 56px 56px 80px', borderRight: `1px solid ${UC.rule}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
            <div>
              <Eye color={UC.amber}>THE WEEKLY DIGEST</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 28, marginTop: 6 }}>5–7 stories. 2-line take. Sent Friday.</div>
            </div>
            <Eye>ALL 11 ISSUES →</Eye>
          </div>

          {weekly.length === 0 ? (
            <div style={{
              padding: '32px 24px', marginTop: 12,
              border: `1px dashed ${UC.rule}`, background: UC.paperAlt,
              fontFamily: UC.serif, fontSize: 17, color: UC.ink2, fontStyle: 'italic',
            }}>No weekly issues matched "{q}".</div>
          ) : weekly.map(([n, d, t], i) => (
            <div key={n} style={{
              padding: '24px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
              display: 'grid', gridTemplateColumns: '60px 100px 1fr', gap: 20,
              alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>№ {n}</span>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{d}</span>
              <div>
                <div style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.35 }}>{t}</div>
                <Eye color={UC.amber} style={{ marginTop: 8 }}>READ ISSUE →</Eye>
              </div>
            </div>
          ))}
        </div>

        {/* DEEP DIVES */}
        <div style={{ padding: '48px 80px 56px 56px', background: UC.paperAlt }}>
          <Eye color={UC.amber}>DEEP DIVES</Eye>
          <div style={{ fontFamily: UC.serif, fontSize: 28, marginTop: 6, marginBottom: 24 }}>
            Longer essays. When one is worth writing.
          </div>

          {deep.length === 0 ? (
            <div style={{
              padding: '32px 24px',
              border: `1px dashed ${UC.rule}`, background: UC.paper,
              fontFamily: UC.serif, fontSize: 17, color: UC.ink2, fontStyle: 'italic',
            }}>No deep dives matched "{q}".</div>
          ) : deep.map(([t, mins], i) => (
            <div key={i} style={{
              padding: '24px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
            }}>
              <Eye>{i === 0 ? 'JUST PUBLISHED' : 'ESSAY'}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 24, lineHeight: 1.2, marginTop: 8 }}>{t}</div>
              <Para lines={2} h={6} />
              <div style={{ display: 'flex', gap: 18, marginTop: 12 }}>
                <Eye>{mins} READ</Eye>
                <Eye color={UC.amber}>READ →</Eye>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUBSCRIBE STRIP */}
      <div style={{
        background: UC.ink, color: UC.paper, padding: '48px 80px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center',
      }}>
        <div>
          <Eye color={UC.amberSoft}>SUBSCRIBE</Eye>
          <div style={{ fontFamily: UC.serif, fontSize: 36, lineHeight: 1.1, marginTop: 10 }}>
            Get The Roundup in your inbox every Friday.
          </div>
        </div>
        <EmailCapture dark />
      </div>

      <Foot />
    </Page>
  );
}

function RoundupB() {
  return (
    <Page>
      <Nav active="The Roundup" />
      <div style={{ padding: '64px 80px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <Eye>THE ROUNDUP</Eye>
            <h1 style={{
              fontFamily: UC.serif, fontWeight: 400, fontSize: 72,
              lineHeight: 0.98, letterSpacing: -1.2, margin: '12px 0 0',
            }}>
              Everything,<br/><span style={{ fontStyle: 'italic', color: UC.amber }}>chronological.</span>
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {['All', 'Weekly', 'Deep Dives'].map((t, i) => (
              <div key={t} style={{
                padding: '8px 16px', border: `1px solid ${i === 0 ? UC.ink : UC.rule}`,
                background: i === 0 ? UC.ink : 'transparent',
                color: i === 0 ? UC.paper : UC.ink2,
                fontFamily: UC.mono, fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase',
              }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      <Rule />

      <div style={{ padding: '40px 80px 32px' }}>
        {ROUNDUP_ISSUES.map(([n, d, t, kind], i) => (
          <div key={n} style={{
            display: 'grid', gridTemplateColumns: '80px 1fr 140px 100px',
            gap: 28, padding: '28px 0',
            borderBottom: `1px solid ${UC.ruleSoft}`,
            alignItems: 'baseline',
          }}>
            <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>{d}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8 }}>
                <Eye color={kind === 'DEEP DIVE' ? UC.amber : UC.mute}>{kind} · № {n}</Eye>
              </div>
              <div style={{ fontFamily: UC.serif, fontSize: 26, lineHeight: 1.2 }}>{t}</div>
              <Para lines={2} h={6} />
            </div>
            <div>
              <Eye>{kind === 'DEEP DIVE' ? '14 MIN' : '5 STORIES'}</Eye>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Eye color={UC.amber}>READ →</Eye>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Eye>LOAD OLDER ISSUES ↓</Eye>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

// TOOLKIT — A: Tabbed sub-sections, B: Long single-page with anchored sections
const TOOLKIT_TOOLS = [
  ['Claude (Anthropic)',   'Long-context reasoning, file analysis, drafting.', 'Submission triage', 'From $20/mo', '★★★★★'],
  ['ChatGPT (OpenAI)',     'Generalist LLM with code interpreter and browsing.','Broker comms',     'From $20/mo', '★★★★☆'],
  ['Perplexity',           'Sourced research over the live web.',               'Risk research',    'Free / $20',  '★★★★☆'],
  ['NotebookLM',           'Grounded chat over a private corpus of documents.', 'Policy lookup',    'Free',         '★★★★☆'],
  ['Cursor',               'AI code editor — useful for underwriters who script.','Spreadsheet macros','From $20', '★★★☆☆'],
  ['ElevenLabs',           'Voice cloning + dictation.',                         'Note-taking',      'From $5/mo',  '★★★☆☆'],
];

function ToolkitA() {
  const [q, setQ] = React.useState('');
  const tools = TOOLKIT_TOOLS.filter(([name, what, best]) => matchesQuery(q, name, what, best));
  return (
    <Page>
      <Nav active="Toolkit" />
      <div style={{ padding: '64px 80px 32px' }}>
        <Eye>THE TOOLKIT — FREE · UPDATED MONTHLY</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 76,
          lineHeight: 0.98, letterSpacing: -1.4, margin: '14px 0 16px',
        }}>
          A bookmark-worthy<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>reference shelf.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5,
          color: UC.ink2, maxWidth: 720,
        }}>
          Tools, prompts, jargon and reading — curated for working underwriters.
          The kind of page you send to a colleague.
        </div>
        <div style={{ marginTop: 28, maxWidth: 640 }}>
          <SearchBar
            placeholder="Search tools, prompts, jargon, reading…"
            value={q} onChange={setQ}
            count={tools.length} label={tools.length === 1 ? 'match' : 'matches'}
          />
        </div>
      </div>

      {/* TABS */}
      <div style={{
        display: 'flex', borderTop: `1px solid ${UC.ink}`, borderBottom: `1px solid ${UC.rule}`,
        padding: '0 80px', background: UC.paperAlt,
      }}>
        {[
          ['AI Tool Directory', '34 TOOLS'],
          ['Prompt Library',    '58 PROMPTS'],
          ['Jargon Decoder',    '122 TERMS'],
          ['Reading List',      '40 PIECES'],
        ].map(([t, sub], i) => (
          <div key={t} style={{
            padding: '20px 32px',
            borderRight: i < 3 ? `1px solid ${UC.rule}` : 'none',
            borderBottom: i === 0 ? `2px solid ${UC.amber}` : 'none',
            background: i === 0 ? UC.paper : 'transparent',
            display: 'flex', flexDirection: 'column', gap: 4,
            color: i === 0 ? UC.ink : UC.ink2,
          }}>
            <div style={{ fontFamily: UC.sans, fontSize: 15, fontWeight: i === 0 ? 600 : 400 }}>{t}</div>
            <Eye>{sub}</Eye>
          </div>
        ))}
      </div>

      {/* TOOL DIRECTORY */}
      <div style={{ padding: '40px 80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 22 }}>
          <Eye>{q ? `MATCHING "${q.toUpperCase()}" — ${tools.length}` : 'AI TOOL DIRECTORY · 34 ENTRIES'}</Eye>
          <Eye>SORT · RATING ▾ ─── CATEGORY · ALL ▾</Eye>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '160px 1fr 120px 120px 80px 60px',
          gap: 16, padding: '12px 0',
          borderTop: `1px solid ${UC.ink}`, borderBottom: `1px solid ${UC.ink}`,
        }}>
          {['TOOL', 'WHAT IT DOES', 'BEST FOR', 'PRICING', 'RATING', ''].map(h => (
            <Eye key={h}>{h}</Eye>
          ))}
        </div>

        {tools.length === 0 ? (
          <div style={{
            padding: '48px 32px', marginTop: 16, textAlign: 'center',
            border: `1px dashed ${UC.rule}`, background: UC.paperAlt,
          }}>
            <Eye color={UC.amber}>NO MATCHES</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 22, marginTop: 8 }}>
              Nothing matches "{q}" in the toolkit.
            </div>
          </div>
        ) : tools.map(([name, what, best, price, rating]) => (
          <div key={name} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr 120px 120px 80px 60px',
            gap: 16, padding: '18px 0',
            borderBottom: `1px solid ${UC.ruleSoft}`,
            alignItems: 'baseline',
          }}>
            <div style={{ fontFamily: UC.serif, fontSize: 18 }}>{name}</div>
            <div style={{ fontFamily: UC.sans, fontSize: 14, color: UC.ink2, lineHeight: 1.4 }}>{what}</div>
            <Eye color={UC.amber}>{best.toUpperCase()}</Eye>
            <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{price.toUpperCase()}</span>
            <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber }}>{rating}</span>
            <span style={{ fontFamily: UC.mono, fontSize: 14 }}>→</span>
          </div>
        ))}
      </div>

      <Foot />
    </Page>
  );
}

function ToolkitB() {
  const sections = [
    ['01', 'AI Tool Directory', 'Tools relevant to underwriters, with plain-English summaries and honest ratings.', '34 ENTRIES'],
    ['02', 'Prompt Library',    'Standalone prompts organised by task, ready to copy.', '58 PROMPTS'],
    ['03', 'Jargon Decoder',    'AI terms explained for insurance people. Insurance terms for AI people.', '122 TERMS'],
    ['04', 'Reading List',      'Papers, reports and books worth reading. Ranked and summarised.', '40 PIECES'],
  ];

  return (
    <Page>
      <Nav active="Toolkit" />
      <div style={{ padding: '64px 80px 24px' }}>
        <Eye>THE TOOLKIT</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 92,
          lineHeight: 0.96, letterSpacing: -1.8, margin: '14px 0 0',
        }}>
          A reference shelf for the desk.
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5,
          color: UC.ink2, maxWidth: 700, marginTop: 18,
        }}>
          Four living lists. All free. Bookmark the page, send it to a colleague.
        </div>
      </div>

      {/* INDEX */}
      <div style={{ padding: '24px 80px 0', display: 'flex', gap: 0, borderTop: `1px solid ${UC.ink}` }}>
        {sections.map(([n, name, _, count], i) => (
          <div key={n} style={{
            flex: 1, padding: '24px 24px 28px',
            borderRight: i < 3 ? `1px solid ${UC.rule}` : 'none',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            <Eye color={UC.amber}>§ {n} ↓</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 22, marginTop: 2 }}>{name}</div>
            <Eye>{count}</Eye>
          </div>
        ))}
      </div>

      {/* SECTION 01 detail */}
      <div style={{ padding: '56px 80px 40px', borderTop: `1px solid ${UC.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }}>
          <div style={{ position: 'sticky', top: 24, alignSelf: 'start' }}>
            <Eye color={UC.amber}>§ 01</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 32, lineHeight: 1.1, marginTop: 8 }}>AI Tool Directory</div>
            <Eye style={{ marginTop: 14 }}>34 ENTRIES — UPDATED 25.05</Eye>
          </div>
          <div>
            {[
              ['Claude (Anthropic)',  'Long-context reasoning, file analysis, drafting.', '★★★★★'],
              ['ChatGPT (OpenAI)',    'Generalist LLM with code interpreter and browsing.','★★★★☆'],
              ['Perplexity',          'Sourced research over the live web.', '★★★★☆'],
              ['NotebookLM',          'Grounded chat over a private corpus.', '★★★★☆'],
            ].map(([n, w, r], i) => (
              <div key={n} style={{
                display: 'grid', gridTemplateColumns: '1fr 1.4fr 100px',
                padding: '20px 0', gap: 24,
                borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
                alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: UC.serif, fontSize: 20 }}>{n}</div>
                <div style={{ fontFamily: UC.sans, fontSize: 14, color: UC.ink2 }}>{w}</div>
                <div style={{ fontFamily: UC.mono, fontSize: 13, color: UC.amber, textAlign: 'right' }}>{r}</div>
              </div>
            ))}
            <Eye style={{ marginTop: 22 }}>SEE ALL 34 →</Eye>
          </div>
        </div>
      </div>

      {/* SECTION 02 — Prompts (preview) */}
      <div style={{ padding: '56px 80px 64px', borderTop: `1px solid ${UC.rule}`, background: UC.paperAlt }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }}>
          <div>
            <Eye color={UC.amber}>§ 02</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 32, lineHeight: 1.1, marginTop: 8 }}>Prompt Library</div>
            <Eye style={{ marginTop: 14 }}>58 PROMPTS</Eye>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              ['SUBMISSION TRIAGE', 'Triage a long property submission in four bullets.'],
              ['CLAUSE COMPARE',    'Compare two manuscript wordings, clause by clause.'],
              ['BROKER REPLY',      'Polite "we need more information" template.'],
              ['BOARD SUMMARY',     'Quarterly loss roll-up, one page, exec-friendly.'],
            ].map(([tag, body]) => (
              <div key={tag} style={{ background: UC.paper, border: `1px solid ${UC.rule}`, padding: 16 }}>
                <Eye color={UC.amber}>{tag}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: 18, marginTop: 8, lineHeight: 1.3 }}>{body}</div>
                <Eye style={{ marginTop: 14 }}>COPY ⧉</Eye>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

Object.assign(window, { RoundupA, RoundupB, ToolkitA, ToolkitB });
