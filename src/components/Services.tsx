import React from "react";
import { DATA } from "../context";

// Define the type for each card object within the DATA array
interface Card {
  id: number;
  number: string;
  title: string;
}

const Services: React.FC = () => {
  return (
    <section className="bg-[#995BD9] ">
      <div className="md:max-w-2xl lg:max-w-4xl pt-10 mx-auto flex flex-col ">
        {/* Title Section */}
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center ">
          <h2 className="text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl  tracking-widest mb-16 text-left lg:leading-tight  font-base">
            INNOVATING TO<br></br> MEET YOUR HIGHEST
            <br /> EXPECTATIONS
          </h2>

          <div className="mt-10 flex">
            <img
              className="w-36 h-44 lg:w-56 md:h-56 md:w-44 lg:h-72"
              src="/Services/memory.png"
              alt="Service"
            />
            <img
              className="h-44 md:h-56 lg:h-72 pl-7"
              src="/Services/Rectangle1.png"
              alt="Rectangle"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 pt-20 gap-8 mb-10 select-none">
          {/* Map over the DATA */}
          {DATA.map((card: Card) => (
            <div key={card.id} className="mx-auto">
              <div className="tracking-widest text-white">
                <div className="text-lg font-bold mb-2">{card.number}</div>
                <img className="pb-5" src="/Services/line2.png" alt="line" />
                <h3 className="lg:text-xl md:text-sm mb-4">{card.title}</h3>
                <img
                  className="h-8 w-20"
                  src="/Services/exploreImg.png"
                  alt="exploreImg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
