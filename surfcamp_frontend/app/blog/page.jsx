import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchDataFromStrapi, processBlogArticles } from "@/utils/strapi.utils";

export default async function Blog() {
  const rawBlogData = await fetchDataFromStrapi("blog-articles");
  const blogData = processBlogArticles(rawBlogData);
  const sortedBlogData = blogData.toSorted(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const highlightArticle =
    sortedBlogData.find((article) => article.isHighlightArticle) ||
    sortedBlogData[0];

  const featuredArticles = sortedBlogData.filter(
    (article) => !article.isHighlightArticle
  );

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticle} />

      <SubscribeToNewsletter />

      <FeaturedItems items={featuredArticles} />
    </main>
  );
}

export const revalidate = 300;
