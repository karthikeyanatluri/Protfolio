import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createVenomEngine } from '../lib/venomEngine';

interface VenomButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  /** Only shown in the no-WebGL fallback; the WebGL button draws its label as chrome lettering. */
  icon?: React.ReactNode;
  ariaLabel?: string;
  /** Native button type; use "submit" inside forms. Ignored when `href` is set. */
  type?: 'button' | 'submit';
}

type Engine = ReturnType<typeof createVenomEngine>;

const textOf = (node: React.ReactNode): string =>
  React.Children.toArray(node)
    .map((c) => (typeof c === 'string' || typeof c === 'number' ? String(c) : ''))
    .join('')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * The Venom liquid button (https://exteestudio.github.io/venom-button/), scoped to a single button.
 * A WebGL2 canvas with transparent padding sits behind the real <a>/<button>, so tendrils can reach
 * out past the pill without affecting layout. Falls back to a plain styled pill without WebGL2.
 */
export const VenomButton: React.FC<VenomButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon,
  ariaLabel,
  type = 'button',
}) => {
  const hitRef = useRef<HTMLElement | null>(null);
  const hostRef = useRef<HTMLSpanElement>(null);
  const engineRef = useRef<Engine>(null);
  const label = useMemo(() => textOf(children), [children]);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [mode, setMode] = useState<'pending' | 'webgl' | 'fallback'>('pending');

  // create the engine once; label and variant changes are pushed in below
  useEffect(() => {
    const host = hostRef.current;
    const hit = hitRef.current;
    if (!host || !hit) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const engine = createVenomEngine(host, hit, {
      variant,
      reducedMotion: reduced,
      onLayout: (w: number, h: number) => setSize({ w: Math.round(w), h: Math.round(h) }),
      onFail: () => setMode('fallback'),
    });
    if (!engine) {
      setMode('fallback');
      return;
    }
    engineRef.current = engine;
    setMode('webgl');
    return () => {
      engine.destroy();
      engineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    engineRef.current?.setVariant(variant);
  }, [variant, mode]);

  useEffect(() => {
    if (mode === 'webgl') engineRef.current?.setLabel(label || ariaLabel || '');
  }, [label, ariaLabel, mode]);

  const webgl = mode === 'webgl';
  const estW = Math.max(180, Math.ceil(Math.ceil(label.length * 16 * 0.72) * 1.4 + 60));
  const style: React.CSSProperties = {
    width: size ? size.w : estW,
    height: size ? size.h : 60,
    flexShrink: 0,
  };

  const baseVariantClass =
    variant === 'secondary'
      ? 'glass glass-hover text-white'
      : 'glass-red text-white shadow-[0_0_24px_rgba(255,18,56,0.35)]';

  const shared = {
    ref: hitRef as React.Ref<never>,
    'aria-label': ariaLabel,
    'data-cursor': 'venom',
    onClick,
    style,
    className: `relative inline-flex items-center justify-center rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1238] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${baseVariantClass} ${className}`,
  };

  const inner = (
    <>
      {/* Canvas container for the liquid tendril simulation */}
      <span
        ref={hostRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-0 h-0 overflow-visible z-20"
      />
      {/* High-contrast crisp typography that is always guaranteed visible */}
      <span className="relative z-10 flex items-center justify-center gap-2.5 px-8 text-xs font-bold uppercase tracking-wider text-white md:text-sm pointer-events-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
        {children}
        {icon && <span className="text-[#FF1238]">{icon}</span>}
      </span>
    </>
  );

  return href ? (
    <a href={href} {...shared}>{inner}</a>
  ) : (
    <button type={type} {...shared}>{inner}</button>
  );
};
