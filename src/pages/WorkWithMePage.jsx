import React from "react";
import WorkWithMeHero from "../section/Workwithme/WorkWithMeHero";
import ContactForm from "../section/Workwithme/ContactForm";
import { Helmet } from "react-helmet";

export default function WorkWithMePage() {
  return (
    <>
      <Helmet>
        <title>Work With Me | Shikha Gautam</title>
        <meta
          name="description"
          content="Shikha Gautam is created by Shikha Gautam. It is a collection of the best that’s happening in the world of travel & hospitality, including handpicked stays, unforgettable food experiences, mythology & folk tales, indigenous cultures - their practices and rituals, and about people you cannot forget easily."
        />
      </Helmet>
      <div className="mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <WorkWithMeHero />
      </div>
      <div className="mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <ContactForm />
      </div>
    </>
  );
}
