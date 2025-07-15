import c from "./CafeInfo.module.css";
export default function CafeInfo() {
  return (
    <div className={c.container}>
      <h1 className={c.title}>Sip Happens Café</h1>
      <p className={c.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}
