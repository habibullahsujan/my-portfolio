import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-200 p-10 rounded-xl">
      <h2 className="font-bold text-2xl my-5">Contact</h2>
      <h5>
        Get in touch or shoot me an email directly on{" "}
        <span className="text-lg font-semibold">habibullah9709@gmail.com</span>
      </h5>
      <form action="">
        <input
          type="text"
          name="name"
          id=""
          className="block my-5 px-5 py-2 w-full lg:w-1/2 rounded-lg"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          id=""
          className="block my-5 px-5 py-2 w-full lg:w-1/2 rounded-lg"
          placeholder="Email"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          className="block my-5 px-5 py-2 w-full lg:w-1/2 rounded-lg"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white font-bold px-3 py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
