import { useRef, useEffect } from 'react';
import { UC } from '../design/tokens';

// Bloomberg/Swiss-style search input with result count badge.
export function SearchBar({ placeholder, value, onChange, count, label, dark, autoFocus }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  const borderColor = dark ? 'rgba(243,239,229,.4)' : UC.ink;
  const ink = dark ? UC.paper : UC.ink;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
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
          flex: 1,
          border: 'none',
          outline: 'none',
          padding: '13px 0',
          fontFamily: UC.mono,
          fontSize: 13,
          background: 'transparent',
          color: ink,
          letterSpacing: 0.2,
        }}
      />
      {value ? (
        <span
          onClick={() => onChange && onChange('')}
          style={{
            cursor: 'pointer',
            fontFamily: UC.mono,
            fontSize: 10,
            letterSpacing: 1.4,
            color: dark ? 'rgba(243,239,229,.7)' : UC.mute,
          }}
        >
          CLEAR ✕
        </span>
      ) : null}
      {count !== undefined && (
        <span style={{
          fontFamily: UC.mono,
          fontSize: 10,
          letterSpacing: 1.4,
          textTransform: 'uppercase',
          color: dark ? 'rgba(243,239,229,.6)' : UC.mute,
          paddingLeft: 12,
          borderLeft: `1px solid ${dark ? 'rgba(243,239,229,.2)' : UC.ruleSoft}`,
        }}>
          {count} {label || 'results'}
        </span>
      )}
    </div>
  );
}

// Helper: case-insensitive search across any number of string fields
export function matchesQuery(q, ...fields) {
  if (!q) return true;
  const needle = q.toLowerCase().trim();
  return fields.some(f => f && String(f).toLowerCase().includes(needle));
}
