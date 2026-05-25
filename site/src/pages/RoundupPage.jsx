import { useState } from 'react';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, SearchBar, EmailCapture, Para, matchesQuery, SEO } from '../components';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { roundups } from '../data/roundups';

export default function RoundupPage() {
  const [q, setQ]              = useState('');
  const { isMobile, isTablet } = useBreakpoint();
  const hPad                   = isMobile ? '20px' : '80px';

  const weeklyIssues = roundups.filter(r => r.type === 'weekly');
  const deepDives    = roundups.filter(r => r.type === 'deep-dive');

  const filteredWeekly = weeklyIssues.filter(r =>
    matchesQuery(q, r.num, r.date, r.title, r.summary, 'weekly digest')
  );
  const filteredDeep = deepDives.filter(r =>
    matchesQuery(q, r.title, r.summary, 'deep dive essay')
  );
  const total = filteredWeekly.length + filteredDeep.length;

  return (
    <Page>
      <SEO
        title="AI Insurance News & Analysis | UnderwritingCowboy"
        description="The weekly digest of AI in insurance underwriting. Five to seven stories, a two-line take on each, sent every Friday. Plus deeper essays when one is worth writing."
        path="/roundup"
      />
      <Nav />

      {/* HEADER */}
      <div style={{ padding: `${isMobile ? 40 : 64}px ${hPad} ${isMobile ? 32 : 40}px`, borderBottom: `1px solid ${UC.ink}` }}>
        <Eye>THE ROUNDUP — {roundups.length} ISSUES · SHIPS FRIDAYS</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400,
          fontSize: isMobile ? 56 : isTablet ? 68 : 84,
          lineHeight: 0.98, letterSpacing: isMobile ? -1 : -1.4,
          margin: '14px 0 14px',
        }}>
          The Roundup.
        </h1>
        <div style={{
          fontFamily: UC.serif, fontStyle: 'italic',
          fontSize: isMobile ? 17 : 21,
          color: UC.ink2, lineHeight: 1.4,
        }}>
          The weekly digest — five to seven stories with a two-line take.
          Plus the deeper essays, when one is worth writing.
        </div>
        <div style={{ marginTop: 24 }}>
          <SearchBar
            placeholder="Search issues, stories, essays…"
            value={q}
            onChange={setQ}
            count={total}
            label={total === 1 ? 'match' : 'matches'}
          />
        </div>
      </div>

      {/* SPLIT: WEEKLY | DEEP DIVES */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
      }}>
        {/* WEEKLY DIGEST */}
        <div style={{
          padding: `${isMobile ? 40 : 48}px ${hPad} ${isMobile ? 40 : 56}px ${hPad}`,
          borderRight: isMobile ? 'none' : `1px solid ${UC.rule}`,
          borderBottom: isMobile ? `1px solid ${UC.rule}` : 'none',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', marginBottom: 28,
          }}>
            <div>
              <Eye color={UC.amber}>THE WEEKLY DIGEST</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 20 : 28, marginTop: 6 }}>
                5–7 stories. 2-line take. Sent Friday.
              </div>
            </div>
            {!isMobile && <Eye>ALL {weeklyIssues.length} ISSUES →</Eye>}
          </div>

          {filteredWeekly.length === 0 ? (
            <div style={{
              padding: '28px 20px', marginTop: 12,
              border: `1px dashed ${UC.rule}`, background: UC.paperAlt,
              fontFamily: UC.serif, fontSize: 16, color: UC.ink2, fontStyle: 'italic',
            }}>
              No weekly issues matched "{q}".
            </div>
          ) : filteredWeekly.map((issue, i) => (
            <div key={issue.num} style={{
              padding: '20px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
              display: 'grid',
              gridTemplateColumns: isMobile ? '50px 1fr' : '60px 100px 1fr',
              gap: isMobile ? 14 : 20,
              alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>№ {issue.num}</span>
              {!isMobile && <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{issue.date}</span>}
              <div>
                <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 16 : 19, lineHeight: 1.35 }}>
                  {issue.title}
                </div>
                {isMobile && <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.mute, marginTop: 4 }}>{issue.date}</div>}
                {issue.items.length > 0 && (
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {issue.items.slice(0, isMobile ? 2 : 3).map(item => (
                      <div key={item.tag} style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '70px 1fr' : '80px 1fr',
                        gap: 12, alignItems: 'baseline',
                      }}>
                        <Eye color={UC.amber}>{item.tag}</Eye>
                        <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 13 : 14, lineHeight: 1.35, color: UC.ink2 }}>
                          {item.headline}
                        </div>
                      </div>
                    ))}
                    {issue.items.length > (isMobile ? 2 : 3) && (
                      <Eye style={{ paddingTop: 4 }}>+{issue.items.length - (isMobile ? 2 : 3)} MORE STORIES</Eye>
                    )}
                  </div>
                )}
                <Eye color={UC.amber} style={{ marginTop: 10 }}>READ ISSUE →</Eye>
              </div>
            </div>
          ))}
        </div>

        {/* DEEP DIVES */}
        <div style={{
          padding: `${isMobile ? 40 : 48}px ${hPad}`,
          background: UC.paperAlt,
        }}>
          <Eye color={UC.amber}>DEEP DIVES</Eye>
          <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 20 : 28, marginTop: 6, marginBottom: 24 }}>
            Longer essays. When one is worth writing.
          </div>

          {filteredDeep.length === 0 ? (
            <div style={{
              padding: '28px 20px', border: `1px dashed ${UC.rule}`,
              background: UC.paper, fontFamily: UC.serif,
              fontSize: 16, color: UC.ink2, fontStyle: 'italic',
            }}>
              No deep dives matched "{q}".
            </div>
          ) : filteredDeep.map((issue, i) => (
            <div key={issue.num} style={{
              padding: '20px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
            }}>
              <Eye>{i === 0 ? 'JUST PUBLISHED' : 'ESSAY'}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 20 : 24, lineHeight: 1.2, marginTop: 8 }}>
                {issue.title}
              </div>
              <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 14 : 15, lineHeight: 1.5, color: UC.ink2, marginTop: 8 }}>
                {issue.summary}
              </div>
              <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                <Eye>{issue.readTime}</Eye>
                <Eye color={UC.amber}>READ →</Eye>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUBSCRIBE STRIP */}
      <div style={{
        background: UC.ink, color: UC.paper,
        padding: `${isMobile ? 40 : 48}px ${hPad}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
        gap: isMobile ? 28 : 60,
        alignItems: 'center',
      }}>
        <div>
          <Eye color={UC.amberSoft}>SUBSCRIBE</Eye>
          <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 26 : 36, lineHeight: 1.1, marginTop: 10 }}>
            Get The Roundup in your inbox every Friday.
          </div>
        </div>
        <EmailCapture dark source="roundup" />
      </div>

      <Foot />
    </Page>
  );
}
