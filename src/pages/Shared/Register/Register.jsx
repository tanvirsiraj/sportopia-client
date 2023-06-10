import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  //   const [disabled, setDisabled] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    console.log(data);

    if (data.password != "" && data.password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    } else if (data.email == "") {
      setError("Email field cannot be empty");
      return;
    } else if (data.password == "") {
      setError("Password field cannot be empty");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      setError("Password must contain at least one capital letter");
    } else if (!/[!@#$%^&*]/.test(data.password)) {
      setError("Password must contain at least one special character");
    } else if (data.password !== data.confirmPassword) {
      setError("Password do not match");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content w-full max-w-xl flex flex-col">
          <div className="text-center lg:text-left w-full max-w-xl ">
            <h1 className="text-4xl text-center font-bold my-10 ">
              Sign Up now!
            </h1>
            <div className="card  w-full max-w-xl shadow-lg bg-base-100 ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
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
                <div className="form-control password-input-container">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    {...register("confirmPassword")}
                    placeholder="confirm password"
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
                    value="Sign Up"
                  />
                </div>
                <br />
                <span className="text-red-600 text-left">{error}</span>

                <p className="my-2">
                  Already have an account
                  <Link
                    to="/login"
                    className="text-[#0057b8] underline ms-2 font-bold"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-full border-opacity-50 mt-5 mb-10">
            <div className="divider">OR</div>
            <div className="flex items-center font-bold btn btn-outline btn-primary text-primary-600">
              <FaGoogle className="mr-2"></FaGoogle> Sign Up with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;