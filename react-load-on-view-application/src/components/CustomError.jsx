const CustomError = ({ errorMessage }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-500 text-white p-4 rounded shadow text-xl">
        {errorMessage}
      </div>
    </div>
  );
};

export default CustomError;
