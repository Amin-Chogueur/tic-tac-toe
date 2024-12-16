import { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";

const player_x = "X";
const player_o = "O";

const winnerCombination = [
  //rows
  { comb: [0, 1, 2], winnerClass: "strike-row-1" },
  { comb: [3, 4, 5], winnerClass: "strike-row-2" },
  { comb: [6, 7, 8], winnerClass: "strike-row-3" },
  //cols
  { comb: [0, 3, 6], winnerClass: "strike-col-1" },
  { comb: [1, 4, 7], winnerClass: "strike-col-2" },
  { comb: [2, 5, 8], winnerClass: "strike-col-3" },
  //diags
  { comb: [0, 4, 8], winnerClass: "strike-diag-1" },
  { comb: [2, 4, 6], winnerClass: "strike-diag-2" },
];

function checkWinner(tiles, setStrikeClass, setResult) {
  for (const { comb, winnerClass } of winnerCombination) {
    const tileValue1 = tiles[comb[0]];
    const tileValue2 = tiles[comb[1]];
    const tileValue3 = tiles[comb[2]];
    if (
      tileValue1 !== "" &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(winnerClass);
      if (tileValue1 === player_o) setResult(2);
      if (tileValue1 === player_x) setResult(1);
      return;
    }
  }
  const allTilesFiledIn = tiles.every((tile) => tile !== "");
  if (allTilesFiledIn) setResult(3);
}

function TicTacToe() {
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState(player_x);
  const [strikeClass, setStrikeClass] = useState("");
  const [result, setResult] = useState(GameState.inProgress);
  function handleReset() {
    setTiles(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer(player_x);
    setStrikeClass("");
    setResult(GameState.inProgress);
  }

  function draw(index) {
    if (result !== GameState.inProgress) return;
    if (tiles[index] !== "") return;
    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);
    if (currentPlayer === player_x) setCurrentPlayer(player_o);
    if (currentPlayer === player_o) setCurrentPlayer(player_x);
  }

  useEffect(
    function () {
      checkWinner(tiles, setStrikeClass, setResult);
    },
    [tiles]
  );

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        draw={draw}
        currentPlayer={currentPlayer}
        strikeClass={strikeClass}
      />
      <GameOver result={result} />
      <Reset result={result} handleReset={handleReset} />
    </div>
  );
}

export default TicTacToe;
