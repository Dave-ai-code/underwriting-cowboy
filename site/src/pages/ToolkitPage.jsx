import { useState } from 'react';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, SearchBar, matchesQuery, SEO } from '../components';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { toolkitItems, promptLibrary } from '../data/toolkit';

const TABS = [
  { id: 'tools',   label: 'AI Tool Directory' },
  { id: 'prompts', label: 'Prompt Library' },
];

export default function ToolkitPage() {
  const [q, setQ]                   = useState('');
  const [activeTab, setActiveTab]   = useState('tools');
  const [copied, setCopied]         = useState(null);
  const { isMobile, isTablet }      = useBreakpoint();
  const hPad                        = isMobile ? '20px' : '80px';

  const filteredTools = toolkitItems.filter(t =>
    matchesQuery(q, t.name, t.summary, t.bestFor, t.category)
  );

  const handleCopy = (prompt, tag) => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(tag);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <Page>
      <SEO
        title="AI Tools for Underwriters | UnderwritingCowboy"
        description="The AI tool directory, prompt library, and reference shelf for working insurance underwriters. Curated, rated, and updated monthly. Free."
        path="/toolkit"
      />
      <Nav />

      {/* HEADER */}
      <div style={{ padding: `${isMobile ? 40 : 64}px ${hPad} ${isMobile ? 24 : 32}px` }}>
        <Eye>THE TOOLKIT — FREE · UPDATED MONTHLY</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400,
          fontSize: isMobile ? 40 : isTablet ? 56 : 76,
          lineHeight: 0.98, letterSpacing: isMobile ? -0.8 : -1.4,
          margin: '14px 0 16px',
        }}>
          A bookmark-worthy<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>reference shelf.</span>
        </h1>
        <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 16 : 19, lineHeight: 1.5, color: UC.ink2 }}>
          Tools, prompts, and references — curated for working underwriters.
          The kind of page you send to a colleague.
        </div>
        <div style={{ marginTop: 24 }}>
          <SearchBar
            placeholder="Search tools, prompts, categories…"
            value={q}
            onChange={setQ}
            count={activeTab === 'tools' ? filteredTools.length : promptLibrary.length}
            label="matches"
          />
        </div>
      </div>

      {/* TABS */}
      <div style={{
        display: 'flex',
        borderTop: `1px solid ${UC.ink}`,
        borderBottom: `1px solid ${UC.rule}`,
        padding: `0 ${hPad}`,
        background: UC.paperAlt,
        overflowX: 'auto',
      }}>
        {TABS.map(({ id, label }) => (
          <div
            key={id}
            onClick={() => setActiveTab(id)}
            style={{
              padding: isMobile ? '14px 20px' : '20px 32px',
              borderRight: `1px solid ${UC.rule}`,
              borderBottom: activeTab === id ? `2px solid ${UC.amber}` : '2px solid transparent',
              background: activeTab === id ? UC.paper : 'transparent',
              display: 'flex', flexDirection: 'column', gap: 4,
              color: activeTab === id ? UC.ink : UC.ink2,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <div style={{ fontFamily: UC.sans, fontSize: isMobile ? 14 : 15, fontWeight: activeTab === id ? 600 : 400 }}>
              {label}
            </div>
            <Eye>{id === 'tools' ? `${toolkitItems.length} TOOLS` : `${promptLibrary.length} PROMPTS`}</Eye>
          </div>
        ))}
      </div>

      {/* TOOL DIRECTORY */}
      {activeTab === 'tools' && (
        <div style={{ padding: `${isMobile ? 28 : 40}px ${hPad} ${isMobile ? 40 : 56}px` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <Eye>
              {q
                ? `MATCHING "${q.toUpperCase()}" — ${filteredTools.length}`
                : `AI TOOL DIRECTORY · ${toolkitItems.length} ENTRIES`}
            </Eye>
            {!isMobile && <Eye>SORT · RATING ▾</Eye>}
          </div>

          {filteredTools.length === 0 ? (
            <div style={{
              padding: '40px 24px', marginTop: 16, textAlign: 'center',
              border: `1px dashed ${UC.rule}`, background: UC.paperAlt,
            }}>
              <Eye color={UC.amber}>NO MATCHES</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 20, marginTop: 8 }}>
                Nothing matches "{q}" in the toolkit.
              </div>
            </div>
          ) : isMobile ? (
            /* Mobile: card layout */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {filteredTools.map(tool => (
                <div
                  key={tool.name}
                  style={{
                    padding: '20px 0',
                    borderBottom: `1px solid ${UC.ruleSoft}`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontFamily: UC.serif, fontSize: 19 }}>{tool.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber }}>{tool.rating}</span>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: UC.mono, fontSize: 16, color: UC.ink, textDecoration: 'none' }}
                      >
                        →
                      </a>
                    </div>
                  </div>
                  <div style={{ fontFamily: UC.sans, fontSize: 14, color: UC.ink2, lineHeight: 1.4, marginTop: 6 }}>
                    {tool.summary}
                  </div>
                  <div style={{ display: 'flex', gap: 16, marginTop: 10, alignItems: 'center' }}>
                    <Eye color={UC.amber}>{tool.bestFor.toUpperCase()}</Eye>
                    <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.mute }}>{tool.pricing.toUpperCase()}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop: table layout */
            <>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 130px 130px 80px 60px',
                gap: 16, padding: '12px 0',
                borderTop: `1px solid ${UC.ink}`, borderBottom: `1px solid ${UC.ink}`,
              }}>
                {['TOOL', 'WHAT IT DOES', 'BEST FOR', 'PRICING', 'RATING', ''].map(h => (
                  <Eye key={h}>{h}</Eye>
                ))}
              </div>
              {filteredTools.map(tool => (
                <div
                  key={tool.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr 130px 130px 80px 60px',
                    gap: 16, padding: '18px 0',
                    borderBottom: `1px solid ${UC.ruleSoft}`,
                    alignItems: 'baseline',
                  }}
                >
                  <div style={{ fontFamily: UC.serif, fontSize: 18 }}>{tool.name}</div>
                  <div style={{ fontFamily: UC.sans, fontSize: 14, color: UC.ink2, lineHeight: 1.4 }}>{tool.summary}</div>
                  <Eye color={UC.amber}>{tool.bestFor.toUpperCase()}</Eye>
                  <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{tool.pricing.toUpperCase()}</span>
                  <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber }}>{tool.rating}</span>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: UC.mono, fontSize: 14, color: UC.ink, textDecoration: 'none' }}
                  >
                    →
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* PROMPT LIBRARY */}
      {activeTab === 'prompts' && (
        <div style={{ padding: `${isMobile ? 28 : 40}px ${hPad} ${isMobile ? 40 : 56}px` }}>
          <div style={{ marginBottom: 20 }}>
            <Eye>PROMPT LIBRARY · {promptLibrary.length} PROMPTS — COPY AND USE</Eye>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 20,
          }}>
            {promptLibrary.map(p => (
              <div
                key={p.tag}
                style={{
                  background: UC.paperAlt, border: `1px solid ${UC.rule}`, padding: 20,
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}
              >
                <Eye color={UC.amber}>{p.tag}</Eye>
                <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 16 : 18, lineHeight: 1.3 }}>{p.title}</div>
                <div style={{
                  fontFamily: UC.mono, fontSize: 12, lineHeight: 1.6,
                  color: UC.ink2, background: UC.paper,
                  padding: '12px 14px', borderLeft: `2px solid ${UC.ruleSoft}`,
                }}>
                  {p.prompt}
                </div>
                <button
                  onClick={() => handleCopy(p.prompt, p.tag)}
                  style={{
                    alignSelf: 'flex-start', background: 'none', border: 'none',
                    padding: 0, cursor: 'pointer',
                    fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4,
                    textTransform: 'uppercase',
                    color: copied === p.tag ? UC.amber : UC.mute,
                  }}
                >
                  {copied === p.tag ? 'COPIED ✓' : 'COPY ⧉'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Foot />
    </Page>
  );
}
