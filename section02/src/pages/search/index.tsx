import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import BookItem from '@/components/book-item/book-item';
import fetchBooks from '@/lib/fetch-books';
import { BookData } from '@/types';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
    <>
      <Head>
        <title>한입북스 | 검색결과</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='한입북스' />
        <meta
          property='og:description'
          content='한입 북스에 등록된 도서들을  만나보세요.'
        />
      </Head>
      <main>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </main>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
