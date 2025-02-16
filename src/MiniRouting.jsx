import Bonuses from "./Components/Bonuses/Bonuses";
import FAQs from "./Components/FAQs/FAQs";
import FloatingBanner from "./Components/FloatingBanner/FloatingBanner";
import Homepage from "./Components/Homepage/Homepage";
import Meetyourhost from "./Components/Meetyourhost/Meetyourhost";
import PreviousResults from "./Components/PreviousResults/PreviousResults";
import Whereyoulearn from "./Components/whereyoulearn/Whereyoulearn";
import Workshop from "./Components/Workshop/Workshop";
const MiniRouting = () => {
  return (
    <div>
      {" "}
      <Homepage />
      <Whereyoulearn />
      <Workshop />
      <PreviousResults />
      <Meetyourhost />
      <Bonuses />
      <FAQs />
      <FloatingBanner />
    </div>
  );
};

export default MiniRouting;
