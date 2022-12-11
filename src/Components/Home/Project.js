import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = () => {
  return (
    <div className="block lg:flex gap-10 flex-wrap">
      <div className="p-4 shadow-md text-gray-300 rounded-lg">
        <div className="space-y-4 lg:flex gap-10">
          <div className="space-y-2 w-full">
            <img
              src="https://i.ibb.co/mzWn9Rv/screencapture-jannat-s-kitchen-web-app-2022-12-02-10-04-01.png"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-full">
            <div className="space-y-2">
              <a className="block" href="/">
                <h3 className="text-xl font-semibold dark:text-violet-400">
                  Online Cloud Kitchen Service
                  <hr />
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-400">
                This is a cloud kitchen website. It has a react new feature
                like: react-router-dom, react-slider, react-loader, jwt token
                etc. This site has google firebase authentication system. Here
                the registered usr can review for any item. Also registered user
                can add new service. For get, post, update, delete data here we
                uses MongoDB. This site has a blog section where you can see our
                blog. Here we user carousel to display banner..
              </p>
            </div>
            <div className="">
              <h4 className="font-semibold">
                Tech Stack:{" "}
                <span className="text-cyan-600">
                  HTML, CSS, Tailwind, React JS, Express JS, MongoDB
                </span>{" "}
              </h4>
            </div>
            <div className="flex justify-between my-5">
              <span className="flex items-center gap-2">
                <FaLink />
                <a
                  className="underline"
                  href="https://jannat-s-kitchen.web.app/"
                >
                  Live Preview
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FaGithub />
                <a
                  className="underline"
                  href="https://github.com/habibullahsujan/cloud-kitchen-client"
                >
                  View Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4 shadow-md text-gray-300 rounded-lg">
        <div className="space-y-4 lg:flex lg:flex-row-reverse gap-10">
          <div className="space-y-2 w-full">
            <img
              src="https://i.ibb.co/rv8hFRR/screencapture-recycle-b6b36-web-app-2022-12-02-10-36-06.png"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-full">
            <div className="space-y-2">
              <a className="block" href="/">
                <h3 className="text-xl font-semibold dark:text-violet-400">
                  Used Laptop Resale Website
                  <hr />
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-400">
                This Web site build using front-end- React Js,HTML, CSS,
                Back-End-Express JS, MongoDB. For Authentication and
                Authorization here use Firebase, JWT Token, This website has 3
                authentication system-admin, seller, buyer. Here admin can
                delete any of users, uploaded product and can verify a seller
                Here seller can upload her own product, advertise his product
                and delete her product. Here buyer can buy any product from
                online and also buy product from seller directly. Here
                user/buyer can pay product price from online.
              </p>
            </div>
            <div className="my-3">
              <h4 className="font-semibold">
                Tech Stack:{" "}
                <span className="text-cyan-600">
                  HTML, CSS, Tailwind, React JS, Express JS, MongoDB
                </span>{" "}
              </h4>
            </div>
            <div className="flex justify-between my-5">
              <span className="flex items-center gap-2">
                <FaLink />
                <a className="underline" href="https://recycle-b6b36.web.app/">
                  Live Preview
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FaGithub />
                <a
                  className="underline"
                  href="https://github.com/habibullahsujan/resale-web-application-client"
                >
                  View Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 shadow-md text-gray-300 rounded-lg">
        <div className="space-y-4 lg:flex gap-10">
          <div className="space-y-2 w-full">
            <img
              src="https://i.ibb.co/gwPPDdY/screencapture-doctors-portal-58d1b-web-app-2022-12-02-10-54-34.png"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="w-full">
            <div className="space-y-2">
              <a className="block" href="/">
                <h3 className="text-xl font-semibold dark:text-violet-400">
                  Doctor's Portal Online Appointment Booking Service
                  <hr />
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-400">
                This is online appointment booking website. Here patient can
                book their appointment. It's full stack website. For front-end
                use React JS, Tailwind and for back-end use express JS, MongoDB.
              </p>
            </div>
            <div className="">
              <h4 className="font-semibold">
                Tech Stack:{" "}
                <span className="text-cyan-600">
                  HTML, CSS, Tailwind, React JS, Express JS, MongoDB
                </span>{" "}
              </h4>
            </div>
            <div className="flex justify-between my-5">
              <span className="flex items-center gap-2">
                <FaLink />
                <a
                  className="underline"
                  href="https://doctors-portal-58d1b.web.app/"
                >
                  Live Preview
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FaGithub />
                <a
                  className="underline"
                  href="https://github.com/habibullahsujan/doctors-portal-client"
                >
                  View Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
