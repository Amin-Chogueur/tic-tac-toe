function GameOver({ result }) {
  switch (result) {
    case 0:
      return <></>;
    case 1:
      return <div className="game-over">player x win</div>;
    case 2:
      return <div className="game-over">player o win</div>;
    case 3:
      return <div className="game-over">draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;
