import { fetchDataFromStrapi, processBlogArticles } from "@/utils/strapi.utils";

export default async function ArticlePage({ params }) {
  const { article: slug } = params;
  console.log(params);

  const rawBlogData = await fetchDataFromStrapi("blog-articles");
  const blogData = processBlogArticles(rawBlogData);

  const article = blogData.find((item) => item.slug === slug);

  return (
    <main>
      <h1>{article.headline}</h1>
    </main>
  );
}

export const revalidate = 300;
