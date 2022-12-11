import React from "react";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaAlignJustify,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="my-5 text-slate-500 hidden lg:block">
        <ul className="w-[90%] mx-auto flex justify-between">
          <Link to={'/'} className="flex items-center gap-3">
            <img className="h-10 w-10" src={logo} alt="" />
            <li className="text-2xl font-semibold name uppercase">Portfolio</li>
          </Link>

          <div className="flex gap-8">
            <li className="font-bold about">
              <a href="#about">About</a>
            </li>
            <li className="font-bold project">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-bold contact">
              <a href="#contact">Contact</a>
            </li>
            <li className="font-bold contact">
              <Link to={'/blogs'}>Blog</Link>
            </li>
            <li className="font-bold resume uppercase p-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/18j8kcXEJ99som0ok3fS8PWpMmtGwpMK3/view?usp=share_link"
              >
                Resume
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/habibullahsujan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="hover:text-blue-500 transition 
            ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110 duration-300 text-2xl text-slate-500 cursor-pointer"
                />
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/habib-ullah-94285a167/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin
                  className="hover:text-blue-500 transition 
                ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110 duration-300 text-2xl text-slate-500 cursor-pointer"
                />
              </a>
            </li>
            <li className="">
              <FaTwitter
                className="hover:text-blue-500 transition 
                ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110 duration-300 text-2xl text-slate-500 cursor-pointer"
              />
            </li>
          </div>
        </ul>
      </div>
      <div className="lg:hidden flex justify-between my-5 items-center">
        <div className="flex items-center gap-3">
          <img className="h-10 w-10" src={logo} alt="" />
          <li className="text-2xl font-semibold name uppercase">Portfolio</li>
        </div>
        <button onClick={() => setOpen(!open)} className="p-5">
          <FaAlignJustify className="text-white" />
        </button>
      </div>
      {open && (
        <ul className="w-[90%] mx-auto lg:hidden flex flex-col justify-between absolute text-slate-200 left-5">
          <div className="flex flex-col gap-3">
            <li className="font-bold">About</li>
            <li className="font-bold">Projects</li>
            <li className="font-bold">Contact</li>
            <li className="font-bold resume uppercase p-1 w-20">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/18j8kcXEJ99som0ok3fS8PWpMmtGwpMK3/view?usp=share_link"
              >
                Resume
              </a>
            </li>
            <li className="">
              <a
                href="https://github.com/habibullahsujan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="hover:text-blue-500 transition 
            ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110 duration-300 text-2xl text-slate-200 cursor-pointer"
                />
              </a>
            </li>
            <li>
              <FaLinkedin
                className="hover:text-blue-500 transition 
            ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110 duration-300 text-2xl text-slate-200 cursor-pointer"
              />
            </li>
            <li>
              <FaTwitter
                className="hover:text-blue-500 transition 
            ease-in-out delay-150 hover:-translate-y-1 
            hover:scale-110 duration-300 text-2xl text-slate-200 cursor-pointer"
              />
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
