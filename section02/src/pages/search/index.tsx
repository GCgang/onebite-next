import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item/book-item';

export default function Page() {
  const router = useRouter();
  const queryParam = router.query.q;

  return (
    <main>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </main>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
