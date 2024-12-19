import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>임시 서치바</p>
      {children}
    </div>
  );
}
