import React from "react";
import formatDate from "../../components/FormatDate";
import { Link } from "react-router-dom";
export default function Content() {
  const lifestyle = [
    {
      _id: "65c508a24ea2a9f88000728d",
      title: "A new Article",
      category: "Travel",
      location: "Gangtok",
      imageURL:
        "https://res.cloudinary.com/dhktoeo0l/image/upload/v1707411593/xq744uxhjrhfsiahrffc.png",
      date: "2024-02-08T17:00:18.338Z",
      __v: 0,
    },
    {
      _id: "65c5f26b68af8f033addf0b0",
      title: "DEMO Article 1 ",
      category: "Travel ",
      location: "Pune",
      imageURL:
        "https://res.cloudinary.com/dhktoeo0l/image/upload/v1707471458/i8wzzbfs42nhqzqcpq3q.png",
      date: "2024-02-09T09:37:47.223Z",
      __v: 0,
    },
  ];

  return (
    <>
      <h1 className="text-center font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
        Recent posts
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {lifestyle.map((lifestyle, index) => (
          <Link
            className="group w-1/3 cursor-pointer rounded px-5 pb-5 max-md:w-full max-md:px-0"
            key={index}
            to={`/lifestyle/${lifestyle?._id}/${lifestyle?.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <div className="group">
              <div className="h-full w-full max-h-[200px] rounded overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full group-hover:scale-[1.02] transition-all ease-in-out duration-200 min-h-[200px] w-full rounded object-cover"
                  src={lifestyle?.imageURL}
                  alt={lifestyle?.title}
                />
              </div>
              <div className="w-full pb-3 flex flex-col justify-center items-center pt-5">
                <div className="flex flex-wrap divide-y-2 text-black justify-center divide-blue-500 gap-5 mb-5">
                  <span className="font-CooperHewitt text-lg font-bold hover:text-blue-500">
                    Travel
                  </span>
                  <span className="font-CooperHewitt text-lg font-bold hover:text-blue-500">
                    Food
                  </span>
                  <span className="font-CooperHewitt text-lg font-bold hover:text-blue-500">
                    India
                  </span>
                </div>

                <span className="line-clamp-2  px-2 font-Gamiliademo text-2xl font-semibold tracking-wider text-black">
                  {lifestyle?.title}
                </span>
                <p className="text-center text-black font-HankenGrotesk my-4 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptate, accusamus dignissimos amet dolorem, optio
                  fuga corporis totam earum doloribus cupiditate error.
                </p>
                <span>
                  <hr className="border-none h-[1px] bg-blue-500" />
                  <p className="text-base my-1 font-CooperHewitt text-gray-500">
                    {formatDate(lifestyle?.date)}
                  </p>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
