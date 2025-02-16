import MovingButton from "../MovingButton/MovingButton";

import mini1 from '../../images/mini1.webp'
import mini2 from '../../images/mini2.webp'
import mini3 from '../../images/mini3.webp'
import mini4 from '../../images/mini4.webp'


const PreviousResults = () => {
  const reviews = [
    { id: 1, reviewer: "Aarav Sharma", heading: "Outstanding Workshop", shortReview: "Highly recommend.", description: "Amazing results! I learned so much and saw significant improvements.", date: "January 20, 2025", rating: 5 },
    { id: 2, reviewer: "Ishaan Kapoor", heading: "Exceeded Expectations", shortReview: "Great experience.", description: "The workshop exceeded my expectations. The content was insightful and very well-delivered.", date: "January 18, 2025", rating: 4 },
    { id: 3, reviewer: "Vivaan Reddy", heading: "Transformative Experience", shortReview: "Learned a lot.", description: "I saw significant improvements and gained a lot of valuable knowledge.", date: "January 15, 2025", rating: 4.5 },
    { id: 4, reviewer: "Saanvi Joshi", heading: "Professional Insights", shortReview: "Worth every penny.", description: "The approach and outcomes were highly professional and insightful. Truly worth it.", date: "January 12, 2025", rating: 5 },
    { id: 5, reviewer: "Tara Singh", heading: "Impressive Results", shortReview: "Thorough approach.", description: "Impressed by the thorough approach and the tangible results achieved.", date: "January 10, 2025", rating: 4 },
    { id: 6, reviewer: "Faizan khan", heading: "Tangible Transformations", shortReview: "Highly effective.", description: "This experience was transformative with clear and tangible results.", date: "January 8, 2025", rating: 5 }
  ];

  const benefits = [
    { id: 1, image: mini1, heading: "Enhanced Knowledge", paragraph: "Gain in-depth understanding of the latest trends and techniques." },
    { id: 2, image: mini2, heading: "Networking Opportunities", paragraph: "Connect with industry leaders and fellow enthusiasts." },
    { id: 3, image: mini3, heading: "Practical Skills", paragraph: "Learn practical skills that can be immediately applied." },
    { id: 4, image: mini4, heading: "Expert Guidance", paragraph: "Receive guidance from experienced professionals." },
  ]
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    }

    if (halfStar) {
      stars.push(<span key={fullStars} className="text-yellow-500">☆</span>);
    }

    return stars;
  };

  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center sm:px-12 px-2 font-lexend">
      <h1 className="sm:text-4xl text-3xl text-center  text-black font-bold mt-10">Have A Look At Our Previous Results</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl border border-green-500 p-4">
            <h2 className="text-xl font-semibold text-[#01A264]">{review.reviewer}</h2>
            <hr className="my-2 border-gray-300 w-full" />
            <h3 className="text-lg font-bold">{review.heading}</h3>
            <p className="text-black italic mb-2">{review.shortReview}</p>
            <p className="text-black">{review.description}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500">{review.date}</p>
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
          </div>
        ))}
      </div>
      <MovingButton/>

      <h1 className="text-black sm:text-4xl text-2xl font-bold mt-10">Benefits From <span className="text-[#01A264]">The Workshop</span></h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-6 sm:mx-10">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-white rounded-xl border-2 border-dashed border-green-500 sm:py-6 p-4 flex flex-row items-center">
            <img src={benefit.image} alt={benefit.heading} className="h-[90px] mb-2 mx-4" />
           <div> <h2 className="text-2xl font-bold text-[#0F7890]">{benefit.heading}</h2>
           <p className="text-black text-xl">{benefit.paragraph}</p></div>
          </div>
        ))}
      </div>
      <MovingButton/>
    </div>
  );
}

export default PreviousResults;
