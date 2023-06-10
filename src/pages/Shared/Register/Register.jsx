import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return <div></div>;
};

export default Register;
