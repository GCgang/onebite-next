import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item/book-item';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
};
export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
