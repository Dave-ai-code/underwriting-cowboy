// Walkthrough variants — long-scroll with sticky TOC
// A: TOC sticky left rail
// B: TOC sticky right rail + progress bar

const WT_SECTIONS = [
  ['01', 'The Problem',     'What the underwriter is trying to solve.'],
  ['02', 'The Setup',       'Tool, data, context.'],
  ['03', 'The Walkthrough', 'Step by step with screenshots.'],
  ['04', 'The Output',      'Exactly what came back.'],
  ['05', 'The Verdict',     'What worked, what didn\'t, how to fix it.'],
  ['06', 'Steal This',      'The exact prompt, ready to copy.'],
];

function WTHeader() {
  return (
    <div style={{ padding: '64px 80px 40px', borderBottom: `1px solid ${UC.rule}` }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 22 }}>
        <Eye>← THE FIELD GUIDE</Eye>
        <Eye>/</Eye>
        <Eye color={UC.amber}>SUBMISSIONS & TRIAGE</Eye>
        <Eye>/</Eye>
        <Eye>№ 047</Eye>
      </div>
      <h1 style={{
        fontFamily: UC.serif, fontWeight: 400, fontSize: 64,
        lineHeight: 1.0, letterSpacing: -1.0, margin: 0,
        maxWidth: 1000,
      }}>
        Triaging a 60-page commercial property submission in under four minutes.
      </h1>
      <div style={{
        fontFamily: UC.serif, fontStyle: 'italic', fontSize: 21,
        color: UC.ink2, lineHeight: 1.4, maxWidth: 760, marginTop: 22,
      }}>
        Tested on a real-world submission. No PII, no shortcuts, no theatre —
        just the prompt, the output, and the verdict.
      </div>
      <div style={{ display: 'flex', gap: 28, marginTop: 28, alignItems: 'center' }}>
        <Eye>PUBLISHED 25.05.26</Eye>
        <Eye>8 MIN READ</Eye>
        <Eye>TOOL · CLAUDE SONNET 4.5</Eye>
        <Eye color={UC.amber}>FREE</Eye>
      </div>
    </div>
  );
}

// reusable body block — Eye + heading + paragraphs + image
function WTSection({ num, name, body, img, last, narrow }) {
  return (
    <section id={`s-${num}`} style={{ padding: '56px 0' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
        <div style={{
          fontFamily: UC.mono, fontSize: 12, color: UC.amber, letterSpacing: 1.4,
        }}>§ {num}</div>
        <Eye>{name.toUpperCase()}</Eye>
      </div>
      <h2 style={{
        fontFamily: UC.serif, fontWeight: 400, fontSize: 36,
        lineHeight: 1.1, letterSpacing: -0.4, margin: '12px 0 22px',
        maxWidth: narrow ? 620 : 760,
      }}>
        {body.h}
      </h2>
      <div style={{
        fontFamily: UC.serif, fontSize: 18, lineHeight: 1.6,
        color: UC.ink2, maxWidth: narrow ? 620 : 720,
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <Para lines={5} h={8} />
        <Para lines={4} h={8} last={0.7} />
      </div>
      {img && (
        <div style={{ marginTop: 28 }}>
          <ImgBox label={img} h={300} accent />
          <Eye style={{ marginTop: 10 }}>FIG. {num} — {img.replace(/[\[\] ]/g, '').toUpperCase()}</Eye>
        </div>
      )}
      {!last && <Rule style={{ marginTop: 56 }} />}
    </section>
  );
}

function WTStealBox() {
  return (
    <div style={{
      background: UC.ink, color: UC.paper, padding: 28, marginTop: 28,
      border: `1px solid ${UC.ink}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <Eye color={UC.amberSoft}>STEAL THIS — READY TO COPY</Eye>
        <Eye color="rgba(243,239,229,0.55)">COPY ⧉</Eye>
      </div>
      <div style={{ fontFamily: UC.mono, fontSize: 13, lineHeight: 1.7, color: '#e8e2cf' }}>
        You are an experienced commercial property underwriter. I will paste a<br />
        submission below. Produce a triage memo with: (1) risk class, (2) red<br />
        flags, (3) missing information, (4) suggested next questions for the<br />
        broker. Be terse. Use bullets. No preamble. No filler.<br />
        <span style={{ color: UC.amberSoft }}>{'<<SUBMISSION>>'}</span>
      </div>
    </div>
  );
}

function WalkthroughA() {
  return (
    <Page>
      <Nav active="Field Guide" />
      <WTHeader />
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 200px', padding: '0 80px' }}>
        {/* TOC */}
        <div style={{ paddingTop: 56, paddingRight: 32 }}>
          <div style={{ position: 'sticky', top: 24 }}>
            <Eye>ON THIS PAGE</Eye>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {WT_SECTIONS.map(([n, title], i) => (
                <div key={n} style={{
                  display: 'grid', gridTemplateColumns: '28px 1fr', alignItems: 'baseline',
                  padding: '8px 0',
                  borderLeft: i === 0 ? `2px solid ${UC.amber}` : `2px solid transparent`,
                  paddingLeft: 10,
                }}>
                  <span style={{
                    fontFamily: UC.mono, fontSize: 10, color: i === 0 ? UC.amber : UC.mute,
                  }}>§{n}</span>
                  <span style={{
                    fontFamily: UC.sans, fontSize: 13,
                    color: i === 0 ? UC.ink : UC.ink2,
                    fontWeight: i === 0 ? 500 : 400,
                  }}>{title}</span>
                </div>
              ))}
            </div>

            <Rule style={{ margin: '24px 0' }} />
            <Eye>SHARE</Eye>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Copy link', 'LinkedIn', 'Email'].map(s => (
                <span key={s} style={{ fontFamily: UC.sans, fontSize: 12, color: UC.ink2 }}>{s} →</span>
              ))}
            </div>
          </div>
        </div>

        {/* BODY */}
        <div style={{ borderLeft: `1px solid ${UC.rule}`, borderRight: `1px solid ${UC.rule}`, padding: '0 48px' }}>
          <WTSection num="01" name="The Problem" narrow body={{ h: 'A submission lands at 4:47pm on a Friday. It is 62 pages. You have eleven other open files.' }} />
          <WTSection num="02" name="The Setup" narrow img="[ screenshot — uploading the PDF ]"
            body={{ h: 'Claude Sonnet 4.5, file upload, and a prompt that does most of the work upfront.' }} />
          <WTSection num="03" name="The Walkthrough" narrow img="[ screenshot — first response, scrolled ]"
            body={{ h: 'Three turns. The first is the prompt below. The next two are tightening — nothing fancy.' }} />
          <WTSection num="04" name="The Output" narrow last
            body={{ h: 'A four-bullet triage memo. Three of the four bullets are usable verbatim. One needs a human eye.' }} />
          <div style={{ paddingBottom: 56 }}>
            <WTStealBox />
          </div>
        </div>

        {/* meta rail */}
        <div style={{ paddingTop: 56, paddingLeft: 32 }}>
          <div style={{ position: 'sticky', top: 24 }}>
            <Eye>BY</Eye>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <ImgBox label="" w={40} h={40} accent />
              <div>
                <div style={{ fontFamily: UC.sans, fontSize: 13, fontWeight: 500 }}>The Cowboy</div>
                <Eye>FORMER APAC UW HEAD</Eye>
              </div>
            </div>
            <Rule style={{ margin: '24px 0' }} />
            <Eye>YOU MIGHT ALSO LIKE</Eye>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Comparing two manuscript wordings.', 'Drafting a board summary from twelve quarterly reports.'].map((t, i) => (
                <div key={i}>
                  <Eye color={UC.amber}>№ 04{6 - i}</Eye>
                  <div style={{ fontFamily: UC.serif, fontSize: 14, marginTop: 4, lineHeight: 1.35 }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </Page>
  );
}

function WalkthroughB() {
  return (
    <Page>
      <Nav active="Field Guide" />
      <WTHeader />

      {/* PROGRESS BAR */}
      <div style={{
        display: 'flex', padding: '14px 80px', background: UC.paperAlt,
        borderBottom: `1px solid ${UC.rule}`, gap: 0, alignItems: 'center',
      }}>
        <Eye style={{ marginRight: 20 }}>READING PROGRESS</Eye>
        {WT_SECTIONS.map(([n, title], i) => (
          <React.Fragment key={n}>
            <div style={{
              flex: 1, height: 4,
              background: i < 2 ? UC.amber : UC.rule,
            }} />
            {i < WT_SECTIONS.length - 1 && (
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: i < 1 ? UC.amber : UC.paper,
                border: `1.5px solid ${i < 1 ? UC.amber : UC.rule}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: UC.mono, fontSize: 10,
                color: i < 1 ? UC.paper : UC.mute,
              }}>{n}</div>
            )}
          </React.Fragment>
        ))}
        <Eye style={{ marginLeft: 20 }}>02 / 06</Eye>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', padding: '0 80px' }}>
        {/* BODY (wider) */}
        <div style={{ paddingRight: 56 }}>
          <WTSection num="01" name="The Problem"
            body={{ h: 'A submission lands at 4:47pm on a Friday. It is 62 pages. You have eleven other open files.' }} />
          <WTSection num="02" name="The Setup" img="[ screenshot — uploading the PDF ]"
            body={{ h: 'Claude Sonnet 4.5, file upload, and a prompt that does most of the work upfront.' }} />
          <WTSection num="03" name="The Walkthrough" img="[ screenshot — Claude\'s first response, scrolled ]"
            body={{ h: 'Three turns. The first is the prompt below. The next two are tightening — nothing fancy.' }} />
          <div style={{ paddingBottom: 56 }}>
            <WTStealBox />
          </div>
        </div>

        {/* TOC right rail */}
        <div style={{ paddingTop: 56, borderLeft: `1px solid ${UC.rule}`, paddingLeft: 32 }}>
          <div style={{ position: 'sticky', top: 24 }}>
            <Eye>ON THIS PAGE</Eye>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
              {WT_SECTIONS.map(([n, title, sub], i) => (
                <div key={n} style={{
                  padding: '14px 0', borderBottom: i < WT_SECTIONS.length - 1 ? `1px solid ${UC.ruleSoft}` : 'none',
                  display: 'grid', gridTemplateColumns: '32px 1fr 14px', alignItems: 'baseline', gap: 8,
                }}>
                  <span style={{
                    fontFamily: UC.mono, fontSize: 11,
                    color: i === 1 ? UC.amber : UC.mute,
                  }}>§{n}</span>
                  <div>
                    <div style={{
                      fontFamily: UC.sans, fontSize: 14,
                      color: i === 1 ? UC.ink : UC.ink2,
                      fontWeight: i === 1 ? 600 : 400,
                    }}>{title}</div>
                    <div style={{ fontFamily: UC.sans, fontSize: 11, color: UC.mute, marginTop: 4, lineHeight: 1.4 }}>{sub}</div>
                  </div>
                  <span style={{
                    fontFamily: UC.mono, fontSize: 10, color: UC.mute,
                  }}>{i < 2 ? '✓' : '·'}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 28, padding: 16, background: UC.ink, color: UC.paper,
            }}>
              <Eye color={UC.amberSoft}>WEEKLY SIGNAL</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 16, lineHeight: 1.3, marginTop: 10 }}>
                Get new walkthroughs the day they ship.
              </div>
              <div style={{
                marginTop: 14, padding: 10, border: `1px solid rgba(243,239,229,0.4)`,
                fontFamily: UC.mono, fontSize: 11, color: 'rgba(243,239,229,0.65)',
              }}>your@inbox.com →</div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </Page>
  );
}

Object.assign(window, { WalkthroughA, WalkthroughB });
