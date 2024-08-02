import { RecommendedTour } from "./RecommendedTour";
// Import the RecommendedTour component for rendering individual tour recommendations.

import { storyblokEditable } from "@storyblok/react/rsc";
// Import the storyblokEditable function to enable live editing capabilities.

export const RecommendedTours = (params: any) => {
  // Define a functional component named RecommendedTours that receives params as a prop.

  return (
    <section
      {...storyblokEditable(params.blok)}
      // Apply storyblokEditable to the section element to enable live editing for this section.
      // This function adds necessary attributes for Storyblok's visual editor.
      className="py-16 container mx-auto w-full px-4"
      // Apply styling to the section element with vertical padding, container width, and horizontal padding.
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {params.blok.headline}
        {/* Render the headline from params.blok in a large, bold, centered text. */}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {/* Create a grid layout to display tour items, with responsive columns and spacing. */}
        
        {params.blok.tours.map((tour: any) => (
          // Iterate over the tours array within params.blok.
          <RecommendedTour story={tour} key={tour.content._uid} />
          // Render each tour using the RecommendedTour component.
          // The key attribute helps React manage list updates efficiently.
        ))}
      </div>
    </section>
  );
};
