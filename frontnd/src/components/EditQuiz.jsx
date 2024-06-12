import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export default function EditQuiz() {
  const [sNo, setSNo] = useState(1);
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");
  const [answer, setAnswer] = useState("");

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [quizEdited, setQuizEdited] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        
        console.log(`Fetching quiz with ID: ${id}`);
        const response = await fetch(`https://quiz-mernstack.onrender.com/quiz/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        const { sNo, question, answer, option } = data;
        setSNo(sNo);
        setQuestion(question);
        setAnswer(answer);
        setOption(option.join(", "));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar("Error fetching quiz", { variant: 'error' });
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id, enqueueSnackbar]);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleEdit = async () => {
    try {
      setLoading(true);
      const updatedOption = option.split(',').map(opt => opt.trim());
      console.log('Updating quiz with data:', { sNo, question, answer, option: updatedOption });
      const response = await fetch(`https://quiz-mernstack.onrender.com/quiz/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sNo, question, answer, option: updatedOption }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setLoading(false);
      setQuizEdited(true);
      enqueueSnackbar("Quiz edited successfully", { variant: 'success' });
      navigate("/quizes");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error editing quiz", { variant: 'error' });
      console.error("Error editing quiz:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Quiz</h2>
      {loading && <p className="text-center">Loading...</p>}
      <form>
        <div className="mb-4">
          <label htmlFor="s_No" className="block mb-1 text-gray-700">
            S. No:
          </label>
          <input
            type="number"
            id="s_No"
            value={sNo}
            onChange={(e) => setSNo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="question" className="block mb-1 text-gray-700">
            Question:
          </label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="option" className="block mb-1 text-gray-700">
            Option:
          </label>
          <input
            type="text"
            id="option"
            value={option}
            onChange={handleOptionChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block mb-1 text-gray-700">
            Answer:
          </label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handleEdit}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Editing..." : "Edit Quiz"}
        </button>
      </form>
      {quizEdited && (
        <div className="mt-4 text-center text-green-500">Quiz successfully edited!</div>
      )}
    </div>
  );
}
