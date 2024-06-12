import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizFooter({ currentQuiz }) {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white w-full py-4 flex flex-col sm:flex-row justify-around items-center fixed bottom-0">
      <p className="cursor-pointer hover:text-gray-400 my-1 sm:my-0">
        <span onClick={() => navigate("/addquiz")}>Add quiz</span>
      </p>
      <p className="cursor-pointer hover:text-gray-400 my-1 sm:my-0">
        <span onClick={() => navigate(`/edit/${currentQuiz._id}`)}>Edit quiz</span>
      </p>
      <p className="cursor-pointer hover:text-gray-400 my-1 sm:my-0">
        <span onClick={() => navigate(`/delete/${currentQuiz._id}`)}>Delete quiz</span>
      </p>
    </div>
  );
}
