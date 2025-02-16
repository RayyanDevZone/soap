import { FaCheckCircle } from 'react-icons/fa';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen h-auto w-full bg-zinc-900 flex flex-col items-center justify-center px-4 font-lexend">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-6 w-full max-w-md flex flex-col items-center text-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 " />
        <h1 className="text-4xl text-gray-800 font-bold font-mono mb-4">Congratulations!</h1>
        <p className="text-gray-700 text-md mb-4 font-mono">
          You have successfully registered for the workshop.
        </p>
    
        <p className="text-gray-700 text-mb mb-4 font-mono">
          Please check your email and follow the instructions to join the workshop.
        </p>
        <button
          className="bg-[#01A264] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#019f57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01A264]"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
