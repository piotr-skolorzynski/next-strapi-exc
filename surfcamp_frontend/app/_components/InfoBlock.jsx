import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const InfoBlock = ({ data }) => {
  const { headline, text, showImageRight, image } = data;

  return (
    <div className={`info ${showImageRight ? "info--reversed" : ""}`}>
      <img className="info__image" src={image} alt="" />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <BlocksRenderer content={text} />
        <button></button>
      </div>
    </div>
  );
};

export default InfoBlock;
