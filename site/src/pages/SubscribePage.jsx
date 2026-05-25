import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, EmailCapture, SEO } from '../components';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { roundups } from '../data/roundups';

export default function SubscribePage() {
  const sample              = roundups.find(r => r.type === 'weekly');
  const latestDeep          = roundups.find(r => r.type === 'deep-dive');
  const { isMobile, isTablet } = useBreakpoint();
  const hPad                = isMobile ? '20px' : '80px';

  return (
    <Page>
      <SEO
        title="Subscribe to Underwriting Cowboy | Free Weekly Newsletter"
        description="The weekly AI in insurance digest. Five to seven stories with a two-line take, every Friday. Free. Read by 2,400+ working underwriters."
        path="/subscribe"
      />
      <Nav />

      {/* DARK HERO */}
      <div style={{
        background: UC.ink, color: UC.paper,
        padding: `${isMobile ? 56 : 96}px ${hPad} ${isMobile ? 48 : 80}px`,
        borderBottom: `1px solid ${UC.ink}`,
      }}>
        <Eye color={UC.amberSoft}>SUBSCRIBE — FREE — UNSUBSCRIBE ANYTIME</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400,
          fontSize: isMobile ? 52 : isTablet ? 76 : 104,
          lineHeight: 0.94, letterSpacing: isMobile ? -1.2 : -2,
          margin: '20px 0 22px',
        }}>
          Friday mornings,<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>signal only.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: isMobile ? 17 : 22,
          lineHeight: 1.4, color: 'rgba(243,239,229,0.75)',
        }}>
          The weekly digest. New walkthroughs the day they ship. The occasional
          long essay. Read by 2,431+ underwriters.
        </div>
        <div style={{ marginTop: 32, maxWidth: 520 }}>
          <EmailCapture dark wide source="subscribe-page" />
        </div>
        <Eye color="rgba(243,239,229,0.45)" style={{ marginTop: 18 }}>
          NO SPAM · NO TRACKING · NO SALES PITCH
        </Eye>
      </div>

      {/* WHAT'S IN IT */}
      <div style={{
        padding: `${isMobile ? 40 : 64}px ${hPad}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? 28 : 40,
        borderBottom: `1px solid ${UC.rule}`,
      }}>
        {[
          ['THE ROUNDUP',      'Weekly',       '5–7 stories with my 2-line take. Saves you an hour of scrolling.'],
          ['THE WALKTHROUGHS', 'As they ship', 'Real prompts, real outputs, real verdicts. Free to read.'],
          ['THE DEEP DIVES',   'Monthly-ish',  'Longer essays when something deserves one. Not on a schedule.'],
        ].map(([title, when, body]) => (
          <div key={title} style={isMobile ? { paddingBottom: 24, borderBottom: `1px solid ${UC.ruleSoft}` } : {}}>
            <Eye color={UC.amber}>{when.toUpperCase()}</Eye>
            <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 22 : 28, marginTop: 8, lineHeight: 1.1 }}>{title}</div>
            <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 15 : 17, lineHeight: 1.5, color: UC.ink2, marginTop: 12 }}>
              {body}
            </div>
          </div>
        ))}
      </div>

      {/* WELCOME SEQUENCE */}
      <div style={{ padding: `${isMobile ? 40 : 56}px ${hPad}`, borderBottom: `1px solid ${UC.rule}` }}>
        <Eye>THE WELCOME SEQUENCE — 3 EMAILS OVER 2 WEEKS</Eye>
        <div style={{
          marginTop: 28,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 28 : 0,
        }}>
          {[
            ['DAY 1',  'The starter five.',             'The five walkthroughs every underwriter should read first.'],
            ['DAY 5',  'My story.',                     'How an APAC underwriting head ended up writing from a verandah.'],
            ['DAY 14', 'A prompt that earns its keep.', 'The submission-triage prompt. Two hours a week. Copy and use.'],
          ].map(([d, h, body], i) => (
            <div
              key={d}
              style={{
                padding: isMobile ? 0 : `0 ${i > 0 ? 32 : 0}px`,
                borderRight: !isMobile && i < 2 ? `1px solid ${UC.rule}` : 'none',
                borderBottom: isMobile && i < 2 ? `1px solid ${UC.ruleSoft}` : 'none',
                paddingBottom: isMobile && i < 2 ? 28 : 0,
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: UC.amber, color: UC.ink,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: UC.mono, fontSize: 10, marginBottom: 14,
              }}>
                {i + 1}
              </div>
              <Eye>{d}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 20 : 24, lineHeight: 1.15, marginTop: 8 }}>{h}</div>
              <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 15 : 16, color: UC.ink2, marginTop: 10, lineHeight: 1.4 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAMPLE ISSUE PREVIEW */}
      {sample && (
        <div style={{ padding: `${isMobile ? 40 : 56}px ${hPad}`, borderBottom: `1px solid ${UC.rule}` }}>
          <Eye>SEE A SAMPLE ISSUE — № {sample.num}</Eye>
          <div style={{
            marginTop: 18,
            background: UC.paperAlt, border: `1px solid ${UC.rule}`,
            padding: isMobile ? 20 : 28, fontFamily: UC.serif,
          }}>
            <Eye>UNDERWRITING COWBOY · ISSUE {sample.num} · {sample.date}</Eye>
            <div style={{
              fontFamily: UC.serif,
              fontSize: isMobile ? 22 : 28,
              lineHeight: 1.15, marginTop: 14, letterSpacing: -0.3,
            }}>
              {sample.title}
            </div>
            <Rule style={{ margin: '18px 0' }} />
            <Eye color={UC.amber}>THIS WEEK</Eye>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {sample.items.slice(0, 4).map((item, n) => (
                <div key={item.tag} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 10 }}>
                  <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>0{n + 1}</span>
                  <div>
                    <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 15 : 17 }}>{item.headline}</div>
                    <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 13 : 14, color: UC.ink2, marginTop: 6, lineHeight: 1.4 }}>
                      {item.take.slice(0, 120)}{item.take.length > 120 ? '…' : ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {latestDeep && (
              <>
                <Rule style={{ margin: '18px 0' }} />
                <Eye color={UC.amber}>LATEST DEEP DIVE</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 17 : 19, marginTop: 10, lineHeight: 1.3 }}>
                  {latestDeep.title}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA REPEAT */}
      <div style={{ padding: `${isMobile ? 40 : 56}px ${hPad}`, textAlign: 'center' }}>
        <Eye color={UC.amber}>READY?</Eye>
        <div style={{
          fontFamily: UC.serif,
          fontSize: isMobile ? 32 : 44,
          lineHeight: 1.1, marginTop: 12, marginBottom: 28, letterSpacing: -0.5,
        }}>
          One email, every Friday. That's it.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EmailCapture wide source="subscribe-page-bottom" />
        </div>
      </div>

      <Foot />
    </Page>
  );
}
