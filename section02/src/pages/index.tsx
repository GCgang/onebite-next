import SearchableLayout from '@/components/searchable-alyout/searchable-layout';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item/book-item';
export default function Home() {
  return (
    <main>
      <section>
        <h2>지금 추천하는 도서</h2>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h2>등록된 모든 도서</h2>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
