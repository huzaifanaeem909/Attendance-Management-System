import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/accounts/password_reset/", {
        email,
      });
      toast.success("Check your email for a password reset link.");
    } catch (error) {
      toast.error("Error sending password reset email.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
