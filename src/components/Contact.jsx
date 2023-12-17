import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>
      <div className="flex xl:flex-row flex-col  overflow-hidden items-center justify-center gap-5">
        <motion.div variants={fadeIn("right", "")} className="flex-1">
          <img src="/moon.png" alt="Image from moon" />
        </motion.div>
        <motion.div variants={fadeIn("left", "")} className="flex-1">
          <form method="post" className="bg-tertiary p-12 rounded-xl mt-20 w-full flex flex-col gap-8">
            <h3 className="text-center m-6 font-bold text-[24px]">Send me a message..</h3>
            <label htmlFor="name" className="flex flex-col ">
              Full name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="p-4 text-[14px] rounded bg-secondary"
              />
            </label>
            <label htmlFor="email" className="flex flex-col ">
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="p-4 text-[14px] text-black rounded bg-secondary"
              />
            </label>
            <label htmlFor="message" className="flex flex-col ">
              Your message:
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="p-4 text-[14px] rounded bg-secondary"
              />
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className="shadow-l bg-brand text-black font-bold shadow-md shadow-primary hover:shadow-md py-2 px-4 rounded uppercase tracking-wide"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
