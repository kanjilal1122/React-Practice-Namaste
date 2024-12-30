const Button = ({ children, onClick }) => {
  return (
    <>
      <button
        className=" bg-slate-100 px-2   border-green-300 border-solid border-2 rounded-full shadow-lg"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
