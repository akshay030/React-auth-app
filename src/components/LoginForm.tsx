import React, { useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/loginSchema";
import {
  saveToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
} from "../utils/localStorage";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const LoginForm: React.FC = () => {
  // Fetch remembered email from localStorage
  const rememberedEmail = getFromLocalStorage("rememberedEmail");
  const navigate = useNavigate(); 

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: rememberedEmail || "",
        password: "",
        rememberMe: rememberedEmail ? true : false,
      },
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values) => {
        const users = getFromLocalStorage("users") || [];
        const userExists = users.some(
          (user: { email: string; password: string }) =>
            user.email === values.email && user.password === values.password
        );

        if (userExists) {
          if (values.rememberMe) {
            saveToLocalStorage("rememberedEmail", values.email);
          } else {
            removeFromLocalStorage("rememberedEmail");
          }
          alert("Login Successful!");
        } else {
          alert("Invalid email or password");
        }
      },
    });

  useEffect(() => {
    if (rememberedEmail) {
      document.getElementById("password")?.focus();
    }
  }, [rememberedEmail]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "auto" }}
      aria-labelledby="login-form"
      className="max-w-sm mx-auto top-8 p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 id="login-form" className="text-2xl font-bold text-center mb-6">
        Login
      </h2>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
          aria-label="Email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          aria-describedby="email-error"
        />
        {touched.email && errors.email && (
          <div
            id="email-error"
            role="alert"
            aria-live="assertive"
            className="text-red-500 text-sm mt-2"
          >
            {errors.email}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
          aria-label="Password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          aria-describedby="password-error"
        />
        {touched.password && errors.password && (
          <div
            id="password-error"
            role="alert"
            aria-live="assertive"
            className="text-red-500 text-sm mt-2"
          >
            {errors.password}
          </div>
        )}
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="rememberMe"
          checked={values.rememberMe}
          onChange={handleChange}
          id="rememberMe"
          className="mr-2"
          aria-labelledby="rememberMe-label"
        />
        <label
          htmlFor="rememberMe"
          id="rememberMe-label"
          className="text-sm text-gray-600"
        >
          Remember Me
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
      >
        Login
      </button>

      {/* Link to Sign Up page */}
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">
          Not registered with us?{" "}
        </span>
        <button
          type="button"
          onClick={() => navigate("/")} // Redirect to Sign Up page
          className="text-indigo-600 hover:underline"
        >
          Sign Up now
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
