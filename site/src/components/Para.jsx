// Bar + Para — wireframe-style text placeholders.
// Used as visual filler wherever real content hasn't been added yet.
// To replace: swap <Para /> for actual <p> tags in your data files.

export function Bar({ w = '100%', h = 8, color, style }) {
  return (
    <div style={{
      width: w,
      height: h,
      background: color || '#d6cfbd',
      borderRadius: 1,
      ...style,
    }} />
  );
}

export function Para({ lines = 4, gap = 7, last = 0.6, h = 7, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Bar
          key={i}
          h={h}
          color={color}
          w={i === lines - 1 ? `${last * 100}%` : `${85 + (i * 13) % 12}%`}
        />
      ))}
    </div>
  );
}
