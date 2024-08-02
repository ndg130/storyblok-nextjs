import { storyblokEditable } from "@storyblok/react/rsc";
// Import the storyblokEditable function from the Storyblok React SDK for enabling live editing capabilities.

export const Feature = (params: any) => {
  // Define a functional component named Feature that receives params as a prop.
  
  return (
    <div
      {...storyblokEditable(params.blok)}
      // Apply the storyblokEditable function to the div element to enable live editing.
      // This function adds the necessary attributes for Storyblok's visual editor.
      className="bg-white p-8 rounded-sm shadow"
      // Apply styling to the div with a white background, padding, rounded corners, and shadow.
    >
      <h3 className="font-bold text-3xl">{params.blok.headline}</h3>
      {/* Render the headline from params.blok with bold font and a large text size. */}
      
      <p className="mt-6 text-lg">{params.blok.content}</p>
      {/* Render the content from params.blok with a margin-top and larger text size. */}
    </div>
  );
};
