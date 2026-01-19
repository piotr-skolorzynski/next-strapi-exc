import SignupForm from "@/app/_components/Events/SignupForm";
import FeaturedEvent from "@/app/_components/FeaturedItems/FeaturedEvent";
import {
  fetchDataFromStrapi,
  fetchIndividualEvent,
  fetchAllEvents,
} from "@/utils/strapi.utils";

const page = async ({ params }) => {
  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);
  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  };
  const otherEvents = await fetchAllEvents(eventId);

  return (
    <main className="events-page">
      <SignupForm
        headline={event.name}
        infoText={event.description}
        buttonLabel="Sign Up"
        pricing={pricing}
        eventId={eventId}
      />

      <h3 className="featured-items__headline">Explore our other events</h3>

      <div className="featured-items__container">
        {otherEvents.map((event) => (
          <FeaturedEvent key={event.documentId} event={event} />
        ))}
      </div>
    </main>
  );
};

export default page;

export async function generateStaticParams() {
  try {
    const events = await fetchDataFromStrapi("events", "");
    const slugs = events.map((event) => ({
      eventId: String(event.documentId),
    }));

    return slugs;
  } catch (error) {
    console.log("Error fetching slugs for events", error);
  }
}

export const revalidate = 300;
