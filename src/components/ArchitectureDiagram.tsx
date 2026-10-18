const groups = [
  {
    title: 'Finance tools',
    relationship: 'Shared ledger',
    lines: ['Accounts · Wallet · Bills · Budget', 'Insights · Subscriptions · Credit'],
    detail: 'One set of financial records.',
    note: 'A bill payment appears in Wallet.',
    x: 40, width: 408,
  },
  {
    title: 'Learn',
    relationship: 'Course bridge',
    lines: ['The same course', 'on the web and in the app.'],
    detail: 'Separate learning progress.',
    note: 'Lessons can open finance tools.',
    x: 480, width: 208,
  },
  {
    title: 'Community apps',
    relationship: 'Scoped storage',
    lines: ['Goals · Debts · Circles', 'Remit · Shared'],
    detail: 'Each app has its own storage.',
    note: 'Limited Wallet API by grant.',
    x: 720, width: 200,
  },
];

/** Static architecture, with the same content reflowed as HTML on small screens. */
export function ArchitectureDiagram() {
  return (
    <figure className="architecture" aria-labelledby="architecture-heading">
      <header className="architecture-heading">
        <p className="architecture-eyebrow">Inside Jinnie</p>
        <h2 id="architecture-heading">One app. Connected tools.</h2>
        <p>Finance tools share your records. Learning and community apps keep their own progress and data.</p>
      </header>

      <svg className="architecture-desktop" viewBox="0 0 960 600" role="img" aria-labelledby="architecture-title architecture-desc">
        <title id="architecture-title">How Jinnie connects its mini apps</title>
        <desc id="architecture-desc">
          App bundles are downloaded into the native host. The host provides one shared SDK.
          Its finance tools use a shared ledger, Learn opens the web course with separate progress,
          and community apps use storage scoped to each app. Explicit grants allow limited Wallet posting.
        </desc>
        <defs>
          {['muted', 'primary', 'ink'].map((color) => (
            <marker key={color} id={`architecture-arrow-${color}`} viewBox="0 0 8 6" refX="8" refY="3" markerWidth="8" markerHeight="6" orient="auto">
              <path d="M0 0 L8 3 L0 6 Z" fill={`var(--${color})`} />
            </marker>
          ))}
        </defs>

        {/* Connectors precede nodes; every destination has its own straight route. */}
        <g fill="none" stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#architecture-arrow-muted)">
          <path d="M704 92 H584" />
          <path d="M312 144 V216" />
          <path d="M584 304 V392" />
          <path d="M820 304 V392" />
        </g>
        <path d="M244 304 V392" fill="none" stroke="var(--primary)" strokeWidth="2" markerEnd="url(#architecture-arrow-primary)" />
        <g className="architecture-edge-label">
          <rect x="592" y="64" width="104" height="20" />
          <text x="644" y="78" textAnchor="middle">DOWNLOAD</text>
          <rect x="320" y="168" width="72" height="24" />
          <text x="328" y="184">PROVIDES</text>
          {[
            { x: 252, text: 'LEDGER' },
            { x: 592, text: 'BRIDGE' },
            { x: 828, text: 'STORAGE' },
          ].map(({ x, text }) => (
            <g key={text}>
              <rect x={x} y="336" width="80" height="24" />
              <text x={x + 8} y="352">{text}</text>
            </g>
          ))}
        </g>

        <rect x="40" y="40" width="544" height="104" rx="8" fill="var(--night)" />
        <text x="64" y="76" className="architecture-node-title" fill="var(--on-night)">Jinnie native host</text>
        <text x="64" y="104" className="architecture-node-copy" fill="var(--on-night-muted)">Home · navigation · launcher · native capabilities</text>
        <text x="64" y="124" className="architecture-node-copy" fill="var(--on-night-muted)">The installed app that brings everything together.</text>

        <rect x="704" y="40" width="216" height="104" rx="8" fill="var(--card)" stroke="var(--line)" />
        <text x="724" y="76" className="architecture-node-title">Mini-app releases</text>
        <text x="724" y="104" className="architecture-node-copy">Bundles loaded at runtime</text>
        <text x="724" y="124" className="architecture-node-copy architecture-domain">sdk.jinnie.ph</text>

        <rect x="40" y="216" width="880" height="88" rx="8" fill="var(--tone-indigo-bg)" stroke="var(--primary)" strokeWidth="1.5" />
        <text x="64" y="252" className="architecture-node-title" fill="var(--primary-deep)">One shared SDK</text>
        <text x="64" y="280" className="architecture-node-copy">Shared components, platform stores and the APIs each app is allowed to use.</text>
        <text x="896" y="252" textAnchor="end" className="architecture-node-copy architecture-domain" fill="var(--primary)">@jinnie/sdk</text>

        {groups.map((group, index) => (
          <g key={group.title}>
            <rect x={group.x} y="392" width={group.width} height="168" rx="8" fill="var(--card)" stroke={index === 0 ? 'var(--primary)' : 'var(--line)'} />
            <text x={group.x + 20} y="424" className="architecture-node-title">{group.title}</text>
            {group.lines.map((line, i) => (
              <text key={line} x={group.x + 20} y={452 + i * 20} className="architecture-node-copy">{line}</text>
            ))}
            <path d={`M${group.x + 20} 488 H${group.x + group.width - 20}`} stroke="var(--line)" />
            <text x={group.x + 20} y="512" className="architecture-node-copy">{group.detail}</text>
            <text x={group.x + 20} y="536" className="architecture-node-note">{group.note}</text>
          </g>
        ))}
      </svg>

      <div className="architecture-mobile">
        <div className="architecture-release">
          <strong>Mini-app releases</strong>
          <span>Downloaded from <code>sdk.jinnie.ph</code></span>
        </div>
        <div className="architecture-mobile-arrow" aria-hidden="true">↓</div>
        <div className="architecture-host">
          <h3>Jinnie native host</h3>
          <p>Home, navigation, the launcher and native capabilities in one installed app.</p>
        </div>
        <div className="architecture-mobile-arrow"><span aria-hidden="true">↓</span> provides</div>
        <div className="architecture-sdk">
          <h3>One shared SDK</h3>
          <p>Shared components, platform stores and APIs for each app.</p>
          <code>@jinnie/sdk</code>
        </div>
        <p className="architecture-branches-label">What the SDK provides to each group</p>
        <ul className="architecture-groups">
          {groups.map((group) => (
            <li key={group.title}>
              <p className="architecture-relationship">{group.relationship}</p>
              <h3>{group.title}</h3>
              <p>{group.lines.join(group.title === 'Learn' ? ' ' : ' · ')}</p>
              <p className="architecture-group-detail">{group.detail} {group.note}</p>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="architecture-caption">
        <p><strong>Shared by design, separate where it matters.</strong> Arrows show what each layer supplies. Community apps do not receive the full finance context; approved apps can use a limited Wallet posting API.</p>
        <p>Security handles backups. Settings lives behind the gear. Both use the same platform.</p>
      </figcaption>
    </figure>
  );
}
