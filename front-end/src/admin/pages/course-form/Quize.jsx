
import { useState } from "react";

export default function QuizEditor() {
  const [questions, setQuestions] = useState([
    { id: 1, text: "", choices: ["", "", ""], correct: 0 }
  ]);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showRewards, setShowRewards] = useState(false);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: Date.now(), text: "", choices: ["", "", ""], correct: 0 }
    ]);
  };

  const addChoice = () => {
    const updated = [...questions];
    updated[activeQuestion].choices.push("");
    setQuestions(updated);
  };

  return (
    <div className="flex h-[600px] border rounded-xl overflow-hidden">

      {/* LEFT QUESTION LIST */}
      <div className="w-64 border-r p-4 space-y-3 bg-gray-50">
        <h3 className="font-semibold">Question List</h3>

        {questions.map((q, index) => (
          <button
            key={q.id}
            onClick={() => setActiveQuestion(index)}
            className={`block w-full text-left px-3 py-2 rounded ${
              index === activeQuestion ? "bg-indigo-100" : "hover:bg-gray-100"
            }`}
          >
            Question {index + 1}
          </button>
        ))}

        <button
          onClick={addQuestion}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4"
        >
          Add Question
        </button>

        <button
          onClick={() => setShowRewards(true)}
          className="w-full bg-purple-500 text-white py-2 rounded-lg"
        >
          Rewards
        </button>
      </div>

      {/* RIGHT EDITOR */}
      <div className="flex-1 p-6">

        {!showRewards ? (
          <>
            <input
              placeholder="Write your question here"
              className="w-full border-b py-2 text-lg outline-none"
            />

            <div className="mt-6 space-y-4">
              {questions[activeQuestion].choices.map((choice, i) => (
                <div key={i} className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="correct"
                    checked={questions[activeQuestion].correct === i}
                    onChange={() => {
                      const updated = [...questions];
                      updated[activeQuestion].correct = i;
                      setQuestions(updated);
                    }}
                  />

                  <input
                    placeholder={`Answer ${i + 1}`}
                    className="flex-1 border-b py-1 outline-none"
                  />
                </div>
              ))}

              <button
                onClick={addChoice}
                className="text-indigo-600 text-sm"
              >
                + Add choice
              </button>
            </div>
          </>
        ) : (
          /* REWARDS PANEL */
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rewards</h3>

            <div className="space-y-2">
              <input className="border px-3 py-2 w-48" placeholder="First try points" />
              <input className="border px-3 py-2 w-48" placeholder="Second try points" />
              <input className="border px-3 py-2 w-48" placeholder="Third try points" />
              <input className="border px-3 py-2 w-48" placeholder="Fourth try points" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

