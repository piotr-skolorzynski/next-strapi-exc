import HeroSection from "../_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";
import { fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Experience() {
  const infoBlocksData = await fetchDataFromStrapi("infoblocks-experience");

  const headline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        headline={headline}
        theme="orange"
        imgSrc="/assets/hero-experience.png"
      />

      {infoBlocksData.map((infoBlock) => (
        <InfoBlock key={infoBlock.id} data={infoBlock} />
      ))}
    </main>
  );
}

export const revalidate = 300;
