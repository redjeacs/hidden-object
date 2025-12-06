import { useState, useEffect } from "react";

function Timer({ active, onFinish }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (!active && timer > 0 && onFinish) {
      onFinish(timer);
    }
  }, [active, timer, onFinish]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };
  return <h3 className="text-5xl">{formatTime(timer)}</h3>;
}

export default Timer;
