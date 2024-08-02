import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
// Import the StoryblokComponent and storyblokEditable functions from the Storyblok React SDK.
// StoryblokComponent is used to render various Storyblok components dynamically.
// storyblokEditable is used to add live editing capabilities.

export const Page = (params: any) => {
  // Define a functional component named Page that receives params as a prop.
  
  return (
    <main {...storyblokEditable(params.blok)}>
      {/* Apply the storyblokEditable function to the main element to enable live editing for the entire page.
          This function attaches necessary attributes for the Storyblok visual editor to work. */}
      
      {params.blok.blocks.map((blok: any) => (
        // Iterate over each block within the page content.
        <StoryblokComponent blok={blok} key={blok._uid} />
        // Render each block using the StoryblokComponent.
        // The key attribute helps React identify which items have changed, are added, or are removed.
      ))}
    </main>
  );
};
