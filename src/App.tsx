import { useState } from "react";
import "./App.css";
import CafeInfo from "./components/CafeInfo_component/CafeInfo";
import VoteOptions from "./components/VoteOptions_component/VoteOptions";
import VoteStats from "./components/VoteStats_component/VoteStats";
import Notification from "./components/Notification_component/Notification";
import type { Votes } from "./components/types/votes";

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
