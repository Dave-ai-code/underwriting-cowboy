import { useState } from 'react';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, WalkCard, Eye, Rule, SearchBar, matchesQuery, SEO } from '../components';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { walkthroughs, FG_CATS } from '../data/walkthroughs';

export default function FieldGuidePage() {
  const [q, setQ]                       = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { isMobile, isTablet }          = useBreakpoint();
  const hPad                            = isMobile ? '20px' : '80px';

  const filtered = walkthroughs.filter(w => {
    const matchQ   = matchesQuery(q, w.num, w.category, w.title, w.excerpt);
    const matchCat = activeCategory === 'All' || w.category === activeCategory;
    return matchQ && matchCat;
  });

  const catCounts = FG_CATS.map(cat => ({
    name: cat,
    count: walkthroughs.filter(w => w.category === cat).length,
  }));

  const allCats = [{ name: 'All', count: walkthroughs.length }, ...catCounts];

  return (
    <Page>
      <SEO
        title="AI Underwriting Walkthroughs | UnderwritingCowboy"
        description="Step-by-step AI walkthroughs for insurance underwriters. Six categories, real prompts, honest verdicts. Every walkthrough is free to read."
        path="/field-guide"
      />
      <Nav />

      {/* HEADER */}
      <div style={{ padding: `${isMobile ? 40 : 64}px ${hPad} ${isMobile ? 24 : 32}px` }}>
        <Eye>THE FIELD GUIDE</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400,
          fontSize: isMobile ? 38 : isTablet ? 54 : 72,
          lineHeight: 0.98, letterSpacing: isMobile ? -0.8 : -1.2,
          margin: '14px 0 16px',
        }}>
          Real prompts, real walkthroughs,{isMobile ? ' ' : <br />}
          <span style={{ fontStyle: 'italic', color: UC.amber }}>real verdicts.</span>
        </h1>
        <div style={{
          fontFamily: UC.serif, fontSize: isMobile ? 16 : 19,
          lineHeight: 1.5, color: UC.ink2, maxWidth: 720,
        }}>
          A growing library of AI use-cases for working underwriters. Every
          walkthrough follows the same six beats — Problem, Setup, Walkthrough,
          Output, Verdict, Steal&nbsp;This. All free to read.
        </div>
        <div style={{ marginTop: 24 }}>
          <SearchBar
            placeholder={`Search ${walkthroughs.length} walkthroughs…`}
            value={q}
            onChange={setQ}
            count={filtered.length}
            label={filtered.length === 1 ? 'match' : 'matches'}
          />
        </div>
      </div>

      <Rule />

      {/* MOBILE: horizontal category pills */}
      {isMobile && (
        <div style={{
          overflowX: 'auto', display: 'flex', gap: 8,
          padding: '16px 20px', borderBottom: `1px solid ${UC.rule}`,
          WebkitOverflowScrolling: 'touch',
        }}>
          {allCats.map(({ name, count }) => {
            const isActive = activeCategory === name;
            return (
              <button
                key={name}
                onClick={() => setActiveCategory(name)}
                style={{
                  flexShrink: 0,
                  padding: '7px 14px',
                  background: isActive ? UC.ink : 'transparent',
                  color: isActive ? UC.paper : UC.ink2,
                  border: `1px solid ${isActive ? UC.ink : UC.rule}`,
                  fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.2,
                  textTransform: 'uppercase', cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {name === 'All' ? `ALL (${count})` : `${name.split(' ')[0]} (${count})`}
              </button>
            );
          })}
        </div>
      )}

      {/* DESKTOP: sidebar + grid layout */}
      {!isMobile && (
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: 900 }}>
          {/* Sidebar */}
          <div style={{ padding: '40px 28px 40px 80px', borderRight: `1px solid ${UC.rule}` }}>
            <Eye>BROWSE BY CATEGORY</Eye>
            <div style={{ marginTop: 18 }}>
              <div
                onClick={() => setActiveCategory('All')}
                style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '12px 0', borderBottom: `1px solid ${activeCategory === 'All' ? UC.ink : UC.ruleSoft}`,
                  fontFamily: UC.sans, fontSize: 14, cursor: 'pointer',
                  fontWeight: activeCategory === 'All' ? 600 : 400,
                  color: activeCategory === 'All' ? UC.ink : UC.ink2,
                }}
              >
                <span>All walkthroughs</span>
                <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{walkthroughs.length}</span>
              </div>
              {catCounts.map(({ name, count }) => (
                <div
                  key={name}
                  onClick={() => setActiveCategory(name)}
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '12px 0', borderBottom: `1px solid ${UC.ruleSoft}`,
                    fontFamily: UC.sans, fontSize: 14, cursor: 'pointer',
                    color: activeCategory === name ? UC.amber : UC.ink2,
                    fontWeight: activeCategory === name ? 500 : 400,
                  }}
                >
                  <span style={{ textTransform: 'capitalize' }}>
                    {name.charAt(0) + name.slice(1).toLowerCase()}
                  </span>
                  <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.mute }}>{count}</span>
                </div>
              ))}
            </div>

            <Eye style={{ marginTop: 36 }}>FILTER</Eye>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Newest first', 'Quickest reads', 'Beginner', 'Advanced'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 12, height: 12, border: `1px solid ${UC.ink}`,
                    background: f === 'Newest first' ? UC.ink : 'transparent',
                  }} />
                  <span style={{ fontFamily: UC.sans, fontSize: 13 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div style={{ padding: `40px 80px 64px 40px` }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', marginBottom: 24,
            }}>
              <Eye>
                {q
                  ? `MATCHING "${q.toUpperCase()}" — ${filtered.length}`
                  : activeCategory !== 'All'
                  ? `${activeCategory} — ${filtered.length}`
                  : `SHOWING ALL ${filtered.length}`}
              </Eye>
              <Eye>VIEW · GRID ▾</Eye>
            </div>
            {filtered.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: 20,
              }}>
                {filtered.map(w => (
                  <WalkCard
                    key={w.num}
                    num={w.num}
                    cat={w.category}
                    title={w.title}
                    readTime={w.readTime}
                    excerpt={w.excerpt}
                    tall
                    lines={3}
                    to={`/field-guide/${w.slug}`}
                  />
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
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE grid (below the pills) */}
      {isMobile && (
        <div style={{ padding: '24px 20px 48px' }}>
          <Eye style={{ marginBottom: 20 }}>
            {q
              ? `MATCHING "${q.toUpperCase()}" — ${filtered.length}`
              : activeCategory !== 'All'
              ? `${activeCategory} — ${filtered.length}`
              : `SHOWING ALL ${filtered.length}`}
          </Eye>
          {filtered.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {filtered.map(w => (
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
          ) : (
            <div style={{
              padding: '40px 24px', border: `1px dashed ${UC.rule}`,
              textAlign: 'center', background: UC.paperAlt,
            }}>
              <Eye color={UC.amber}>NO MATCHES</Eye>
              <div style={{ fontFamily: UC.serif, fontSize: 20, marginTop: 10 }}>
                Nothing here for "{q}" — yet.
              </div>
            </div>
          )}
        </div>
      )}

      <Foot />
    </Page>
  );
}
