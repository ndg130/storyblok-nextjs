const storyblokImageLoader = ({ src, width, quality }) => {
    // Define a function named storyblokImageLoader that takes an object with src, width, and quality properties.
  
    return `${src}/m/${width}x0/filters:quality(${quality || 75})`;
    // Construct and return a URL string for the image.
    // - `${src}`: The base URL of the image provided as the `src` parameter.
    // - `/m/${width}x0`: Appends a resizing parameter to set the width of the image and maintain the aspect ratio (height is set to 0, which usually means automatic height).
    // - `/filters:quality(${quality || 75})`: Adds a quality filter to the URL. If `quality` is not provided, it defaults to 75.
  };
  
  export default storyblokImageLoader;
  // Export the storyblokImageLoader function as the default export of the module.
  