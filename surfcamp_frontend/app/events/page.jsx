import SignupForm from "../_components/Events/SignupForm";
import { fetchAllEvents } from "@/utils/strapi.utils";

const Events = async () => {
  const allEvents = await fetchAllEvents();
  console.log("-----------------------------------------------");
  console.log(allEvents);

  console.log("-----------------------------------------------");

  const infoText = (
    <>
      <p className="copy">
        🌊 Discover the Thrill of the Ocean Drag Ever dreamt of riding the waves
        but didn't know where to start? Our Beginner's Bootcamp is your passport
        to the exciting world of surfing. We've designed a 3-day immersive
        experience to turn your aspirations into real ocean adventures. Drag
        Drag
      </p>
      <p className="copy">
        {" "}
        🏄‍♂️ What You'll Learn: Drag Ocean Awareness: Dive deep into understanding
        the sea, its moods, and what makes a spot perfect for surfing.\ Drag
        Board Basics: Get familiar with your board, from nose to tail, and
        understand the different types.\ Drag Safety First: Learn essential
        safety protocols, from handling rip currents to surf etiquette.\ Drag
        Catching Your First Wave: Experience the thrill as you paddle out, spot
        your wave, and enjoy your first ride towards the shore. Drag Drag
      </p>
      <p className="copy">
        🌅 Why Choose Our Bootcamp? Drag Expert Instructors: Our certified
        professionals are passionate about the sport and dedicated to ensuring
        you catch your first wave with confidence.\ Drag Personalized Attention:
        We believe in a student-focused approach. With small group sizes, we
        ensure everyone gets the guidance they need.\ Drag Top-Notch Equipment:
        We provide the latest and safest gear to set you on the path to becoming
        an adept surfer. Drag Drag
      </p>
      <p className="copy">
        🍍 Extras: Drag Refreshing beachside snacks and drinks. Drag Capture the
        moment: Complimentary photos of your first wave. Drag A certificate of
        completion to commemorate your journey. Drag Drag
      </p>
      <p className="copy">
        🌴 Join Us and Make Waves Drag Embark on a journey of discovery, fun,
        and excitement. The ocean is calling, and the waves are waiting. Sign up
        today and ride the wave of a lifetime!
      </p>
    </>
  );

  const headline = "You want to stay tuned for our events?";

  return (
    <main className="events-page">
      <SignupForm infoText={infoText} headline={headline} />
    </main>
  );
};

export default Events;
