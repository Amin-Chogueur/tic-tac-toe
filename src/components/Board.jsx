import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, draw, currentPlayer, strikeClass }) {
  return (
    <div>
      <div className="board">
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[0]}
          draw={() => draw(0)}
          className="right-border bottom-border "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[1]}
          draw={() => draw(1)}
          className="right-border bottom-border "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[2]}
          draw={() => draw(2)}
          className=" bottom-border "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[3]}
          draw={() => draw(3)}
          className="right-border bottom-border "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[4]}
          draw={() => draw(4)}
          className="right-border bottom-border "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[5]}
          draw={() => draw(5)}
          className=" bottom-border "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[6]}
          draw={() => draw(6)}
          className="right-border  "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[7]}
          draw={() => draw(7)}
          className="right-border  "
        />
        <Tile
          currentPlayer={currentPlayer}
          value={tiles[8]}
          draw={() => draw(8)}
        />
        <Strike strikeClass={strikeClass} />
      </div>
    </div>
  );
}

export default Board;
