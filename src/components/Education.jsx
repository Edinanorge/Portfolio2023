import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { educations } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import SectionWrapper from "../hoc/SectionWrapper";

const EducationCard = ({ index, date, title, school_name, grade }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#323849",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={date}
    iconStyle={{ background: "#FF5858", color: "#fff" }}
    icon={<IoSchool />}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{title}</h3>
      <p className="text-secondary text-[16px] font-semibold mt-0" style={{ margin: 0 }}>
        {school_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 ">
      <li className="text-white-100 text-[14px] pl-1 tracking-wider">{grade}</li>
    </ul>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learnd so far</p>
        <h2 className={styles.sectionHeadText}>Educations</h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} index={index} {...education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
