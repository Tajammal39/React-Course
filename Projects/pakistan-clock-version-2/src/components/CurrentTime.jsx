import { useEffect, useState } from "react";

let currentTime = () => {
  const [time, setTime] = useState(new Date());
  // let currentDate = new Date();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <p>
      This is the clock current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default currentTime;
