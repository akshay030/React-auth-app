import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/SignUpSchema";
import { calculatePasswordStrength } from "../utils/passwordStrength";
import { saveToLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values) => {
        saveToLocalStorage("users", [values]);
        alert("Sign Up Successful!");

        navigate("/login"); // redirects to login page
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="signup-form"
      className="max-w-lg mt-7 mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 id="signup-form" className="text-2xl font-bold text-center mb-6">
        Sign Up
      </h2>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          aria-describedby="name-error"
        />
        {touched.name && errors.name && (
          <div
            id="name-error"
            role="alert"
            aria-live="assertive"
            className="text-red-500 text-sm mt-2"
          >
            {errors.name}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
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
          aria-describedby="password-strength password-error"
        />
        <div id="password-strength" className="mt-1 text-sm text-gray-500">
          Password Strength: {calculatePasswordStrength(values.password)}
        </div>
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

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          aria-describedby="confirmPassword-error"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <div
            id="confirmPassword-error"
            role="alert"
            aria-live="assertive"
            className="text-red-500 text-sm mt-2"
          >
            {errors.confirmPassword}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
      >
        Sign Up
      </button>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">Already have an account? </span>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-indigo-600 text-sm font-semibold hover:text-indigo-700"
          aria-label="Navigate to Login page"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
