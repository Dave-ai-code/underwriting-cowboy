// Homepage variants — A: Editorial Swiss, B: Bloomberg terminal

const HOME_STATS = [
  {
    figure: '3 sec',
    vs:     '3 hours',
    label:  'TIME TO READ A 20-PAGE SUBMISSION',
    body:   'What AI reads in three seconds takes an underwriter three hours.',
  },
  {
    figure: '82%',
    vs:     'of the value',
    label:  'WHERE AI EARNS ITS KEEP TODAY',
    body:   'Sits inside submissions triage. The other 18% is keynote slides.',
  },
  {
    figure: '60+',
    vs:     'pages',
    label:  'AVERAGE COMMERCIAL PROPERTY SUBMISSION',
    body:   'And we still triage them on Friday afternoons. There is a better way.',
  },
  {
    figure: '2 hrs',
    vs:     'a week',
    label:  'WHAT A GOOD PROMPT BUYS YOU BACK',
    body:   'One prompt, tuned once, saves roughly two hours every week.',
  },
  {
    figure: '0',
    vs:     'underwriters',
    label:  'WILL BE REPLACED BY AI',
    body:   'But every underwriter will be replaced by one who uses it well.',
  },
];

function RotatingInsight() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % HOME_STATS.length), 4200);
    return () => clearInterval(t);
  }, []);
  const s = HOME_STATS[i];
  return (
    <div style={{
      border: `1px solid ${UC.rule}`, padding: 24, background: UC.paperAlt,
      display: 'flex', flexDirection: 'column', minHeight: 260,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Eye color={UC.amber}>INSIGHT · ROTATING</Eye>
        <div style={{ display: 'flex', gap: 6 }}>
          {HOME_STATS.map((_, j) => (
            <div key={j} style={{
              width: 18, height: 2,
              background: j === i ? UC.amber : UC.rule,
              transition: 'background .2s',
            }} />
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 14,
        marginTop: 22, lineHeight: 1,
      }}>
        <div style={{
          fontFamily: UC.serif, fontSize: 76, lineHeight: 0.9,
          letterSpacing: -2, color: UC.ink, fontWeight: 400,
        }}>{s.figure}</div>
        <div style={{
          fontFamily: UC.serif, fontSize: 22, fontStyle: 'italic',
          color: UC.mute,
        }}>vs. {s.vs}</div>
      </div>

      <Eye style={{ marginTop: 14 }}>{s.label}</Eye>

      <div style={{
        fontFamily: UC.serif, fontStyle: 'italic', fontSize: 18,
        lineHeight: 1.35, color: UC.ink, marginTop: 14,
      }}>{s.body}</div>

      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 18 }}>
        <Eye>0{i + 1} / 0{HOME_STATS.length}</Eye>
        <Eye>AUTO-ROTATES</Eye>
      </div>
    </div>
  );
}

function HomepageA() {
  return (
    <Page>
      <Nav />
      {/* HERO */}
      <div style={{ padding: '88px 80px 64px', borderBottom: `1px solid ${UC.rule}` }}>
        <Eye style={{ marginBottom: 28 }}>ISSUE Nº 014 — MAY 2026</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 92,
          lineHeight: 0.98, letterSpacing: -1.8, margin: 0,
          maxWidth: 1000,
        }}>
          AI in Insurance Underwriting.<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>No hype.</span> Just signal.
        </h1>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80,
          marginTop: 44, alignItems: 'end',
        }}>
          <div>
            <div style={{
              fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5,
              color: UC.ink2, maxWidth: 560,
            }}>
              A field guide for working underwriters — written by one. Real prompts,
              real walkthroughs, real verdicts. From the desk of a former APAC
              underwriting head turned full-time AI obsessive.
            </div>
            <div style={{ marginTop: 28 }}>
              <Eye style={{ marginBottom: 10 }}>JOIN 2,400+ UNDERWRITERS — FREE WEEKLY</Eye>
              <EmailCapture wide />
            </div>
          </div>
          <div style={{
            border: `1px solid ${UC.rule}`, padding: 0, background: UC.paperAlt,
          }}>
            <RotatingInsight />
          </div>
        </div>
      </div>

      {/* LATEST WALKTHROUGHS */}
      <div style={{ padding: '64px 80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
          <div>
            <Eye>THE FIELD GUIDE</Eye>
            <h2 style={{
              fontFamily: UC.serif, fontWeight: 400, fontSize: 38,
              margin: '6px 0 0', letterSpacing: -0.5,
            }}>Latest walkthroughs.</h2>
          </div>
          <Eye>VIEW ALL 47 →</Eye>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <WalkCard num="047" cat="SUBMISSIONS & TRIAGE"
            title="Triaging a 60-page commercial property submission in under 4 minutes." />
          <WalkCard num="046" cat="POLICY & WORDING"
            title="Comparing two manuscript wordings clause by clause with one prompt." />
          <WalkCard num="045" cat="RISK ASSESSMENT"
            title="Pulling a usable cyber-risk profile from a public 10-K filing." />
        </div>
      </div>

      <Rule />

      {/* ABOUT + ROUNDUP TEASER */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0 }}>
        <div style={{ padding: '56px 80px 56px 80px', borderRight: `1px solid ${UC.rule}` }}>
          <Eye>WHO'S BEHIND THIS</Eye>
          <div style={{ display: 'flex', gap: 28, marginTop: 22 }}>
            <ImgBox label="[ portrait ]" w={140} h={180} accent />
            <div>
              <div style={{
                fontFamily: UC.serif, fontSize: 26, lineHeight: 1.2,
                letterSpacing: -0.3, marginBottom: 14,
              }}>
                Fifteen years underwriting in APAC. Now writing from wherever the wifi is.
              </div>
              <Para lines={4} h={6} />
              <Eye style={{ marginTop: 18, color: UC.amber }}>READ MY STORY →</Eye>
            </div>
          </div>
        </div>
        <div style={{ padding: '56px 80px', background: UC.paperAlt }}>
          <Eye>THE ROUNDUP — THIS WEEK</Eye>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['LLOYDS', 'Lloyd\'s pilots AI submission triage across three syndicates.'],
              ['ZURICH', 'Zurich quietly hires its first "head of prompt engineering".'],
              ['REGULATION', 'EU AI Act: what the final draft means for life underwriters.'],
              ['TOOLS', 'Anthropic ships file-search. Here\'s the underwriter use case.'],
            ].map(([tag, line]) => (
              <div key={tag} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'baseline' }}>
                <Eye color={UC.amber}>{tag}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: 17, lineHeight: 1.35 }}>{line}</div>
              </div>
            ))}
          </div>
          <Eye style={{ marginTop: 22 }}>OPEN THE ROUNDUP →</Eye>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

function HomepageB() {
  return (
    <Page>
      <Ticker items={[
        'WK 21 · ISSUE 014 SHIPS FRIDAY',
        '47 WALKTHROUGHS LIVE',
        '2,431 SUBSCRIBERS',
        'NEW: PROMPT LIBRARY V2',
        'NOW READING — SINGAPORE',
      ]} />
      <Nav />
      {/* HERO grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2.4fr 1fr',
        borderBottom: `1px solid ${UC.rule}`,
      }}>
        <div style={{ padding: '64px 56px 56px 80px' }}>
          <Eye style={{ marginBottom: 22 }}>UC/HOME ─── INDEX 00 ─── 25.05.26</Eye>
          <h1 style={{
            fontFamily: UC.serif, fontWeight: 400, fontSize: 78,
            lineHeight: 1.0, letterSpacing: -1.4, margin: 0,
          }}>
            AI in insurance<br />
            underwriting. <span style={{ color: UC.amber, fontStyle: 'italic' }}>No&nbsp;hype.</span><br />
            Just signal.
          </h1>
          <div style={{
            fontFamily: UC.serif, fontSize: 18, lineHeight: 1.5,
            color: UC.ink2, marginTop: 28, maxWidth: 620,
          }}>
            Practitioner-led intelligence for underwriters using AI. Walkthroughs,
            verdicts and weekly signal — written by someone who has actually done the job.
          </div>
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 20 }}>
            <EmailCapture />
            <Eye>FREE · WEEKLY · UNSUBSCRIBE ANYTIME</Eye>
          </div>
        </div>
        <div style={{
          padding: '40px 40px', background: UC.ink, color: UC.paper,
          display: 'flex', flexDirection: 'column', gap: 24,
        }}>
          <Eye color={UC.amberSoft}>BY THE NUMBERS</Eye>
          {[
            ['047', 'WALKTHROUGHS PUBLISHED'],
            ['2,431', 'SUBSCRIBERS'],
            ['14', 'WEEKLY ISSUES'],
            ['06', 'CATEGORIES'],
          ].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: UC.serif, fontSize: 56, lineHeight: 1, fontWeight: 400 }}>{n}</div>
              <Eye color="rgba(243,239,229,0.55)" style={{ marginTop: 6 }}>{l}</Eye>
            </div>
          ))}
          <Rule color="rgba(243,239,229,0.15)" style={{ marginTop: 4 }} />
          <Eye color={UC.amberSoft}>LATEST ISSUE</Eye>
          <div style={{ fontFamily: UC.serif, fontSize: 18, lineHeight: 1.3 }}>
            "What happens when claims data meets a long-context model."
          </div>
        </div>
      </div>

      {/* INDEX TABLE — Bloomberg style */}
      <div style={{ padding: '48px 80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
          <Eye>LATEST DROPS — FIELD GUIDE</Eye>
          <Eye>SORTED BY DATE ▾</Eye>
        </div>
        <div style={{ borderTop: `1px solid ${UC.ink}` }}>
          {[
            ['047', 'SUBMISSIONS & TRIAGE', 'Triaging a 60-page commercial property submission.', '25.05', '8M'],
            ['046', 'POLICY & WORDING',     'Comparing two manuscript wordings, clause by clause.',  '18.05', '11M'],
            ['045', 'RISK ASSESSMENT',      'Pulling a cyber-risk profile from a 10-K.',             '11.05', '6M'],
            ['044', 'BROKER COMMS',         'A short, polite "we need more information" template.',  '04.05', '4M'],
            ['043', 'PRICING & EXPOSURE',   'Sense-checking a binder schedule with one prompt.',     '27.04', '9M'],
          ].map(([n, cat, t, date, mins], i) => (
            <div key={n} style={{
              display: 'grid',
              gridTemplateColumns: '60px 200px 1fr 80px 60px 30px',
              padding: '16px 0', borderBottom: `1px solid ${UC.ruleSoft}`,
              alignItems: 'baseline', gap: 16,
            }}>
              <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>№ {n}</span>
              <Eye color={UC.amber}>{cat}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 18 }}>{t}</div>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{date}</span>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{mins}</span>
              <span style={{ fontFamily: UC.mono, fontSize: 14, color: UC.ink }}>→</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3-COL panels */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: `1px solid ${UC.rule}`,
      }}>
        {[
          { eye: 'INSIGHT · ROTATING', body: '"82% of the value of AI in underwriting today is sitting in submissions triage. The other 18% is hype."', cite: '— UC ISSUE 012' },
          { eye: 'THE COWBOY',         body: 'Fifteen years underwriting across APAC. Now writing from wherever the wifi is — and obsessed with what AI changes for the desk.', cite: 'READ THE STORY →' },
          { eye: 'IN THE ROUNDUP',     body: 'Lloyd\'s pilots triage. Zurich hires its first head of prompt engineering. The EU AI Act\'s final draft, decoded for life underwriters.', cite: 'OPEN ROUNDUP →' },
        ].map((p, i) => (
          <div key={i} style={{
            padding: '40px 40px 40px',
            borderRight: i < 2 ? `1px solid ${UC.rule}` : 'none',
            background: i === 1 ? UC.paperAlt : UC.paper,
          }}>
            <Eye>{p.eye}</Eye>
            <div style={{
              fontFamily: UC.serif, fontSize: 20, lineHeight: 1.35,
              marginTop: 18, fontStyle: i === 0 ? 'italic' : 'normal',
            }}>{p.body}</div>
            <Eye color={UC.amber} style={{ marginTop: 22 }}>{p.cite}</Eye>
          </div>
        ))}
      </div>

      <Foot />
    </Page>
  );
}

Object.assign(window, { HomepageA, HomepageB });
