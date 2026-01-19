import Link from "next/link";
import { formatDate, extractImageUrl } from "@/utils/strapi.utils";

const FeaturedEvent = ({ event }) => {
  return (
    <Link
      href={`/events/${event.documentId}`}
      className="featured-items__article"
    >
      <div className="featured-items__article-img">
        <img
          src={extractImageUrl({ url: event.image.url })}
          alt={`Go checkout the event ${event.name}`}
        />
      </div>

      <div className="featured-items__article-text featured-items__article-text--event">
        <h5 className="featured-items__article-text--headline">{event.name}</h5>
        <p className="copy-small">{formatDate(event.startingDate)}</p>
        <p className="copy-small">Prices starting at {event.sharedPrice}€</p>
      </div>
    </Link>
  );
};

export default FeaturedEvent;
