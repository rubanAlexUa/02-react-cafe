import { useState } from "react";
import "./App.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes } from "../../types/votes";

function App() {
  const [canReset, setCanReset] = useState<boolean>(false);

  const [vote, setVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  function onVote(key: keyof Votes): void {
    setCanReset(true);
    setVote({
      ...vote,
      [key]: vote[key] + 1,
    });
    console.log(vote);
  }
  function onReset(): void {
    setCanReset(false);
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    console.log(vote);
  }
  return (
    <>
      <CafeInfo />
      <VoteOptions onVote={onVote} onReset={onReset} canReset={canReset} />
      {canReset && <VoteStats vote={vote} />}
      {!canReset && <Notification />}
    </>
  );
}

export default App;
