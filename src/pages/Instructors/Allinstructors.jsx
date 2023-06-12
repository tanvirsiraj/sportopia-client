const Allinstructors = ({ item }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
      <figure>
        <img src={item.instructorImg} className="w-full h-52" alt="Shoes" />
      </figure>
      <div className="card-body mb-4">
        <h2 className="font-bold">{item.instructorName}</h2>
        <h2 className="font-semibold">{item.email}</h2>
        <p className="font-semibold">{item.className}</p>
      </div>
    </div>
  );
};

export default Allinstructors;
