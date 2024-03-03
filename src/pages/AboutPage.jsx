import React from "react";
import AboutInfo from "../section/About/AboutInfo";
import { Helmet } from "react-helmet";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Shikha Gautam</title>
        <meta
          name="description"
          content="Shikha Gautam is created by Shikha Gautam. It is a collection of the best that's happening in the world of travel & hospitality, including handpicked stays, unforgettable food experiences, mythology & folk tales, indigenous cultures - their practices and rituals, and about people you cannot forget easily."
        />
      </Helmet>
      <AboutInfo />
    </>
  );
}
