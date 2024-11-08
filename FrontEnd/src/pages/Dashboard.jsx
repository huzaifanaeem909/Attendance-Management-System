import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle the logout logic here
    alert("You have logged out!");
    navigate("/"); // Redirect to the home page after logging out
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Here's your attendance overview
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Total Hours Worked</h3>
            <p className="text-2xl font-bold text-blue-600">120 Hours</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Days Attended</h3>
            <p className="text-2xl font-bold text-green-600">24 Days</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
