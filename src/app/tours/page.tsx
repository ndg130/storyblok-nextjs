import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
// Import the getStoryblokApi function and StoryblokStory component from the Storyblok React SDK.

import { RecommendedTour } from "@/components/RecommendedTour";
// Import the RecommendedTour component from the local components directory.

import { draftMode } from "next/headers";
// Import the draftMode function from Next.js headers to check if draft mode is enabled.

const fetchToursPage = async () => {
  // Define an async function to fetch the main tours page content.
  
  const { isEnabled } = draftMode();
  // Check if draft mode is enabled.

  const client = getStoryblokApi();
  // Initialize the Storyblok API client.
  
  const response = await client.getStory(`tours`, {
    // Fetch the main tours page content by slug.
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    // Use draft version if in development or if draft mode is enabled, otherwise use published version.
  });

  return response.data.story;
  // Return the fetched story data for the tours page.
};

const fetchAllTours = async () => {
  // Define an async function to fetch all tour stories.
  
  const { isEnabled } = draftMode();
  // Check if draft mode is enabled.

  const client = getStoryblokApi();
  // Initialize the Storyblok API client.
  
  const response = await client.getStories({
    // Fetch all stories of type "tour".
    content_type: "tour",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    // Use draft version if in development or if draft mode is enabled, otherwise use published version.
  });

  return response.data.stories;
  // Return the fetched stories for all tours.
};

const ToursPage = async () => {
  // Define an async component for the tours page.
  
  const story = await fetchToursPage();
  // Fetch the main tours page content.

  const tours = await fetchAllTours();
  // Fetch all tour stories.

  return (
    <div>
      <StoryblokStory story={story} />
      {/* Render the main tours page content using the StoryblokStory component. */}
      
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {/* Define a grid layout for displaying the recommended tours. */}
        
        {tours.map((tour) => (
          // Iterate over each tour story to render it using the RecommendedTour component.
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
// Export the ToursPage component as the default export.
