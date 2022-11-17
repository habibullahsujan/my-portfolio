import React from "react";
import Typewriter from "typewriter-effect";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto ">
      <div className="flex justify-between mt-16 items-center gap-10">
        <div>
          <img
            className="w-[1000px] rounded-2xl"
            src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-full">
          <h1 className="text-6xl font-bold">
            Hi, I am Habib. A
            <span className="text-6xl font-bold text-sky-600">
              <Typewriter
                options={{
                  strings: ["Font-End-Developer", "Content Writer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-10">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={1000}
        >
          <div data-src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div data-src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div data-src="https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Home;
