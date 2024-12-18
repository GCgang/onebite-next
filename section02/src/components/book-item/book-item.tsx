import { BookData } from '@/types';
import Link from 'next/link';
import style from './book-item.module.css';

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} alt='book cover image' />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
