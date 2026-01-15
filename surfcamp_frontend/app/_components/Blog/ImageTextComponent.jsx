"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { extractImageUrl } from "@/utils/strapi.utils.js";

const ImageTextComponent = ({ component }) => {
  const { paragraph, image, imageCaption, isLandscape, imageShowsRight } =
    component;
  return (
    <div
      className={`article-text-image ${
        isLandscape ? "" : "article-text-image--portrait"
      } ${imageShowsRight ? "" : "article-text-image--reversed"}`}
    >
      <BlocksRenderer
        content={paragraph}
        blocks={{
          paragraph: ({ children }) => (
            <p className="copy article-text-image__text article-paragraph">
              {children}
            </p>
          ),
        }}
      />

      <div className="article-text-image__container">
        <div className="article-text-image__image">
          <img
            className="article-text-image__image"
            src={extractImageUrl(image)}
            alt=""
          />

          {component.imageCaption && (
            <p className="article-text-image__caption copy--small">
              {imageCaption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
