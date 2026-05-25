// About + Work With Me + Subscribe page variants

// ABOUT — A: Full-width hero photo + narrative below
//         B: Split photo / narrative side-by-side
function AboutA() {
  return (
    <Page>
      <Nav active="About" />
      <div style={{ padding: '56px 80px 24px' }}>
        <Eye>THE COWBOY</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 88,
          lineHeight: 0.96, letterSpacing: -1.6, margin: '14px 0 0',
        }}>
          The cowboy<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>behind the desk.</span>
        </h1>
      </div>
      <ImgBox label="[ full-width portrait — somewhere not an office: a verandah in Da Nang, a desert highway, anywhere ]"
        h={520} style={{ margin: '24px 0 0', border: 'none', borderTop: `1px solid ${UC.rule}`, borderBottom: `1px solid ${UC.rule}` }} accent />

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 280px', padding: '56px 80px' }}>
        <div>
          <Eye>THE STORY</Eye>
          <div style={{
            fontFamily: UC.serif, fontStyle: 'italic', fontSize: 16,
            color: UC.ink2, marginTop: 18, lineHeight: 1.5,
          }}>
            "Started writing this for myself.<br />Kept going because other people<br />kept asking for the prompts."
          </div>
        </div>
        <div style={{ padding: '0 56px' }}>
          <div style={{ fontFamily: UC.serif, fontSize: 28, lineHeight: 1.3, marginBottom: 24, letterSpacing: -0.3 }}>
            Fifteen years in APAC underwriting. Three years building the AI muscle. One year writing it all down — from wherever the wifi is.
          </div>
          <Para lines={5} h={9} />
          <div style={{ height: 18 }} />
          <Para lines={4} h={9} last={0.7} />
          <div style={{ height: 18 }} />
          <Para lines={6} h={9} />

          <Rule style={{ margin: '40px 0' }} />

          <Eye>WHAT I BELIEVE</Eye>
          <ul style={{ paddingLeft: 0, marginTop: 18, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'The underwriters who win the next decade aren\'t the ones who fear AI. They\'re the ones who out-prompt it.',
              'Submissions triage is where 80% of the value lives, and almost nobody is doing it well.',
              'A great prompt is not a clever sentence. It is a system.',
              'The desk teaches things the keynote can\'t.',
            ].map((b, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber }}>0{i + 1}</span>
                <span style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.4 }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ paddingLeft: 32, borderLeft: `1px solid ${UC.rule}` }}>
          <Eye>START WITH</Eye>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['№ 047', 'Triaging a 60-page submission in four minutes.'],
              ['№ 042', 'Drafting a board summary from twelve loss reports.'],
              ['№ 038', 'A short, polite "we need more info" template.'],
              ['№ 031', 'Comparing two manuscript wordings.'],
              ['№ 024', 'Pulling a cyber-risk profile from a 10-K.'],
            ].map(([n, t]) => (
              <div key={n}>
                <Eye color={UC.amber}>{n}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: 15, lineHeight: 1.35, marginTop: 4 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

function AboutB() {
  return (
    <Page>
      <Nav active="About" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', borderBottom: `1px solid ${UC.rule}`, minHeight: 720 }}>
        {/* PHOTO */}
        <div style={{ position: 'relative' }}>
          <ImgBox label="[ portrait — interesting place, not an office ]"
            h="100%" accent style={{ border: 'none', borderRight: `1px solid ${UC.rule}` }} />
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            background: UC.ink, color: UC.paper, padding: 18,
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          }}>
            <Eye color={UC.amberSoft}>NOW READING</Eye>
            <span style={{ fontFamily: UC.mono, fontSize: 11 }}>SINGAPORE → DA NANG</span>
          </div>
        </div>

        {/* NARRATIVE */}
        <div style={{ padding: '72px 80px 64px' }}>
          <Eye>THE COWBOY</Eye>
          <h1 style={{
            fontFamily: UC.serif, fontWeight: 400, fontSize: 64,
            lineHeight: 1.0, letterSpacing: -1.0, margin: '14px 0 32px',
          }}>
            Hi. I'm the one<br />writing all this.
          </h1>
          <div style={{
            fontFamily: UC.serif, fontSize: 22, lineHeight: 1.4,
            color: UC.ink, maxWidth: 540, marginBottom: 24,
          }}>
            Former head of underwriting for a large APAC carrier. Three years deep on AI. One year writing it all down. Currently slow-travelling with my fiancée and a laptop.
          </div>
          <Para lines={6} h={8} />

          <Rule style={{ margin: '32px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              ['15 YRS', 'Underwriting in APAC'],
              ['3 YRS',  'Building the AI muscle'],
              ['12 MO',  'Writing publicly'],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: UC.serif, fontSize: 36, lineHeight: 1, color: UC.amber }}>{n}</div>
                <Eye style={{ marginTop: 6 }}>{l}</Eye>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BELIEFS strip */}
      <div style={{ padding: '56px 80px', background: UC.paperAlt }}>
        <Eye>WHAT I BELIEVE</Eye>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32, marginTop: 24,
        }}>
          {[
            'The underwriters who win the next decade out-prompt AI, not fear it.',
            'Triage is where 80% of the value lives.',
            'A great prompt is a system, not a clever sentence.',
            'The desk teaches things the keynote can\'t.',
          ].map((b, i) => (
            <div key={i}>
              <Eye color={UC.amber}>0{i + 1}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.35, marginTop: 12 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>

      {/* START WITH */}
      <div style={{ padding: '56px 80px' }}>
        <Eye>NEW HERE? START WITH</Eye>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginTop: 22 }}>
          {[
            ['№ 047', 'Triaging a long submission.'],
            ['№ 042', 'Drafting a board summary.'],
            ['№ 038', 'The broker reply template.'],
            ['№ 031', 'Comparing two wordings.'],
            ['№ 024', 'Cyber risk from a 10-K.'],
          ].map(([n, t]) => (
            <div key={n} style={{ border: `1px solid ${UC.rule}`, padding: 16 }}>
              <Eye color={UC.amber}>{n}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 16, lineHeight: 1.35, marginTop: 10 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      <Foot />
    </Page>
  );
}

// WORK WITH ME — A: 4-card grid + contact form, B: List with single CTA
function WorkA() {
  const offers = [
    ['01', 'Advisory',  'InsurTech startups getting underwriting right.', 'Monthly retainer'],
    ['02', 'Speaking',  'Conferences, InsurTech events, corporate keynotes.', 'By engagement'],
    ['03', 'Workshops', 'AI for underwriting teams — in-person or virtual.',  'Half / full day'],
    ['04', 'Consulting','Retained or project-based engagements.',             'On request'],
  ];
  return (
    <Page>
      <Nav active="Work With Me" />
      <div style={{ padding: '64px 80px 32px' }}>
        <Eye>WORK WITH ME</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 76,
          lineHeight: 0.98, letterSpacing: -1.4, margin: '14px 0 16px',
        }}>
          Four ways to put<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>this to work.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5,
          color: UC.ink2, maxWidth: 700,
        }}>
          I work with a small number of teams and events each quarter. If something
          here lines up with what you need, start a conversation.
        </div>
      </div>

      <Rule />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', padding: '0 80px' }}>
        {offers.map(([n, name, body, terms], i) => (
          <div key={n} style={{
            padding: '40px 32px',
            borderRight: i % 2 === 0 ? `1px solid ${UC.rule}` : 'none',
            borderBottom: i < 2 ? `1px solid ${UC.rule}` : 'none',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Eye color={UC.amber}>§ {n}</Eye>
              <Eye>{terms.toUpperCase()}</Eye>
            </div>
            <div style={{
              fontFamily: UC.serif, fontSize: 36, marginTop: 14,
              letterSpacing: -0.4,
            }}>{name}</div>
            <div style={{
              fontFamily: UC.serif, fontSize: 18, lineHeight: 1.4,
              color: UC.ink2, marginTop: 10, marginBottom: 18,
            }}>{body}</div>
            <Para lines={3} h={7} />
            <Eye color={UC.amber} style={{ marginTop: 20 }}>LEARN MORE →</Eye>
          </div>
        ))}
      </div>

      {/* CONTACT FORM */}
      <div style={{
        background: UC.ink, color: UC.paper, padding: '56px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64,
      }}>
        <div>
          <Eye color={UC.amberSoft}>START A CONVERSATION</Eye>
          <div style={{
            fontFamily: UC.serif, fontSize: 44, lineHeight: 1.05,
            letterSpacing: -0.6, marginTop: 16,
          }}>
            Tell me what you're trying to do.
          </div>
          <div style={{
            fontFamily: UC.serif, fontSize: 17, lineHeight: 1.5,
            color: 'rgba(243,239,229,0.7)', marginTop: 20, maxWidth: 360,
          }}>
            No rates on the page — the right fee depends on the work. I'll come back within two business days.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            ['NAME', '40px'],
            ['EMAIL', '40px'],
            ['ORGANISATION', '40px'],
            ['WHAT YOU NEED', '120px'],
          ].map(([label, h]) => (
            <div key={label}>
              <Eye color="rgba(243,239,229,0.55)" style={{ marginBottom: 8 }}>{label}</Eye>
              <div style={{
                border: `1px solid rgba(243,239,229,0.3)`,
                height: h, fontFamily: UC.mono, fontSize: 12,
                padding: '12px 14px', color: 'rgba(243,239,229,0.4)',
              }}>
                {label === 'WHAT YOU NEED' ? 'A few sentences is fine.' : '...'}
              </div>
            </div>
          ))}
          <div style={{
            marginTop: 8, alignSelf: 'flex-start',
            padding: '14px 24px', background: UC.amber, color: UC.ink,
            fontFamily: UC.mono, fontSize: 12, letterSpacing: 1.4, textTransform: 'uppercase',
          }}>Send →</div>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

function WorkB() {
  const offers = [
    ['Advisory',  'InsurTech startups getting underwriting right. Monthly retainer.', '6 SLOTS / QTR'],
    ['Speaking',  'Conferences, InsurTech events, corporate keynotes.',                'BY ENGAGEMENT'],
    ['Workshops', 'AI for underwriting teams. In-person or virtual.',                  'HALF OR FULL DAY'],
    ['Consulting','Retained or project-based engagements.',                            'ON REQUEST'],
  ];
  return (
    <Page>
      <Nav active="Work With Me" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${UC.rule}` }}>
        <div style={{ padding: '72px 56px 56px 80px' }}>
          <Eye>WORK WITH ME</Eye>
          <h1 style={{
            fontFamily: UC.serif, fontWeight: 400, fontSize: 64,
            lineHeight: 0.98, letterSpacing: -1.0, margin: '14px 0 24px',
          }}>
            A small number of<br />
            engagements each quarter.
          </h1>
          <div style={{
            fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5, color: UC.ink2,
            maxWidth: 460,
          }}>
            I take on a handful of advisory, speaking, workshop and consulting projects
            at a time. If any of these resonate, start a conversation — no rates on
            the page, the right fee depends on the work.
          </div>
          <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '14px 22px', background: UC.ink, color: UC.paper,
            fontFamily: UC.mono, fontSize: 12, letterSpacing: 1.4, textTransform: 'uppercase' }}>
            Start a conversation →
          </div>
        </div>
        <div style={{ background: UC.paperAlt, padding: '72px 80px 56px 56px' }}>
          {offers.map(([name, body, terms], i) => (
            <div key={name} style={{
              padding: '24px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
              display: 'grid', gridTemplateColumns: '40px 1fr 120px', gap: 16, alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber }}>0{i + 1}</span>
              <div>
                <div style={{ fontFamily: UC.serif, fontSize: 28, lineHeight: 1.1 }}>{name}</div>
                <div style={{ fontFamily: UC.serif, fontSize: 16, color: UC.ink2, marginTop: 6, lineHeight: 1.4 }}>{body}</div>
              </div>
              <Eye>{terms}</Eye>
            </div>
          ))}
        </div>
      </div>

      {/* PROOF strip */}
      <div style={{ padding: '40px 80px', borderBottom: `1px solid ${UC.rule}` }}>
        <Eye>PREVIOUSLY WITH</Eye>
        <div style={{ display: 'flex', gap: 48, marginTop: 18, alignItems: 'center' }}>
          {['LARGE APAC INSURER', 'INSURTECH ACCELERATOR', 'LLOYD\'S COVERHOLDER', 'GLOBAL REINSURER', 'TECH CONFERENCE'].map((l, i) => (
            <span key={i} style={{
              fontFamily: UC.serif, fontStyle: 'italic', fontSize: 17, color: UC.mute,
              borderRight: i < 4 ? `1px solid ${UC.rule}` : 'none', paddingRight: 48,
            }}>{l.toLowerCase()}</span>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ padding: '56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <Eye color={UC.amber}>TELL ME WHAT YOU'RE TRYING TO DO</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 36, lineHeight: 1.1, marginTop: 12 }}>
              Two-day turnaround on any inbound.
            </div>
            <Para lines={3} h={7} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {['Name', 'Email', 'What you need (a paragraph is fine)'].map((l, i) => (
              <div key={l} style={{
                border: `1px solid ${UC.rule}`, padding: '14px 16px',
                height: i === 2 ? 120 : 44,
                fontFamily: UC.mono, fontSize: 12, color: UC.mute,
                background: UC.paper,
              }}>{l.toLowerCase()}…</div>
            ))}
            <div style={{ alignSelf: 'flex-start', padding: '14px 26px', background: UC.ink, color: UC.paper,
              fontFamily: UC.mono, fontSize: 12, letterSpacing: 1.4, textTransform: 'uppercase' }}>Send →</div>
          </div>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

// SUBSCRIBE — A: Sample issue preview prominent, B: Big single CTA + welcome path
function SubscribeA() {
  return (
    <Page>
      <Nav />
      <div style={{ padding: '64px 80px 32px' }}>
        <Eye>SUBSCRIBE</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 76,
          lineHeight: 0.98, letterSpacing: -1.4, margin: '14px 0 18px',
        }}>
          One email, every Friday.<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>No hype. Just signal.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5,
          color: UC.ink2, maxWidth: 680, marginTop: 8,
        }}>
          The Roundup + new walkthroughs the day they ship. Free. Unsubscribe in one click.
        </div>
      </div>

      <Rule />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', minHeight: 700 }}>
        {/* SIGN-UP */}
        <div style={{ padding: '56px 56px 56px 80px', borderRight: `1px solid ${UC.rule}` }}>
          <Eye>JOIN 2,431 READERS</Eye>
          <div style={{ marginTop: 22 }}>
            <EmailCapture wide />
          </div>

          <Rule style={{ margin: '40px 0 28px' }} />

          <Eye>WHAT YOU'LL GET</Eye>
          <ul style={{ marginTop: 18, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              ['EVERY FRIDAY', 'The Roundup — 5-7 stories with a 2-line take.'],
              ['AS THEY SHIP', 'New walkthroughs the moment they go live.'],
              ['MONTHLY',      'A deeper essay when one is worth writing.'],
              ['NEVER',        'A sales pitch. Promise.'],
            ].map(([when, what]) => (
              <li key={when} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'baseline' }}>
                <Eye color={UC.amber}>{when}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.35 }}>{what}</div>
              </li>
            ))}
          </ul>

          <Rule style={{ margin: '32px 0 24px' }} />

          <Eye>THE WELCOME SEQUENCE</Eye>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['DAY 1',  'The five walkthroughs every underwriter should read first.'],
              ['DAY 5',  'My story — how I ended up writing this from a verandah.'],
              ['DAY 14', 'A prompt that has saved me roughly two hours a week.'],
            ].map(([d, t]) => (
              <div key={d} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 12, alignItems: 'baseline' }}>
                <Eye>{d}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: 17, lineHeight: 1.3 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SAMPLE ISSUE */}
        <div style={{ padding: '56px 80px', background: UC.paperAlt }}>
          <Eye>SEE A SAMPLE ISSUE — № 012</Eye>
          <div style={{
            marginTop: 18, background: UC.paper, border: `1px solid ${UC.rule}`,
            padding: 28, fontFamily: UC.serif,
          }}>
            <Eye>UNDERWRITING COWBOY · ISSUE 012 · 11.05.26</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 28, lineHeight: 1.15, marginTop: 14, letterSpacing: -0.3 }}>
              Out-prompting the prompt engineer.
            </div>
            <Rule style={{ margin: '20px 0' }} />
            <Eye color={UC.amber}>THIS WEEK</Eye>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['01', 'Lloyd\'s pilots AI submission triage.'],
                ['02', 'Zurich hires first head of prompt engineering.'],
                ['03', 'EU AI Act\'s final draft, decoded.'],
                ['04', 'Anthropic ships file-search.'],
              ].map(([n, t]) => (
                <div key={n} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', gap: 10 }}>
                  <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>{n}</span>
                  <div>
                    <div style={{ fontFamily: UC.serif, fontSize: 17 }}>{t}</div>
                    <Para lines={2} h={5} />
                  </div>
                </div>
              ))}
            </div>
            <Rule style={{ margin: '20px 0' }} />
            <Eye color={UC.amber}>NEW WALKTHROUGH</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 19, marginTop: 10, lineHeight: 1.3 }}>
              Comparing two manuscript wordings, clause by clause, with one prompt.
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </Page>
  );
}

function SubscribeB() {
  return (
    <Page>
      <Nav />
      <div style={{
        background: UC.ink, color: UC.paper, padding: '96px 80px 80px',
        borderBottom: `1px solid ${UC.ink}`,
      }}>
        <Eye color={UC.amberSoft}>SUBSCRIBE — FREE — UNSUBSCRIBE ANYTIME</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 104,
          lineHeight: 0.94, letterSpacing: -2, margin: '20px 0 24px',
        }}>
          Friday mornings,<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>signal only.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: 22, lineHeight: 1.4,
          color: 'rgba(243,239,229,0.75)', maxWidth: 680,
        }}>
          The weekly digest. New walkthroughs the day they ship. The occasional
          long essay. Read by 2,431 underwriters.
        </div>
        <div style={{ marginTop: 40, maxWidth: 520 }}>
          <EmailCapture dark wide />
        </div>
        <Eye color="rgba(243,239,229,0.45)" style={{ marginTop: 20 }}>
          NO SPAM · NO TRACKING · NO SALES PITCH
        </Eye>
      </div>

      {/* WHAT'S IN IT */}
      <div style={{ padding: '64px 80px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, borderBottom: `1px solid ${UC.rule}` }}>
        {[
          ['THE ROUNDUP',     'Weekly', '5–7 stories with my 2-line take. Saves you an hour of scrolling.'],
          ['THE WALKTHROUGHS','As they ship', 'Real prompts, real outputs, real verdicts. Free to read.'],
          ['THE DEEP DIVES',  'Monthly-ish', 'Longer essays when something deserves one. Not on a schedule.'],
        ].map(([title, when, body]) => (
          <div key={title}>
            <Eye color={UC.amber}>{when.toUpperCase()}</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: 28, marginTop: 8, lineHeight: 1.1 }}>{title}</div>
            <div style={{ fontFamily: UC.serif, fontSize: 17, lineHeight: 1.5, color: UC.ink2, marginTop: 14 }}>{body}</div>
          </div>
        ))}
      </div>

      {/* WELCOME SEQUENCE TIMELINE */}
      <div style={{ padding: '56px 80px', borderBottom: `1px solid ${UC.rule}` }}>
        <Eye>THE WELCOME SEQUENCE — 3 EMAILS OVER 2 WEEKS</Eye>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {[
            ['DAY 1',  'The starter five.',            'The five walkthroughs every underwriter should read first.'],
            ['DAY 5',  'My story.',                    'How an APAC underwriting head ended up writing from a verandah.'],
            ['DAY 14', 'A prompt that earns its keep.', 'The submission-triage prompt. Two hours a week. Copy and use.'],
          ].map(([d, h, body], i) => (
            <div key={d} style={{
              padding: '0 32px 0 0',
              borderRight: i < 2 ? `1px solid ${UC.rule}` : 'none',
              paddingLeft: i > 0 ? 32 : 0,
              position: 'relative',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: UC.amber, color: UC.ink,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: UC.mono, fontSize: 10, marginBottom: 14,
              }}>{i + 1}</div>
              <Eye>{d}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 24, lineHeight: 1.15, marginTop: 8 }}>{h}</div>
              <div style={{ fontFamily: UC.serif, fontSize: 16, color: UC.ink2, marginTop: 10, lineHeight: 1.4 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA repeat */}
      <div style={{ padding: '56px 80px', textAlign: 'center' }}>
        <Eye color={UC.amber}>READY?</Eye>
        <div style={{
          fontFamily: UC.serif, fontSize: 44, lineHeight: 1.1,
          marginTop: 12, marginBottom: 28, letterSpacing: -0.5,
        }}>
          One email, every Friday. That's it.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EmailCapture wide />
        </div>
      </div>

      <Foot />
    </Page>
  );
}

Object.assign(window, { AboutA, AboutB, WorkA, WorkB, SubscribeA, SubscribeB });
