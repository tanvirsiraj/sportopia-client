import useSports from "../../../hooks/useSports";
import SliderSection from "../SliderSection/SliderSection";

const Home = () => {
  const [sports] = useSports();
  return (
    <div>
      <SliderSection></SliderSection>
    </div>
  );
};

export default Home;
