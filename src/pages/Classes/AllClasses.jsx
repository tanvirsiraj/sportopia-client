import { useContext } from "react";
import { AuthContext } from "./../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllClasses = ({ item }) => {
  const { classImg, className, instructorName, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const selectedClass = {
        class_id: _id,
        classImg,
        className,
        instructorName,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/selectedclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Class added on the dashboard",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Select Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
