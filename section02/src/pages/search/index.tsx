import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import BookItem from '@/components/book-item/book-item';
import fetchBooks from '@/lib/fetch-books';
import { BookData } from '@/types';
import { useRouter } from 'next/router';

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const q = context.query.q; // GetStaticPropsContext는 빌드타임에 한번 실행되므로 query 없음
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books,
//     },
//   };
// };
export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    fetchSearchResult();
  }, [q]);

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
