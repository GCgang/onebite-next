import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Page() {
  const router = useRouter();

  const queryParam = router.query.q;
  return (
    <div>
      <h1>Search</h1>
      <p>검색어 : {queryParam}</p>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
