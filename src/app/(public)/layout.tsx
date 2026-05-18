import type { ReactNode } from 'react';

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <main className="min-h-screen   py-12">
      {children}
    </main>
  );
}

