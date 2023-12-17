import SectionWrapper from "../hoc/SectionWrapper";

const Footer = () => {
  return (
    <div>
      <p className="test-secondary text-[16px]">Copyright &copy; Edina-Isztojka 2023 </p>
    </div>
  );
};
export default SectionWrapper(Footer, "footer");
