import React from "react";
import "../BasicStyles.css";
import Header from "../Header";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="lg:w-[90%] w-[95%] mx-auto">
        <div className="lg:w-[80%] w-full mx-auto my-20 text-slate-500 lg:flex">
          <div>
            <h3 className="text-6xl font-bold block my-5">
              Hi, My Name is <span className="name">Habib</span>.
            </h3>
            <span className="text-2xl font-semibold space-x-3">
              I build react application for the web. I am a front end developer
              based in bangladesh. I have develop some font end application.
            </span>
            <button className="block my-5 border border-blue-600 px-3 py-2 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-gray-500 font-bold ease-out hover:translate-y-1 transition-all rounded ">
              See My Projects
            </button>
          </div>
          <div>
            <iframe
              className="w-[400px] h-[400px]"
              title="animation"
              src="https://lottie.host/?file=1cbd9d11-4998-435c-b604-2f289493b8d3/IAPIuRbXSE.json"
            ></iframe>
          </div>
        </div>
        <div
          className="lg:w-full w-[95%] lg:mb-36 mx-auto lg:flex items-center gap-10"
          id="about"
        >
          <div className="lg:w-1/2">
            <h1 className="text-4xl  text-slate-500 font-semibold about-section my-5">
              <span className="name">01-</span>About Me
            </h1>
            <p className=" text-slate-500 text-xl font-semibold">
              Hello! My name is Habib and I enjoy creating things that live on
              the internet. I am skilled in front-end development. I am
              experienced in HTML, CSS, Bootstrap, Tailwind, JavaScript, React
              JS, Express Js and MongoDB.
            </p>
          </div>
          <div className=" text-slate-500 my-10 lg:pt-16">
            <h3 className="text-4xl font-bold my-5">
              <span className="name"></span>My Skills
            </h3>
            <div className="w-full grid grid-cols-3 gap-6 text-white">
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-5 lg:px-10 text-center font-bold ">
                HTML
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                CSS
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                Bootstrap
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                Tailwind
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                JavaScript
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                React JS
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                Express JS
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                MongoDB
              </span>
              <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-2 text-center font-bold">
                Firebase
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-slate-500 font-semibold about-section my-5">
            <span className="name">03-</span>Some things that I've built
          </h1>
          <div id="projects">
            <section>
              <Project />
            </section>
          </div>
          <div>
            <section className="my-20">
              <Contact />
            </section>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
