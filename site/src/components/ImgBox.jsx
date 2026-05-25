import { UC } from '../design/tokens';

// Diagonal-stripe image placeholder — used wherever a real image will eventually go.
// Replace with an <img> tag once you have real assets.
export function ImgBox({ label, w, h, ratio, style, accent }) {
  return (
    <div style={{
      width: w || '100%',
      height: h,
      aspectRatio: ratio,
      background: `repeating-linear-gradient(135deg, ${accent ? '#e8d5a8' : '#e2dccb'} 0 1px, transparent 1px 9px), ${accent ? '#f5e6c2' : '#ebe6d6'}`,
      border: `1px solid ${UC.rule}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: UC.mute,
      fontFamily: UC.mono,
      fontSize: 10,
      letterSpacing: 0.6,
      textAlign: 'center',
      padding: 8,
      flexShrink: 0,
      ...style,
    }}>
      {label || '[ image ]'}
    </div>
  );
}
