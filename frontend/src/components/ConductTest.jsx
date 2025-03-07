import axios from 'axios';
import { useState } from 'react';
import { apiUrl } from './Globals';
import ThankYou from './ThankYou';

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
            <input type="hidden" name={`question${question.id}`} value={selectedOption || 'skipped'} />
          </div>
        </div>
      </div>
    );
  };













function ConductTest({questionPaper, questions, username, password}) {


    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status

    const handleAnswer = (questionId, answer) => {
        console.log("questionid :",questionId, answer);
        // If answer is null, mark the question as skipped
  const updatedAnswer = answer !== null ? answer : 'skipped';

      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        ['question'+questionId]: updatedAnswer,
      }));
    };
  
    const handleSubmit = async() => {
        // Check for unanswered questions and mark them as 'skipped'
        const updatedAnswers = {};
        updatedAnswers['username'] = username;
        updatedAnswers['password'] = password;
        updatedAnswers['testpaper'] = questionPaper;


        questions.forEach(question => {
          if (!('question'+question.id in answers)) {
            updatedAnswers['question'+question.id] = 'skipped';
          } else {
            updatedAnswers['question'+question.id] = answers['question'+question.id];
          }
        });
        
        // Log the updated answers
        console.log(updatedAnswers);
        console.log(questionPaper)


        try {
            const response = await axios.post(apiUrl + "submit-answers", updatedAnswers); // await added here
            console.log('Response:', response.data);
            console.log("Mail sent successfully!");
            setIsSubmitted(true); // Set the state to indicate successful submission
          } catch (error) {
            console.error('Error:', error);
            // Handle error as needed
          }







      };
      

// Function to convert test paper name to desired format
const formatTestPaperName = (name) => {
    // Split the name into words
    const words = name.split(' ');
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the words back together with space
    return capitalizedWords.join(' ');
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
        <Question key={question.id} question={question} handleAnswer={handleAnswer} />
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
      </main>)}
    </div>
    
    </>
  )
}

export default ConductTest