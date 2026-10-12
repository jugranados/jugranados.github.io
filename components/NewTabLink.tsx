import type { ReactNode } from 'react';

interface NewTabLinkProps {
  href: string;
  className?: string;
  /** Announced to assistive tech after the link text. */
  hint?: string;
  children: ReactNode;
}

export default function NewTabLink({ href, className, hint = 'opens in new tab', children }: NewTabLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> ({hint})</span>
    </a>
  );
}
