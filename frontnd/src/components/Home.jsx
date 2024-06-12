import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import { RiAdminFill } from "react-icons/ri";
import Footer from './Footer';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false); // Use 'loggedIn' for clarity
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state ? location.state.username : '';

  const handleLogin = () => {
    // Simulate successful login (replace with actual authentication logic)
    setLoggedIn(true);
    navigate("/login"); // This could be removed if login page is not needed
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow relative">
        <button
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={() => navigate("/admin")} // Navigate to admin page
        >
          Admin <RiAdminFill className="ml-1" />
        </button>
        <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
          <h3 className="p-4 text-2xl sm:text-3xl font-bold">Please Login Below {username}</h3>
          {
            !loggedIn ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={handleLogin}
              >
                Log On
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={() => navigate("/quizes")} // Navigate to quizzes page
              >
                Get Started
              </button>
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
