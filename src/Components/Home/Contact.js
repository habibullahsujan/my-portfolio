import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
 e.preventDefault();
  
    emailjs
      .sendForm(
        "service_7lbys1p",
        "template_0k8sesl",
        form.current,
        "Jl5voEeyvuHKProng"
      )
      .then(
        (result) => {
          if(result.status === 200){
            toast.success('Message Sent Successfully.');
            e.target.reset()
          }
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };
  return (
    <div id="contact" className="bg-gray-200 p-10 rounded-xl">
      <h2 className="font-bold text-2xl my-5">Contact</h2>
      <h5>
        Get in touch or shoot me an email directly on{" "}
        <span className="text-lg font-semibold">habibullah9709@gmail.com</span>
      </h5>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          id=""
          className="block my-5 px-5 py-2 w-full lg:w-1/2 rounded-lg"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="user_email"
          id=""
          className="block my-5 px-5 py-2 w-full lg:w-1/2 rounded-lg"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          className="block my-5 px-5 py-2 w-full lg:w-1/2 rounded-lg"
          placeholder="Message"
          required
        ></textarea>
        <button
          value="Send"
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
