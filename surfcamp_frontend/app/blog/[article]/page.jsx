import { fetchDataFromStrapi, processBlogArticles } from "@/utils/strapi.utils";
import ArticleIntro from "../../_components/Blog/ArticleIntro";

export default async function ArticlePage({ params }) {
  const { article: slug } = params;
  console.log(params);

  const rawBlogData = await fetchDataFromStrapi("blog-articles");
  const blogData = processBlogArticles(rawBlogData);

  const article = blogData.find((item) => item.slug === slug);

  return (
    <main>
      <ArticleIntro article={article} />
    </main>
  );
}

export const revalidate = 300;
