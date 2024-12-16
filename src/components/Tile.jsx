function Tile({ className, value, draw, currentPlayer }) {
  let hoverContent = null;
  if (currentPlayer === "X" && value === "") hoverContent = "X";
  if (currentPlayer === "O" && value === "") hoverContent = "O";
  return (
    <div className={`tile ${className} ${hoverContent}-hover`} onClick={draw}>
      {value}
    </div>
  );
}

export default Tile;
