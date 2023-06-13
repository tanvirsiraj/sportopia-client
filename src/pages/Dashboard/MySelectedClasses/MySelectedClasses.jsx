import { FaTrashAlt } from "react-icons/fa";
import useSelectedclass from "../../../hooks/useSelectedclass";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [selectedClassess, refetch] = useSelectedclass();
  console.log(selectedClassess);
  const total = selectedClassess.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/selectedclass/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your selected class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="uppercase space-x-2 font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">
          Total Selected Classes: {selectedClassess.length}
        </h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm">pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClassess.map((item, index) => (
              <tr key={item._id}>
                <td>{++index}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.classImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
