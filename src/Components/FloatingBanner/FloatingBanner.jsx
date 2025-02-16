import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './FloatingBanner.css'; // Assuming the CSS is in FloatingBanner.css

const FloatingBanner = () => {
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(45 * 60); // 45 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      <>
        <span className="text-green-500 text-xl sm:text-2xl">{minutes}</span>{" "}
        <span className="text-md">min</span> :{" "}
        <span className="text-green-500 text-xl sm:text-2xl">
          {seconds < 10 ? "0" : ""}
          {seconds}
        </span>{" "}
        <span className="text-md">sec</span>
      </>
    );
  };

  const handleClick = () => {
    navigate("/registration");
  };

  return (
    <div className="fixed bottom-0 w-full sm:h-24 h-30 bg-[#000000] border-2 border-[#01A264] text-white border-b-0 rounded-t-2xl sm:py-8 sm:px-12 px-4 items-center justify-between flex sm:flex-row flex-col font-lexend">
      <div>
        <h1 className="font-semi-bold sm:text-xl text-lg mt-2 sm:mb-2 mb-1">
          Almost full  <span className="blinking">only 15 seats left</span>
        </h1>
        <h1 className="sm:text-lg text-lg font-bold">
          Offer will expire in {formatTime(remainingTime)}
        </h1>
      </div>
      <button
        onClick={handleClick}
        className="looping-button sm:w-[250px] sm:h-[50px] rounded-md bg-green-600 font-semibold text-xl mb-2 cursor-pointer w-full py-2"
      >
        Register Now
      </button>
    </div>
  );
};

export default FloatingBanner;
