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
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
        I am a front-end developer with experience in TypeScript and JavaScript, and experience in frameworks like
        React. I am a quick learner and collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let&apos;s work together and turn awesome ideas into
        reality!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
