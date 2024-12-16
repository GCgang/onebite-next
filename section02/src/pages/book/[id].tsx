import style from './[id].module.css';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchOneBook from '@/lib/fetch-one-book';
import { useRouter } from 'next/router';
import { notFound } from 'next/navigation';

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      book,
    },
  };
};
export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return '로딩중 입니다...';
  }
  if (!book) {
    return '문제가 발생 했습니다 다시 시도해 보세요.';
  }
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <main className={style.container}>
      {id}
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
