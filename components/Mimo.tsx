import type { ComponentProps } from "react";

// Mimo, Memo's lazy hippo mascot. Flat, boxy shapes with a solid drop
// shadow (the same "3D" trick as our buttons).
const colors = {
  skin: "#9b8a9f",
  belly: "#dcb1aa",
  deep: "#5e4a5f",
  ink: "#2f2433",
  leaf: "#22a04b",
};

const line = { stroke: colors.ink, strokeWidth: 6, strokeLinejoin: "round" as const };

type MimoProps = ComponentProps<"svg"> & {
  // The OG image renderer can't draw SVG <text>, so it hides this and
  // overlays the card text itself.
  showCardText?: boolean;
};

export default function Mimo({ className = "", showCardText = true, ...props }: MimoProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Mimo the hippo holding a word card."
      className={`mx-auto block ${className}`}
      {...props}
    >
      <defs>
        <filter id="mimo-lift" x="-10%" y="-10%" width="120%" height="125%">
          <feOffset in="SourceAlpha" dy="8" result="off" />
          <feFlood floodColor={colors.ink} result="c" />
          <feComposite in="c" in2="off" operator="in" result="sh" />
          <feMerge>
            <feMergeNode in="sh" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="104" y="368" width="192" height="16" rx="8" fill="rgba(21, 128, 61, 0.15)" className="fill-accent/15" />
      <g filter="url(#mimo-lift)">
        {/* sprout */}
        <rect x="196" y="28" width="8" height="40" rx="4" fill={colors.leaf} {...line} />
        <rect x="204" y="16" width="38" height="20" rx="8" transform="rotate(-22 204 26)" fill={colors.leaf} {...line} />
        <rect x="160" y="26" width="32" height="17" rx="7" transform="rotate(20 192 34)" fill={colors.leaf} {...line} />
        {/* ears */}
        <g transform="rotate(-14 118 84)">
          <rect x="94" y="52" width="48" height="52" rx="14" fill={colors.skin} {...line} />
          <rect x="106" y="64" width="24" height="28" rx="8" fill={colors.deep} />
        </g>
        <g transform="rotate(14 282 84)">
          <rect x="258" y="52" width="48" height="52" rx="14" fill={colors.skin} {...line} />
          <rect x="270" y="64" width="24" height="28" rx="8" fill={colors.deep} />
        </g>
        {/* legs and toes */}
        <rect x="118" y="300" width="66" height="64" rx="18" fill={colors.skin} {...line} />
        <rect x="216" y="300" width="66" height="64" rx="18" fill={colors.skin} {...line} />
        {[126, 144, 162, 225, 243, 261].map((x) => (
          <rect key={x} x={x} y="348" width="13" height="10" rx="4" fill={colors.belly} />
        ))}
        {/* body */}
        <rect x="96" y="206" width="208" height="128" rx="40" fill={colors.skin} {...line} />
        <rect x="138" y="246" width="124" height="80" rx="26" fill={colors.belly} />
        {/* word card and arms */}
        <rect x="156" y="258" width="88" height="62" rx="12" fill="#fff" {...line} />
        {showCardText && (
          <text x="200" y="301" textAnchor="middle" fontSize="30" fill="#15803d">
            Aa
          </text>
        )}
        <rect x="138" y="270" width="32" height="36" rx="13" fill={colors.skin} {...line} />
        <rect x="230" y="270" width="32" height="36" rx="13" fill={colors.skin} {...line} />
        {/* head */}
        <rect x="78" y="60" width="244" height="178" rx="52" fill={colors.skin} {...line} />
        {/* sleepy line eyes */}
        <path d="M130 132 L176 127" stroke={colors.ink} strokeWidth="9" strokeLinecap="round" />
        <path d="M224 127 L270 132" stroke={colors.ink} strokeWidth="9" strokeLinecap="round" />
        {/* muzzle */}
        <rect x="98" y="150" width="204" height="110" rx="42" fill={colors.belly} {...line} />
        <rect x="157" y="168" width="22" height="28" rx="9" fill={colors.deep} />
        <rect x="221" y="168" width="22" height="28" rx="9" fill={colors.deep} />
        <rect x="184" y="226" width="15" height="14" rx="3" fill="#fff" {...line} strokeWidth={4} />
        <rect x="201" y="226" width="15" height="14" rx="3" fill="#fff" {...line} strokeWidth={4} />
        <path d="M150 222 Q200 238 250 222" fill="none" stroke={colors.ink} strokeWidth="7" strokeLinecap="round" />
      </g>
    </svg>
  );
}
