import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) {
  return (
    <div>
      <Link href={'/paraller'}>Paraller</Link>
      &nbsp;
      <Link href={'/paraller/setting'}>Paraller setting</Link>
      <br />
      <br />
      {sidebar}
      {feed}
      {children}
    </div>
  );
}
