import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <div className={`${styles.paddingX} absolute inset-0 z-[10] top-[120px] max-w-7xl mx-auto flex items-center `}>
        <div className="flex flex-col justify-start items-start mt-5 ">
          <div className="h-1 sm:w-80 w-40 primary-gradient" />
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-brand font-normal">Edina</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a front-end developer dedicated to shaping exceptional digital experiences through careful attention
              to design details.
            </p>
          </div>
        </div>
      </div>
      <EarthCanvas />
    </section>
  );
};

export default Hero;
