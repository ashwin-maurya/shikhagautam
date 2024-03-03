import React from "react";
// import HomeBanner from "@public/images/HomeBanner.jpeg";
export default function HeroAbout() {
  return (
    <>
      <div className="relative min-h-[600px] h-[600px] max-sm:h-[800px] overflow-hidden bg-black  text-white">
        <div
          className="h-full w-full place-items-center bg-cover bg-top max-sm:bg-left bg-no-repeat opacity-100 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url("/images/HomeBanner.jpeg")`,
          }}
        >
          <div className="absolute top-20 right-56 max-sm:right-5 max-sm:top-auto max-sm:bottom-5 flex items-center justify-center max-md:w-full max-md:flex-col-reverse rotate-2 py-12 max-sm:py-5 bg-white p-10 max-sm:p-5 max-sm:w-[90%]">
            <div className="absolute w-40 h-10 bg-[#00000091] top-0 -right-10 rotate-[25deg] backdrop-blur-sm"></div>
            <div className="flex  w-full max-w-[400px] flex-col  mix-blend-difference max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5  ">
              <h1 className="relative text-center pb-5 font-sans text-5xl font-semibold capitalize antialiased max-md:text-3xl max-sm:pb-2">
                KahaanI Studio
              </h1>
              <p className="pb-5 font-sans text-xl text-center antialiased max-md:text-base">
                KahaanI Studio is created by Shikha Gautam. It is a collection
                of the best that’s happening in the world of travel &
                hospitality, including handpicked stays, unforgettable food
                experiences, mythology & folk tales, indigenous cultures - their
                practices and rituals, and about people you cannot forget
                easily.
              </p>
            </div>
            <div className="absolute w-40 h-10 bg-[#00000091] bottom-0 -left-10 rotate-[25deg] backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
}
