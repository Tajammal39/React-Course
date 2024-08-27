let currentTime = () => {
  let currentDate = new Date();

  return (
    <p>
      This is the clock current time:{currentDate.toLocaleDateString()} -
      {currentDate.toLocaleTimeString()}
    </p>
  );
};
export default currentTime;
