import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "../utils/strapi.utils";

export default async function Home() {
  const infoBlocksRawData = await fetchDataFromStrapi("infoblocks-landing");
  const infoBlocksData = processInfoBlocks(infoBlocksRawData);

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

      {infoBlocksData.map((infoBlock) => (
        <InfoBlock key={infoBlock.id} data={infoBlock} />
      ))}
    </main>
  );
}

export const revalidate = 300;
