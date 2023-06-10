import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content w-full max-w-xl flex flex-col">
          <div className="text-center lg:text-left w-full max-w-xl ">
            <h1 className="text-4xl text-center font-bold mb-10  ">
              Login now!
            </h1>
            <div className="card  w-full max-w-xl shadow-lg bg-base-100 ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control password-input-container">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    {...register("password")}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {passwordVisible ? (
                    <HiOutlineEyeOff
                      onClick={handleTogglePassword}
                      className="password-visibility-icon"
                    ></HiOutlineEyeOff>
                  ) : (
                    <HiOutlineEye
                      onClick={handleTogglePassword}
                      className="password-visibility-icon"
                    ></HiOutlineEye>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="my-2">
                  New to Sportopia
                  <Link
                    to="/register"
                    className="text-[#0057b8] underline ms-2 font-bold"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-full border-opacity-50 mt-5">
            <div className="divider">OR</div>
            <div className="flex items-center font-bold btn btn-outline btn-primary text-primary-600">
              <FaGoogle className="mr-2"></FaGoogle> Login with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
