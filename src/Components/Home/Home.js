import React from "react";
import { FaCaretSquareRight } from "react-icons/fa";
import "../BasicStyles.css";

import Header from "../Header";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-[90%] mx-auto">
        <div className=" mx-auto my-20 text-slate-500">
          <span className="text-6xl font-bold block my-3 ">
            Hi, My Name is <span className="name">Habib</span>.
          </span>
          <span className="text-2xl font-semibold space-x-3">
            I build react application for the web. I am a front end developer
            based in bangladesh. I have develop many font end application.
          </span>
        </div>
        <div className="w-full mx-auto my-32">
          <h1 className="text-2xl  text-slate-500 font-semibold about-section my-5">
            <span className="name">01-</span>About Me
          </h1>
          <div>
            <p className=" text-slate-500">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
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
          <h1>My Tech Stack</h1>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl  text-slate-500 font-semibold about-section my-5">
            <span className="name">03-</span>Some things that I've built
          </h1>
          <div>
            <div>
              <Project/>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
