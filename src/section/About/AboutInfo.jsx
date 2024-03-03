import React from "react";
export default function AboutInfo() {
  return (
    <>
      <div className=" flex h-full w-full flex-col items-center max-md:flex-col justify-center mt-20 max-sm:mt-5">
        <div className="relative w-full flex justify-center items-center max-md:w-full cursor-pointer  rounded-md">
          <img
            loading="lazy"
            className="m-2 max-md:m-0 w-full max-w-[500px] h-full min-h-[400px] bg-white bg-cover bg-center shadow-md max-sm:w-full"
            style={{
              backgroundImage: `url(https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000)`,
            }}
          ></img>
        </div>
        <div className="mr-5 mt-10  flex w-3/5 max-sm:w-11/12 flex-col max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5 text-center">
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            She is a storyteller, who fell in love with content creation long
            before it became a buzzword. Shikha was one of the first travel
            bloggers in the country, prior to the times of even Instagram and
            Wordpress!
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            She forayed into the world of travel, reaching some of the furthest
            places in India and the world, slow-travelling and documenting
            people, culture, topographies, folk tales, legends, mythology and
            more. Like most voracious readers, who turn into even more voracious
            writers, Shikha dribbles between different genres.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            She is currently working on her first book, drawing from the
            different lives and geographies she has seen.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            Shikha is also working as a consultant and strategist with some of
            India’s most-loved state tourism boards, and leading editorial
            strategy for a number of reputed international hospitality brands
            and tourism boards.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            She has also worked with the Times of India, leading its travel
            division for almost a decade, and has more than 15 years of
            expertise as a travel and lifestyle writer, editor and photographer
            and worked with some of the biggest brands in the world of
            hospitality.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            <b> Shikha Gautam </b> is her brainchild, aimed at bringing these
            stories out into the world.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-xl max-sm:text-base">
            Stay tuned for stories, lots of them.
          </p>
        </div>
      </div>
    </>
  );
}
