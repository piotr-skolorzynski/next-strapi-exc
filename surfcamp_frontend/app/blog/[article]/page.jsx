import { fetchDataFromStrapi, processBlogArticles } from "@/utils/strapi.utils";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";

export default async function ArticlePage({ params }) {
  const { article: slug } = params;

  const rawBlogData = await fetchDataFromStrapi("blog-articles");
  const blogData = processBlogArticles(rawBlogData);

  const article = blogData.find((item) => item.slug === slug);

  const moreArticles = blogData.filter((item) => item.slug !== slug);

  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />

        {article.articleContent.map((component) => (
          <ArticleComponent key={component.id} component={component} />
        ))}

        <FeaturedItems
          items={moreArticles}
          headline={"Explore our other articles"}
        />
      </section>
    </main>
  );
}

export const revalidate = 300;
