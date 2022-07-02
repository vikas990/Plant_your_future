import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Register from "../components/Register";
import axios from "./helper/axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const RegisterContainer = () => {
  const router = useRouter();
  // yupSchema for validation
  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  // React-hook-form for stateless form.
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // registerUser function to register user.
  const registerUser = async (data) => {
    try {
      const response = await axios.post("/api/auth/register", data);
      if (response?.status === 201) {
        router.push("/login");
      }
      reset();
    } catch (error) {
      console.log(error?.response?.data?.error);
      Swal.fire("Oops", error?.response?.data?.error, "error");
    }
  };

  return (
    <Register
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      registerUser={registerUser}
    />
  );
};

export default RegisterContainer;
