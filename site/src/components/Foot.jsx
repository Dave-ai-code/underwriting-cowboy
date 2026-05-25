import { useNavigate } from 'react-router-dom';
import { UC } from '../design/tokens';
import { Eye } from './Eye';
import { Rule } from './Rule';

const FOOTER_LINKS = {
  Read:  [['Field Guide', '/field-guide'], ['The Roundup', '/roundup'], ['Toolkit', '/toolkit']],
  About: [['The Cowboy', '/about'], ['Work With Me', '/work-with-me'], ['Contact', '/work-with-me']],
  Stay:  [['Subscribe', '/subscribe'], ['RSS', null], ['LinkedIn', null]],
};

// Site footer — columns of links + copyright line.
export function Foot() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ background: UC.paper, borderTop: `1px solid ${UC.rule}`, padding: '36px 40px 28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <div style={{ fontFamily: UC.serif, fontSize: 18, fontWeight: 500 }}>
            Underwriting Cowboy
          </div>
          <Eye style={{ marginTop: 8 }}>EST. 2025 · APAC → EVERYWHERE</Eye>
        </div>
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <Eye style={{ marginBottom: 12 }}>{heading}</Eye>
            {links.map(([label, href]) => (
              <div
                key={label}
                onClick={() => href && navigate(href)}
                style={{
                  fontFamily: UC.sans,
                  fontSize: 13,
                  color: UC.ink2,
                  marginBottom: 6,
                  cursor: href ? 'pointer' : 'default',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Rule style={{ marginTop: 28 }} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: UC.mono,
        fontSize: 10,
        color: UC.mute,
        marginTop: 14,
        letterSpacing: 0.6,
      }}>
        <span>© {currentYear} UNDERWRITING COWBOY · NO HYPE. JUST SIGNAL.</span>
        <span>UNDERWRITINGCOWBOY.COM</span>
      </div>
    </div>
  );
}
