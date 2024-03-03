import React from "react";

export default function HomeAbout() {
  return (
    <>
      <div className=" flex h-full w-full flex-row items-start max-md:flex-col-reverse justify-center mt-20 max-md:mt-5">
        <div className="2xl:pr-20 pr-10 2xl:mt-20 mt-0 flex w-1/2 text-2xl max-sm:mx-1 max-sm:w-full flex-col max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5">
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk  max-sm:text-base">
            She is a storyteller, who fell in love with content creation long
            before it became a buzzword. Shikha was one of the first travel
            bloggers in the country, prior to the times of even Instagram and
            Wordpress!
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk  max-sm:text-base">
            She forayed into the world of travel, reaching some of the furthest
            places in India and the world, slow-travelling and documenting
            people, culture, topographies, folk tales, legends, mythology and
            more. Like most voracious readers, who turn into even more voracious
            writers, Shikha dribbles between different genres.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk  max-sm:text-base">
            She is currently working on her first book, drawing from the
            different lives and geographies she has seen.
          </p>
        </div>
        <div className="relative w-1/3 mt-10 max-md:w-full cursor-pointer flex justify-center items-center rounded-md">
          <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto">
            <div className="2xl-mt-20 -mt-32 flex justify-end">
              <img
                className="w-2/3 h-1/3 object-cover rounded-lg overflow-hidden"
                src="https://e0.pxfuel.com/wallpapers/209/716/desktop-wallpaper-untitled-airplane-sky-aesthetic-travel-thumbnail.jpg"
              />
            </div>
            <div className="flex justify-start">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/564x/20/09/fd/2009fd281e877ef79a1af645c7ab43f6.jpg"
              />
            </div>
            <div className="-mt-64  flex justify-start">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              />
            </div>
            <div className="flex justify-start -mr-28 ml-28">
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/236x/ed/ce/ac/edceac082fbd42f7612c57f0a32637af.jpg"
              />
            </div>
            <div className="-translate-y-56 transform ml-28 -mr-28 p-4 flex justify-between flex-col shadow-xl rounded-xl overflow-hidden bg-purple-200">
              <div className="py-2">
                <p className="text-4xl font-bold font-CooperHewitt flex justify-center items-center gap-5 text-black">
                  2m+ <span className="text-lg font-CooperHewitt">views</span>
                </p>
              </div>
              <div className="py-2">
                <p className="text-4xl font-bold font-CooperHewitt flex justify-center items-center gap-5 text-black">
                  17m+ <span className="text-lg font-CooperHewitt">likes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
