import styles from "./VoteStats.module.css";
import type { Votes } from "../types/votes";
interface VoteStats {
  vote: Votes;
}
export default function VoteStats({ vote: { good, neutral, bad } }: VoteStats) {
  const totalVotes: number = good + neutral + bad;
  const positiveRate: number = totalVotes
    ? Math.round((good / totalVotes) * 100)
    : 0;

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
