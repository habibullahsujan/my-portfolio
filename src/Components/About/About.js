import React from "react";
import '../BasicStyles.css'

// import { FaBeer } from 'react-icons/fa';

const About = () => {
  return (
    <div className="lg:w-3/4 mx-auto my-20 text-[#A6A6A6]">
        <div className="hr-line">
        <h1 className="font-bold text-4xl">About Me</h1>
        </div>
    
      <p className="my-2">
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
      </p>
      <p className="my-2">
        My aim is to bring across your message and identity in the most creative
        way. I created web design for many famous brand companies.
      </p>
      <div>
        <h4 className="font-bold my-6 text-2xl">What I Do!</h4>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="border border-white p-6">
            <h4 className="font-bold text-2xl">UI/UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tenetur laborum error minus possimus, animi temporibus accusantium
              pariatur quis optio!
            </p>
          </div>
          <div className="border border-white p-6">
            <h4 className="font-bold text-2xl">Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tenetur laborum error minus possimus, animi temporibus accusantium
              pariatur quis optio!
            </p>
          </div>
          <div className="border border-white p-6">
            <h4 className="font-bold text-2xl">Web Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tenetur laborum error minus possimus, animi temporibus accusantium
              pariatur quis optio!
            </p>
          </div>
          <div className="border border-white p-6">
            <h4 className="font-bold text-2xl">Photographer </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tenetur laborum error minus possimus, animi temporibus accusantium
              pariatur quis optio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
