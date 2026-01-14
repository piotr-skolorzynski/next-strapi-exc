import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import { fetchDataFromStrapi } from "../utils/strapi.utils";

export default async function Home() {
  const infoBlocksData = await fetchDataFromStrapi("infoblocks-landing");

  console.log("infoBlocksData: ", infoBlocksData);

  const headline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={headline} />
      {/* <InfoBlock data={infoBlockData} />
      <InfoBlock data={{ ...infoBlockData, reversed: true }} /> */}
    </main>
  );
}
