import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/Home";
import SendMail from "./components/SendMail";
import Success from "./components/Success";
import ThankYou from "./components/ThankYou";
import MultistepForm from "./components/MultistepForm";
import ConductTest from "./components/ConductTest";

const testPaper1 = [
  {
    id: 1,
    text: "What will be the day of the week 15th August, 2010?",
    options: [
      { value: "1", text: "Sunday" },
      { value: "2", text: "Monday" },
      { value: "3", text: "Tuesday" },
      { value: "4", text: "Friday" },
    ],
  },
  {
    id: 2,
    text: "What was the day of the week on 17th June, 1998?",
    options: [
      { value: "1", text: "Monday" },
      { value: "2", text: "Tuesday" },
      { value: "3", text: "Wednesday" },
      { value: "4", text: "Thursday" },
    ],
  },
  {
    id: 3,
    text: "A right triangle with sides 3 cm, 4 cm and 5 cm is rotated the side of 3 cm to form a cone. The volume of the cone so formed is:",
    options: [
      { value: "1", text: "12πcm³" },
      { value: "2", text: "15πcm³" },
      { value: "3", text: "16πcm³" },
      { value: "4", text: "20πcm³" },
    ],
  },
  {
    id: 4,
    text: "The slant height of a right circular cone is 10 m and its height is 8 m. Find the area of its curved surface.",
    options: [
      { value: "1", text: "30πm²" },
      { value: "2", text: "40πm²" },
      { value: "3", text: "60πm²" },
      { value: "4", text: "80πm²" },
    ],
  },
  {
    id: 5,
    text: "The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:",
    options: [
      { value: "1", text: "276" },
      { value: "2", text: "299" },
      { value: "3", text: "322" },
      { value: "4", text: "345" },
    ],
  },
  {
    id: 6,
    text: "Reduce 128352 / 238368 to its lowest terms.",
    options: [
      { value: "1", text: "3/4" },
      { value: "2", text: "5/13" },
      { value: "3", text: "7/13" },
      { value: "4", text: "9/13" },
    ],
  },
  {
    id: 7,
    text: "A man has Rs.480 in the denominations of one-rupee notes, five-rupee notes and ten-rupee notes. The number of notes of each denomination is equal. What is the total number of notes that he has?",
    options: [
      { value: "1", text: "45" },
      { value: "2", text: "60" },
      { value: "3", text: "75" },
      { value: "4", text: "90" },
    ],
  },
  {
    id: 8,
    text: "One-third of Rahul's savings in National Savings Certificate is equal to one-half of his savings in Public Provident Fund. If he has Rs. 1,50,000 as total savings, how much has he saved in Public Provident Fund?",
    options: [
      { value: "1", text: "Rs.30,000" },
      { value: "2", text: "Rs.50,000" },
      { value: "3", text: "Rs.60,000" },
      { value: "4", text: "Rs.90,000" },
    ],
  },
  {
    id: 9,
    text: "(17)^(3.5) × (17)^? = 178",
    options: [
      { value: "1", text: "2.29" },
      { value: "2", text: "2.75" },
      { value: "3", text: "4.25" },
      { value: "4", text: "4.5" },
    ],
  },
  {
    id: 10,
    text: "(256)^(0.16) × (256)^(0.09) = ?",
    options: [
      { value: "1", text: "4" },
      { value: "2", text: "16" },
      { value: "3", text: "64" },
      { value: "4", text: "256.25" },
    ],
  },
  {
    id: 11,
    text: "Which of the following statements is not correct?",
    options: [
      { value: "1", text: "log₁₀10 = 1" },
      { value: "2", text: "log(2 + 3) = log(2 × 3)" },
      { value: "3", text: "log₁₀ 1 = 0" },
      { value: "4", text: "log(1 + 2 + 3) = log 1 + log 2 + log 3" },
    ],
  },
  {
    id: 12,
    text: "If log₁₀ 2 = 0.3010, then log₂ 10 is equal to:",
    options: [
      { value: "1", text: "699/301" },
      { value: "2", text: "1000/301" },
      { value: "3", text: "0.3010" },
      { value: "4", text: "0.6990" },
    ],
  },
  {
    id: 13,
    text: "The ratio between the length and the breadth of a rectangular park is 3 : 2. If a man cycling along the boundary of the park at the speed of 12 km/hr completes one round in 8 minutes, then the area of the park (in sq. m) is:",
    options: [
      { value: "1", text: "15360" },
      { value: "2", text: "153600" },
      { value: "3", text: "30720" },
      { value: "4", text: "307200" },
    ],
  },
  {
    id: 14,
    text: "A rectangular park 60 m long and 40 m wide has two concrete crossroads running in the middle of the park and rest of the park has been used as a lawn. If the area of the lawn is 2109 sq. m, then what is the width of the road",
    options: [
      { value: "1", text: "2.91 m" },
      { value: "2", text: "3 m" },
      { value: "3", text: "5.82 m" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 15,
    text: "If one-third of one-fourth of a number is 15, then three-tenth of that number is:",
    options: [
      { value: "1", text: "35" },
      { value: "2", text: "36" },
      { value: "3", text: "45" },
      { value: "4", text: "54" },
    ],
  },
  {
    id: 16,
    text: "The sum of the digits of a two-digit number is 15 and the difference between the digits is 3. What is the two-digit number?",
    options: [
      { value: "1", text: "69" },
      { value: "2", text: "78" },
      { value: "3", text: "96" },
      { value: "4", text: "Cannot be determined" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 17,
    text: "In a certain code language if the word 'MUSEUM' is coded as 'LSPAPG', then how will the word 'PALACE' be coded in that language?",
    options: [
      { value: "1", text: "OYIWXY" },
      { value: "2", text: "OYIXYW" },
      { value: "3", text: "IYXYWO" },
      { value: "4", text: "YXWYOI" },
    ],
  },
  {
    id: 18,
    text: "In a certain code language, if the value of 'BLOCK' = 13 and 'CURTAIN' = 27, then what is the value of the word 'SCIENCE'?",
    options: [
      { value: "1", text: "32" },
      { value: "2", text: "36" },
      { value: "3", text: "38" },
      { value: "4", text: "34" },
    ],
  },
  {
    id: 19,
    text: "Pointing to Manju, Raju said, 'The son of her only brother is the brother of my wife'. How is Manju related to Raju?",
    options: [
      { value: "1", text: "Mother's sister" },
      { value: "2", text: "Grandmother" },
      { value: "3", text: "Mother-in-law" },
      { value: "4", text: "Sister of father-in-law" },
    ],
  },
  {
    id: 20,
    text: "Mr. Ramu's mother's father-in-law's only son's only daughter's son is Chetan. How is Ramu related to Chetan?",
    options: [
      { value: "1", text: "Uncle" },
      { value: "2", text: "Nephew" },
      { value: "3", text: "Niece" },
      { value: "4", text: "Father" },
      { value: "5", text: "Cannot be determined" },
    ],
  },
  {
    id: 21,
    text: "If each side of a square is increased by 50%, the ratio of the area of the resulting square to the area of the given square is:",
    options: [
      { value: "1", text: "5:4" },
      { value: "2", text: "9:4" },
      { value: "3", text: "4:5" },
      { value: "4", text: "4:9" },
    ],
  },
  {
    id: 22,
    text: "A hall 36m long and 15m broad is to be paved with stones, each measuring 6dm by 5 dm. The number of stones required is:",
    options: [
      { value: "1", text: "180" },
      { value: "2", text: "1800" },
      { value: "3", text: "18" },
      { value: "4", text: "18000" },
    ],
  },
  {
    id: 23,
    text: "A boy runs 200 meters in 24 seconds. What is his speed ?",
    options: [
      { value: "1", text: "20 km/hr" },
      { value: "2", text: "24 km/hr" },
      { value: "3", text: "28.5 km/hr" },
      { value: "4", text: "30 km/hr" },
    ],
  },
  {
    id: 24,
    text: "Two persons, Ram and Lakshman, who are at a distance of 100 km from each other, move towards each other from two places P and Q at speeds of 20 kmph and 25 kmph respectively. Lakshman reaches P, returns immediately and meets Ram at R, who started on the return journey to P immediately after reaching Q. What is the distance between Q and R?",
    options: [
      { value: "1", text: "33 1/3 km" },
      { value: "2", text: "25 km" },
      { value: "3", text: "30 km" },
      { value: "4", text: "27 1/3 km" },
    ],
  },
  {
    id: 25,
    text: "A, P, R, X, S and Z are sitting in a row. S and Z are in the centre. A and P are at the ends. R is sitting to the left of A. Who is to the right of P?",
    options: [
      { value: "1", text: "A" },
      { value: "2", text: "X" },
      { value: "3", text: "S" },
      { value: "4", text: "Z" },
    ],
  },
  {
    id: 26,
    text: "120, 99, 80, 63, 48, ?",
    options: [
      { value: "1", text: "35" },
      { value: "2", text: "38" },
      { value: "3", text: "39" },
      { value: "4", text: "40" },
    ],
  },
  {
    id: 27,
    text: "125,80,45,20,?",
    options: [
      { value: "1", text: "5" },
      { value: "2", text: "8" },
      { value: "3", text: "10" },
      { value: "4", text: "12" },
    ],
  },
  {
    id: 28,
    text: "2, 5, 9, 19, 37, ?",
    options: [
      { value: "1", text: "75" },
      { value: "2", text: "75" },
      { value: "3", text: "65" },
      { value: "4", text: "73" },
    ],
  },
  {
    id: 29,
    text: "A is the brother of B. B is the brother of C. D is the father of A. If C is the son of E, how is D related to E?",
    options: [
      { value: "1", text: "Father" },
      { value: "2", text: "Son" },
      { value: "3", text: "Brother" },
      { value: "4", text: "Cannot be determined" },
    ],
  },
  {
    id: 30,
    text: "If the letters of the word 'COMPUTER' are arranged in such a way that all the vowels come together, then the number of arrangements possible is?",
    options: [
      { value: "1", text: "720" },
      { value: "2", text: "5040" },
      { value: "3", text: "1440" },
      { value: "4", text: "2880" },
    ],
  },
  {
    id: 31,
    text: "A man is facing east. He turns 45° in the clockwise direction and then another 180° in the same direction and then 45° in the anticlockwise direction. Which direction is he facing now?",
    options: [
      { value: "1", text: "North" },
      { value: "2", text: "South" },
      { value: "3", text: "East" },
      { value: "4", text: "West" },
    ],
  },
  {
    id: 32,
    text: "Raju is twice as old as Vimal. 6 years ago, Raju was three times as old as Vimal. Find the present age of Vimal.",
    options: [
      { value: "1", text: "6 years" },
      { value: "2", text: "9 years" },
      { value: "3", text: "12 years" },
      { value: "4", text: "15 years" },
    ],
  },
  {
    id: 33,
    text: "The perimeter of a rectangle is 200 m. If the length of the rectangle is 60% of its breadth, find the area of the rectangle.",
    options: [
      { value: "1", text: "400 m²" },
      { value: "2", text: "600 m²" },
      { value: "3", text: "800 m²" },
      { value: "4", text: "1000 m²" },
    ],
  },
  {
    id: 34,
    text: "The difference between the compound interest and the simple interest on a certain sum of money for 2 years at 6% per annum, when the interest is compounded annually, is Rs. 2. What is the sum?",
    options: [
      { value: "1", text: "Rs. 1000" },
      { value: "2", text: "Rs. 1500" },
      { value: "3", text: "Rs. 2000" },
      { value: "4", text: "Rs. 2500" },
    ],
  },
  {
    id: 35,
    text: "How many numbers are there between 100 and 500 which are divisible by 8?",
    options: [
      { value: "1", text: "50" },
      { value: "2", text: "51" },
      { value: "3", text: "52" },
      { value: "4", text: "53" },
    ],
  },
  {
    id: 36,
    text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    options: [
      { value: "1", text: "90 meters" },
      { value: "2", text: "180 meters" },
      { value: "3", text: "360 meters" },
      { value: "4", text: "100 meters" },
    ],
  },
  {
    id: 37,
    text: "A train travels at a certain average speed for a distance of 63 km and then travels a distance of 72 km at an average speed of 6 km/hr more than the original speed. If it takes 3 hours to complete the total journey, what is the original average speed?",
    options: [
      { value: "1", text: "9 km/hr" },
      { value: "2", text: "10 km/hr" },
      { value: "3", text: "12 km/hr" },
      { value: "4", text: "14 km/hr" },
    ],
  },
  {
    id: 38,
    text: "The ratio between the present ages of A and B is 5:3 respectively. The ratio between A's age 4 years ago and B's age 4 years hence is 1:1. What is the ratio between A's age 4 years hence and B's age now?",
    options: [
      { value: "1", text: "7:9" },
      { value: "2", text: "9:7" },
      { value: "3", text: "11:7" },
      { value: "4", text: "7:11" },
    ],
  },
  {
    id: 39,
    text: "The average weight of A, B and C is 45 kg. If the average weight of A and B be 40 kg and that of B and C be 43 kg, then the weight of B is:",
    options: [
      { value: "1", text: "17 kg" },
      { value: "2", text: "20 kg" },
      { value: "3", text: "26 kg" },
      { value: "4", text: "31 kg" },
    ],
  },
  {
    id: 40,
    text: "The average age of husband, wife and their child 3 years ago was 27 years and that of wife and the child 5 years ago was 20 years. The present age of the husband is:",
    options: [
      { value: "1", text: "35 years" },
      { value: "2", text: "40 years" },
      { value: "3", text: "45 years" },
      { value: "4", text: "50 years" },
    ],
  },
  {
    id: 41,
    text: "A and B together can do a piece of work in 12 days, which B and C together can do in 16 days. After A has been working at it for 5 days and B for 7 days     and C for 4 days, 45% of the work is finished. How long will C alone take to finish the remaining work?",
    options: [
      { value: "1", text: "8 days" },
      { value: "2", text: "10 days" },
      { value: "3", text: "12 days" },
      { value: "4", text: "14 days" },
    ],
  },
  {
    id: 42,
    text: "A and B can do a piece of work in 45 days and 40 days respectively. They began to do the work together but A leaves after some days and then B completed the remaining work in 23 days. The number of days after which A left the work was:",
    options: [
      { value: "1", text: "8" },
      { value: "2", text: "9" },
      { value: "3", text: "10" },
      { value: "4", text: "12" },
    ],
  },
  {
    id: 43,
    text: "A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:",
    options: [
      { value: "1", text: "Rs. 650" },
      { value: "2", text: "Rs. 690" },
      { value: "3", text: "Rs. 698" },
      { value: "4", text: "Rs. 700" },
    ],
  },
  {
    id: 44,
    text: "A shopkeeper sold a shirt at a loss of 10%. Had he sold it for Rs. 60 more, he would have gained 10%. The cost price of the shirt is:",
    options: [
      { value: "1", text: "Rs. 200" },
      { value: "2", text: "Rs. 400" },
      { value: "3", text: "Rs. 600" },
      { value: "4", text: "Rs. 800" },
    ],
  },
  {
    id: 45,
    text: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
    options: [
      { value: "1", text: "Rs. 1100" },
      { value: "2", text: "Rs. 1150" },
      { value: "3", text: "Rs. 1190" },
      { value: "4", text: "Rs. 1195" },
    ],
  },
  {
    id: 46,
    text: "A person covers a distance of 320 km in 8 hours. If he covers the same distance on foot, he takes 40 hours more than he would have taken on his bike. What is the speed of the bike?",
    options: [
      { value: "1", text: "30 km/hr" },
      { value: "2", text: "35 km/hr" },
      { value: "3", text: "40 km/hr" },
      { value: "4", text: "45 km/hr" },
    ],
  },
  {
    id: 47,
    text: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
    options: [
      { value: "1", text: "10 min" },
      { value: "2", text: "12 min" },
      { value: "3", text: "15 min" },
      { value: "4", text: "25 min" },
    ],
  },
  {
    id: 48,
    text: "The average age of students of a class is 15.8 years. The average age of boys in the class is 16.4 years and that of the girls is 15.4 years. The ratio of the number of boys to the number of girls in the class is:",
    options: [
      { value: "1", text: "1:2" },
      { value: "2", text: "2:3" },
      { value: "3", text: "3:4" },
      { value: "4", text: "4:5" },
    ],
  },
  {
    id: 49,
    text: "If log₂x - log₂(x - 2) = 1, then x is equal to:",
    options: [
      { value: "1", text: "3" },
      { value: "2", text: "2" },
      { value: "3", text: "4" },
      { value: "4", text: "8" },
    ],
  },
  {
    id: 50,
    text: "If a number is subtracted from the square of its one-third, the result is 7. What is the number?",
    options: [
      { value: "1", text: "2" },
      { value: "2", text: "3" },
      { value: "3", text: "4" },
      { value: "4", text: "5" },
    ],
  },
];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/sendmail" element={<SendMail />} />
          <Route path="/success" element={<Success />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route
            path="/"
            element={
              <ConductTest
                questionPaper={"testpaper1"}
                questions={testPaper1}
                username={"sssathish73362@gmail.com"}
                password={"password"}
              />
            }
          />
        </Routes> */}
      </Layout>
    </Router>
  );
}

export default App;
