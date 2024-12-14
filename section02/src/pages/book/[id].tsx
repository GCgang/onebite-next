import book from '@/mock/book.json';
import style from './[id].module.css';

export default function Page() {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <main className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url(${coverImgUrl})` }}
      >
        <img src={coverImgUrl} alt='book cover image' />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </main>
  );
}
