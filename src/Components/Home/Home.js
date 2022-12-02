import React from "react";
import { FaCaretSquareRight } from "react-icons/fa";
import "../BasicStyles.css";

import Header from "../Header";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="lg:w-[90%] w-full mx-auto">
        <div className="lg:w-[80%] w-full mx-auto my-20 text-slate-500">
          <span className="text-6xl font-bold block my-5 heading">
            Hi, My Name is <span className="name">Habib</span>.
          </span>
          <span className="text-2xl font-semibold space-x-3">
            I build react application for the web. I am a front end developer
            based in bangladesh. I have develop some font end application.
          </span>
          <button className="block my-5 border border-blue-600 px-3 py-2">
            See My Projects
          </button>
        </div>
        <div className="w-full mx-auto my-32" id="about">
          <h1 className="text-2xl  text-slate-500 font-semibold about-section my-5">
            <span className="name">01-</span>About Me
          </h1>
          <div>
            <p className=" text-slate-500 text-lg font-semibold">
              Hello! My name is Habib and I enjoy creating things that live on
              the internet. I am skilled in front-end development. I am
              experienced in HTML, CSS, Bootstrap, Tailwind, JavaScript, React
              JS, Express Js and MongoDB.
            </p>
            <div className=" text-slate-500">
              <h5 className="font-semibold text-lg">
                {" "}
                Here are a few technologies I've been working with recently:
              </h5>
              <ol className="grid grid-cols-1 lg:grid-cols-2 my-5 text-lg font-semibold">
                <li className="flex items-center gap-2">
                  <FaCaretSquareRight />
                  <span>JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCaretSquareRight />
                  <span>Tailwind</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCaretSquareRight />
                  <span>React</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCaretSquareRight />
                  <span>Express JS</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCaretSquareRight />
                  <span>MongoDB</span>
                </li>
              </ol>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
