import type { ReactNode } from 'react';

export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={className}><div className="shell">{children}</div></section>;
}
