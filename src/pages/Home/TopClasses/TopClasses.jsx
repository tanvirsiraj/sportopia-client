const TopClasses = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.img} className="w-full h-52" alt="Shoes" />
        </figure>
        <div className="card-body mb-4">
          <h2 className="card-title">{item.className}</h2>
          <h1 className="font-semibold">
            Number of Students: {item.students_no}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopClasses;
