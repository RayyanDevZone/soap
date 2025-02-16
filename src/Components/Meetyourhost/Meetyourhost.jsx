import host from '../../images/hostImage.jpeg';

const Meetyourhost = () => {
  return (
    <div className="min-h-screen h-auto w-full bg-zinc-900 sm:px-18 px-2 py-14 font-lexend">
      <div className="border-2 border-white w-full min-h-screen h-auto rounded-md flex flex-col items-center">
        <h1 className="border-2 relative top-[-35px] border-white sm:text-4xl text-2xl text-white font-bold px-2 py-3 rounded-md mt-1 sm:w-[450px] w-[300px] flex items-center justify-center bg-[#01A264]">
          MEET YOUR HOST
        </h1>
        <div className="w-full h-full  flex sm:flex-row flex-col items-center justify-center">
          <img className="h-[400px] w-[280px] rounded-xl  mx-5 mt-4" src={host}></img>
          <div className="sm:h-[400px] sm:w-[50%] px-2 sm:px-0 text-center  flex flex-col">
            <p className="text-white text-xl mb-10 ">
              <span className="font-bold">Afroz Ahmad</span> is a renowned soap
              and detergent industry expert with over 23 years of hands-on
              experience. He has helped countless businesses optimize their
              production processes, reduce costs, and improve product quality.
            </p>
            <p className="text-white text-xl mb-10">
              His practical approach and deep industry insights make him a
              trusted mentor for entrepreneurs and manufacturers alike.
            </p>
            <p className="text-white text-xl">
              Join him in this workshop to take{" "}
              <span className="font-bold capitalize text-[#01A264]">
                Your soap and detergent business
              </span>{" "}
              to the next level!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetyourhost;
