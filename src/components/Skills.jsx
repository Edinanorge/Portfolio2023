import { motion } from "framer-motion";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import SectionWrapper from "../hoc/SectionWrapper";

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.95)}
    className=" p-1 rounded-2xl w-[150px] h-[100px] bg-tertiary flex flex-col justify-center items-center"
  >
    <img src={icon} alt="" className="w-full h-[40px] object-contain rounded-t-2xl" />
    <p className="text-white text-[16px] font-bold ">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>Experience with </p>
        <h2 className={styles.sectionHeadText}>Technologies </h2>
      </motion.div>
      <div className="mt-20 mx-auto flex flex-wrap justify-center gap-5">
        {skills.map((skill, index) => (
          <SkillCard key={index} index={index} {...skill} />
        ))}
      </div>
      <img src="/pexels-pixabay-39561.jpg" alt="Planet Marsh" className="w-[100px] ml-auto opacity-50 " />
    </>
  );
};

export default SectionWrapper(Skills, "skill");
