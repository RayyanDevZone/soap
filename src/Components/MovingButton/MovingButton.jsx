import { useNavigate } from 'react-router-dom';
import './MovingButton.css'; // Assuming the CSS is in MovingButton.css

const MovingButton = ({ textColor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/registration');
  };
 
  return (
    <div className="flex flex-col items-center font-lexend">
      <button 
        onClick={handleClick} 
        className="vibrating-button bg-[#01A264] sm:w-[700px] w-[350px] h-[70px] rounded-md cursor-pointer font-bold sm:text-3xl text-xl text-white mt-5 shadow-2xl"
      >
        Join The Workshop for <span className='line-through'>Rs. 6497/-</span> FREE
      </button>
      <p className={`sm:text-xl text-md text-center mt-5 font-bold mb-10 ${textColor}`}>
        Register Before <span className="text-[#01A264]">23th February</span> To
        Unlock <br/> Bonuses worth <span className="text-[#01A264]">₹6,497/-</span>
      </p>
    </div>
  );
};

export default MovingButton;
