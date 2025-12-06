import { useEffect } from "react";

function Timer({ active, onFinish, timer, setTimer, formatTime }) {
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

  return <h3 className="text-5xl">{formatTime(timer)}</h3>;
}

export default Timer;
