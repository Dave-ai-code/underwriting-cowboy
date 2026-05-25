import { useState } from 'react';
import { UC } from '../design/tokens';

// ─────────────────────────────────────────────────────────────
// Beehiiv integration
// Set VITE_BEEHIIV_URL in your .env file:
//   VITE_BEEHIIV_URL=https://embeds.beehiiv.com/YOUR-PUBLICATION-ID
// Get this URL from Beehiiv → Grow → Forms → Embed
// ─────────────────────────────────────────────────────────────
const BEEHIIV_URL = import.meta.env.VITE_BEEHIIV_URL;

export function EmailCapture({ wide, dark, source }) {
  const [email, setEmail]       = useState('');
  const [status, setStatus]     = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      // Build the form body — Beehiiv's embed endpoint accepts url-encoded form data.
      // The optional `utm_source` lets you see in Beehiiv's dashboard which page
      // each subscriber came from (e.g. "homepage", "subscribe-page", "roundup").
      const body = new URLSearchParams({ email });
      if (source) body.append('utm_source', source);

      await fetch(BEEHIIV_URL, {
        method: 'POST',
        mode: 'no-cors', // Beehiiv's embed endpoint — we can't read the response body,
                          // but the subscription goes through. Show optimistic success.
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      // Fire Plausible custom event — shows up as "Newsletter Signup" in your dashboard
      // props.source lets you filter by which form triggered the signup
      if (typeof window.plausible === 'function') {
        window.plausible('Newsletter Signup', { props: { source: source || 'unknown' } });
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      // Network failure (no BEEHIIV_URL set, etc.)
      if (!BEEHIIV_URL || BEEHIIV_URL.includes('PASTE-YOUR-ID-HERE')) {
        setErrorMsg('Add your Beehiiv URL to .env first (VITE_BEEHIIV_URL)');
      } else {
        setErrorMsg('Something went wrong — try again or email me directly.');
      }
      setStatus('error');
    }
  };

  // ── DARK variant success ──────────────────────────────────────
  if (status === 'success') {
    return (
      <div style={{
        maxWidth: wide ? 560 : 440,
        padding: '16px 20px',
        border: `1px solid ${dark ? UC.paper : UC.ink}`,
        fontFamily: UC.mono,
        fontSize: 12,
        letterSpacing: 0.8,
        color: dark ? UC.amberSoft : UC.amber,
      }}>
        ✓ YOU'RE IN — CHECK YOUR INBOX
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: 0,
          alignItems: 'stretch',
          maxWidth: wide ? 560 : 440,
          border: `1px solid ${dark ? UC.paper : UC.ink}`,
          background: dark ? 'transparent' : UC.paper,
          opacity: status === 'loading' ? 0.7 : 1,
          transition: 'opacity 0.2s',
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@inbox.com"
          required
          disabled={status === 'loading'}
          style={{
            flex: 1,
            padding: '14px 16px',
            border: 'none',
            outline: 'none',
            fontFamily: UC.mono,
            fontSize: 12,
            color: dark ? UC.paper : UC.ink,
            background: 'transparent',
            letterSpacing: 0.4,
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            padding: '14px 22px',
            background: dark ? UC.paper : UC.ink,
            color: dark ? UC.ink : UC.paper,
            fontFamily: UC.mono,
            fontSize: 11,
            letterSpacing: 1.4,
            textTransform: 'uppercase',
            border: 'none',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'loading' ? '…' : 'Subscribe →'}
        </button>
      </form>

      {status === 'error' && (
        <div style={{
          marginTop: 8,
          fontFamily: UC.mono,
          fontSize: 10,
          letterSpacing: 0.6,
          color: '#c0392b',
        }}>
          {errorMsg}
        </div>
      )}
    </div>
  );
}
