import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item/book-item';
import { InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';
import Head from 'next/head';

export const getStaticProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    // revalidate: 3,
  };
};
export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='한입북스' />
        <meta
          property='og:description'
          content='한입 북스에 등록된 도서들을  만나보세요.'
        />
      </Head>
      <main>
        <section>
          <h2>지금 추천하는 도서</h2>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h2>등록된 모든 도서</h2>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </main>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
