import Input from "./Input";

const Form = ({ formData, onChange, onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white"
    >
      {Object.keys(formData).map((key) => {
        // Dynamically set the type to 'password' for the password field
        const inputType = key === "password" ? "password" : "text";

        return (
          <Input
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize first letter of label
            type={inputType}
            name={key}
            value={formData[key]}
            onChange={onChange}
          />
        );
      })}

      {children}
    </form>
  );
};

export default Form;
