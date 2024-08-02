import {
    renderRichText,
    storyblokEditable,
    ISbNode,
    RichTextSchema,
  } from "@storyblok/react/rsc";
  // Import necessary functions and types from the Storyblok React SDK.
  // - `renderRichText`: Renders rich text fields from Storyblok.
  // - `storyblokEditable`: Adds live editing attributes for Storyblok's visual editor.
  // - `ISbNode`: Type for Storyblok rich text nodes.
  // - `RichTextSchema`: Schema for handling rich text content.
  
  import Image from "next/image";
  // Import the Image component from Next.js for optimized image rendering.
  
  export const Tour = (props: any) => {
    // Define a functional component named Tour that receives props.
  
    return (
      <main
        {...storyblokEditable(props.blok)}
        // Apply storyblokEditable to the main element to enable live editing in Storyblok's editor.
        // This function attaches the necessary attributes for real-time content editing.
        className="container mx-auto px-4 w-full pt-32 pb-16"
        // Apply styling to the main element for layout and spacing.
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          {props.blok.name}
          {/* Render the name of the tour as a heading. The text size adjusts responsively for different screen sizes. */}
        </h1>
        
        <Image
          className="mt-12"
          src={props.blok.main_image.filename}
          // Set the image source URL from the `main_image` field in props.blok.
          alt={props.blok.main_image.alt}
          // Set the alternative text for the image.
          width={props.blok.main_image.filename.split("/")[5].split("x")[0]}
          height={props.blok.main_image.filename.split("/")[5].split("x")[1]}
          // Extract the width and height from the image filename to set the dimensions.
          sizes="(max-width: 1538px) 100vw, 1504px"
          // Specify image sizes for responsive design. The image will take 100% width up to 1538px and 1504px beyond that.
          priority={true}
          // Mark the image as high priority for early loading.
        />
        
        <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
          {props.blok.introduction}
          {/* Render the introduction text with responsive styling for font size and line height. */}
        </p>
        
        <div
          className="prose md:prose-lg mt-16 max-w-none"
          // Apply styling for rich text content with a maximum width of none for full-width display.
          dangerouslySetInnerHTML={{
            __html: renderRichText(props.blok.body, {
              // Render the rich text body from props.blok.body.
              schema: {
                ...RichTextSchema,
                nodes: {
                  ...RichTextSchema.nodes,
                  image: (node: ISbNode) => ({
                    singleTag: [
                      {
                        tag: "img",
                        attrs: {
                          src: `${node.attrs.src}/m/1504x0/filters:quality(75)`,
                          alt: node.attrs.alt,
                          loading: "lazy",
                          width: node.attrs.src.split("/")[5].split("x")[0],
                          height: node.attrs.src.split("/")[5].split("x")[1],
                        },
                      },
                    ],
                  }),
                },
              },
            }),
          }}
        ></div>
        {/* Render the rich text content with custom schema for images. Images are resized and optimized. */}
      </main>
    );
  };
  