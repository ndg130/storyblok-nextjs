"use client";
// The "use client" directive indicates that this file should be treated as a client-side module in Next.js.
// This is necessary for certain operations that require client-side execution.

import type { PropsWithChildren } from "react";
// Import PropsWithChildren type from React for type-checking props that include children.

import { storyblokInit } from "@storyblok/react/rsc";
// Import the storyblokInit function from the Storyblok React SDK for initializing Storyblok components.

import { Tour } from "./Tour";
// Import the Tour component for rendering individual tour content.

import { Page } from "./Page";
// Import the Page component for rendering dynamic pages.

import { Hero } from "./Hero";
// Import the Hero component for rendering hero sections.

import { Grid } from "./Grid";
// Import the Grid component for rendering grid layouts.

import { Feature } from "./Feature";
// Import the Feature component for rendering feature blocks.

import { Testimonial } from "./Testimonial";
// Import the Testimonial component for rendering customer testimonials.

import { RecommendedTours } from "./RecommendedTours";
// Import the RecommendedTours component for rendering a section of recommended tours.

storyblokInit({
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },
  enableFallbackComponent: true,
  // Initialize Storyblok with custom components and enable fallback component functionality.
  // The fallback component is used when a component is not found in the Storyblok configuration.
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  // Define a functional component named StoryblokProvider that receives children as props.

  return <>{children}</>;
  // Render the children props without any additional wrapping or modifications.
  // This component acts as a wrapper to provide Storyblok configuration context.
};
