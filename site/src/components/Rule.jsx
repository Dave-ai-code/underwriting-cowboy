import { UC } from '../design/tokens';

// Horizontal rule — thin border line used as section divider.
export function Rule({ color, weight, style }) {
  return (
    <div style={{
      height: 0,
      borderTop: `${weight || 1}px solid ${color || UC.rule}`,
      ...style,
    }} />
  );
}
