import BookItem from '@/components/book-item/book-item';
import { BookData } from '@/types';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`
  );

  if (!response.ok) {
    <div>오류가 발생 했습니다...</div>;
  }

  const searchBooks: BookData[] = await response.json();

  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
