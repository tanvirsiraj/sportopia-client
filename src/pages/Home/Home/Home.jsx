import useSports from "../../../hooks/useSports";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SliderSection from "../SliderSection/SliderSection";
import TopClasses from "../TopClasses/TopClasses";
// import SectionTitle from "../../Shared/SectionTitle";

const Home = () => {
  const [sports] = useSports();

  let sortedClasses = [];
  sortedClasses = sports.sort((a, b) => b.students_no - a.students_no);
  console.log(sortedClasses);

  return (
    <div>
      {/* <p>{sports.length}</p> */}
      <SliderSection></SliderSection>
      <SectionTitle
        heading="Top-Classess at Sportopia"
        subHeading="Unlock Your Potential with Expert Instruction and Cutting-Edge Training in Your Chosen Discipline"
      ></SectionTitle>
      <div className=" mb-20 grid lg:grid-cols-3 max-w-7xl mx-auto gap-10  lg:px-0 py-10">
        {sortedClasses.slice(0, 6).map((item) => (
          <TopClasses key={item.id} item={item}></TopClasses>
        ))}
      </div>
    </div>
  );
};

export default Home;
