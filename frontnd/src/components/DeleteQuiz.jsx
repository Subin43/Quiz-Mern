import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteQuiz() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleNextClick = () => {
        axios.delete(`http://localhost:5000/quiz/delete/${id}`)
            .then(() => {
                enqueueSnackbar("Quiz deleted successfully", { variant: "success" });
                navigate("/quizes");
            })
            .catch((error) => {
                enqueueSnackbar("Invalid delete request", { variant: "error" });
                console.log("error", error);
            });
    };

    return (
        <div className='m-4 sm:m-6 p-4'>
            <div className='text-lg sm:text-xl font-bold'>
                <p>Are you sure you want to delete this quiz?</p>
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextClick}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    );
}
