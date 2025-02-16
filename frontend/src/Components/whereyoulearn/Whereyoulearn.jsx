import MovingButton from "../MovingButton/MovingButton";
import { TiTick } from "react-icons/ti";

const Whereyoulearn = () => {
  const cards = [
    {
      id: 1,
      paragraph:
        "Discover cost-effective ways to source and use raw materials without compromising quality",
    },
    {
      id: 2,
      paragraph:
        "Learn winning formulations for soaps and detergents that align with market trends and consumer preferences",
    },
    {
      id: 3,
      paragraph:
        "Reduce waste, improve efficiency, and maximize output in your manufacturing process.",
    },
    {
      id: 4,
      paragraph:
        "Explore sustainable and cost-effective packaging solutions to attract eco-conscious customers.",
    },
    {
      id: 5,
      paragraph:
        "Master the art of positioning your brand and products to dominate the market.",
    },
    {
      id: 6,
      paragraph:
        "Ensure consistent product quality to build trust and loyalty among your customers.",
    },
    {
      id: 7,
      paragraph:
        "Unlock the secrets to expanding your business and reaching new markets.",
    },
  ];

  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center px-2 font-lexend ">
      <h1 className="sm:text-5xl text-3xl mt-6 text-black font-bold">
        {" "}
        Where You Will Learn
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-6 sm:px-24 ">
        {cards.slice(0, 6).map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl flex flex-row border-2 border-green-500 p-4"
          >
            <p className="text-2xl text-green-600 flex items-center px-4 ">
              {" "}
              <TiTick />
            </p>
            <p className="font-semibold  text-[20px]">{card.paragraph}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-white rounded-xl border-2 border-green-500 p-4 flex flex-row sm:w-1/2 w-full ">
      <p className="text-2xl text-green-600 flex items-center px-4 ">
              {" "}
              <TiTick />
            </p>
        <p className="font-semibold  text-[20px]">{cards[6].paragraph}</p>
      </div>
      <MovingButton className="text-black" />
    </div>
  );
};

export default Whereyoulearn;
