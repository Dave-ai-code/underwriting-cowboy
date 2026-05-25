// Shared wireframe primitives — Swiss/Bloomberg-terminal vibe
// Cream paper, charcoal ink, restrained amber accent, monospace labels.

const UC = {
  paper:    '#f3efe5',
  paperAlt: '#ebe6da',
  ink:      '#16181c',
  ink2:     '#3a3a36',
  mute:     '#8a857a',
  rule:     '#cbc4b3',
  ruleSoft: '#dcd6c6',
  amber:    '#b88433',
  amberSoft:'#d9b878',
  paid:     '#9a6a1f',
  serif:    "'Newsreader', 'Source Serif Pro', Georgia, serif",
  sans:     "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  mono:     "'IBM Plex Mono', ui-monospace, Menlo, monospace",
};

// monospace eyebrow / section label
function Eye({ children, color, style }) {
  return (
    <div style={{
      fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4,
      textTransform: 'uppercase', color: color || UC.mute, ...style,
    }}>{children}</div>
  );
}

// horizontal rule
function Rule({ color, weight, style }) {
  return <div style={{ height: 0, borderTop: `${weight || 1}px solid ${color || UC.rule}`, ...style }} />;
}

// a "text" placeholder line (low-fi bar)
function Bar({ w = '100%', h = 8, color, style }) {
  return <div style={{
    width: w, height: h, background: color || '#d6cfbd',
    borderRadius: 1, ...style,
  }} />;
}

// stack of bars to simulate a paragraph
function Para({ lines = 4, gap = 7, last = 0.6, h = 7, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Bar key={i} h={h} color={color}
          w={i === lines - 1 ? `${last * 100}%` : `${85 + (i * 13) % 12}%`} />
      ))}
    </div>
  );
}

// diagonal-stripe image placeholder with mono caption
function ImgBox({ label, w, h, ratio, style, accent }) {
  return (
    <div style={{
      width: w || '100%',
      height: h,
      aspectRatio: ratio,
      background:
        `repeating-linear-gradient(135deg, ${accent ? '#e8d5a8' : '#e2dccb'} 0 1px, transparent 1px 9px), ${accent ? '#f5e6c2' : '#ebe6d6'}`,
      border: `1px solid ${UC.rule}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: UC.mute, fontFamily: UC.mono, fontSize: 10,
      letterSpacing: 0.6, textAlign: 'center', padding: 8,
      ...style,
    }}>{label || '[ image ]'}</div>
  );
}

// Top nav — classic horizontal links
const NavCtx = React.createContext(null);

function Nav({ active, onNav }) {
  const ctxOnNav = React.useContext(NavCtx);
  const handler = onNav || ctxOnNav;
  const items = [
    ['Field Guide', 'fg'],
    ['The Roundup', 'roundup'],
    ['Toolkit',     'toolkit'],
    ['About',       'about'],
    ['Work With Me','work'],
  ];
  const click = handler ? { cursor: 'pointer' } : {};
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 40px', borderBottom: `1px solid ${UC.rule}`,
      fontFamily: UC.sans, fontSize: 13, color: UC.ink, background: UC.paper,
    }}>
      <div onClick={() => handler && handler('home')}
        style={{ display: 'flex', alignItems: 'center', gap: 12, ...click }}>
        <svg width="40" height="24" viewBox="0 0 100 54" fill="none"
          stroke={UC.ink} strokeWidth="3.2"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ display: 'block', overflow: 'visible', flexShrink: 0 }}
          aria-label="Underwriting Cowboy">
          {/* crown */}
          <path d="M32 28 C28 12, 40 4, 52 4 C66 4, 73 12, 72 28" />
          {/* pinch detail — two swirls at the top */}
          <path d="M44 10 Q49 7, 54 10" />
          <path d="M56 14 Q61 18, 67 15" />
          {/* brim — closed silhouette: hangs low on left, dramatic curl on right */}
          <path d="M32 28 C18 29, 8 33, 4 40 C12 48, 36 50, 56 48 C76 47, 90 40, 96 22 C90 28, 80 30, 72 28 C60 34, 44 34, 32 28 Z" />
        </svg>
        <span style={{ fontFamily: UC.serif, fontSize: 18, letterSpacing: -0.2, fontWeight: 500, whiteSpace: 'nowrap' }}>
          Underwriting Cowboy
        </span>
      </div>
      <div style={{ display: 'flex', gap: 28 }}>
        {items.map(([label, key]) => (
          <span key={key} onClick={() => handler && handler(key)} style={{
            color: label === active ? UC.ink : UC.ink2,
            borderBottom: label === active ? `1.5px solid ${UC.amber}` : 'none',
            paddingBottom: 2, ...click,
          }}>{label}</span>
        ))}
      </div>
      <div onClick={() => handler && handler('subscribe')} style={{
        fontFamily: UC.mono, fontSize: 11, letterSpacing: 1,
        textTransform: 'uppercase', padding: '7px 14px',
        background: UC.ink, color: UC.paper, borderRadius: 2, ...click,
      }}>Subscribe →</div>
    </div>
  );
}

// Footer block
function Foot() {
  const cols = [
    ['Read',  ['Field Guide', 'The Roundup', 'Toolkit']],
    ['About', ['The Cowboy', 'Work With Me', 'Contact']],
    ['Stay',  ['Subscribe', 'RSS', 'LinkedIn']],
  ];
  return (
    <div style={{ background: UC.paper, borderTop: `1px solid ${UC.rule}`, padding: '36px 40px 28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <div style={{ fontFamily: UC.serif, fontSize: 18, fontWeight: 500 }}>Underwriting Cowboy</div>
          <Eye style={{ marginTop: 8 }}>EST. 2025 · APAC → EVERYWHERE</Eye>
        </div>
        {cols.map(([h, list]) => (
          <div key={h}>
            <Eye style={{ marginBottom: 12 }}>{h}</Eye>
            {list.map(l => (
              <div key={l} style={{
                fontFamily: UC.sans, fontSize: 13, color: UC.ink2,
                marginBottom: 6,
              }}>{l}</div>
            ))}
          </div>
        ))}
      </div>
      <Rule style={{ marginTop: 28 }} />
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: UC.mono, fontSize: 10, color: UC.mute,
        marginTop: 14, letterSpacing: 0.6,
      }}>
        <span>© 2026 UNDERWRITING COWBOY · NO HYPE. JUST SIGNAL.</span>
        <span>v0.1 · WIREFRAME</span>
      </div>
    </div>
  );
}

// Generic walkthrough card (used in homepage previews + field guide)
function WalkCard({ num, cat, title, lines = 3, tall, accent }) {
  return (
    <div style={{
      border: `1px solid ${UC.rule}`, background: UC.paper,
      padding: 18, display: 'flex', flexDirection: 'column', gap: 12,
      minHeight: tall ? 260 : 200,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eye color={UC.amber}>{cat}</Eye>
        <Eye>№ {num}</Eye>
      </div>
      <ImgBox label="[ screenshot ]" h={tall ? 110 : 84} accent={accent} />
      <div style={{
        fontFamily: UC.serif, fontSize: 18, lineHeight: 1.2,
        color: UC.ink, marginTop: 2,
      }}>{title}</div>
      <Para lines={lines} h={5} />
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Eye>READ →</Eye>
        <Eye>8 MIN</Eye>
      </div>
    </div>
  );
}

// Ticker strip for Bloomberg variants
function Ticker({ items }) {
  return (
    <div style={{
      display: 'flex', gap: 28, padding: '8px 40px',
      background: UC.ink, color: UC.paper,
      fontFamily: UC.mono, fontSize: 10, letterSpacing: 1,
      borderBottom: `1px solid ${UC.ink}`,
      overflow: 'hidden', whiteSpace: 'nowrap',
    }}>
      {items.map((t, i) => (
        <span key={i} style={{ opacity: 0.9 }}>
          <span style={{ color: UC.amberSoft, marginRight: 8 }}>●</span>{t}
        </span>
      ))}
    </div>
  );
}

// Email capture row
function EmailCapture({ wide, dark }) {
  return (
    <div style={{
      display: 'flex', gap: 0, alignItems: 'stretch',
      maxWidth: wide ? 560 : 440, border: `1px solid ${dark ? UC.paper : UC.ink}`,
      background: dark ? 'transparent' : UC.paper,
    }}>
      <div style={{
        flex: 1, padding: '14px 16px', fontFamily: UC.mono, fontSize: 12,
        color: dark ? UC.paper : UC.mute, letterSpacing: 0.4,
      }}>your@inbox.com</div>
      <div style={{
        padding: '14px 22px', background: dark ? UC.paper : UC.ink,
        color: dark ? UC.ink : UC.paper, fontFamily: UC.mono, fontSize: 11,
        letterSpacing: 1.4, textTransform: 'uppercase',
        display: 'flex', alignItems: 'center',
      }}>Subscribe →</div>
    </div>
  );
}

// Page frame wrapper — handles background + scroll feel
function Page({ children, alt }) {
  return (
    <div style={{
      background: alt ? UC.paperAlt : UC.paper,
      width: '100%', minHeight: '100%',
      fontFamily: UC.sans, color: UC.ink,
    }}>{children}</div>
  );
}

// Search input — Bloomberg/Swiss styling
function SearchBar({ placeholder, value, onChange, count, label, dark, autoFocus }) {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);
  const borderColor = dark ? 'rgba(243,239,229,.4)' : UC.ink;
  const ink = dark ? UC.paper : UC.ink;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      border: `1px solid ${borderColor}`,
      background: dark ? 'transparent' : UC.paper,
      padding: '0 14px',
    }}>
      <svg width="14" height="14" viewBox="0 0 16 16" style={{ flexShrink: 0, opacity: 0.85 }}>
        <circle cx="7" cy="7" r="4.5" fill="none" stroke={ink} strokeWidth="1.3" />
        <path d="M10.5 10.5 L14 14" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder || 'Search…'}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          flex: 1, border: 'none', outline: 'none',
          padding: '13px 0', fontFamily: UC.mono, fontSize: 13,
          background: 'transparent', color: ink, letterSpacing: 0.2,
        }}
      />
      {value ? (
        <span onClick={() => onChange && onChange('')}
          style={{
            cursor: 'pointer', fontFamily: UC.mono, fontSize: 10,
            letterSpacing: 1.4, color: dark ? 'rgba(243,239,229,.7)' : UC.mute,
          }}>CLEAR ✕</span>
      ) : null}
      {count !== undefined && (
        <span style={{
          fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.4,
          textTransform: 'uppercase',
          color: dark ? 'rgba(243,239,229,.6)' : UC.mute,
          paddingLeft: 12, borderLeft: `1px solid ${dark ? 'rgba(243,239,229,.2)' : UC.ruleSoft}`,
        }}>{count} {label || 'results'}</span>
      )}
    </div>
  );
}

// Match helper used by pages: case-insensitive search across strings
function matchesQuery(q, ...fields) {
  if (!q) return true;
  const needle = q.toLowerCase().trim();
  return fields.some(f => f && String(f).toLowerCase().includes(needle));
}

Object.assign(window, {
  UC, Eye, Rule, Bar, Para, ImgBox, Nav, NavCtx, Foot, WalkCard, Ticker, EmailCapture, Page,
  SearchBar, matchesQuery,
});
