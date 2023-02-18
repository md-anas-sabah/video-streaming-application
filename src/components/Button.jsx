const Button = ({ name }) => {
  return (
    <div className="">
      <button className="bg-gray-200 px-6 p-2 m-3 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
