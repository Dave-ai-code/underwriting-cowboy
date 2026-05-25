import { UC } from '../design/tokens';

// Bloomberg-style ticker strip — dark bar with amber dots and monospace items.
export function Ticker({ items }) {
  return (
    <div style={{
      display: 'flex',
      gap: 28,
      padding: '8px 40px',
      background: UC.ink,
      color: UC.paper,
      fontFamily: UC.mono,
      fontSize: 10,
      letterSpacing: 1,
      borderBottom: `1px solid ${UC.ink}`,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }}>
      {items.map((t, i) => (
        <span key={i} style={{ opacity: 0.9 }}>
          <span style={{ color: UC.amberSoft, marginRight: 8 }}>●</span>
          {t}
        </span>
      ))}
    </div>
  );
}
