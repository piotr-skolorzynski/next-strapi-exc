import { fetchDataFromStrapi, processBlogArticles } from "@/utils/strapi.utils";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";

export default async function ArticlePage({ params }) {
  const { article: slug } = params;
  console.log(params);

  const rawBlogData = await fetchDataFromStrapi("blog-articles");
  const blogData = processBlogArticles(rawBlogData);

  const article = blogData.find((item) => item.slug === slug);

  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
      </section>
    </main>
  );
}

export const revalidate = 300;
