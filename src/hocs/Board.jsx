const Board = ({ children, title = "login.png" }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="absolute z-0">
        <div className="flex flex-col items-center justify-center h-full relative">
          <img
            src={title}
            alt={title}
            className="w-32 md:w-40 absolute top-6 left-16 md:left-32 md:top-12"
          />
          <img src="/bg-board.png" alt="Board" className="w-[80%]" />
          <img
            src="/dr.png"
            alt="Drink Responsibly"
            className="w-14 absolute bottom-8 left-0 ms-12 md:ms-20"
          />
        </div>
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Board;
