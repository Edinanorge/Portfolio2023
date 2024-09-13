import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import SectionWrapper from "../hoc/SectionWrapper";

const ProjectCard = ({ index, name, image, description, tags, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.95)} className="mb-5">
      <div
        className={`bg-tertiary rounded-2xl flex flex-col xl:flex-row ${
          index % 2 !== 0 ? "xl:flex-row-reverse" : ""
        } items-center z-[10]`}
      >
        <img src={image} alt={name} className="flex-1 w-full xl:w-[600px] h-[600px] object-cover  p-5" />

        <div className="p-5 flex-1 ">
          <h3 className=" text-[24px] mt-1">{name}</h3>
          <p className="text-secondary mt-2 mb-10 text-[14px]">{description}</p>
          <h4>Login info</h4>
          <p className="text-secondary mt-2 text-[14px]">
            To log in to the application, you can use any fake email address ending with @noroff.no or @stud.noroff.no,
            or simply use:
          </p>
          <p className=" text-[14px]">
            Email:<span className="text-secondary"> edina1@noroff.no</span>
          </p>
          <p className=" mb-10 text-[14px]">
            Password: <span className=" text-secondary "> 11111111</span>
          </p>
          <h4>Build with:</h4>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <p key={index} className={`${tag.color} mt-4 p-1 text-black font-semibold text-[12px]`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="flex gap-3 justify-start mt-20">
            <h4>Github code</h4>
            <NavLink
              to={source_code_link}
              className=" w-6 h-6 z-[10] bg-primary hover:bg-brand inline-block rounded-full flex items-center justify-center"
            >
              <FaGithub />
            </NavLink>
            <h4>Live site:</h4>
            <NavLink
              to={demo_link}
              className=" w-6 h-6 z-[10] bg-primary hover:bg-brand inline-block rounded-full flex items-center justify-center"
            >
              <FaGlobe />
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" text-secondary text-[20px] max-w-3xl leading-[30px] my-4 mx-auto"
      >
        I present to you a selection of projects I have both designed and developed. Please peruse these endeavors that
        showcase my skills and capabilities in the realm of design and development.
      </motion.p>
      <div className="mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
