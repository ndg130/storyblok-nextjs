import Link from "next/link";
// Import the Link component from Next.js for client-side navigation.

export const RecommendedTour = (props: any) => {
  // Define a functional component named RecommendedTour that receives props.

  return (
    <div className="bg-white rounded-sm shadow">
      {/* Wrapper div for the recommended tour with styling for background, rounded corners, and shadow. */}
      
      <img
        className="aspect-video object-cover w-full"
        // Apply styling to ensure the image maintains a 16:9 aspect ratio, covers the container, and is full-width.
        src={`${props.story.content.main_image.filename}/m/736x414/filters:quality(70)`}
        // Set the image source URL, resizing it to 736x414 pixels with quality filter.
        width={736}
        height={414}
        // Define the width and height attributes for the image.
        alt={props.story.content.main_image.alt}
        // Provide alternative text for the image.
        loading={"lazy"}
        // Enable lazy loading for the image to improve performance.
      />
      
      <div className="p-8">
        {/* Container for the tour details with padding. */}
        
        <div className="flex gap-4 justify-between text-lg font-bold">
          {/* Flex container to display the tour name and price side by side with spacing and bold text. */}
          
          <h3>{props.story.content.name}</h3>
          {/* Display the name of the tour. */}
          
          <p>
            {Number(props.story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "TWD",
              minimumFractionDigits: 0,
            })}
            {/* Format the price as currency (New Taiwan Dollar) with no decimal places. */}
          </p>
        </div>
        
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {/* Display the location of the tour in uppercase, bold, small text, with wide tracking. */}
          {props.story.content.location}, Taiwan
        </p>
        
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${props.story.full_slug}`}
        >
          View Tour
          {/* Provide a link to view the full tour details, styled with bold text and underlined. */}
        </Link>
      </div>
    </div>
  );
};
