import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(Math.floor(Math.random() * 8));
  const [points, setPoints] = useState(new Uint8Array(8));
  const vote = () => {
    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
  };
  const showHighest = () => {
    let highestIndex = 0;
    let highest = 0;
    for (let i = 0; i <= 7; i++) {
      if (points[i] > highest) {
        highest = points[i];
        highestIndex = i;
      }
    }
    return highestIndex;
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * 8))}>
        next anecdote
      </button>
      <button onClick={vote}>vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[showHighest()]}</p>
    </div>
  );
};

export default App;
