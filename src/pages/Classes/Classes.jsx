import useSports from "../../hooks/useSports";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import AllClasses from "./AllClasses";

const Classes = () => {
  const [sports] = useSports();
  return (
    <div>
      <SectionTitle
        heading="All-Classes at Sportopia"
        subHeading="Explore a wide range of classes at Sportopia, catering to various fitness levels and interests, ensuring that everyone can find a class that suits their needs and preferences."
      ></SectionTitle>
      <div className=" mb-20 grid lg:grid-cols-3 max-w-7xl mx-auto gap-10  lg:px-0 py-10">
        {sports.map((item) => (
          <AllClasses key={item._id} item={item}></AllClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;
