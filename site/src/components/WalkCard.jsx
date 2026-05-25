import { Link } from 'react-router-dom';
import { UC } from '../design/tokens';
import { Eye } from './Eye';
import { ImgBox } from './ImgBox';
import { Para } from './Para';

// Walkthrough card — used in the homepage preview strip and field guide grid.
// Pass `to` to make it a clickable link.
// Pass `excerpt` to show real text instead of placeholder bars.
export function WalkCard({ num, cat, title, readTime = '8 MIN', excerpt, lines = 3, tall, accent, to }) {
  const inner = (
    <div style={{
      border: `1px solid ${UC.rule}`,
      background: UC.paper,
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: tall ? 260 : 200,
      cursor: to ? 'pointer' : 'default',
      transition: 'border-color 0.15s',
    }}
      onMouseEnter={e => { if (to) e.currentTarget.style.borderColor = UC.amber; }}
      onMouseLeave={e => { if (to) e.currentTarget.style.borderColor = UC.rule; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eye color={UC.amber}>{cat}</Eye>
        <Eye>№ {num}</Eye>
      </div>
      <ImgBox label="[ screenshot ]" h={tall ? 110 : 84} accent={accent} />
      <div style={{
        fontFamily: UC.serif,
        fontSize: 18,
        lineHeight: 1.2,
        color: UC.ink,
        marginTop: 2,
      }}>
        {title}
      </div>
      {excerpt ? (
        <div style={{ fontFamily: UC.serif, fontSize: 14, lineHeight: 1.5, color: UC.ink2 }}>
          {excerpt}
        </div>
      ) : (
        <Para lines={lines} h={5} />
      )}
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Eye>READ →</Eye>
        <Eye>{readTime}</Eye>
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {inner}
      </Link>
    );
  }
  return inner;
}
