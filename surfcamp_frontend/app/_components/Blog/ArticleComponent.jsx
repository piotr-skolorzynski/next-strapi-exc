import ArticleHeadline from "./ArticleHedline";
import ImageTextComponent from "./ImageTextComponent";
import ArticleParagraph from "./ArticleParagraph";
import LandscapeImage from "./LandscapeImage";

const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split("blog-article.")[1];

  switch (componentType) {
    case "headline":
      return (
        <ArticleHeadline headline={component.headline} slug={component.slug} />
      );
    case "paragraph-with-image":
      return <ImageTextComponent component={component} />;
    case "paragraph":
      return <ArticleParagraph paragraph={component.paragraph} />;
    case "landscape-image":
      return <LandscapeImage imageData={component} />;
    default:
      return <div>Unknown component type: {componentType}</div>;
  }
};

export default ArticleComponent;
