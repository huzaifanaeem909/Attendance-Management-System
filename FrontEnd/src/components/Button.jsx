const Button = ({ text, type = "submit" }) => {
  return (
    <button
      type={type}
      className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
