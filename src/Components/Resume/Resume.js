import React from "react";

const Resume = () => {
  return (
    <div className="lg:w-3/4 mx-auto my-20 text-[#A6A6A6]">
      <div>
        <div className="hr-line">
          <h1 className="font-bold text-4xl">Resume</h1>
        </div>
        <div className="lg:flex justify-between block">
          <div>
            <h3 className="my-5 font-bold text-2xl">Education</h3>
            <div className="border border-gray-500 p-4 rounded-lg my-5">
              <span>2021-2023</span>
              <h4 className="text-lg font-bold">
                Ph.D in Horriblensess - ABC University
              </h4>
              <small>Los Angeles, CA</small>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg my-5">
              <span>2021-2023</span>
              <h4 className="text-lg font-bold">
                Ph.D in Horriblensess - ABC University
              </h4>
              <small>Los Angeles, CA</small>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg my-5">
              <span>2021-2023</span>
              <h4 className="text-lg font-bold">
                Ph.D in Horriblensess - ABC University
              </h4>
              <small>Los Angeles, CA</small>
            </div>
          </div>
          <div>
            <h3 className="my-5 font-bold text-2xl">Experience</h3>
            <div className="border border-gray-500 p-4 rounded-lg my-5">
              <span>2021-2023</span>
              <h4 className="text-lg font-bold">
                Ph.D in Horriblensess - ABC University
              </h4>
              <small>Los Angeles, CA</small>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg my-5">
              <span>2021-2023</span>
              <h4 className="text-lg font-bold">
                Ph.D in Horriblensess - ABC University
              </h4>
              <small>Los Angeles, CA</small>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg my-5">
              <span>2021-2023</span>
              <h4 className="text-lg font-bold">
                Ph.D in Horriblensess - ABC University
              </h4>
              <small>Los Angeles, CA</small>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0D0D0D] p-5 lg:flex justify-between rounded-xl my-10">
        <div>
          <h3 className="my-5 font-bold text-2xl">Working Skills</h3>
          <div className="my-3">
            <h3 className="flex justify-between">
              <span>Web Design</span> <span>85%</span>{" "}
            </h3>
            <hr className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none py-1" />
          </div>
          <div className="my-3">
            <h3 className="flex justify-between">
              <span>Mobile App</span> <span>55%</span>{" "}
            </h3>
            <hr className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none py-1" />
          </div>
          <div className="my-3">
            <h3 className="flex justify-between">
              <span>Web App</span> <span>65%</span>{" "}
            </h3>
            <hr className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none py-1" />
          </div>
          <div className="my-3">
            <h3 className="flex justify-between">
              <span>Illustrator</span> <span>20%</span>{" "}
            </h3>
            <hr className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none py-1" />
          </div>
        </div>
        <div>
          <h3 className="my-5 font-bold text-2xl">Knowledge</h3>
          <div className="grid grid-cols-2 gap-4 text-white font-semibold">
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Digital Design</h3>
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Marketing</h3>
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Communication</h3>
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Social Media</h3>
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Time Management</h3>
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Flexibility</h3>
          <h3 className="rounded-lg px-4 py-2 bg-gray-700">Print</h3>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Resume;
