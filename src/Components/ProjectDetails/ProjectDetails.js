import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectDetails = () => {
  const project = useLoaderData();
  const {
    picture_project,
    project_details,
    github_link_client,
    github_link_server,
    live_link,
    project_name
  } = project;
  console.log(project);
  return (
    <div>
      <section className="py-6 dark:bg-gray-800">
        <div className=" flex flex-col justify-center p-4 mx-auto w-[90%]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
            {picture_project.map((pic) => (
              <img
                alt=""
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={pic}
              />
            ))}
          </div>
          <div>
            <h3 className="text-white my-5 text-2xl font-bold">{project_name}</h3>
          </div>
          <div className="my-5 text-white">
            <h3  className="text-white text-xl font-bold">Features:</h3>
            {project_details.map((pd) => (
              <li>{pd}</li>
            ))}
          </div>
          <div className="text-white flex gap-5">
            <a
              className="flex items-center gap-2  skills py-3 px-2 text-center font-bold mt-4"
              href={github_link_client}
            >
              {" "}
              <FaGithub />
              <span>Client Side Code</span>{" "}
            </a>
            <a
              className="flex items-center gap-2  skills py-3 px-2 text-center font-bold mt-4"
              href={github_link_server}
            >
              {" "}
              <FaGithub />
              <span>Server Side Code</span>{" "}
            </a>
            <a
              className="flex items-center gap-2  skills py-3 px-2 text-center font-bold mt-4"
              href={live_link}
            >
              {" "}
              <FaLink />
              <span>Live Preview</span>{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
