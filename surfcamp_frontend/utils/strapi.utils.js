import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(endpoint, params = "pLevel=5") {
  const url = `${BASE_URL}/api/${endpoint}?${params}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function processInfoBlocks(data) {
  return data.info_blocks.map((block) => ({
    ...block,
    image: BASE_URL + block.image.url,
    button: createInfoBlockButton(block.button),
  }));
}

function createInfoBlockButton(buttonData) {
  if (!buttonData) {
    return null;
  }

  return (
    <Link
      href={`${buttonData.slug}`}
      className={`btn btn--medium btn--${buttonData.colour}`}
    >
      {buttonData.text}
    </Link>
  );
}

export function processBlogArticles(data) {
  return data.map((article) => ({
    ...article,
    featuredImage: BASE_URL + article.featuredImage.url,
  }));
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
}

export function extractImageUrl(imageData) {
  return BASE_URL + imageData.url;
}

export async function fetchIndividualEvent(eventId) {
  const response = await axios.get(`${BASE_URL}/api/events/${eventId}`);

  return response.data.data;
}

export function generateSignupPayload(formData, eventId) {
  if (!eventId) {
    return {
      data: { ...formData, isGeneralInterest: true },
    };
  } else {
    return { data: { ...formData, event: { connect: [eventId] } } };
  }
}
