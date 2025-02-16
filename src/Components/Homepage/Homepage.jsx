import  { useState, useEffect } from 'react';
import MovingButton from "../MovingButton/MovingButton";
import img from "../../images/img.jpeg";
import { TiTick } from "react-icons/ti";

const Homepage = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const targetDate = new Date('2025-02-23T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="min-h-screen h-auto w-full bg-zinc-900 flex flex-col items-center font-lexend">
      <div className="bg-[#00b660] sm:w-[900px] w-[90%] h-15 rounded-b-xl flex flex-col items-center justify-center">
        <p className="sm:text-xl text-md font-semibold text-white">
          Ready to Scale Your Soap & Detergent Business?
        </p>
      </div>
      <p className="text-center text-white sm:text-3xl text-3xl font-bold mt-13">
        LEARN FROM A 23+ YEARS INDUSTRY EXPERT TO CUT COST,
        <br />
        IMPROVE QUALITY,AND BOOST{" "}
        <span className="text-[#01A264]">PROFITS EFFORTLESSLY.</span>
      </p>

      <i>
        <div className="sm:text-xl text-md text-white flex sm:flex-row flex-col justify-between sm:w-[700px] mt-6 text-center ">
          <p className="underline flex flex-row items-center "><TiTick className="m-0"/> SMART COST SAVING METHODS</p>
          <p className="underline flex flex-row items-center mt-2 sm:mt-0"><TiTick /> HIGH PROFITS FORMULATIONS</p>
        </div>
      </i>
      {/* image and details section */}
      <div className=" w-full min-h-[350px] h-auto rounded-xl flex sm:flex-row flex-col  items-center justify-center px-8 mt-4">
        <img
          className="sm:h-[300px] rounded-2xl border-2 border-[#01A264] sm:w-[50%] w-[100%] h-[200px]"
          src={img}
          alt=""
        ></img>
        <div className=" image-details h-[350px] sm:w-[50%] w-full  flex flex-col sm:px-8 items-center mt-4 sm:mt-0">
          <div className="w-full h-[25%]  flex flex-row items-center justify-around">
            <p className="text-xl text-white">
              Date
              <br />
              <span className="font-bold">23th FEB 2025</span>
            </p>
            <p className="text-xl text-white">
              Time:
              <br />
              <span className="font-bold">3:00 PM IST</span>
            </p>
          </div>
          <div className="w-full sm:h-[35%] rounded-2xl bg-white py-3 flex flex-col items-center">
            <p className="sm:text-2xl text-xl text-black font-bold sm:mt-0">
              Host: <span className="text-[#01A264]">Afroz Ahmad</span>
            </p>
            <p className="text-black text-lg">Soap & Detergent Expert</p>
            <div className="w-full flex flex-row items-center justify-around">
              <p className="text-black text-lg font-semibold sm:block hidden">
                Duration: 2 Hours
              </p>{" "}
              <p className="text-lg font-semibold hidden sm:block">
                Language: Hindi
              </p>
            </div>
          </div>

          <p className="text-white text-xl sm:mt-4 mt-2">Workshop starts In:</p>

          <div className="white-circle-div w-full h-[35%] flex flex-row items-center gap-3">
            <div className="border-2 border-[#01A264] sm:h-full h-[80%] sm:w-[22%] w-[24%] rounded-[50%] bg-white flex flex-col items-center justify-center">
              <span className="sm:text-4xl text-3xl font-bold text-[#01A264]">{timeRemaining.days}</span>
              <p>Days</p>
            </div>
            <div className="border-2 border-[#01A264] sm:h-full h-[80%] sm:w-[22%] w-[24%]  rounded-[50%] bg-white flex items-center justify-center flex-col">
              <span className="sm:text-4xl text-3xl font-bold text-[#01A264] ">{timeRemaining.hours}</span>
              <p>Hours</p>
            </div>
            <div className="border-2 border-[#01A264] sm:h-full h-[80%] sm:w-[22%] w-[24%] rounded-[50%] bg-white flex items-center justify-center flex-col">
              <span className="sm:text-4xl text-3xl font-bold text-[#01A264]">{timeRemaining.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="border-2 border-[#01A264] sm:h-full h-[80%] sm:w-[22%] w-[24%]  rounded-[50%] bg-white flex items-center justify-center flex-col">
              <span className="sm:text-4xl text-3xl font-bold text-[#01A264]">{timeRemaining.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <MovingButton textColor="text-white" />
    </div>
  );
};

export default Homepage;
