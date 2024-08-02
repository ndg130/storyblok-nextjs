import { draftMode } from "next/headers"; 
// Import the draftMode function from Next.js headers to enable draft mode.

import { redirect } from "next/navigation"; 
// Import the redirect function from Next.js navigation to handle URL redirection.

import { NextRequest } from "next/server"; 
// Import the NextRequest type from Next.js server to type-check the request parameter.

/**
 * The GET function is an asynchronous function that handles GET requests.
 * It takes a NextRequest object as a parameter and processes the request.
 * This function extracts query parameters from the request URL, enables draft mode,
 * and then redirects the user to a new URL based on the 'slug' query parameter.
 */
export const GET = async (request: NextRequest) => {
  // Parse the request URL to extract query parameters.
  const { searchParams } = new URL(request.url); 
  
  // Get the value of the 'slug' query parameter from the URL.
  const slug = searchParams.get("slug");

  // Enable draft mode. This might be useful for previewing content before it's published.
  draftMode().enable();
  
  // Redirect the user to a new URL that includes the 'slug' and any other query parameters.
  redirect(`/${slug}?${searchParams.toString()}`);
};
