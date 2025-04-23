import React from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "“Investor connections! Found the perfect match, thanks for simplifying the search”",
    name: "Sarah Jones",
    company: "GreenTech Solutions",
    image: "/images/profil.jpg",
    shadow: false,
  },
  {
    quote: "“High-quality startups, curated perfectly. Saves me time & keeps me ahead of the innovation curve”",
    name: "David Lee",
    company: "Spark Ventures",
    image: "/images/profil3.jpg",
    shadow: true,
  },
  {
    quote: "“More than just a directory. Found resources, advice, and even co-founders here!”",
    name: "Maria Perez",
    company: "Social Impact Agency",
    image: "/images/profil2.jpg",
    shadow: false,
  },
];

const Testimonial = () => {
  return (
    <div className="flex gap-[38px] mx-[124px] mb-[80px]">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`rounded-[20px] bg-white w-[380px] h-[342px] flex-shrink-0 ${
            testimonial.shadow ? "drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" : ""
          }`}
        >
          <div className="flex flex-col gap-5 w-[322px] h-[241px] flex-shrink-0 pl-[25px] pt-[36px]">
            <div className="w-[40px] h-[30px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
              >
                <path
                  d="M0 19.9254C0 25.4104 3.95604 30 8.57143 30C13.0769 30 16.4835 26.5299 16.4835 22.0522C16.4835 17.2388 12.3077 13.9925 6.81319 13.6567C8.24176 10.0746 10.6593 6.26866 15.3846 1.45522L13.956 0C4.83516 5.26119 0 13.209 0 19.9254ZM23.5165 19.9254C23.5165 25.4104 27.4725 30 32.0879 30C36.5934 30 40 26.5299 40 22.0522C40 17.2388 35.8242 13.9925 30.3297 13.6567C31.7582 10.0746 34.1758 6.26866 38.9011 1.45522L37.4725 0C28.3517 5.26119 23.5165 13.209 23.5165 19.9254Z"
                  fill="#5C4FFF"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-11 w-[322px] h-[192px] flex-shrink-0">
              <p className="text-[#2B2B2B] font-poppins text-[18px] font-normal leading-[32px]">
                {testimonial.quote}
              </p>
              <div className="flex w-[258px] h-[45px] flex-shrink-0 gap-5">
                <Image
                  src={testimonial.image}
                  alt="Illustration"
                  width={45}
                  height={45}
                  className="flex-shrink-0 rounded-full bg-center bg-cover bg-no-repeat"
                />
                <div className="text-[#2B2B2B] font-poppins text-[18px] font-normal leading-[24px] w-[193px] h-[24px] flex-shrink-0 opacity-40">
                  {testimonial.name},
                  <br />
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
