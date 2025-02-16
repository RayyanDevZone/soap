import a from '../../images/a.svg'
import bon2 from '../../images/bon2.svg'
import eco from '../../images/eco.svg'

import MovingButton from '../MovingButton/MovingButton'

const Bonuses = () => {
  const bonuses = [
    { 
      id: 1, 
      topHeading: "Bonus #1: Cost-Saving Raw Material Sourcing Guide", 
      image: a, 
      description: "Learn how to source high-quality raw materials at the best prices.", 
      price: "Worth ₹2,499"
    },
    { 
      id: 2, 
      topHeading: "Bonus #2:High-Profit Product Formulations", 
      image: bon2, 
      description: "Get access to exclusive formulations for high-demand soap and detergent products.", 
      price: "Worth ₹1,999"
    },
    { 
      id: 3, 
      topHeading: "Bonus #3:  Eco-Friendly Packaging Solutions", 
      image: eco, 
      description: "Discover innovative and sustainable packaging ideas to attract eco-conscious customers.", 
      price: "Worth ₹1,999"
    }
  ];

  return (
    <div className='min-h-screen h-auto w-full flex flex-col items-center font-lexend'>
      <h1 className="sm:text-4xl text-2xl text-center mt-10 text-black font-bold">FREE BONUSES <span className="text-[#01A264] font-bold">AWAITING FOR YOU!!!</span></h1>
      <p className="text-black text-xl mt-5 text-center font-semibold">Get 3 Amazing Bonuses Worth ₹6,497 For Absolutely FREE!!!</p>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 mt-6 sm:px-16 px-2">
        {bonuses.map((bonus) => (
          <div key={bonus.id} className="bg-white rounded-xl h-[420px] border-2 flex flex-col items-center justify-between border-green-500 p-4">
            <h2 className="text-xl font-semibold text-[#01A264]">{bonus.topHeading}</h2>
            <img src={bonus.image} alt={bonus.topHeading} className=" h-[190px] w-[280px] object-fit mt-2" />
            <p className="text-black text-xl text-center mt-2">{bonus.description}</p>
            <p className="text-red-500 text-lg flex flex-row justify-end w-full font-bold mt-2 ">{bonus.price}</p>
          </div>
        ))}
      </div>
<p className='sm:text-4xl text-[28px] text-center font-bold text-red-500 sm:mt-10 mt-5'>Total Value Of Bonuses: ₹6,497</p>
<p className='sm:text-4xl text-[28px] text-center font-bold text-black sm:mt-10 mt-5'>Normal Workshop Ticket Price: <span className='line-through'>₹497</span></p>
<p className='sm:text-5xl text-[28px] font-bold text-[#01A264] sm:mt-10 mt-5'>Buy Today Just for FREE.</p>
<MovingButton className='mb-10' textColor='text-black'/>
    </div>
  );
}

export default Bonuses;
