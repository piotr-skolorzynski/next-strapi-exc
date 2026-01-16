import SignupForm from "@/app/_components/Events/SignupForm";
import {
  fetchDataFromStrapi,
  fetchIndividualEvent,
} from "@/utils/strapi.utils";

const page = async ({ params }) => {
  const { eventId: slug } = params;
  const event = await fetchIndividualEvent(slug);
  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  };

  return (
    <main className="events-page">
      <SignupForm
        headline={event.name}
        infoText={event.description}
        buttonLabel="Sign Up"
        pricing={pricing}
      />
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
