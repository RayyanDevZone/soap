import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      console.log(name, email); // Debugging: Check if name and email are set correctly
      try {
        const data = { name, email };
        const response = await axios.post('http://localhost:5000/api/sendemail', data);
        console.log(response.data);
        navigate('/confirmation');
      } catch (error) {
        console.error("Error sending email and Slack notification:", error);
      }
    }
  };

  return (
    <div className="min-h-screen h-auto w-full bg-zinc-900 flex flex-col items-center justify-center px-4 font-lexend">
      <h1 className="text-4xl text-white font-bold mt-10">Register for the Workshop</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 mt-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input

            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2  focus:ring-[#01A264]"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01A264]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#01A264] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#019f57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01A264]"
        >
          Enroll
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
