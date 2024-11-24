const Button = ({label}) => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
       {label}
      </button>
    </div>
  );
}

export default Button
