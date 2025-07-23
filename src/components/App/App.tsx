import { useState } from "react";
import "./App.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes } from "../../types/votes";
import type { VoteType } from "../../types/votes";

function App() {
  const [vote, setVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes: number = vote.good + vote.neutral + vote.bad;
  const positiveRate: number = totalVotes
    ? Math.round((vote.good / totalVotes) * 100)
    : 0;
  const canReset = totalVotes > 0;

  function onVote(key: VoteType): void {
    setVote((prevVote) => ({
      ...prevVote,
      [key]: prevVote[key] + 1,
    }));
  }
  function onReset(): void {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <>
      <CafeInfo />
      <VoteOptions onVote={onVote} onReset={onReset} canReset={canReset} />
      {totalVotes !== 0 && (
        <VoteStats
          votes={vote}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      )}
      {totalVotes == 0 && <Notification />}
    </>
  );
}

export default App;
