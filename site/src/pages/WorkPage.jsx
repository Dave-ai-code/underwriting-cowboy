import { useState } from 'react';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, Para, SEO } from '../components';
import { useBreakpoint } from '../hooks/useBreakpoint';

const OFFERS = [
  {
    num: '01',
    name: 'Advisory',
    body: 'InsurTech startups getting the underwriting logic right. I work with product teams, engineers, and founders who need someone who has actually underwritten risk.',
    terms: 'Monthly retainer',
  },
  {
    num: '02',
    name: 'Speaking',
    body: 'Conferences, InsurTech events, and corporate keynotes. I talk about AI in underwriting from the perspective of someone who has done the job — not a vendor, not a consultant.',
    terms: 'By engagement',
  },
  {
    num: '03',
    name: 'Workshops',
    body: 'Hands-on AI for underwriting teams — in person or virtual. Half-day or full-day formats. Built for people who are sceptical and want to see it work on real submissions.',
    terms: 'Half / full day',
  },
  {
    num: '04',
    name: 'Consulting',
    body: 'Retained or project-based engagements for insurers, reinsurers, and MGAs. Typically: AI workflow design, appetite-to-prompt translation, and team capability building.',
    terms: 'On request',
  },
];

const FORM_FIELDS = [
  { label: 'NAME',          type: 'text',     tall: false },
  { label: 'EMAIL',         type: 'email',    tall: false },
  { label: 'ORGANISATION',  type: 'text',     tall: false },
  { label: 'WHAT YOU NEED', type: 'textarea', tall: true  },
];

export default function WorkPage() {
  const [form, setForm] = useState({ NAME: '', EMAIL: '', ORGANISATION: '', 'WHAT YOU NEED': '' });
  const [sent, setSent]  = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = isMobile ? '20px' : '80px';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', form);
    setSent(true);
  };

  return (
    <Page>
      <SEO
        title="Work With the Underwriting Cowboy | Advisory & Workshops"
        description="Advisory for InsurTech teams, speaking at conferences, AI workshops for underwriting desks, and consulting engagements. A small number of projects each quarter."
        path="/work-with-me"
      />
      <Nav />

      {/* HEADER */}
      <div style={{ padding: `${isMobile ? 40 : 64}px ${hPad} ${isMobile ? 24 : 32}px` }}>
        <Eye>WORK WITH ME</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400,
          fontSize: isMobile ? 42 : isTablet ? 56 : 76,
          lineHeight: 0.98, letterSpacing: isMobile ? -0.8 : -1.4,
          margin: '14px 0 16px',
        }}>
          Four ways to put<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>this to work.</span>
        </h1>
        <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 16 : 19, lineHeight: 1.5, color: UC.ink2 }}>
          I work with a small number of teams and events each quarter. If something
          here lines up with what you need, start a conversation.
        </div>
      </div>

      <Rule />

      {/* 4-CARD GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        padding: `0 ${hPad}`,
      }}>
        {OFFERS.map(({ num, name, body, terms }, i) => (
          <div
            key={num}
            style={{
              padding: isMobile ? '32px 0' : '40px 32px',
              borderRight: !isMobile && i % 2 === 0 ? `1px solid ${UC.rule}` : 'none',
              borderBottom: isMobile
                ? i < OFFERS.length - 1 ? `1px solid ${UC.rule}` : 'none'
                : i < 2 ? `1px solid ${UC.rule}` : 'none',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Eye color={UC.amber}>§ {num}</Eye>
              <Eye>{terms.toUpperCase()}</Eye>
            </div>
            <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 28 : 36, marginTop: 14, letterSpacing: -0.4 }}>
              {name}
            </div>
            <div style={{ fontFamily: UC.serif, fontSize: isMobile ? 16 : 18, lineHeight: 1.4, color: UC.ink2, marginTop: 10, marginBottom: 18 }}>
              {body}
            </div>
            <Eye color={UC.amber} style={{ cursor: 'pointer' }}>LEARN MORE →</Eye>
          </div>
        ))}
      </div>

      {/* PROOF STRIP */}
      <div style={{
        padding: `24px ${hPad}`,
        borderTop: `1px solid ${UC.rule}`,
        borderBottom: `1px solid ${UC.rule}`,
      }}>
        <Eye>PREVIOUSLY WITH</Eye>
        <div style={{
          display: 'flex', gap: 0,
          marginTop: 14,
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          {['Large APAC insurer', 'InsurTech accelerator', 'Lloyd\'s coverholder', 'Global reinsurer', 'Tech conference'].map((l, i, arr) => (
            <span key={l} style={{
              fontFamily: UC.serif, fontStyle: 'italic',
              fontSize: isMobile ? 15 : 17, color: UC.mute,
              borderRight: !isMobile && i < arr.length - 1 ? `1px solid ${UC.rule}` : 'none',
              borderBottom: isMobile && i < arr.length - 1 ? `1px solid ${UC.ruleSoft}` : 'none',
              padding: isMobile ? '10px 0' : `0 ${i === 0 ? 0 : 32}px 0 ${i === 0 ? 0 : 0}px`,
              paddingRight: !isMobile ? 32 : 0,
              marginRight: !isMobile && i > 0 ? 0 : 0,
            }}>{l}</span>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div style={{
        background: UC.ink, color: UC.paper,
        padding: `${isMobile ? 40 : 56}px ${hPad}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
        gap: isMobile ? 32 : 64,
      }}>
        <div>
          <Eye color={UC.amberSoft}>START A CONVERSATION</Eye>
          <div style={{
            fontFamily: UC.serif,
            fontSize: isMobile ? 32 : 44,
            lineHeight: 1.05, letterSpacing: -0.6, marginTop: 16,
          }}>
            Tell me what you're trying to do.
          </div>
          <div style={{
            fontFamily: UC.serif, fontSize: isMobile ? 15 : 17,
            lineHeight: 1.5, color: 'rgba(243,239,229,0.7)', marginTop: 20,
          }}>
            No rates on the page — the right fee depends on the work.
            I'll come back within two business days.
          </div>
        </div>

        {sent ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: UC.serif, fontSize: 22, color: UC.amberSoft, textAlign: 'center',
            padding: isMobile ? '32px 0' : 0,
          }}>
            <div>
              <div>Got it. I'll be in touch within two business days.</div>
              <button
                onClick={() => setSent(false)}
                style={{
                  marginTop: 20, background: 'none', border: `1px solid rgba(243,239,229,0.3)`,
                  color: 'rgba(243,239,229,0.6)', fontFamily: UC.mono, fontSize: 11,
                  letterSpacing: 1.4, textTransform: 'uppercase', padding: '10px 20px', cursor: 'pointer',
                }}
              >
                Send another →
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FORM_FIELDS.map(({ label, type, tall }) => (
              <div key={label}>
                <Eye color="rgba(243,239,229,0.55)" style={{ marginBottom: 8 }}>{label}</Eye>
                {tall ? (
                  <textarea
                    value={form[label]}
                    onChange={e => setForm(f => ({ ...f, [label]: e.target.value }))}
                    placeholder="A few sentences is fine."
                    rows={5}
                    style={{
                      width: '100%', border: `1px solid rgba(243,239,229,0.3)`,
                      background: 'transparent', fontFamily: UC.mono, fontSize: 12,
                      padding: '12px 14px', color: UC.paper, resize: 'vertical',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                ) : (
                  <input
                    type={type}
                    value={form[label]}
                    onChange={e => setForm(f => ({ ...f, [label]: e.target.value }))}
                    placeholder="..."
                    required={label === 'EMAIL'}
                    style={{
                      width: '100%', border: `1px solid rgba(243,239,229,0.3)`,
                      height: 44, background: 'transparent', fontFamily: UC.mono,
                      fontSize: 12, padding: '12px 14px', color: UC.paper, outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              style={{
                marginTop: 8, alignSelf: 'flex-start',
                padding: '14px 24px', background: UC.amber, color: UC.ink,
                border: 'none', fontFamily: UC.mono, fontSize: 12,
                letterSpacing: 1.4, textTransform: 'uppercase', cursor: 'pointer',
              }}
            >
              Send →
            </button>
          </form>
        )}
      </div>

      <Foot />
    </Page>
  );
}
