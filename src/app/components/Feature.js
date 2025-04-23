"use client";
import React, { useState } from "react";
import Image from "next/image";

const Feature = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const buttons = [
    { label: "Trending", bgColor: "#5C4FFF", textColor: "white", icon: true },
    { label: "Design", bgColor: "white", textColor: "black", border: true },
    {
      label: "Marketing & Analytics",
      bgColor: "white",
      textColor: "black",
      border: true,
    },
    { label: "Support", bgColor: "white", textColor: "black", border: true },
    { label: "Launch", bgColor: "white", textColor: "black", border: true },
  ];

  const cards = [
    {
      image: "/images/zoho.png",
      name: "Zoho",
      views: "2k Views",
      tags: ["#Free", "#Productivity"],
      sponsored: true,
    },
    {
      image: "/images/Basecamp.png",
      name: "Basecamp",
      views: "1.36k Views",
      tags: ["#Free", "#Productivity"],
      sponsored: false,
    },
    {
      image: "/images/Suite.png",
      name: "G-Suite",
      views: "1.2k Views",
      tags: ["Paid", "#Productivity"],
      sponsored: false,
    },
    {
      image: "/images/HubSpot.png",
      name: "HubSpot",
      views: "500 Views",
      tags: ["Paid", "#Productivity"],
      sponsored: false,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[41px] mx-[124px]">
        <div className="flex h-[52px] flex-shrink-0 gap-[23px]">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`flex py-[10px] px-[50px] justify-center items-center gap-[10px] rounded-[50px] ${
                button.border ? "border border-[#5C4FFF]" : ""
              }`}
              style={{
                backgroundColor: button.bgColor,
                color: button.textColor,
                width:
                  button.label === "Marketing & Analytics" ? "340px" : "190px",
              }}
            >
              {button.icon && (
                <div className="w-[22.5px] h-[15px] fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                  >
                    <path
                      d="M16.2839 1.37626C16.3059 1.81236 16.7084 2.18848 17.1289 2.16569H20.0063L12.771 9.66959L9.14907 6.85019C8.98261 6.67093 8.73558 6.57568 8.49663 6.59862C8.31952 6.61625 8.1488 6.697 8.01986 6.82417L0.525171 14.0417C0.192005 14.3299 0.155014 14.9152 0.449047 15.246C0.743106 15.5768 1.30861 15.586 1.61254 15.2649L8.61374 8.51571L12.1436 11.257C12.464 11.6065 12.9822 11.663 13.415 11.3525L21.1439 3.33673V6.32961C21.138 6.76959 21.5226 7.17427 21.9469 7.17427C22.3712 7.17427 22.7559 6.76959 22.7499 6.32961V1.3328C22.7499 0.89676 22.3674 0.500044 21.9469 0.5H17.1289C16.6514 0.50322 16.2774 1.00224 16.2839 1.37626Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )}
              <span className="text-center font-poppins text-[18px] font-normal leading-[32px]">
                {button.label}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[11px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[290px] h-[326px] flex-shrink-0 rounded-xl bg-[#5C4FFF]"
            >
              <div className="flex flex-col justify-end w-[290px] h-[273px] flex-shrink-0 rounded-xl bg-white gap-[34px]">
                {card.sponsored && (
                  <div className="flex justify-center items-center self-end w-[105px] h-[24px] flex-shrink-0 rounded-l-[19.652px] border border-white bg-[#FBFF28]">
                    <span className="text-black text-center font-poppins text-[12px] font-normal leading-[12.577px]">
                      Sponsored
                    </span>
                  </div>
                )}
                <Image
                  src={card.image}
                  alt="Illustration"
                  width={170}
                  height={96}
                  className="flex self-center"
                />
                <p className="text-black text-center font-poppins text-[18px] font-normal leading-[40px] pb-[22px]">
                  {card.name}
                </p>
              </div>
              <div className="flex justify-center items-center gap-[28px] w-[290px] h-[53px] flex-shrink-0 rounded-b-xl bg-[#5C4FFF]">
                <span className="text-white text-center font-poppins text-[12px] font-normal leading-[12.577px]">
                  {card.views}
                </span>
                <div className="flex justify-center items-center gap-[5px]">
                  {card.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex w-auto h-[24px] py-[3.93px] px-[12.184px] justify-center items-center gap-[3.93px] flex-shrink-0 rounded-[19.652px] border border-white"
                    >
                      <span className="text-white text-center font-poppins text-[12px] font-normal leading-[12.577px]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col justify-center rounded-xl bg-white h-[168px] flex-shrink-0 mx-[124px] mt-[60px] ${
          isHidden ? "hidden" : ""
        }`}
      >
        <button
          className="w-[22px] h-[22px] flex-shrink-0 aspect-square self-end pr-12 cursor-pointer"
          onClick={toggleVisibility}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M5.86634 17.4166L4.58301 16.1333L9.71634 10.9999L4.58301 5.86659L5.86634 4.58325L10.9997 9.71659L16.133 4.58325L17.4163 5.86659L12.283 10.9999L17.4163 16.1333L16.133 17.4166L10.9997 12.2833L5.86634 17.4166Z"
              fill="#5C4FFF"
            />
          </svg>
        </button>
        <div className="flex justify-between items-center px-[70px]">
          <div className="text-black font-poppins text-[32px] font-light leading-[90px]">
            <span className="font-light">Want to in</span>
            <span className="font-medium pl-1">be Featured List?</span>
          </div>
          <div className="flex w-[500px] h-[50px] justify-between items-center shrink-0 padding: 9px 77.641px 9px 30px rounded-xl bg-[#F9F8FF]">
            <input
              type="text"
              className="flex-grow h-full px-4 rounded-l-[50px] border-none outline-none"
              placeholder="Email Address"
            />
            <button className="flex w-[241px] h-[50px] justify-center items-center shrink-0 rounded-xl bg-[#FBFF28] cursor-pointer">
              <span className="text-[#333] text-center font-poppins font-regular text-[18px] leading-[32px]">
                Search Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
