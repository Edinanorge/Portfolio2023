import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { contact } from "../constants";
import { MdOutlineEmail, MdOutlineNotListedLocation } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import SectionWrapper from "../hoc/SectionWrapper";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" text-secondary text-[20px] max-w-3xl leading-[30px] my-4 mx-auto text-center"
      >
        Feel free to reach out! I'll respond as soon as possible.
      </motion.p>

      <motion.div
        variants={fadeIn("left", "")}
        className="flex xl:flex-row flex-col  overflow-hidden items-center justify-center gap-20 mt-20"
      >
        <div>
          <h3 className="flex items-center justify-center text-[20px] gap-5">
            <MdOutlineNotListedLocation color="#FF5858" fontSize="2rem" /> Location
          </h3>

          <p className="text-secondary text-[18px] max-w-3xl leading-[28px] my-1 mx-auto">Trondheim, Norway</p>
        </div>
        <div>
          <h3 className="flex items-center justify-center text-[20px] gap-5">
            {" "}
            <MdOutlineEmail color="#FF5858" fontSize="2rem" /> Mail
          </h3>
          <p className="text-secondary text-[18px] max-w-3xl leading-[28px] my-1 mx-auto">edinanorge@gmail.com</p>
        </div>
        <NavLink to={contact.github}>
          <h3 className="flex items-center justify-center text-[20px]  gap-5">
            {" "}
            <FiGithub color="#FF5858" fontSize="2rem" /> Github
          </h3>
          <p className="text-secondary text-[18px] max-w-3xl leading-[28px] my-1 mx-auto">github.com/Edinanorge</p>
        </NavLink>
        <NavLink to={contact.linkedin}>
          <h3 className="flex items-center justify-center text-[20px]  gap-5">
            {" "}
            <FaLinkedinIn color="#FF5858" fontSize="2rem" /> LinkedIn
          </h3>
          <p className="text-secondary text-[18px] max-w-3xl leading-[28px] my-1 mx-auto">linkedin.com/in/edinai</p>
        </NavLink>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
