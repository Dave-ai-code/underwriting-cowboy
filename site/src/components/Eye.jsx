import { UC } from '../design/tokens';

// Monospace eyebrow / section label — the "Swiss" utility label used everywhere.
export function Eye({ children, color, style }) {
  return (
    <div style={{
      fontFamily: UC.mono,
      fontSize: 10,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      color: color || UC.mute,
      ...style,
    }}>
      {children}
    </div>
  );
}
