import image1 from '../../images/image1.png'
import image2 from '../../images/image2.webp'
import image3 from '../../images/image3.webp'
import image4 from '../../images/image4.webp'

import MovingButton from '../MovingButton/MovingButton'

const Workshop = () => {
  const items = [
    { id: 1, image: image1, heading: "BUSINESS GROWTH SEEKER", paragraph: "Aiming to scale your soap and detergent business and maximize profit in a competitive market" },
    { id: 2, image: image2, heading: "INNOVATION-DRIVEN", paragraph: "Interested in learning cutting-edge techniques and ingredients for better soap and detergent production" },
    { id: 3, image: image3, heading: "QUALITY-CONSCIOUS", paragraph: "Looking for strategies to enhance product effectiveness and maintain high quality standards" },
    { id: 4, image: image4, heading: "SOAP & DETERGENT ENTHUSIAST", paragraph: "Passionate about soap and detergent formulations and eager to expand your knowledge" },
 
  ]
  return (
    <div className="min-h-screen h-auto w-full bg-zinc-900 flex flex-col  items-center font-lexend">
      <h1 className="sm:text-4xl text-2xl mt-10 text-center text-white font-bold">This Workshop Is For You..<br/> If You are A</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-6 sm:px-16 px-6">
        {items.map((item) => (
          <div key={item.id} className="bg-[#021118] rounded-xl border border-[#015636] p-4 flex flex-col h-[380px] sm:w-[400px]  items-center">
            <img src={item.image} alt={item.heading} className=" h-[180px] mb-2" />
            <h2 className="text-xl font-semibold ml-2 text-[#01A264] ">{item.heading}</h2>
            <p className="text-white text-center capitalize font-semibold  text-lg mb-4">{item.paragraph}</p>
          </div>
        ))}
      </div>
      <MovingButton textColor="text-white"/>
    </div>
  );
}

export default Workshop;
