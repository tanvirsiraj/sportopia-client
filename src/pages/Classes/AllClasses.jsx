const AllClasses = ({ item }) => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={item.classImg} className="w-full h-52" alt="car!" />
        </figure>
        <div className="card-body text-center ps-4 py-5">
          <div>
            <h2 className="font-semibold text-lg">{item.className}</h2>
            <h2 className="font-semibold">{item.instructorName}</h2>
            <h2 className="text-black">Available Seats : {item.seats}</h2>
            <h2 className="text-black">Price : ${item.price}</h2>
          </div>
          <div className="card-actions justify-center mt-6">
            <button className="btn btn-primary">Select Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
