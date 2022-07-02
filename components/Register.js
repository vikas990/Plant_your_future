import React from "react";

const Register = ({ register, handleSubmit, errors, registerUser }) => {
  console.log(process.env.NEXT_PUBLIC_BASEURL);
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(registerUser)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          {...register("username")}
        />
        <p>{errors.username?.message}</p>
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <br />
        <input
          type="password"
          placeholder="**********"
          name="password"
          {...register("password")}
        />
        <br />
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          placeholder="**********"
          name="password2"
          {...register("password2")}
        />
        <p>{errors.password2?.message}</p>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
