import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation checks
    let formIsValid = true;
    const newErrors = {};

    // Validate username
    if (!formData.username) {
      formIsValid = false;
      newErrors.username = "Username is required";
    }

    // Validate email
    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid";
    }

    // Validate password
    if (!formData.password) {
      formIsValid = false;
      newErrors.password = "Password is required";
    }

    // If form is invalid, update error state and stop form submission
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Proceed with form submission if valid
    try {
      await axios.post("http://localhost:8000/api/accounts/register/", formData);
      toast.success("User created successfully, redirecting to dashboard...");
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to dashboard after a short delay
      }, 2000); // Delay to show toast notification
    } catch (error) {
      toast.error("Error creating user");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <Form
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          fields={['username', 'email', 'password']} // Include fields for signup
        >
          <Button text="Sign Up" />
        </Form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};

export default Signup;
