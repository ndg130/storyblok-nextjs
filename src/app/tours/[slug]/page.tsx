import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
// Import the getStoryblokApi function and StoryblokStory component from the Storyblok React SDK.

import { draftMode } from "next/headers";
// Import the draftMode function from Next.js headers to check if draft mode is enabled.

export const generateStaticParams = async () => {
  // Define an async function to generate static parameters for static site generation (SSG).
  
  const client = getStoryblokApi();
  // Initialize the Storyblok API client.
  
  const response = await client.getStories({
    // Fetch stories from Storyblok with specific content type.
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    // Use draft version in development, published version in production.
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
  // Map the fetched stories to an array of objects containing slugs.
  // These slugs are used to generate static paths for dynamic routes.
};

const fetchTourPage = async (slug: string) => {
  // Define an async function to fetch data for a specific tour page using the slug.
  
  const { isEnabled } = draftMode();
  // Check if draft mode is enabled.

  const client = getStoryblokApi();
  // Initialize the Storyblok API client.
  
  const response = await client.getStory(`tours/${slug}`, {
    // Fetch a specific story (tour) by slug.
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    // Use draft version if in development or draft mode is enabled, otherwise use published version.
  });

  return response.data.story;
  // Return the fetched story data.
};

const TourPage = async (props: any) => {
  // Define an async component for the tour page.
  const story = await fetchTourPage(props.params.slug);
  // Fetch the tour data using the slug from the page props.

  return <StoryblokStory story={story} />;
  // Render the StoryblokStory component with the fetched story data.
};

export default TourPage;
// Export the TourPage component as the default export.
