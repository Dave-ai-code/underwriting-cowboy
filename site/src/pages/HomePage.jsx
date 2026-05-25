import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, WalkCard, EmailCapture, Eye, Rule, ImgBox, Para, SEO } from '../components';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { walkthroughs } from '../data/walkthroughs';
import { roundups } from '../data/roundups';
import { HOME_STATS } from '../data/homeStats';

function RotatingInsight() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % HOME_STATS.length), 4200);
    return () => clearInterval(t);
  }, []);
  const s = HOME_STATS[i];
  return (
    <div style={{
      border: `1px solid ${UC.rule}`, padding: 24, background: UC.paperAlt,
      display: 'flex', flexDirection: 'column', minHeight: 220,
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
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 22, lineHeight: 1 }}>
        <div style={{
          fontFamily: UC.serif, fontSize: 64, lineHeight: 0.9,
          letterSpacing: -2, color: UC.ink, fontWeight: 400,
        }}>{s.figure}</div>
        <div style={{ fontFamily: UC.serif, fontSize: 20, fontStyle: 'italic', color: UC.mute }}>
          vs. {s.vs}
        </div>
      </div>
      <Eye style={{ marginTop: 14 }}>{s.label}</Eye>
      <div style={{
        fontFamily: UC.serif, fontStyle: 'italic', fontSize: 17,
        lineHeight: 1.35, color: UC.ink, marginTop: 14,
      }}>{s.body}</div>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 18 }}>
        <Eye>0{i + 1} / 0{HOME_STATS.length}</Eye>
        <Eye>AUTO-ROTATES</Eye>
      </div>
    </div>
  );
}

export default function HomePage() {
  const navigate            = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();
  const latestWalkthroughs  = walkthroughs.slice(0, 3);
  const latestWeekly        = roundups.find(r => r.type === 'weekly');
  const latestItems         = latestWeekly?.items?.slice(0, 4) || [];
  const totalWalkthroughs   = walkthroughs.length;
  const issueNum            = roundups[0]?.num || '014';
  const issueDate           = 'MAY 2026';
  const hPad                = isMobile ? '20px' : '80px';

  return (
    <Page>
      <SEO
        title="UnderwritingCowboy | AI in Insurance Underwriting"
        description="A field guide for working underwriters — real AI prompts, real walkthroughs, real verdicts. From a former APAC underwriting head turned full-time AI obsessive."
        path="/"
      />
      <Nav />

      {/* HERO */}
      <div style={{ padding: `${isMobile ? 48 : 88}px ${hPad} ${isMobile ? 40 : 64}px`, borderBottom: `1px solid ${UC.rule}` }}>
        <Eye style={{ marginBottom: 20 }}>ISSUE Nº {issueNum} — {issueDate}</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400,
          fontSize: isMobile ? 42 : isTablet ? 68 : 92,
          lineHeight: 0.98, letterSpacing: isMobile ? -1 : -1.8,
          margin: 0, maxWidth: 1000,
        }}>
          AI in Insurance Underwriting.<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>No hype.</span> Just signal.
        </h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
          gap: isMobile ? 32 : 80,
          marginTop: isMobile ? 28 : 44,
          alignItems: 'end',
        }}>
          <div>
            <div style={{
              fontFamily: UC.serif, fontSize: isMobile ? 17 : 19,
              lineHeight: 1.5, color: UC.ink2,
            }}>
              A field guide for working underwriters — written by one. Real prompts,
              real walkthroughs, real verdicts. From the desk of a former APAC
              underwriting head turned full-time AI obsessive.
            </div>
            <div style={{ marginTop: 24 }}>
              <Eye style={{ marginBottom: 10 }}>JOIN 2,400+ UNDERWRITERS — FREE WEEKLY</Eye>
              <EmailCapture wide source="homepage" />
            </div>
          </div>
          <div style={{ border: `1px solid ${UC.rule}`, background: UC.paperAlt }}>
            <RotatingInsight />
          </div>
        </div>
      </div>

      {/* LATEST WALKTHROUGHS */}
      <div style={{ padding: `${isMobile ? 40 : 64}px ${hPad} ${isMobile ? 40 : 56}px` }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'baseline', marginBottom: 28,
        }}>
          <div>
            <Eye>THE FIELD GUIDE</Eye>
            <h2 style={{
              fontFamily: UC.serif, fontWeight: 400,
              fontSize: isMobile ? 28 : 38,
              margin: '6px 0 0', letterSpacing: -0.5,
            }}>Latest walkthroughs.</h2>
          </div>
          <span
            onClick={() => navigate('/field-guide')}
            style={{ fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4, textTransform: 'uppercase', color: UC.mute, cursor: 'pointer', whiteSpace: 'nowrap', marginLeft: 16 }}
          >
            VIEW ALL {totalWalkthroughs} →
          </span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {latestWalkthroughs.map(w => (
            <WalkCard
              key={w.num}
              num={w.num}
              cat={w.category}
              title={w.title}
              readTime={w.readTime}
              excerpt={w.excerpt}
              to={`/field-guide/${w.slug}`}
            />
          ))}
        </div>
      </div>

      <Rule />

      {/* ABOUT + ROUNDUP TEASER */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
      }}>
        <div style={{
          padding: `${isMobile ? 40 : 56}px ${hPad}`,
          borderRight: isMobile ? 'none' : `1px solid ${UC.rule}`,
          borderBottom: isMobile ? `1px solid ${UC.rule}` : 'none',
        }}>
          <Eye>WHO'S BEHIND THIS</Eye>
          <div style={{ display: 'flex', gap: 24, marginTop: 20 }}>
            <ImgBox label="[ portrait ]" w={120} h={150} accent />
            <div>
              <div style={{
                fontFamily: UC.serif, fontSize: isMobile ? 20 : 26,
                lineHeight: 1.2, letterSpacing: -0.3, marginBottom: 14,
              }}>
                Fifteen years underwriting in APAC. Now writing from wherever the wifi is.
              </div>
              <Para lines={3} h={6} />
              <span
                onClick={() => navigate('/about')}
                style={{
                  display: 'block', marginTop: 18,
                  fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4,
                  textTransform: 'uppercase', color: UC.amber, cursor: 'pointer',
                }}
              >
                READ MY STORY →
              </span>
            </div>
          </div>
        </div>
        <div style={{ padding: `${isMobile ? 40 : 56}px ${hPad}`, background: UC.paperAlt }}>
          <Eye>THE ROUNDUP — THIS WEEK</Eye>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {latestItems.map(item => (
              <div key={item.tag} style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '90px 1fr' : '120px 1fr',
                gap: 14, alignItems: 'baseline',
              }}>
                <Eye color={UC.amber}>{item.tag}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: 16, lineHeight: 1.35 }}>
                  {item.headline}
                </div>
              </div>
            ))}
          </div>
          <span
            onClick={() => navigate('/roundup')}
            style={{
              display: 'block', marginTop: 20,
              fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4,
              textTransform: 'uppercase', color: UC.mute, cursor: 'pointer',
            }}
          >
            OPEN THE ROUNDUP →
          </span>
        </div>
      </div>

      <Foot />
    </Page>
  );
}
