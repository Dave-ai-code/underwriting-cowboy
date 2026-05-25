// Field Guide variants — A: Sidebar categories, B: Top tabs + masthead

const FG_CATS = [
  ['Submissions & Triage', '12'],
  ['Policy & Wording',     '9'],
  ['Risk Assessment',      '8'],
  ['Broker Comms',         '7'],
  ['Pricing & Exposure',   '6'],
  ['Reporting & Compliance','5'],
];

const FG_ITEMS = [
  ['047', 'SUBMISSIONS & TRIAGE', 'Triaging a 60-page commercial property submission in under 4 minutes.',  '25.05', '8M'],
  ['046', 'POLICY & WORDING',     'Comparing two manuscript wordings, clause by clause, with one prompt.',  '18.05','11M'],
  ['045', 'RISK ASSESSMENT',      'Pulling a usable cyber-risk profile from a 10-K filing.',                 '11.05', '6M'],
  ['044', 'BROKER COMMS',         'A short, polite "we need more information" template that actually lands.','04.05', '4M'],
  ['043', 'PRICING & EXPOSURE',   'Sense-checking a binder schedule with one careful prompt.',              '27.04', '9M'],
  ['042', 'REPORTING & COMPLIANCE','Drafting a board summary from twelve quarterly loss reports.',          '20.04','12M'],
];

function FieldGuideA() {
  const [q, setQ] = React.useState('');
  const filtered = FG_ITEMS.filter(([n, cat, t]) => matchesQuery(q, n, cat, t));
  return (
    <Page>
      <Nav active="Field Guide" />
      <div style={{ padding: '64px 80px 32px' }}>
        <Eye>THE FIELD GUIDE</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 72,
          lineHeight: 0.98, letterSpacing: -1.2, margin: '14px 0 16px',
          maxWidth: 1000,
        }}>
          Real prompts, real walkthroughs,<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>real verdicts.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5,
          color: UC.ink2, maxWidth: 720, marginTop: 8,
        }}>
          A growing library of AI use-cases for working underwriters. Every
          walkthrough follows the same six beats — Problem, Setup, Walkthrough,
          Output, Verdict, Steal&nbsp;This. All free to read.
        </div>
        <div style={{ marginTop: 28, maxWidth: 640 }}>
          <SearchBar
            placeholder="Search 47 walkthroughs — by title, topic, tool…"
            value={q} onChange={setQ}
            count={filtered.length} label={filtered.length === 1 ? 'match' : 'matches'}
          />
        </div>
      </div>

      <Rule />

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: 900 }}>
        {/* SIDEBAR */}
        <div style={{ padding: '40px 28px 40px 80px', borderRight: `1px solid ${UC.rule}` }}>
          <Eye>BROWSE BY CATEGORY</Eye>
          <div style={{ marginTop: 18 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '12px 0', borderBottom: `1px solid ${UC.ink}`,
              fontFamily: UC.sans, fontSize: 14,
            }}>
              <span style={{ fontWeight: 600 }}>All walkthroughs</span>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>47</span>
            </div>
            {FG_CATS.map(([c, n], i) => (
              <div key={c} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '12px 0', borderBottom: `1px solid ${UC.ruleSoft}`,
                fontFamily: UC.sans, fontSize: 14, color: UC.ink2,
                ...(i === 0 ? { color: UC.amber, fontWeight: 500 } : {}),
              }}>
                <span>{c}</span>
                <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{n}</span>
              </div>
            ))}
          </div>
          <Eye style={{ marginTop: 36 }}>FILTER</Eye>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Newest first', 'Most read', 'Quickest reads', 'Has video'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 12, height: 12, border: `1px solid ${UC.ink}`, background: f === 'Newest first' ? UC.ink : 'transparent' }} />
                <span style={{ fontFamily: UC.sans, fontSize: 13 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div style={{ padding: '40px 80px 64px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <Eye>{q ? `MATCHING "${q.toUpperCase()}" — ${filtered.length}` : `SHOWING 1–${filtered.length} OF 47`}</Eye>
            <Eye>VIEW · GRID ▾</Eye>
          </div>
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {filtered.map(([n, cat, t]) => (
                <WalkCard key={n} num={n} cat={cat} title={t} tall lines={3} />
              ))}
            </div>
          ) : (
            <div style={{
              padding: '64px 32px', border: `1px dashed ${UC.rule}`,
              textAlign: 'center', background: UC.paperAlt,
            }}>
              <Eye color={UC.amber}>NO MATCHES</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 24, marginTop: 10, color: UC.ink }}>
                Nothing here for "{q}" — yet.
              </div>
              <div style={{ fontFamily: UC.serif, fontSize: 16, color: UC.ink2, marginTop: 8 }}>
                Try a category like "wording" or "broker", or clear the search.
              </div>
            </div>
          )}
          {filtered.length > 0 && (
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', gap: 14, alignItems: 'center' }}>
              <Eye>← NEWER</Eye>
              <Eye color={UC.ink}>1</Eye>
              <Eye>2</Eye>
              <Eye>3</Eye>
              <Eye>4</Eye>
              <Eye>OLDER →</Eye>
            </div>
          )}
        </div>
      </div>

      <Foot />
    </Page>
  );
}

function FieldGuideB() {
  return (
    <Page>
      <Nav active="Field Guide" />
      {/* MASTHEAD */}
      <div style={{ padding: '56px 80px 36px', borderBottom: `1px solid ${UC.ink}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <Eye>THE FIELD GUIDE · 47 ENTRIES · UPDATED WEEKLY</Eye>
            <h1 style={{
              fontFamily: UC.serif, fontWeight: 400, fontSize: 88,
              lineHeight: 0.96, letterSpacing: -1.6, margin: '12px 0 0',
            }}>
              The Field Guide.
            </h1>
          </div>
          <div style={{
            fontFamily: UC.serif, fontStyle: 'italic', fontSize: 17,
            color: UC.ink2, maxWidth: 320, textAlign: 'right', lineHeight: 1.4,
          }}>
            Six categories.<br />Six beats per walkthrough.<br />
            Built for the desk, not the keynote.
          </div>
        </div>
      </div>

      {/* CATEGORY TABS */}
      <div style={{
        display: 'flex', gap: 0, padding: '0 80px',
        borderBottom: `1px solid ${UC.rule}`, background: UC.paperAlt,
      }}>
        {[['All', '47'], ...FG_CATS].map(([c, n], i) => (
          <div key={c} style={{
            padding: '16px 22px',
            borderRight: i < FG_CATS.length ? `1px solid ${UC.rule}` : 'none',
            borderBottom: i === 1 ? `2px solid ${UC.amber}` : '2px solid transparent',
            fontFamily: UC.sans, fontSize: 13,
            color: i === 1 ? UC.ink : UC.ink2,
            fontWeight: i === 1 ? 600 : 400,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {c}<span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.mute }}>{n}</span>
          </div>
        ))}
      </div>

      {/* FEATURED */}
      <div style={{ padding: '48px 80px 40px', borderBottom: `1px solid ${UC.rule}` }}>
        <Eye>FEATURED IN THIS CATEGORY</Eye>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, marginTop: 22 }}>
          <div>
            <ImgBox label="[ hero screenshot — long submission triage ]" h={300} accent />
          </div>
          <div>
            <Eye color={UC.amber}>SUBMISSIONS & TRIAGE · № 047</Eye>
            <div style={{
              fontFamily: UC.serif, fontSize: 40, lineHeight: 1.05,
              letterSpacing: -0.6, marginTop: 14,
            }}>
              Triaging a 60-page commercial property submission in under four minutes.
            </div>
            <Para lines={4} h={7} />
            <div style={{ display: 'flex', gap: 24, marginTop: 22 }}>
              <Eye>25.05.26</Eye>
              <Eye>8 MIN READ</Eye>
              <Eye color={UC.amber}>READ NOW →</Eye>
            </div>
          </div>
        </div>
      </div>

      {/* CHRONOLOGICAL TABLE */}
      <div style={{ padding: '40px 80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
          <Eye>ALL ENTRIES — NEWEST FIRST</Eye>
          <Eye>SORT · DATE ▾ ─── VIEW · LIST ▾</Eye>
        </div>
        <div style={{ borderTop: `1px solid ${UC.ink}` }}>
          {FG_ITEMS.map(([n, cat, t, date, mins]) => (
            <div key={n} style={{
              display: 'grid',
              gridTemplateColumns: '70px 200px 1fr 80px 60px 30px',
              padding: '22px 0', borderBottom: `1px solid ${UC.ruleSoft}`,
              alignItems: 'baseline', gap: 16,
            }}>
              <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>№ {n}</span>
              <Eye color={UC.amber}>{cat}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 20, lineHeight: 1.25 }}>{t}</div>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{date}</span>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{mins}</span>
              <span style={{ fontFamily: UC.mono, fontSize: 14 }}>→</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <Eye>LOAD 6 MORE ↓</Eye>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

Object.assign(window, { FieldGuideA, FieldGuideB });
