import { UC } from '../design/tokens';

// Page frame wrapper — handles background colour and scroll feel.
export function Page({ children, alt }) {
  return (
    <div style={{
      background: alt ? UC.paperAlt : UC.paper,
      width: '100%',
      minHeight: '100vh',
      fontFamily: UC.sans,
      color: UC.ink,
    }}>
      {children}
    </div>
  );
}
