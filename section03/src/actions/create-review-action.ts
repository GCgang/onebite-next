'use server';
export default async function createReviewAction(formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!bookId || !content || !author) {
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: 'Post',
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    console.log(response.status);
  } catch (error) {
    console.error(error);
    return;
  }
}
