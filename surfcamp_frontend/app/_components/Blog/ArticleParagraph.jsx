"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ArticleParagraph = ({ paragraph }) => {
  console.log(paragraph);
  return (
    <div className="article-paragraph">
      <BlocksRenderer content={paragraph} />
    </div>
  );
};

export default ArticleParagraph;
