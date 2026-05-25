import { useState } from 'react';
import { UC } from '../design/tokens';
import { Nav, Foot, Page, Eye, Rule, Para, SEO } from '../components';

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
  { label: 'NAME',         type: 'text',     tall: false },
  { label: 'EMAIL',        type: 'email',    tall: false },
  { label: 'ORGANISATION', type: 'text',     tall: false },
  { label: 'WHAT YOU NEED', type: 'textarea', tall: true },
];

export default function WorkPage() {
  const [form, setForm] = useState({ NAME: '', EMAIL: '', ORGANISATION: '', 'WHAT YOU NEED': '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your form handler (Formspree, Netlify Forms, etc.)
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
      <div style={{ padding: '64px 80px 32px' }}>
        <Eye>WORK WITH ME</Eye>
        <h1 style={{
          fontFamily: UC.serif, fontWeight: 400, fontSize: 76,
          lineHeight: 0.98, letterSpacing: -1.4, margin: '14px 0 16px',
        }}>
          Four ways to put<br />
          <span style={{ fontStyle: 'italic', color: UC.amber }}>this to work.</span>
        </h1>
        <div style={{ fontFamily: UC.serif, fontSize: 19, lineHeight: 1.5, color: UC.ink2, maxWidth: 700 }}>
          I work with a small number of teams and events each quarter. If something
          here lines up with what you need, start a conversation.
        </div>
      </div>

      <Rule />

      {/* 4-CARD GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', padding: '0 80px' }}>
        {OFFERS.map(({ num, name, body, terms }, i) => (
          <div
            key={num}
            style={{
              padding: '40px 32px',
              borderRight: i % 2 === 0 ? `1px solid ${UC.rule}` : 'none',
              borderBottom: i < 2 ? `1px solid ${UC.rule}` : 'none',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Eye color={UC.amber}>§ {num}</Eye>
              <Eye>{terms.toUpperCase()}</Eye>
            </div>
            <div style={{ fontFamily: UC.serif, fontSize: 36, marginTop: 14, letterSpacing: -0.4 }}>
              {name}
            </div>
            <div style={{ fontFamily: UC.serif, fontSize: 18, lineHeight: 1.4, color: UC.ink2, marginTop: 10, marginBottom: 18 }}>
              {body}
            </div>
            <Eye color={UC.amber} style={{ marginTop: 20, cursor: 'pointer' }}>LEARN MORE →</Eye>
          </div>
        ))}
      </div>

      {/* PROOF STRIP */}
      <div style={{ padding: '32px 80px', borderTop: `1px solid ${UC.rule}`, borderBottom: `1px solid ${UC.rule}` }}>
        <Eye>PREVIOUSLY WITH</Eye>
        <div style={{ display: 'flex', gap: 48, marginTop: 18, alignItems: 'center', flexWrap: 'wrap' }}>
          {['Large APAC insurer', 'InsurTech accelerator', 'Lloyd\'s coverholder', 'Global reinsurer', 'Tech conference'].map((l, i, arr) => (
            <span key={l} style={{
              fontFamily: UC.serif, fontStyle: 'italic', fontSize: 17, color: UC.mute,
              borderRight: i < arr.length - 1 ? `1px solid ${UC.rule}` : 'none',
              paddingRight: 48,
            }}>{l}</span>
          ))}
        </div>
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
            No rates on the page — the right fee depends on the work.
            I'll come back within two business days.
          </div>
        </div>

        {sent ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: UC.serif, fontSize: 24, color: UC.amberSoft, textAlign: 'center',
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
                      outline: 'none',
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
