const ArticleHedline = ({ headline, slug }) => {
  return (
    <h3 id={slug} className="article-headline">
      {headline}
    </h3>
  );
};

export default ArticleHedline;
