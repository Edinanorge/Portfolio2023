import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <div className={`${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex items-center `}>
        <div className="flex flex-col justify-start items-start mt-5 ">
          <div className="h-1 sm:w-80 w-40 primary-gradient" />
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-brand font-normal">Edina</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 mb-10`}>
              I'm a front-end developer who loves turning ideas into beautiful, user-friendly websites. Let's create
              something special together.
            </p>
            <div className="flex shrink flex-col gap-4 sm:flex-row">
              <a
                href="/Edina_Isztojka_resume_eng_2024.pdf"
                download="Edina_Isztojka_resume_eng_2024.pdf"
                className="outline outline-1 outline-brand rounded-lg py-2 px-8  hover:bg-brand"
              >
                Download CV
              </a>
              <a
                href="https://github.com/Edinanorge"
                className="outline outline-1 outline-brand rounded-lg py-2 px-8  hover:bg-brand"
              >
                Check out Github
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
