import React from 'react';

// Tailwind class tokens for common text/background colors used across the app
export const textPrimary = 'text-foreground';
export const bgPrimary = 'bg-brand text-white';
export const textMuted = 'text-muted-foreground';
export const textMutedLight = 'text-muted-foreground/80';
export const cardBg = 'bg-card text-card-foreground';

export const PrimaryText: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <span className={`${textPrimary} ${className}`.trim()}>{children}</span>
);

export const BodyText: React.FC<React.PropsWithChildren<{ as?: any; className?: string }>> = ({ as: Comp = 'p', children, className = '' }) => (
  <Comp className={`${textMuted} ${className}`.trim()}>{children}</Comp>
);

export const PrimaryBg: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`${bgPrimary} ${className}`.trim()}>{children}</div>
);

export default {
  textPrimary,
  bgPrimary,
  textMuted,
  textMutedLight,
  cardBg,
  PrimaryText,
  BodyText,
  PrimaryBg,
};
