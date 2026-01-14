import axios from "axios";

const BASE_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(endpoint, params = "pLevel=5") {
  const url = `${BASE_URL}/api/${endpoint}?${params}`;

  try {
    const response = await axios.get(url);
    return processInfoBlocks(response.data.data);
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function processInfoBlocks(data) {
  return data.info_blocks.map((block) => ({
    ...block,
    image: BASE_URL + block.image.url,
  }));
}
