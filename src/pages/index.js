import * as React from "react";

import { graphql } from "gatsby";
import useStoryblok from "../lib/storyblok";
import DynamicComponent from "../components/dynamicComponent";

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry;
  story = useStoryblok(story, location);

  const components = story.content.body.map((blok) => {
    return <DynamicComponent blok={blok} key={blok._uid} />;
  });

  return (
    <div>
      <h1>{story.content.title}</h1>
      {components}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
    }
  }
`;
