import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
// Import the getStoryblokApi function and StoryblokStory component from the Storyblok React SDK.

import { draftMode } from "next/headers";
// Import the draftMode function from Next.js headers to check if draft mode is enabled.

const fetchHomePage = async () => {
  // Define an async function to fetch the home page content.
  
  const { isEnabled } = draftMode();
  // Check if draft mode is enabled.

  const client = getStoryblokApi();
  // Initialize the Storyblok API client.
  
  const response = await client.getStory(`home`, {
    // Fetch the home page content by slug ("home").
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    // Use draft version if in development or if draft mode is enabled, otherwise use published version.
    resolve_relations: "recommended_tours.tours",
    // Resolve relations to fetch related content for "recommended_tours.tours".
  });

  return response.data.story;
  // Return the fetched story data for the home page.
};

const HomePage = async () => {
  // Define an async component for the home page.
  
  const story = await fetchHomePage();
  // Fetch the home page content.

  return (
    <StoryblokStory
      bridgeOptions={{ resolveRelations: ["recommended_tours.tours"] }}
      // Pass bridgeOptions to resolve relations for "recommended_tours.tours".
      story={story}
      // Render the fetched story data using the StoryblokStory component.
    />
  );
};

export default HomePage;
// Export the HomePage component as the default export.
