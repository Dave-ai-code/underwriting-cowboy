import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, ImgBox, Para, SEO } from '../components';
import { walkthroughs } from '../data/walkthroughs';

// Section number constants for the TOC
const SECTION_SUBS = {
  '01': 'What the underwriter is trying to solve.',
  '02': 'Tool, data, context.',
  '03': 'Step by step with screenshots.',
  '04': 'Exactly what came back.',
  '05': 'What worked, what didn\'t, how to fix it.',
  '06': 'The exact prompt, ready to copy.',
};

function WTHeader({ walkthrough }) {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '64px 80px 40px', borderBottom: `1px solid ${UC.rule}` }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
        <span
          onClick={() => navigate('/field-guide')}
          style={{ fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4, textTransform: 'uppercase', color: UC.mute, cursor: 'pointer' }}
        >
          ← THE FIELD GUIDE
        </span>
        <Eye>/</Eye>
        <Eye color={UC.amber}>{walkthrough.category}</Eye>
        <Eye>/</Eye>
        <Eye>№ {walkthrough.num}</Eye>
      </div>
      <h1 style={{
        fontFamily: UC.serif, fontWeight: 400, fontSize: 64,
        lineHeight: 1.0, letterSpacing: -1.0, margin: 0, maxWidth: 1000,
      }}>
        {walkthrough.title}
      </h1>
      <div style={{
        fontFamily: UC.serif, fontStyle: 'italic', fontSize: 21,
        color: UC.ink2, lineHeight: 1.4, maxWidth: 760, marginTop: 22,
      }}>
        {walkthrough.excerpt}
      </div>
      <div style={{ display: 'flex', gap: 28, marginTop: 28, alignItems: 'center', flexWrap: 'wrap' }}>
        <Eye>PUBLISHED {walkthrough.date}</Eye>
        <Eye>{walkthrough.readTime} READ</Eye>
        <Eye>TOOL · {walkthrough.tool.toUpperCase()}</Eye>
        <Eye color={walkthrough.access === 'free' ? UC.amber : UC.paid}>
          {walkthrough.access.toUpperCase()}
        </Eye>
      </div>
    </div>
  );
}

function WTSection({ num, name, body, img, last, narrow }) {
  return (
    <section id={`s-${num}`} style={{ padding: '56px 0' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
        <div style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber, letterSpacing: 1.4 }}>
          § {num}
        </div>
        <Eye>{name.toUpperCase()}</Eye>
      </div>
      <h2 style={{
        fontFamily: UC.serif, fontWeight: 400, fontSize: 36,
        lineHeight: 1.1, letterSpacing: -0.4, margin: '12px 0 22px',
        maxWidth: narrow ? 620 : 760,
      }}>
        {body.heading}
      </h2>
      <div style={{
        fontFamily: UC.serif, fontSize: 18, lineHeight: 1.6,
        color: UC.ink2, maxWidth: narrow ? 620 : 720,
      }}>
        {body.paragraphs && body.paragraphs.length > 0 ? (
          body.paragraphs.map((p, i) => (
            <p key={i} style={{ margin: '0 0 18px' }}>{p}</p>
          ))
        ) : (
          <>
            <Para lines={5} h={8} />
            <div style={{ height: 14 }} />
            <Para lines={4} h={8} last={0.7} />
          </>
        )}
      </div>
      {img && (
        <div style={{ marginTop: 28, maxWidth: narrow ? 620 : 720 }}>
          <ImgBox label={img} h={300} accent />
          <Eye style={{ marginTop: 10 }}>FIG. {num} — {img.replace(/[\[\] ]/g, '').toUpperCase()}</Eye>
        </div>
      )}
      {!last && <Rule style={{ marginTop: 56 }} />}
    </section>
  );
}

function WTStealBox({ prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{
      background: UC.ink, color: UC.paper, padding: 28, marginTop: 28,
      border: `1px solid ${UC.ink}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 18,
      }}>
        <Eye color={UC.amberSoft}>STEAL THIS — READY TO COPY</Eye>
        <button
          onClick={handleCopy}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4,
            color: copied ? UC.amberSoft : 'rgba(243,239,229,0.55)',
            padding: 0,
          }}
        >
          {copied ? 'COPIED ✓' : 'COPY ⧉'}
        </button>
      </div>
      <pre style={{
        fontFamily: UC.mono, fontSize: 13, lineHeight: 1.7,
        color: '#e8e2cf', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
      }}>
        {prompt.split('<<').map((part, i) => {
          if (i === 0) return part;
          const [variable, rest] = part.split('>>');
          return (
            <span key={i}>
              <span style={{ color: UC.amberSoft }}>&lt;&lt;{variable}&gt;&gt;</span>
              {rest}
            </span>
          );
        })}
      </pre>
    </div>
  );
}

export default function WalkthroughPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const walkthrough = walkthroughs.find(w => w.slug === slug);

  if (!walkthrough) {
    return (
      <Page>
        <Nav />
        <div style={{ padding: '120px 80px', textAlign: 'center' }}>
          <Eye color={UC.amber}>404</Eye>
          <div style={{ fontFamily: UC.serif, fontSize: 36, marginTop: 12 }}>
            Walkthrough not found.
          </div>
          <div
            onClick={() => navigate('/field-guide')}
            style={{
              marginTop: 24, fontFamily: UC.mono, fontSize: 12, letterSpacing: 1.4,
              textTransform: 'uppercase', color: UC.amber, cursor: 'pointer',
            }}
          >
            ← BACK TO FIELD GUIDE
          </div>
        </div>
        <Foot />
      </Page>
    );
  }

  // Related walkthroughs (same category, exclude current)
  const related = walkthroughs
    .filter(w => w.slug !== slug && w.category === walkthrough.category)
    .slice(0, 2);

  // TOC sections: all 5 content sections + steal this (06)
  const tocSections = [
    ...walkthrough.sections.map(s => ({ num: s.num, name: s.name })),
    { num: '06', name: 'Steal This' },
  ];

  // Convert DD.MM.YY date to ISO 8601 for article:published_time
  const isoDate = (() => {
    const [d, m, y] = walkthrough.date.split('.');
    return `20${y}-${m}-${d}`;
  })();

  return (
    <Page>
      <SEO
        title={`${walkthrough.title} | UnderwritingCowboy`}
        description={walkthrough.excerpt}
        path={`/field-guide/${walkthrough.slug}`}
        type="article"
        article={{
          publishedTime: isoDate,
          section: walkthrough.category,
        }}
      />
      <Nav />
      <WTHeader walkthrough={walkthrough} />

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 200px', padding: '0 80px' }}>
        {/* TOC — left rail */}
        <div style={{ paddingTop: 56, paddingRight: 32 }}>
          <div style={{ position: 'sticky', top: 84 }}>
            <Eye>ON THIS PAGE</Eye>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {tocSections.map(({ num, name }, i) => (
                <a
                  key={num}
                  href={`#s-${num}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    display: 'grid', gridTemplateColumns: '28px 1fr',
                    alignItems: 'baseline', padding: '8px 0 8px 10px',
                    borderLeft: i === 0 ? `2px solid ${UC.amber}` : `2px solid transparent`,
                  }}>
                    <span style={{
                      fontFamily: UC.mono, fontSize: 10,
                      color: i === 0 ? UC.amber : UC.mute,
                    }}>§{num}</span>
                    <span style={{
                      fontFamily: UC.sans, fontSize: 13,
                      color: i === 0 ? UC.ink : UC.ink2,
                      fontWeight: i === 0 ? 500 : 400,
                    }}>{name}</span>
                  </div>
                </a>
              ))}
            </div>

            <Rule style={{ margin: '24px 0' }} />
            <Eye>SHARE</Eye>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Copy link', 'LinkedIn', 'Email'].map(s => (
                <span key={s} style={{ fontFamily: UC.sans, fontSize: 12, color: UC.ink2, cursor: 'pointer' }}>
                  {s} →
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div style={{ borderLeft: `1px solid ${UC.rule}`, borderRight: `1px solid ${UC.rule}`, padding: '0 48px' }}>
          {walkthrough.sections.map((section, i) => (
            <WTSection
              key={section.num}
              num={section.num}
              name={section.name}
              narrow
              body={{ heading: section.heading, paragraphs: section.paragraphs }}
              img={section.image}
              last={i === walkthrough.sections.length - 1}
            />
          ))}
          <div id="s-06" style={{ paddingBottom: 56 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', paddingTop: 56 }}>
              <div style={{ fontFamily: UC.mono, fontSize: 12, color: UC.amber, letterSpacing: 1.4 }}>§ 06</div>
              <Eye>STEAL THIS</Eye>
            </div>
            <WTStealBox prompt={walkthrough.stealThis} />
          </div>
        </div>

        {/* META RAIL — right */}
        <div style={{ paddingTop: 56, paddingLeft: 32 }}>
          <div style={{ position: 'sticky', top: 84 }}>
            <Eye>BY</Eye>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <ImgBox label="" w={40} h={40} accent />
              <div>
                <div style={{ fontFamily: UC.sans, fontSize: 13, fontWeight: 500 }}>The Cowboy</div>
                <Eye>FORMER APAC UW HEAD</Eye>
              </div>
            </div>

            <Rule style={{ margin: '24px 0' }} />

            <Eye>DETAILS</Eye>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div>
                <Eye style={{ marginBottom: 4 }}>Difficulty</Eye>
                <div style={{ fontFamily: UC.sans, fontSize: 13 }}>{walkthrough.difficulty}</div>
              </div>
              <div>
                <Eye style={{ marginBottom: 4 }}>Tool</Eye>
                <div style={{ fontFamily: UC.sans, fontSize: 13 }}>{walkthrough.tool}</div>
              </div>
              <div>
                <Eye style={{ marginBottom: 4 }}>Category</Eye>
                <div style={{ fontFamily: UC.sans, fontSize: 13, color: UC.amber }}>
                  {walkthrough.category.charAt(0) + walkthrough.category.slice(1).toLowerCase()}
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <>
                <Rule style={{ margin: '24px 0' }} />
                <Eye>YOU MIGHT ALSO LIKE</Eye>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {related.map(r => (
                    <div
                      key={r.num}
                      onClick={() => navigate(`/field-guide/${r.slug}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Eye color={UC.amber}>№ {r.num}</Eye>
                      <div style={{ fontFamily: UC.serif, fontSize: 14, marginTop: 4, lineHeight: 1.35, color: UC.ink }}>
                        {r.title}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Foot />
    </Page>
  );
}
