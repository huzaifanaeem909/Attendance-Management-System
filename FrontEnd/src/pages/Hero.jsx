import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 flex justify-center items-center text-white text-center px-4">
      <div className="space-y-6 max-w-xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight">
          Employee Attendance Management
        </h1>
        <p className="text-lg font-light">
          Manage employee attendance with ease. Keep track of your team's
          presence, absences, and more.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={goToSignup}
            className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition"
          >
            Sign Up
          </button>
          <button
            onClick={goToLogin}
            className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
