"use client";
import React from "react";
import Image from "next/image";

const Mark = () => {
  const cards = [
    {
      image: "/images/m1.png",
      name: "Evernote",
      height: 80,
      width: 80,
    },
    {
      image: "/images/m2.png",
      name: "Invision",
      height: 80,
      width: 137,
    },
    {
      image: "/images/m3.png",
      name: "Telepat.io",
      height: 80,
      width: 104,
    },
    {
      image: "/images/m4.png",
      name: "node.js",
      height: 80,
      width: 80,
    },
    {
      image: "/images/m5.png",
      name: "Datadog",
      height: 80,
      width: 80,
    },
    {
      image: "/images/m6.png",
      name: "Namecheap",
      height: 80,
      width: 80,
    },
    {
      image: "/images/m7.png",
      name: "Heroku",
      height: 62,
      width: 190,
    },
    {
      name: "GoDaddy",
      description:
        "All in one store to grow online, Start with your online presence.",
      isSpecial: true,
    },
    {
      image: "/images/m8.png",
      name: "Jira",
      height: 80,
      width: 120,
    },
    {
      image: "/images/m9.png",
      name: "Bluehost",
      height: 78,
      width: 71,
    },
    {
      image: "/images/m10.png",
      name: "Amazon Web Services",
      height: 62,
      width: 105,
    },
    {
      image: "/images/m11.png",
      name: "KickStarter",
      height: 80,
      width: 60,
    },
  ];

  const renderCard = (card, index) => {
    if (card.isSpecial) {
      return (
        <div
          key={index}
          className="w-[290px] h-[290px] flex-shrink-0 rounded-xl bg-[#5C4FFF] my-[8px]"
        >
          <div className="flex flex-col justify-evenly items-center w-[290px] h-[273px] flex-shrink-0 rounded-xl bg-[#5C4FFF]">
            <div className="w-[210px] h-[37px] text-white text-center font-poppins text-[18px] font-bold leading-[40px]">
              {card.name}
            </div>
            <div className="w-[210px] h-[75px] text-white font-poppins text-[18px] font-light leading-[24px]">
              {card.description}
            </div>
            <button className="flex w-[201px] py-[10px] px-[31px] justify-center items-center gap-[10px] rounded-full bg-white cursor-pointer">
              <span className="text-black text-center font-poppins text-[18px] font-normal leading-[32px]">
                View More
              </span>
              <div className="w-[16.779px] h-[15.773px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M10.502 1.11328L18.3886 8.99996L10.502 16.8866"
                    stroke="#5C4FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3887 9L1.61035 9"
                    stroke="#5C4FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex w-[290px] h-[17px] flex-shrink-0 rounded-b-xl bg-[#000]"></div>
        </div>
      );
    }

    return (
      <div
        key={index}
        className="w-[290px] h-[290px] flex-shrink-0 rounded-xl bg-[#5C4FFF] my-[8px]"
      >
        <div className="flex flex-col justify-evenly w-[290px] h-[273px] flex-shrink-0 rounded-xl bg-white">
          <Image
            src={card.image}
            alt="Illustration"
            width={card.width}
            height={card.height}
            className="flex self-center"
          />
          <p className="text-black text-center font-poppins text-[18px] font-normal leading-[40px] h-[60.417px]">
            {card.name}
          </p>
        </div>
        <div className="flex w-[290px] h-[17px] flex-shrink-0 rounded-b-xl bg-[#5C4FFF]"></div>
      </div>
    );
  };

  return (
    <div className="items-center justify-center gap-[14px] grid grid-cols-4 mx-[124px] mt-[60px]">
      {cards.map((card, index) => renderCard(card, index))}
    </div>
  );
};

export default Mark;
