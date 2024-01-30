import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] space-y-5 "
      >
        <li>
          My passion for web development and design began a few years ago when I decided to self-educate. I took some
          courses and quickly realized that this is something I can do full time. Further deep diving into development
          led me to the next stage, and I recently graduated in Front-End development from Noroff School of Technology
          and Digital Media.{" "}
        </li>
        <li>
          My goal is to become a full-stack developer, embracing the challenges that come with it. The joy of crafting
          seamless user experiences and the thrill of solving complex problems drive my commitment to this ever-evolving
          field.
        </li>
        <li>Let's work together and turn awesome ideas into reality!</li>
      </motion.ul>
    </>
  );
};

export default SectionWrapper(About, "about");
