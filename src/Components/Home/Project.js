import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleProject from "./SingleProject";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-kappa.vercel.app/my-projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="block lg:flex gap-10 flex-wrap">
      <div className="p-4 shadow-md text-gray-300 rounded-lg grid lg:grid-cols-3 grid-cols-1 gap-5">
        {projects.map((project) => (
          <SingleProject project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
};

export default Project;
