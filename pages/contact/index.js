// components
import Circles from "/components/Circles";
import ParticlesContainer from "/components/ParticlesContainer";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendmail = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };
    emailjs
      .send("service_i3qwxei", "template_rxc5nap", data, "5DKAbVVdOjexBpoFF")
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        () => {
          toast.error("something went wrong");
        }
      );
    e.target.reset();
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form*/}
        <div className="flex flex-col w-full max-w-[700px] z-10">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect .</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto z-10"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              {/* name */}
              <input type="text" placeholder="Name" className="input" />
              {/* email */}
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
          <ToastContainer
            position="top-center"
            hideProgressBar={true}
            theme="light"
            autoClose={2000}
          />
        </div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Contact;
