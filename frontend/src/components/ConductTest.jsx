import axios from "axios";
import { useState } from "react";
import { apiUrl } from "./Globals";
import ThankYou from "./ThankYou";

const Question = ({ question, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    handleAnswer(question.id, e.target.value);
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <span className="font-medium text-gray-900">
          <b>{`Question ${question.id}:`}</b> {question.text}
        </span>
      </h3>
      <div className="pt-6">
        <div className="space-y-4">
          {question.options.map((option) => (
            <div className="flex items-center" key={option.value}>
              <input
                id={`question${question.id}-option${option.value}`}
                name={`question${question.id}`}
                value={option.value}
                type="radio"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onChange={handleChange}
                checked={selectedOption === option.value}
              />
              <label
                htmlFor={`question${question.id}-option${option.value}`}
                className="ml-3 text-black-600"
              >
                {option.text}
              </label>
            </div>
          ))}
          <input
            type="hidden"
            name={`question${question.id}`}
            value={selectedOption || "skipped"}
          />
        </div>
      </div>
    </div>
  );
};

const testPaper1Ans = [
  { id: 1, answer: "1" }, // Sunday
  { id: 2, answer: "3" }, // Wednesday
  { id: 3, answer: "1" }, // 12π cm³
  { id: 4, answer: "3" }, // 60π m²
  { id: 5, answer: "3" }, // 322
  { id: 6, answer: "3" }, // 7/13
  { id: 7, answer: "4" }, // 90
  { id: 8, answer: "3" }, // Rs. 60,000
  { id: 9, answer: "1" }, // 2.29
  { id: 10, answer: "1" }, // 4
  { id: 11, answer: "2" }, // log(2 + 3) = log(2 × 3)
  { id: 12, answer: "2" }, // 1000/301
  { id: 13, answer: "2" }, // 153600
  { id: 14, answer: "2" }, // 3 m
  { id: 15, answer: "2" }, // 36
  { id: 16, answer: "3" }, // 96
  { id: 17, answer: "1" }, // OYIWXY
  { id: 18, answer: "4" }, // 34
  { id: 19, answer: "4" }, // Sister of father-in-law
  { id: 20, answer: "1" }, // Uncle
  { id: 21, answer: "2" }, // 9:4
  { id: 22, answer: "2" }, // 1800
  { id: 23, answer: "4" }, // 30 km/hr
  { id: 24, answer: "1" }, // 33 1/3 km
  { id: 25, answer: "2" }, // X
  { id: 26, answer: "1" }, // 35
  { id: 27, answer: "1" }, // 5
  { id: 28, answer: "4" }, // 73
  { id: 29, answer: "2" }, // Son
  { id: 30, answer: "3" }, // 1440
  { id: 31, answer: "4" }, // West
  { id: 32, answer: "3" }, // 12 years
  { id: 33, answer: "2" }, // 600 m²
  { id: 34, answer: "3" }, // Rs. 2000
  { id: 35, answer: "1" }, // 50
  { id: 36, answer: "2" }, // 180 meters
  { id: 37, answer: "3" }, // 12 km/hr
  { id: 38, answer: "2" }, // 9:7
  { id: 39, answer: "4" }, // 31 kg
  { id: 40, answer: "2" }, // 40 years
  { id: 41, answer: "3" }, // 12 days
  { id: 42, answer: "2" }, // 9
  { id: 43, answer: "3" }, // Rs. 698
  { id: 44, answer: "2" }, // Rs. 400
  { id: 45, answer: "3" }, // Rs. 1190
  { id: 46, answer: "3" }, // 40 km/hr
  { id: 47, answer: "2" }, // 12 min
  { id: 48, answer: "2" }, // 2:3
  { id: 49, answer: "3" }, // 4
  { id: 50, answer: "2" }, // 3
];

const testPaper2Ans = [
  { id: 1, answer: "3" }, // Friday
  { id: 2, answer: "4" }, // 4th, 11th, 18th, 25th
  { id: 3, answer: "3" }, // 1200
  { id: 4, answer: "2" }, // 5120
  { id: 5, answer: "3" }, // 9600
  { id: 6, answer: "2" }, // 1683
  { id: 7, answer: "3" }, // 100
  { id: 8, answer: "1" }, // 30 birds
  { id: 9, answer: "3" }, // 2
  { id: 10, answer: "2" }, // 1
  { id: 11, answer: "3" }, // 3.876
  { id: 12, answer: "2" }, // 1.9030
  { id: 13, answer: "3" }, // 4%
  { id: 14, answer: "3" }, // 27
  { id: 15, answer: "4" }, // 15
  { id: 16, answer: "1" }, // 20
  { id: 17, answer: "3" }, // 8251896
  { id: 18, answer: "4" }, // EARCIQU
  { id: 19, answer: "3" }, // Sister
  { id: 20, answer: "2" }, // 20000m2
  { id: 21, answer: "1" }, // 176
  { id: 22, answer: "3" }, // 375m
  { id: 23, answer: "2" }, // 12min
  { id: 24, answer: "3" }, // Taud is in between Paul and Jack
  { id: 25, answer: "4" }, // 96542
  { id: 26, answer: "2" }, // 64
  { id: 27, answer: "3" }, // kew&deko
  { id: 28, answer: "3" }, // Rs.1900
  { id: 29, answer: "3" }, // 4000 m
  { id: 30, answer: "2" }, // 25
  { id: 31, answer: "2" }, // 100
  { id: 32, answer: "5" }, // Sun
  { id: 33, answer: "3" }, // 13.3 years
  { id: 34, answer: "1" }, // 20 years
  { id: 35, answer: "1" }, // 36 years
  { id: 36, answer: "2" }, // 50 km/hr
  { id: 37, answer: "4" }, // 720 kmph
  { id: 38, answer: "3" }, // 9 3/5 days
  { id: 39, answer: "2" }, // 16
  { id: 40, answer: "2" }, // Rs. 2660
  { id: 41, answer: "3" }, // 42, 33
  { id: 42, answer: "1" }, // 4 years
  { id: 43, answer: "3" }, // Saturday
  { id: 44, answer: "4" }, // 197 1/2 degree
  { id: 45, answer: "2" }, // 31 5/7 years
  { id: 46, answer: "2" }, // 750 cu.m
  { id: 47, answer: "3" }, // 720
  { id: 48, answer: "2" }, // Rs. 400
  { id: 49, answer: "3" }, // 5
  { id: 50, answer: "2" }, // 20 : 49 : 64
];

const answerMapping = {
  testpaper1: testPaper1Ans,
  testpaper2: testPaper2Ans,
};

function ConductTest({ questionPaper, questions, username, password }) {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status

  const handleAnswer = (questionId, answer) => {
    console.log("questionid :", questionId, answer);
    // If answer is null, mark the question as skipped
    const updatedAnswer = answer !== null ? answer : "skipped";

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ["question-" + questionId]: updatedAnswer,
    }));
  };

  // Function to convert test paper name to desired format

  const handleSubmit = async () => {
    let totalAnswered = 0;
    let correctAnswers = 0;
    let skippedQuestions = 0;

    questions.forEach((question) => {
      const userAnswer = answers[`question-${question.id}`];
      console.log(
        userAnswer,
        answerMapping["testpaper1"][question.id]?.answer,
        "userAnswer"
      );
      if (userAnswer) {
        if (userAnswer === +answerMapping[questionPaper][question.id]?.answer) {
          correctAnswers++; // Increment correct answer count
        }
        totalAnswered++;
      } else {
        skippedQuestions++; // Increment skipped count
      }
    });

    const submissionData = {
      email: username,
      name: username,
      testpaper: questionPaper,
      totalAnswered,
      correctAnswers,
      marks: correctAnswers,
      skippedQuestions,
    };

    console.log("Final Submission Object:", submissionData);

    try {
      const response = await axios.post(
        apiUrl + "submit-answers",
        submissionData
      );
      console.log("Response:", response.data);
      console.log("Mail sent successfully!");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  const formatTestPaperName = (name) => {
    // Split the name into words
    const words = name.split(" ");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    // Join the words back together with space
    return capitalizedWords.join(" ");
  };

  return (
    <>
      <div>
        {isSubmitted ? (
          <ThankYou />
        ) : (
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8 sm:pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {formatTestPaperName(questionPaper)}
              </h1>
            </div>
            {questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                handleAnswer={handleAnswer}
              />
            ))}
            <div className="flex justify-center pt-4 pb-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-24 md:w-32 h-8 md:h-10 justify-center rounded-md bg-indigo-600 text-xs md:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </main>
        )}
      </div>
    </>
  );
}

export default ConductTest;
