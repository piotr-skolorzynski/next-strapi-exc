import ArticleHeadline from "./ArticleHedline";

const ArticleComponent = ({ component }) => {
  console.log(component);
  const componentType = component.__component.split("blog-article.")[1];

  switch (componentType) {
    case "headline":
      return (
        <ArticleHeadline headline={component.headline} slug={component.slug} />
      );
    case "paragraph-with-image":
      return <h1>Paragraph with Image Component</h1>;
    case "paragraph":
      return <h1>Paragraph Component</h1>;
    case "landscape-image":
      return <h1>Landscape Image Component</h1>;
    default:
      return <div>Unknown component type: {componentType}</div>;
  }
};

export default ArticleComponent;
