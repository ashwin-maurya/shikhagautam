import React from "react";
import BrandLogo from "../section/Home/BrandLogo";
import HeroAbout from "../section/Home/HeroAbout";
import Content from "../section/Home/Content";
import NewsletterHero from "../section/Home/NewsletterHero";
import HomeAbout from "../section/Home/HomeAbout";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Shikha Gautam</title>
        <meta
          name="description"
          content="Shikha Gautam is created by Shikha Gautam. It is a collection of the best that’s happening in the world of travel & hospitality, including handpicked stays, unforgettable food experiences, mythology & folk tales, indigenous cultures - their practices and rituals, and about people you cannot forget easily."
        />
      </Helmet>
      <main>
        <div className="max-w-screen-xl xl:max-w-screen-xl 2xl:mx-10 2xl:max-w-screen-2xl  max-md:mt-0 max-md:pt-5">
          <HomeAbout />
        </div>
        <div className="mx-auto max-w-screen-xl 2xl:max-w-screen-xl pt-0 max-md:pt-5">
          <BrandLogo />
        </div>
        <div className="mx-auto max-w-screen-xl 2xl:max-w-screen-xl mt-20 pt-0 max-md:pt-5">
          <Content />
        </div>
        <div className="mx-auto pt-28 max-md:pt-10">
          <NewsletterHero />
        </div>
        <div className="mx-auto mt-20 pt-0 max-md:pt-5">
          <HeroAbout />
        </div>
      </main>
    </>
  );
}
