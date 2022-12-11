import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={project?.picture}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 my-5">
        <h2 className="text-xl font-semibold tracking-wide">
          {project?.project_name}
        </h2>
      </div>
      <Link
        to={`/project-details/${project?.project_id}`}
        className=" skills py-3 px-2 text-center font-bold mt-4"
      >
        See Details
      </Link>
    </div>
  );
};

export default SingleProject;
