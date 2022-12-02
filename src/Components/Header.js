import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="my-5 text-slate-500 hidden lg:block">
        <ul className="w-[90%] mx-auto flex justify-between">
          <li className="text-2xl font-semibold name uppercase">Home</li>
          <div className="flex gap-8">
            <li className="font-bold">About</li>
            <li className="font-bold">Projects</li>
            <li className="font-bold">Contact</li>
            <li className="font-bold resume uppercase p-1">Resume</li>
            <li className="">
              <FaGithub
                className="hover:text-blue-500 transition 
              ease-in-out delay-150 hover:-translate-y-1 
              hover:scale-110 duration-300 text-2xl text-slate-500 cursor-pointer"
              />
            </li>
            <li>
              <FaLinkedin
                className="hover:text-blue-500 transition 
              ease-in-out delay-150 hover:-translate-y-1 
              hover:scale-110 duration-300 text-2xl text-slate-500 cursor-pointer"
              />
            </li>
            <li>
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
        <li className="text-2xl font-semibold name uppercase">Home</li>
        <button onClick={() => setOpen(!open)} className='p-5'>
          <FaAlignJustify className="text-white" />
        </button>
      </div>
      {open && (
        <ul className="w-[90%] mx-auto lg:hidden flex flex-col justify-between absolute text-slate-200 left-5">
          <div className="flex flex-col gap-3">
            <li className="font-bold">About</li>
            <li className="font-bold">Projects</li>
            <li className="font-bold">Contact</li>
            <li className="font-bold resume uppercase p-1 w-20">Resume</li>
            <li className="">
              <FaGithub
                className="hover:text-blue-500 transition 
           ease-in-out delay-150 hover:-translate-y-1 
           hover:scale-110 duration-300 text-2xl text-slate-200 cursor-pointer"
              />
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
