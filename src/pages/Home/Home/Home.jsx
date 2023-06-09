import useSports from "../../../hooks/useSports";

const Home = () => {
  const [sports] = useSports();
  return (
    <div>
      <h1>Home</h1>
      <p>{sports.length}</p>
    </div>
  );
};

export default Home;
