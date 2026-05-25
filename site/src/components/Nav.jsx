import { useNavigate, useLocation } from 'react-router-dom';
import { UC } from '../design/tokens';

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

// Top nav — logo left, links centre, subscribe CTA right.
export function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = getActiveLabel(pathname);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      borderBottom: `1px solid ${UC.rule}`,
      fontFamily: UC.sans,
      fontSize: 13,
      color: UC.ink,
      background: UC.paper,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
      >
        <svg
          width="40" height="24" viewBox="0 0 100 54" fill="none"
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
          fontFamily: UC.serif,
          fontSize: 18,
          letterSpacing: -0.2,
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}>
          Underwriting Cowboy
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: 28 }}>
        {NAV_ITEMS.map(([label, href]) => (
          <span
            key={label}
            onClick={() => navigate(href)}
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

      {/* Subscribe CTA */}
      <div
        onClick={() => navigate('/subscribe')}
        style={{
          fontFamily: UC.mono,
          fontSize: 11,
          letterSpacing: 1,
          textTransform: 'uppercase',
          padding: '7px 14px',
          background: UC.ink,
          color: UC.paper,
          borderRadius: 2,
          cursor: 'pointer',
        }}
      >
        Subscribe →
      </div>
    </div>
  );
}
