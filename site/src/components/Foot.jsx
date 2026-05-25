import { useNavigate } from 'react-router-dom';
import { UC } from '../design/tokens';
import { Eye } from './Eye';
import { Rule } from './Rule';
import { useBreakpoint } from '../hooks/useBreakpoint';

const FOOTER_LINKS = {
  Read:  [['Field Guide', '/field-guide'], ['The Roundup', '/roundup'], ['Toolkit', '/toolkit']],
  About: [['The Cowboy', '/about'], ['Work With Me', '/work-with-me'], ['Contact', '/work-with-me']],
  Stay:  [['Subscribe', '/subscribe'], ['RSS', null], ['LinkedIn', null]],
};

export function Foot() {
  const navigate        = useNavigate();
  const { isMobile }    = useBreakpoint();
  const currentYear     = new Date().getFullYear();
  const pad             = isMobile ? '24px 20px' : '36px 40px 28px';

  return (
    <div style={{ background: UC.paper, borderTop: `1px solid ${UC.rule}`, padding: pad }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : '1.5fr 1fr 1fr 1fr',
        gap: isMobile ? 24 : 32,
      }}>
        {/* Brand blurb — full width on mobile */}
        <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
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
                  fontFamily: UC.sans, fontSize: 13,
                  color: UC.ink2, marginBottom: 6,
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
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isMobile ? 4 : 0,
        fontFamily: UC.mono, fontSize: 10,
        color: UC.mute, marginTop: 14, letterSpacing: 0.6,
      }}>
        <span>© {currentYear} UNDERWRITING COWBOY · NO HYPE. JUST SIGNAL.</span>
        <span>UNDERWRITINGCOWBOY.COM</span>
      </div>
    </div>
  );
}
