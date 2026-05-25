import { useState } from 'react';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, SearchBar, EmailCapture, Para, matchesQuery, SEO } from '../components';
import { roundups } from '../data/roundups';

export default function RoundupPage() {
  const [q, setQ] = useState('');

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
      <div style={{ padding: '64px 80px 40px', borderBottom: `1px solid ${UC.ink}` }}>
        <Eye>THE ROUNDUP — {roundups.length} ISSUES · SHIPS FRIDAYS</Eye>
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
            value={q}
            onChange={setQ}
            count={total}
            label={total === 1 ? 'match' : 'matches'}
          />
        </div>
      </div>

      {/* SPLIT: WEEKLY | DEEP DIVES */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr' }}>
        {/* WEEKLY DIGEST */}
        <div style={{ padding: '48px 56px 56px 80px', borderRight: `1px solid ${UC.rule}` }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', marginBottom: 32,
          }}>
            <div>
              <Eye color={UC.amber}>THE WEEKLY DIGEST</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 28, marginTop: 6 }}>
                5–7 stories. 2-line take. Sent Friday.
              </div>
            </div>
            <Eye>ALL {weeklyIssues.length} ISSUES →</Eye>
          </div>

          {filteredWeekly.length === 0 ? (
            <div style={{
              padding: '32px 24px', marginTop: 12,
              border: `1px dashed ${UC.rule}`, background: UC.paperAlt,
              fontFamily: UC.serif, fontSize: 17, color: UC.ink2, fontStyle: 'italic',
            }}>
              No weekly issues matched "{q}".
            </div>
          ) : filteredWeekly.map((issue, i) => (
            <div key={issue.num} style={{
              padding: '24px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
              display: 'grid', gridTemplateColumns: '60px 100px 1fr',
              gap: 20, alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.mute }}>№ {issue.num}</span>
              <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{issue.date}</span>
              <div>
                <div style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.35 }}>
                  {issue.title}
                </div>
                {issue.items.length > 0 && (
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {issue.items.slice(0, 3).map(item => (
                      <div key={item.tag} style={{
                        display: 'grid', gridTemplateColumns: '80px 1fr',
                        gap: 12, alignItems: 'baseline',
                      }}>
                        <Eye color={UC.amber}>{item.tag}</Eye>
                        <div style={{ fontFamily: UC.serif, fontSize: 14, lineHeight: 1.35, color: UC.ink2 }}>
                          {item.headline}
                        </div>
                      </div>
                    ))}
                    {issue.items.length > 3 && (
                      <Eye style={{ paddingTop: 4 }}>+{issue.items.length - 3} MORE STORIES</Eye>
                    )}
                  </div>
                )}
                <Eye color={UC.amber} style={{ marginTop: 12 }}>READ ISSUE →</Eye>
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

          {filteredDeep.length === 0 ? (
            <div style={{
              padding: '32px 24px', border: `1px dashed ${UC.rule}`,
              background: UC.paper, fontFamily: UC.serif,
              fontSize: 17, color: UC.ink2, fontStyle: 'italic',
            }}>
              No deep dives matched "{q}".
            </div>
          ) : filteredDeep.map((issue, i) => (
            <div key={issue.num} style={{
              padding: '24px 0',
              borderTop: i === 0 ? `1px solid ${UC.ink}` : `1px solid ${UC.ruleSoft}`,
            }}>
              <Eye>{i === 0 ? 'JUST PUBLISHED' : 'ESSAY'}</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 24, lineHeight: 1.2, marginTop: 8 }}>
                {issue.title}
              </div>
              <div style={{ fontFamily: UC.serif, fontSize: 15, lineHeight: 1.5, color: UC.ink2, marginTop: 8 }}>
                {issue.summary}
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 12 }}>
                <Eye>{issue.readTime}</Eye>
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
        <EmailCapture dark source="roundup" />
      </div>

      <Foot />
    </Page>
  );
}
