import {
  fetchDataFromStrapi,
  processBlogArticles,
} from "../../../utils/strapi.utils";
import BlogPreviewItem from "./BlogPreviewItem";

const BlogPreview = async () => {
  const rawData = await fetchDataFromStrapi("blog-articles");
  ("blog-articles");
  const data = processBlogArticles(rawData);
  const highlightedArticle = data.find((article) => article.isHighlightArticle);
  const recentlyPublishedArticles = data
    .filter((article) => !article.isHighlightArticle)
    .slice(0, 3);

  const articlesToDisplay = [highlightedArticle, ...recentlyPublishedArticles];

  return (
    <div className="blog-preview">
      <h2 className="blog-preview__headline">the blog.</h2>

      <div className="blog-preview__container">
        {articlesToDisplay.map((article) => (
          <BlogPreviewItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
