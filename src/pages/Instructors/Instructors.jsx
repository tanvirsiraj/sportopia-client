import useSports from "../../hooks/useSports";
import TopInstructors from "../Home/TopInstructors/TopInstructors";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Allinstructors from "./Allinstructors";

const Instructors = () => {
  const [sports] = useSports();
  console.log(sports);
  return (
    <div>
      <SectionTitle
        heading="All-Instructors at Sportopia"
        subHeading="Highly qualified and experienced, Sportopia's instructors provide personalized coaching and guidance to athletes of all levels."
      ></SectionTitle>
      <div className=" mb-20 grid lg:grid-cols-3 max-w-7xl mx-auto gap-10  lg:px-0 py-10">
        {sports.map((item) => (
          <Allinstructors key={item._id} item={item}></Allinstructors>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
