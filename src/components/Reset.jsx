import GameState from "./GameState";
function Reset({ result, handleReset }) {
  if (result === GameState.inProgress) return;
  return (
    <button onClick={handleReset} className="reset">
      Play Again
    </button>
  );
}

export default Reset;
