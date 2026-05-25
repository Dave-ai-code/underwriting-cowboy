import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UC } from '../design/tokens';
import { useBreakpoint } from '../hooks/useBreakpoint';

const NAV_ITEMS = [
  ['Field Guide',  '/field-guide'],
  ['The Roundup',  '/roundup'],
  ['Toolkit',      '/toolkit'],
  ['About',        '/about'],
  ['Work With Me', '/work-with-me'],
];

function getActiveLabel(pathname) {
  if (pathname.startsWith('/field-guide')) return 'Field Guide';
  if (pathname.startsWith('/roundup'))     return 'The Roundup';
  if (pathname.startsWith('/toolkit'))     return 'Toolkit';
  if (pathname === '/about')               return 'About';
  if (pathname === '/work-with-me')        return 'Work With Me';
  return null;
}

const Logo = ({ onClick }) => (
  <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
    <svg
      width="36" height="22" viewBox="0 0 100 54" fill="none"
      stroke={UC.ink} strokeWidth="3.2"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', overflow: 'visible', flexShrink: 0 }}
      aria-label="Underwriting Cowboy"
    >
      <path d="M32 28 C28 12, 40 4, 52 4 C66 4, 73 12, 72 28" />
      <path d="M44 10 Q49 7, 54 10" />
      <path d="M56 14 Q61 18, 67 15" />
      <path d="M32 28 C18 29, 8 33, 4 40 C12 48, 36 50, 56 48 C76 47, 90 40, 96 22 C90 28, 80 30, 72 28 C60 34, 44 34, 32 28 Z" />
    </svg>
    <span style={{
      fontFamily: UC.serif, fontSize: 17,
      letterSpacing: -0.2, fontWeight: 500, whiteSpace: 'nowrap',
    }}>
      Underwriting Cowboy
    </span>
  </div>
);

export function Nav() {
  const navigate     = useNavigate();
  const { pathname } = useLocation();
  const active       = getActiveLabel(pathname);
  const { isMobile } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (href) => { navigate(href); setMenuOpen(false); };

  return (
    <div style={{
      background: UC.paper,
      borderBottom: `1px solid ${UC.rule}`,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* ── Top bar ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '14px 20px' : '20px 40px',
        fontFamily: UC.sans,
        fontSize: 13,
        color: UC.ink,
      }}>
        <Logo onClick={() => go('/')} />

        {isMobile ? (
          /* Hamburger button */
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: `1px solid ${UC.rule}`,
              cursor: 'pointer', padding: '6px 10px',
              fontFamily: UC.mono, fontSize: 16, color: UC.ink,
              lineHeight: 1,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        ) : (
          <>
            {/* Desktop nav links */}
            <div style={{ display: 'flex', gap: 28 }}>
              {NAV_ITEMS.map(([label, href]) => (
                <span
                  key={label}
                  onClick={() => go(href)}
                  style={{
                    color: label === active ? UC.ink : UC.ink2,
                    borderBottom: label === active ? `1.5px solid ${UC.amber}` : '1.5px solid transparent',
                    paddingBottom: 2,
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
            {/* Desktop subscribe CTA */}
            <div
              onClick={() => go('/subscribe')}
              style={{
                fontFamily: UC.mono, fontSize: 11, letterSpacing: 1,
                textTransform: 'uppercase', padding: '7px 14px',
                background: UC.ink, color: UC.paper,
                borderRadius: 2, cursor: 'pointer',
              }}
            >
              Subscribe →
            </div>
          </>
        )}
      </div>

      {/* ── Mobile dropdown ── */}
      {isMobile && menuOpen && (
        <div style={{
          borderTop: `1px solid ${UC.rule}`,
          background: UC.paper,
          padding: '8px 0 20px',
        }}>
          {NAV_ITEMS.map(([label, href]) => (
            <div
              key={label}
              onClick={() => go(href)}
              style={{
                padding: '14px 20px',
                fontFamily: UC.sans, fontSize: 16,
                color: label === active ? UC.ink : UC.ink2,
                fontWeight: label === active ? 600 : 400,
                borderLeft: label === active ? `3px solid ${UC.amber}` : '3px solid transparent',
                cursor: 'pointer',
              }}
            >
              {label}
            </div>
          ))}
          <div style={{ margin: '12px 20px 0' }}>
            <div
              onClick={() => go('/subscribe')}
              style={{
                fontFamily: UC.mono, fontSize: 11, letterSpacing: 1.2,
                textTransform: 'uppercase', padding: '12px 20px',
                background: UC.ink, color: UC.paper,
                textAlign: 'center', cursor: 'pointer',
              }}
            >
              Subscribe →
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
