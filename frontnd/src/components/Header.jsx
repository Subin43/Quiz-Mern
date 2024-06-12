import React from "react";
import { FaHome } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center">
    
          <Link to="/quizes">
            <FaHome className="text-white text-2xl sm:text-3xl ml-2 sm:ml-4" />
          </Link>
      
      </div>
      <h2 className="text-white text-lg sm:text-xl">QUIZ APP</h2>
      <Link to="/login">
        <MdLogin className="text-white text-2xl sm:text-3xl mr-2 sm:mr-4" />
      </Link>
    </div>
  );
}
