// Import necessary modules
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "./Globals";
import ConductTest from "./ConductTest";

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



const testPaper2 = [
  {
    id: 1,
    text: "It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
    options: [
      { value: "1", text: "Sunday" },
      { value: "2", text: "Monday" },
      { value: "3", text: "Friday" },
      { value: "4", text: "Wednesday" },
    ],
  },
  {
    id: 2,
    text: "On what dates of April, 2001 did Wednesday fall?",
    options: [
      { value: "1", text: "1st, 8th, 15th, 22nd, 29th" },
      { value: "2", text: "2nd, 9th, 16th, 23rd, 30th" },
      { value: "3", text: "3rd, 10th, 17th, 24th" },
      { value: "4", text: "4th, 11th, 18th, 25th" },
    ],
  },
  {
    id: 3,
    text: "A hall is 15 m long and 12 m broad. If the sum of the areas of the floor and the ceiling is equal to the sum of the areas of four walls, the volume of the hall is:",
    options: [
      { value: "1", text: "720" },
      { value: "2", text: "900" },
      { value: "3", text: "1200" },
      { value: "4", text: "1800" },
    ],
  },
  {
    id: 4,
    text: "A metallic sheet is of rectangular shape with dimensions 48 m x 36 m. From each of its corners, a square is cut off so as to make an open box. If the length of the square is 8 m, the volume of the box (in m3) is:",
    options: [
      { value: "1", text: "4830" },
      { value: "2", text: "5120" },
      { value: "3", text: "6420" },
      { value: "4", text: "8960" },
    ],
  },
  {
    id: 5,
    text: "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
    options: [
      { value: "1", text: "9000" },
      { value: "2", text: "9400" },
      { value: "3", text: "9600" },
      { value: "4", text: "9800" },
    ],
  },
  {
    id: 6,
    text: "The least number which when divided by 5, 6, 7 and 8 leaves a remainder 3, but when divided by 9 leaves no remainder, is:",
    options: [
      { value: "1", text: "1677" },
      { value: "2", text: "1683" },
      { value: "3", text: "2523" },
      { value: "4", text: "3363" },
    ],
  },
  {
    id: 7,
    text: "There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:",
    options: [
      { value: "1", text: "20" },
      { value: "2", text: "80" },
      { value: "3", text: "100" },
      { value: "4", text: "200" },
    ],
  },
  {
    id: 8,
    text: "A fires 5 shots to B's 3 but A kills only once in 3 shots while B kills once in 2 shots. When B has missed 27 times, A has killed:",
    options: [
      { value: "1", text: "30 birds" },
      { value: "2", text: "60 birds" },
      { value: "3", text: "72 birds" },
      { value: "4", text: "90 birds" },
    ],
  },
  {
    id: 9,
    text: "If (a/b)x-1 = (b/a)x-3, then the value of x is:",
    options: [
      { value: "1", text: "1/2" },
      { value: "2", text: "1" },
      { value: "3", text: "2" },
      { value: "4", text: "7/2" },
    ],
  },
  {
    id: 10,
    text: "{ 1/(1 + x(b-a) + x(c-a)) } + { 1/(1 + x(a-b) + x(c-b))} + { 1/(1 + x(b-c) + x(a-c))} = ?",
    options: [
      { value: "1", text: "0" },
      { value: "2", text: "1" },
      { value: "3", text: "xa-b-c" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 11,
    text: "If log 2 = 0.3010 and log 3 = 0.4771, the value of log5 512 is:",
    options: [
      { value: "1", text: "2.870" },
      { value: "2", text: "2.967" },
      { value: "3", text: "3.876" },
      { value: "4", text: "3.912" },
    ],
  },
  {
    id: 12,
    text: "If log<sub>10</sub> 2 = 0.3010, the value of log<sub>10</sub> 80 is",
    options: [
      { value: "1", text: "1.6020" },
      { value: "2", text: "1.9030" },
      { value: "3", text: "3.9030" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 13,
    text: "An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:",
    options: [
      { value: "1", text: "2%" },
      { value: "2", text: "2.02%" },
      { value: "3", text: "4%" },
      { value: "4", text: "4.04%" },
    ],
  },
  {
    id: 14,
    text: "The diagonal of the floor of a rectangular closet is 71/2 feet. The shorter side of the closet is 41/2 feet. What is the area of the closet in square feet?",
    options: [
      { value: "1", text: "51/4" },
      { value: "2", text: "131/2" },
      { value: "3", text: "27" },
      { value: "4", text: "37" },
    ],
  },
  {
    id: 15,
    text: "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:",
    options: [
      { value: "1", text: "9" },
      { value: "2", text: "11" },
      { value: "3", text: "13" },
      { value: "4", text: "15" },
    ],
  },
  {
    id: 16,
    text: "The sum of the squares of three numbers is 138, while the sum of their products taken two at a time is 131. Their sum is:",
    options: [
      { value: "1", text: "20" },
      { value: "2", text: "30" },
      { value: "3", text: "40" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 17,
    text: "If DELHI is coded as 73541 and CALCUTTA as 82589662, how can CALICUT be coded?",
    options: [
      { value: "1", text: "5279431" },
      { value: "2", text: "5978213" },
      { value: "3", text: "8251896" },
      { value: "4", text: "8543691" },
    ],
  },
  {
    id: 18,
    text: "In a certain code language, if the word 'DISTANCE' is coded as EDCINSAT, then how will you code 'ACQUIRE' in that language?",
    options: [
      { value: "1", text: "EACIQUR" },
      { value: "2", text: "EACRIUQ" },
      { value: "3", text: "ERCIAQU" },
      { value: "4", text: "EARCIQU" },
    ],
  },
  {
    id: 19,
    text: 'Introducing a man to her husband, a woman said, "His brother\'s father is the only son of my grandfather." How is the woman related to this man?',
    options: [
      { value: "1", text: "Mother" },
      { value: "2", text: "Aunt" },
      { value: "3", text: "Sister" },
      { value: "4", text: "Daughter" },
      { value: "5", text: "Grandmother" },
    ],
  },
  {
    id: 20,
    text: "A man walking at the speed of 4 kmph crosses a square field diagonally in 3 minutes. The area of the field is:",
    options: [
      { value: "1", text: "18000m2" },
      { value: "2", text: "20000m2" },
      { value: "3", text: "19000m2" },
      { value: "4", text: "25000m2" },
    ],
  },
  {
    id: 21,
    text: "A room 5.44m long and 3.74m broad is to be paved with square tiles. The least number of square tiles required to cover the floor is:",
    options: [
      { value: "1", text: "176" },
      { value: "2", text: "192" },
      { value: "3", text: "184" },
      { value: "4", text: "162" },
    ],
  },
  {
    id: 22,
    text: "If the speed of a man is 45 km per hour, then what is the distance traveled by him in 30 seconds?",
    options: [
      { value: "1", text: "275m" },
      { value: "2", text: "360m" },
      { value: "3", text: "375m" },
      { value: "4", text: "420m" },
    ],
  },
  {
    id: 23,
    text: "Without any halt, a train travels a certain distance with an average speed of 75 kmph, and with halts, it covers the same distance at an average speed of 60 kmph. When it is traveling with halts, how many minutes per hour does the train halt on average?",
    options: [
      { value: "1", text: "48min" },
      { value: "2", text: "12min" },
      { value: "3", text: "15min" },
      { value: "4", text: "18min" },
    ],
  },
  {
    id: 24,
    text: "There are 8 houses in a line and in each house only one boy lives with the conditions as given below: Jack is not the neighbor of Siman. Harry is just next to the left of Larry. There is at least one to the left of Larry. Paul lives in one of the two houses in the middle. Mike lives in between Paul and Larry. If at least one lives to the right of Robert and Harry is not between Taud and Larry, then which one of the following statements is not correct?",
    options: [
      { value: "1", text: "Robert is not at the left end." },
      { value: "2", text: "Robert is in between Simon and Taud." },
      { value: "3", text: "Taud is in between Paul and Jack." },
      { value: "4", text: "There are three persons to the right of Paul." },
    ],
  },
  {
    id: 25,
    text: "589654237, 89654237, 8965423, 965423, ?",
    options: [
      { value: "1", text: "58965" },
      { value: "2", text: "65423" },
      { value: "3", text: "89654" },
      { value: "4", text: "96542" },
    ],
  },
  {
    id: 26,
    text: "1, 1, 4, 8, 9, 27, 16, ?",
    options: [
      { value: "1", text: "32" },
      { value: "2", text: "64" },
      { value: "3", text: "81" },
      { value: "4", text: "256" },
    ],
  },
  {
    id: 27,
    text: "In a certain code language, 'kewxas huma deko' means 'she is eating apples'; 'kewtepo qua' means 'she sells toys' and 'sullimdeko' means 'I like apples'. Which word in that language means 'she' and 'apples'?",
    options: [
      { value: "1", text: "xas&deko" },
      { value: "2", text: "xas&kew" },
      { value: "3", text: "kew&deko" },
      { value: "4", text: "kew&xas" },
    ],
  },
  {
    id: 28,
    text: "The cost of papering the four walls of a room is Rs.475. Each one of the length, breadth and height of another room is double that of this room. The cost of papering the walls of this new room is:",
    options: [
      { value: "1", text: "Rs.950" },
      { value: "2", text: "Rs.1425" },
      { value: "3", text: "Rs.1900" },
      { value: "4", text: "Rs.712.50" },
    ],
  },
  {
    id: 29,
    text: "A and B participate in a 5000 m bicycle race which is being run on a circular track of 500 m. If the speed of A and B are 20 m/s and 10 m/s respectively, what is the distance covered by A when he passes B for the seventh time?",
    options: [
      { value: "1", text: "2500" },
      { value: "2", text: "2800" },
      { value: "3", text: "4000 m" },
      { value: "4", text: "situation is not possible" },
    ],
  },
  {
    id: 30,
    text: "5, 6, 9, 15, ?, 40",
    options: [
      { value: "1", text: "21" },
      { value: "2", text: "25" },
      { value: "3", text: "27" },
      { value: "4", text: "33" },
    ],
  },
  {
    id: 31,
    text: "Find the odd man out 8, 27, 64, 100, 125, 216, 343",
    options: [
      { value: "1", text: "27" },
      { value: "2", text: "100" },
      { value: "3", text: "125" },
      { value: "4", text: "343" },
    ],
  },
  {
    id: 32,
    text: "Pick the odd man out:",
    options: [
      { value: "1", text: "Mars" },
      { value: "2", text: "Pluto" },
      { value: "3", text: "Mercury" },
      { value: "4", text: "Saturn" },
      { value: "5", text: "Sun" },
    ],
  },
  {
    id: 33,
    text: "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?",
    options: [
      { value: "1", text: "6.2 years" },
      { value: "2", text: "7.7 years" },
      { value: "3", text: "13.3 years" },
      { value: "4", text: "10 years" },
    ],
  },
  {
    id: 34,
    text: "Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?",
    options: [
      { value: "1", text: "20 years" },
      { value: "2", text: "30 years" },
      { value: "3", text: "40 years" },
      { value: "4", text: "25 years" },
    ],
  },
  {
    id: 35,
    text: "Dinesh is younger than Roshan by 9 years. If their ages are in the respective ratio of 4:5, how old is Dinesh?",
    options: [
      { value: "1", text: "36 years" },
      { value: "2", text: "23 years" },
      { value: "3", text: "29 years" },
      { value: "4", text: "Cannot be determined" },
    ],
  },
  {
    id: 36,
    text: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
    options: [
      { value: "1", text: "45 km/hr" },
      { value: "2", text: "50 km/hr" },
      { value: "3", text: "54 km/hr" },
      { value: "4", text: "55 km/hr" },
    ],
  },
  {
    id: 37,
    text: "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of:",
    options: [
      { value: "1", text: "300 kmph" },
      { value: "2", text: "360 kmph" },
      { value: "3", text: "600 kmph" },
      { value: "4", text: "720 kmph" },
    ],
  },
  {
    id: 38,
    text: "A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With the help of C, they did the job in 4 days only. Then, C alone can do the job in:",
    options: [
      { value: "1", text: "9 1/5 days" },
      { value: "2", text: "9 2/5 days" },
      { value: "3", text: "9 3/5 days" },
      { value: "4", text: "10" },
    ],
  },
  {
    id: 39,
    text: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
    options: [
      { value: "1", text: "15" },
      { value: "2", text: "16" },
      { value: "3", text: "18" },
      { value: "4", text: "25" },
    ],
  },
  {
    id: 40,
    text: "A, B and C jointly thought of engaging themselves in a business venture. It was agreed that A would invest Rs. 6500 for 6 months, B, Rs. 8400 for 5 months and C, Rs. 10,000 for 3 months. A wants to be the working member for which, he was to receive 5% of the profits. The profit earned was Rs. 7400. Calculate the share of B in the profit.",
    options: [
      { value: "1", text: "Rs. 1900" },
      { value: "2", text: "Rs. 2660" },
      { value: "3", text: "Rs. 2800" },
      { value: "4", text: "Rs. 2840" },
    ],
  },
  {
    id: 41,
    text: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
    options: [
      { value: "1", text: "39, 30" },
      { value: "2", text: "41, 32" },
      { value: "3", text: "42, 33" },
      { value: "4", text: "43, 34" },
    ],
  },
  {
    id: 42,
    text: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
    options: [
      { value: "1", text: "4 years" },
      { value: "2", text: "8 years" },
      { value: "3", text: "10 years" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 43,
    text: "What was the day of the week on 28th May, 2006?",
    options: [
      { value: "1", text: "Thursday" },
      { value: "2", text: "Friday" },
      { value: "3", text: "Saturday" },
      { value: "4", text: "Sunday" },
    ],
  },
  {
    id: 44,
    text: "The reflex angle between the hands of a clock at 10.25 is:",
    options: [
      { value: "1", text: "180 degree" },
      { value: "2", text: "192 1/2 degree" },
      { value: "3", text: "195 degree" },
      { value: "4", text: "197 1/2 degree" },
    ],
  },
  {
    id: 45,
    text: "A family consists of two grandparents, two parents and three grandchildren. The average age of the grandparents is 67 years, that of the parents is 35 years and that of the grandchildren is 6 years. What is the average age of the family",
    options: [
      { value: "1", text: "28 4/7 years" },
      { value: "2", text: "31 5/7 years" },
      { value: "3", text: "32 1/7 years" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 46,
    text: "In a shower, 5 cm of rain falls. The volume of water that falls on 1.5 hectares of ground is:",
    options: [
      { value: "1", text: "75 cu.m" },
      { value: "2", text: "750 cu.m" },
      { value: "3", text: "7500 cu.m" },
      { value: "4", text: "75000 cu.m" },
    ],
  },
  {
    id: 47,
    text: "In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together?",
    options: [
      { value: "1", text: "360" },
      { value: "2", text: "480" },
      { value: "3", text: "720" },
      { value: "4", text: "5040" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 48,
    text: "A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
    options: [
      { value: "1", text: "Rs. 375" },
      { value: "2", text: "Rs. 400" },
      { value: "3", text: "Rs. 600" },
      { value: "4", text: "Rs. 800" },
    ],
  },
  {
    id: 49,
    text: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    options: [
      { value: "1", text: "3" },
      { value: "2", text: "4" },
      { value: "3", text: "5" },
      { value: "4", text: "6" },
    ],
  },
  {
    id: 50,
    text: "Three partners shared the profit in a business in the ratio 5 : 7 : 8. They had partnered for 14 months, 8 months and 7 months respectively. What was the ratio of their investments?",
    options: [
      { value: "1", text: "5 : 7 : 8" },
      { value: "2", text: "20 : 49 : 64" },
      { value: "3", text: "38 : 28 : 21" },
      { value: "4", text: "None of these" },
    ],
  },
];

const testPaper3 = [
  {
    id: 1,
    text: "If 6th March, 2005 is Monday, what was the day of the week on 6th March, 2004?",
    options: [
      { value: "1", text: "Sunday" },
      { value: "2", text: "Saturday" },
      { value: "3", text: "Tuesday" },
      { value: "4", text: "Wednesday" },
    ],
  },
  {
    id: 2,
    text: "The last day of a century cannot be",
    options: [
      { value: "1", text: "Monday" },
      { value: "2", text: "Wednesday" },
      { value: "3", text: "Tuesday" },
      { value: "4", text: "Friday" },
    ],
  },
  {
    id: 3,
    text: "A hollow iron pipe is 21 cm long and its external diameter is 8 cm. If the thickness of the pipe is 1 cm and iron weighs 8 g/cm³, then the weight of the pipe is:",
    options: [
      { value: "1", text: "3.6 kg" },
      { value: "2", text: "3.696 kg" },
      { value: "3", text: "36 kg" },
      { value: "4", text: "36.9 kg" },
    ],
  },
  {
    id: 4,
    text: "The curved surface area of a cylindrical pillar is 264 m² and its volume is 924 m³. Find the ratio of its diameter to its height.",
    options: [
      { value: "1", text: "3 : 7" },
      { value: "2", text: "7 : 3" },
      { value: "3", text: "6 : 7" },
      { value: "4", text: "7 : 6" },
    ],
  },
  {
    id: 5,
    text: "The product of two numbers is 4107. If the H.C.F. of these numbers is 37, then the greater number is:",
    options: [
      { value: "1", text: "101" },
      { value: "2", text: "107" },
      { value: "3", text: "111" },
      { value: "4", text: "185" },
    ],
  },
  {
    id: 6,
    text: "What will be the least number which when doubled will be exactly divisible by 12, 18, 21 and 30 ?",
    options: [
      { value: "1", text: "196" },
      { value: "2", text: "630" },
      { value: "3", text: "1260" },
      { value: "4", text: "2520" },
    ],
  },
  {
    id: 7,
    text: "The price of 2 sarees and 4 shirts is Rs. 1600. With the same money one can buy 1 saree and 6 shirts. If one wants to buy 12 shirts, how much shall he have to pay ?",
    options: [
      { value: "1", text: "Rs.1200" },
      { value: "2", text: "Rs.2400" },
      { value: "3", text: "Rs.4800" },
      { value: "4", text: "Cannot be determined" },
      { value: "5", text: "E. None of these" },
    ],
  },
  {
    id: 8,
    text: "To fill a tank, 25 buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to two-fifth of its present ?",
    options: [
      { value: "1", text: "10" },
      { value: "2", text: "35" },
      { value: "3", text: "62.5" },
      { value: "4", text: "Cannot be determined" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 9,
    text: "Given that 10^0.048 = x, 10^0.070 = y and x^z = y^2, then the value of z is close to:",
    options: [
      { value: "1", text: "1.45" },
      { value: "2", text: "1.88" },
      { value: "3", text: "2.9" },
      { value: "4", text: "3.7" },
    ],
  },
  {
    id: 10,
    text: "(25)^7.5 × (5)^2.5 ÷ (125)^1.5 = 5^?",
    options: [
      { value: "1", text: "8.5" },
      { value: "2", text: "13" },
      { value: "3", text: "16" },
      { value: "4", text: "17.5" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 11,
    text: "If log 27 = 1.431, then the value of log 9 is",
    options: [
      { value: "1", text: "0.934" },
      { value: "2", text: "0.945" },
      { value: "3", text: "0.954" },
      { value: "4", text: "0.958" },
    ],
  },
  {
    id: 12,
    text: "If log₁₀ 5 + log₁₀ (5x + 1) = log₁₀ (x + 5) + 1, then x is equal to:",
    options: [
      { value: "1", text: "1" },
      { value: "2", text: "3" },
      { value: "3", text: "5" },
      { value: "4", text: "10" },
    ],
  },
  {
    id: 13,
    text: "The ratio between the perimeter and the breadth of a rectangle is 5 : 1. If the area of the rectangle is 216 sq. cm, what is the length of the rectangle?",
    options: [
      { value: "1", text: "16 cm" },
      { value: "2", text: "18 cm" },
      { value: "3", text: "24 cm" },
      { value: "4", text: "Data inadequate" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 14,
    text: "A towel, when bleached, was found to have lost 20% of its length and 10% of its breadth. The percentage of decrease  in area is:",
    options: [
      { value: "1", text: "10%" },
      { value: "2", text: "10.08%" },
      { value: "3", text: "20%" },
      { value: "4", text: "28%" },
    ],
  },
  {
    id: 15,
    text: "The difference between a two-digit number and the number obtained by interchanging the digits is 36. What is the difference between the sum and the difference of the digits of the number if the ratio between the digits of the number is 1 : 2 ?",
    options: [
      { value: "1", text: "4" },
      { value: "2", text: "8" },
      { value: "3", text: "16" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 16,
    text: "A number consists of two digits. If the digits interchange places and the new number is added to the original number, then the resulting number will be divisible by",
    options: [
      { value: "1", text: "3" },
      { value: "2", text: "5" },
      { value: "3", text: "9" },
      { value: "4", text: "11" },
    ],
  },
  {
    id: 17,
    text: "In a certain code language, if the number 1 is assigned to all the letters in odd numbered places in the alphabet and the remaining letters are assigned the number 2, than what is the code for the word 'DANCE'?",
    options: [
      { value: "1", text: "21211" },
      { value: "2", text: "12121" },
      { value: "3", text: "22111" },
      { value: "4", text: "21121" },
    ],
  },
  {
    id: 18,
    text: "In a certain code language, if the value of 28 + 14 = 50 and 36 + 43 = 63, then what is the value of 44 + 52 =?",
    options: [
      { value: "1", text: "54" },
      { value: "2", text: "56" },
      { value: "3", text: "58" },
      { value: "4", text: "62" },
    ],
  },
  {
    id: 19,
    text: "The cost of cultivating a square field at the rate of Rs.135 per hectare is Rs.1215. The cost of putting a fence around it at the rate of 75 paise per meter would be :",
    options: [
      { value: "1", text: "Rs.360" },
      { value: "2", text: "Rs.810" },
      { value: "3", text: "Rs.900" },
      { value: "4", text: "Rs.1800" },
    ],
  },
  {
    id: 20,
    text: "A man cycles round the boundary of a rectangular park at the rate of 12 kmph and completes one full round in 8 minutes. If the ratio between the length and breadth of the park be 3:2, then its area is:",
    options: [
      { value: "1", text: "1536m²" },
      { value: "2", text: "15360m²" },
      { value: "3", text: "153600m²" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 21,
    text: "An escalator moves towards the top level at the rate of 11 ft.sec and its length is 140 feet. If a person walks on the moving escalator at the rate of 3 feet per second towards the top level, how much time does he take to cover the entire length?",
    options: [
      { value: "1", text: "14 sec" },
      { value: "2", text: "10 sec" },
      { value: "3", text: "12 sec" },
      { value: "4", text: "8 sec" },
    ],
  },
  {
    id: 22,
    text: "A lady starts from P towards Q and realizes that at a point R, if he walks 50 km further he will be at a point S, which is as far away from R as it is from Q. What is the distance between P and Q if the distance between P and R is half the distance from R to Q? ( Assume that P, Q, R and S are all on the same straight line)",
    options: [
      { value: "1", text: "150 km" },
      { value: "2", text: "200 km" },
      { value: "3", text: "250 km" },
      { value: "4", text: "125 km" },
    ],
  },
  {
    id: 23,
    text: "3, 10, 101,?",
    options: [
      { value: "1", text: "10101" },
      { value: "2", text: "10201" },
      { value: "3", text: "10202" },
      { value: "4", text: "11012" },
    ],
  },
  {
    id: 24,
    text: "1, 2, 3, 6, 9, 18, ?, 54",
    options: [
      { value: "1", text: "18" },
      { value: "2", text: "27" },
      { value: "3", text: "36" },
      { value: "4", text: "81" },
    ],
  },
  {
    id: 25,
    text: "The calendar for the year 2007 will be the same for the year:",
    options: [
      { value: "1", text: "2014" },
      { value: "2", text: "2016" },
      { value: "3", text: "2017" },
      { value: "4", text: "2018" },
    ],
  },
  {
    id: 26,
    text: "Which of the following has the most number of divisors?",
    options: [
      { value: "1", text: "99" },
      { value: "2", text: "101" },
      { value: "3", text: "176" },
      { value: "4", text: "182" },
    ],
  },
  {
    id: 27,
    text: "If x = 3 + 22, then the value of ( x - (1/x)) is:",
    options: [
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "22" },
      { value: "4", text: "33" },
    ],
  },
  {
    id: 28,
    text: "The simplified value of (3√(4) × 5√(4)) ÷ 15√(4) is:",
    options: [
      { value: "1", text: "3" },
      { value: "2", text: "5" },
      { value: "3", text: "15" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 29,
    text: "Which of the following has the most number of divisors?",
    options: [
      { value: "1", text: "12!" },
      { value: "2", text: "13!" },
      { value: "3", text: "14!" },
      { value: "4", text: "15!" },
    ],
  },
  {
    id: 30,
    text: "The length of the bridge, which a train 130 meters long and travelling at 45 km/hr can cross in 30 seconds, is:",
    options: [
      { value: "1", text: "200 m" },
      { value: "2", text: "225 m" },
      { value: "3", text: "245 m" },
      { value: "4", text: "250 m" },
    ],
  },
  {
    id: 31,
    text: "A train crosses a platform of 100 m in 30 seconds and a man standing on the platform in 18 seconds. The speed of the train is:",
    options: [
      { value: "1", text: "50 km/hr" },
      { value: "2", text: "54 km/hr" },
      { value: "3", text: "72 km/hr" },
      { value: "4", text: "75 km/hr" },
    ],
  },
  {
    id: 32,
    text: "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
    options: [
      { value: "1", text: "1:3" },
      { value: "2", text: "3:2" },
      { value: "3", text: "3:4" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 33,
    text: "A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?",
    options: [
      { value: "1", text: "40 sec" },
      { value: "2", text: "42 sec" },
      { value: "3", text: "45 sec" },
      { value: "4", text: "48 sec" },
    ],
  },
  {
    id: 34,
    text: "Two trains of equal lengths take 10 seconds and 15 seconds respectively to cross a telegraph post. If the length of each train be 120 meters, in what time (in seconds) will they cross each other travelling in opposite direction?",
    options: [
      { value: "1", text: "10" },
      { value: "2", text: "12" },
      { value: "3", text: "15" },
      { value: "4", text: "20" },
    ],
  },
  {
    id: 35,
    text: "A train speeds past a pole in 15 seconds and a platform 100 meters long in 25 seconds. Its length is:",
    options: [
      { value: "1", text: "50 m" },
      { value: "2", text: "150 m" },
      { value: "3", text: "200 m" },
      { value: "4", text: "250 m" },
    ],
  },
  {
    id: 36,
    text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    options: [
      { value: "1", text: "120 metres" },
      { value: "2", text: "180 metres" },
      { value: "3", text: "324 metres" },
      { value: "4", text: "150 metres" },
    ],
  },
  {
    id: 37,
    text: "A train 360 m long is running at a speed of 45 km/hr. What time will it take to pass a railway platform 180 m long?",
    options: [
      { value: "1", text: "40 sec" },
      { value: "2", text: "45 sec" },
      { value: "3", text: "48 sec" },
      { value: "4", text: "50 sec" },
    ],
  },
  {
    id: 38,
    text: "A train 150 m long running at a speed of 70 kmph crosses a platform in 25 seconds. What is the length of the platform?",
    options: [
      { value: "1", text: "100 m" },
      { value: "2", text: "200 m" },
      { value: "3", text: "300 m" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 39,
    text: "Two trains running in opposite directions cross a man standing on the platform in 20 seconds and 15 seconds respectively and they cross each other in 16 seconds. The ratio of their speeds is:",
    options: [
      { value: "1", text: "1:2" },
      { value: "2", text: "2:1" },
      { value: "3", text: "2:3" },
      { value: "4", text: "3:2" },
    ],
  },
  {
    id: 40,
    text: "The length of a rectangular field is 30 meters more than its width. If the width is 10 meters, then the area of the field is:",
    options: [
      { value: "1", text: "900 sq m" },
      { value: "2", text: "950 sq m" },
      { value: "3", text: "1000 sq m" },
      { value: "4", text: "1050 sq m" },
    ],
  },
  {
    id: 41,
    text: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
    options: [
      { value: "1", text: "3.6" },
      { value: "2", text: "7.2" },
      { value: "3", text: "8.4" },
      { value: "4", text: "10" },
    ],
  },
  {
    id: 42,
    text: "A train 240 meters long passes a pole in  24 seconds. What is the speed of the train in km/hr?",
    options: [
      { value: "1", text: "36 km/hr" },
      { value: "2", text: "54 km/hr" },
      { value: "3", text: "48 km/hr" },
      { value: "4", text: "64 km/hr" },
    ],
  },
  {
    id: 43,
    text: "A man completes a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.",
    options: [
      { value: "1", text: "220 km" },
      { value: "2", text: "224 km" },
      { value: "3", text: "230 km" },
      { value: "4", text: "234 km" },
    ],
  },
  {
    id: 44,
    text: "A man covers a distance on scooter. Had he moved 3 kmph faster he would have taken 40 minutes less. If he had moved 2 kmph slower, he would have taken 40 minutes more. The distance is:",
    options: [
      { value: "1", text: "35 km" },
      { value: "2", text: "40 km" },
      { value: "3", text: "60 km" },
      { value: "4", text: "70 km" },
    ],
  },
  {
    id: 45,
    text: "A man on tour travels first 160 km at 64 km/hr and the next 160 km at 80 km/hr. The average speed for the first 320 km of the tour is:",
    options: [
      { value: "1", text: "35.55 km/hr" },
      { value: "2", text: "36 km/hr" },
      { value: "3", text: "71.11 km/hr" },
      { value: "4", text: "71.4 km/hr" },
    ],
  },
  {
    id: 46,
    text: "A is twice as fast as B and B is thrice as fast as C. The journey covered by C in 1 hr will be covered by A in:",
    options: [
      { value: "1", text: "10 min" },
      { value: "2", text: "20 min" },
      { value: "3", text: "30 min" },
      { value: "4", text: "40 min" },
    ],
  },
  {
    id: 47,
    text: "Walking at 3/4 of his usual speed, a man is 10 minutes too late. What is the usual time taken by him to cover that distance?",
    options: [
      { value: "1", text: "30 min" },
      { value: "2", text: "20 min" },
      { value: "3", text: "15 min" },
      { value: "4", text: "10 min" },
    ],
  },
  {
    id: 48,
    text: "In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:",
    options: [
      { value: "1", text: "1 hr" },
      { value: "2", text: "2 hr" },
      { value: "3", text: "3 hr" },
      { value: "4", text: "4 hr" },
    ],
  },
  {
    id: 49,
    text: "A boat covers a certain distance downstream in 1 hour, while it comes back in 1½ hours. If the speed of the stream be 3 kmph, what is the speed of the boat in still water?",
    options: [
      { value: "1", text: "8 km/hr" },
      { value: "2", text: "9 km/hr" },
      { value: "3", text: "10 km/hr" },
      { value: "4", text: "12 km/hr" },
    ],
  },
  {
    id: 50,
    text: "A man can row 8 km/hr in still water. If the river is running at 2 km/hr, it takes 3 hours more in upstream than downstream for the same distance. What is the distance?",
    options: [
      { value: "1", text: "14 km" },
      { value: "2", text: "15 km" },
      { value: "3", text: "16 km" },
      { value: "4", text: "17 km" },
    ],
  },
];

const testPaper4 = [
  {
    id: 1,
    text: "What was the day of the week on 28th May, 2006?",
    options: [
      { value: "1", text: "Thursday" },
      { value: "2", text: "Friday" },
      { value: "3", text: "Saturday" },
      { value: "4", text: "Sunday" },
    ],
  },
  {
    id: 2,
    text: "On 8th Feb, 2005 it was Tuesday. What was the day of the week on 8th Feb, 2004?",
    options: [
      { value: "1", text: "Tuesday" },
      { value: "2", text: "Monday" },
      { value: "3", text: "Sunday" },
      { value: "4", text: "Wednesday" },
    ],
  },
  {
    id: 3,
    text: "50 men took a dip in a water tank 40 m long and 20 m broad on a religious day. If the average displacement of water by a man is 4 m³, then the rise in the water level in the tank will be:",
    options: [
      { value: "1", text: "20 cm" },
      { value: "2", text: "25 cm" },
      { value: "3", text: "35 cm" },
      { value: "4", text: "50 cm" },
    ],
  },
  {
    id: 4,
    text: "A cistern of capacity 8000 litres measures externally 3.3 m by 2.6 m by 1.1 m and its walls are 5 cm thick. The thickness of the bottom is:",
    options: [
      { value: "1", text: "90 cm" },
      { value: "2", text: "1 dm" },
      { value: "3", text: "1 m" },
      { value: "4", text: "1.1 cm" },
    ],
  },
  {
    id: 5,
    text: "The least multiple of 7, which leaves a remainder of 4, when divided by 6, 9, 15 and 18 is:",
    options: [
      { value: "1", text: "74" },
      { value: "2", text: "94" },
      { value: "3", text: "184" },
      { value: "4", text: "364" },
    ],
  },
  {
    id: 6,
    text: "The ratio of two numbers is 3 : 4 and their H.C.F. is 4. Their L.C.M. is:",
    options: [
      { value: "1", text: "12" },
      { value: "2", text: "16" },
      { value: "3", text: "24" },
      { value: "4", text: "48" },
    ],
  },
  {
    id: 7,
    text: "A sum of Rs. 1360 has been divided among A, B and C such that A gets 2/3 of what B gets 1/4 and B gets   of what C gets. B's share is",
    options: [
      { value: "1", text: "Rs. 120" },
      { value: "2", text: "Rs. 160" },
      { value: "3", text: "Rs. 240" },
      { value: "4", text: "Rs. 300" },
    ],
  },
  {
    id: 8,
    text: "In a regular week, there are 5 working days and for each day, the working hours are 8. A man gets Rs. 2.40 per hour for regular work and Rs. 3.20 per hours for overtime. If he earns Rs. 432 in 4 weeks, then how many hours does he work for ?",
    options: [
      { value: "1", text: "160" },
      { value: "2", text: "175" },
      { value: "3", text: "180" },
      { value: "4", text: "195" },
    ],
  },
  {
    id: 9,
    text: "If 3^(x - y) = 27 and 3^(x + y) = 243, then x is equal to:",
    options: [
      { value: "1", text: "0" },
      { value: "2", text: "2" },
      { value: "3", text: "4" },
      { value: "4", text: "6" },
    ],
  },
  {
    id: 10,
    text: "(0.04)^(-1.5) = ?",
    options: [
      { value: "1", text: "25" },
      { value: "2", text: "125" },
      { value: "3", text: "250" },
      { value: "4", text: "625" },
    ],
  },
  {
    id: 11,
    text: "If log a/b + log b/a = log (a + b), then:",
    options: [
      { value: "1", text: "a + b = 1" },
      { value: "2", text: "a - b = 1" },
      { value: "3", text: "a = b" },
      { value: "4", text: "a^2 - b^2 = 1" },
    ],
  },
  {
    id: 12,
    text: "The value of { ( 1/log3^60 ) + ( 1/log4^60 ) + ( 1/log5^60 ) }",
    options: [
      { value: "1", text: "0" },
      { value: "2", text: "1" },
      { value: "3", text: "5" },
      { value: "4", text: "60" },
    ],
  },
  {
    id: 13,
    text: "The percentage increase in the area of a rectangle, if each of its sides is increased by 20% is:",
    options: [
      { value: "1", text: "40%" },
      { value: "2", text: "42%" },
      { value: "3", text: "44%" },
      { value: "4", text: "46%" },
    ],
  },
  {
    id: 14,
    text: "A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges?",
    options: [
      { value: "1", text: "20" },
      { value: "2", text: "24" },
      { value: "3", text: "30" },
      { value: "4", text: "33" },
    ],
  },
  {
    id: 15,
    text: "A two-digit number is such that the product of the digits is 8. When 18 is added to the number, then the digits are reversed. The number is:",
    options: [
      { value: "1", text: "18" },
      { value: "2", text: "24" },
      { value: "3", text: "42" },
      { value: "4", text: "81" },
    ],
  },
  {
    id: 16,
    text: "Find a positive number which when increased by 17 is equal to 60 times the reciprocal of the number.",
    options: [
      { value: "1", text: "3" },
      { value: "2", text: "10" },
      { value: "3", text: "17" },
      { value: "4", text: "20" },
    ],
  },
  {
    id: 17,
    text: "In a certain code language, if the value of CONTRACT = 56 and 'GROWTH' = 30, then what is the value of DISTRIBUTION?",
    options: [
      { value: "1", text: "130" },
      { value: "2", text: "132" },
      { value: "3", text: "140" },
      { value: "4", text: "142" },
    ],
  },
  {
    id: 18,
    text: "In a certain code language, if the value of 14 x 15 = 25 and 26 x 42 = 64, then what is the value of 73 x 31 = ?",
    options: [
      { value: "1", text: "100" },
      { value: "2", text: "110" },
      { value: "3", text: "90" },
      { value: "4", text: "120" },
    ],
  },
  {
    id: 19,
    text: "The cost of carpeting a room 18m long with a carpet 75cm wide at 45 paise per meter is Rs.81. The breadth of the room is:",
    options: [
      { value: "1", text: "7m" },
      { value: "2", text: "7.5m" },
      { value: "3", text: "8m" },
      { value: "4", text: "8.5m" },
    ],
  },
  {
    id: 20,
    text: "A rectangular carpet has an area of 60 sq.m. If its diagonal and longer side together equal 5 times the shorter side, the length of the carpet is:",
    options: [
      { value: "1", text: "5m" },
      { value: "2", text: "12m" },
      { value: "3", text: "13m" },
      { value: "4", text: "14.5m" },
    ],
  },
  {
    id: 21,
    text: "Two trains, 250 metres and 150 metres long respectively, are running on parallel lines. If they are running in the same directions, the faster train crosses the slower train in 40 seconds. If they are moving in the opposite direction they pass each other in eight seconds. What is the speed of the slower train?",
    options: [
      { value: "1", text: "108kmph" },
      { value: "2", text: "82kmph" },
      { value: "3", text: "92 kmph" },
      { value: "4", text: "72 kmph" },
    ],
  },
  {
    id: 22,
    text: "In a 1000 m race Usha beats Shiny by 50 m. In the same race, by what time margin Shiny beat Mercy who runs at 4 m/s ?",
    options: [
      { value: "1", text: "100 sec" },
      { value: "2", text: "50 sec" },
      { value: "3", text: "25 sec" },
      { value: "4", text: "Data not sufficient" },
    ],
  },
  {
    id: 23,
    text: "In the series 2, 6, 18, 54, ...... what will be the 8th term ?",
    options: [
      { value: "1", text: "4370" },
      { value: "2", text: "4374" },
      { value: "3", text: "7443" },
      { value: "4", text: "7434" },
    ],
  },
  {
    id: 24,
    text: "6, 13, 25, 51, 101, ?",
    options: [
      { value: "1", text: "201" },
      { value: "2", text: "202" },
      { value: "3", text: "203" },
      { value: "4", text: "205" },
    ],
  },
  {
    id: 25,
    text: "A large cube is formed from the material obtained by melting three smaller cubes of 3, 4 and 5 cm side. What is the ratio of the total surface areas of the smaller cubes and the large cube?",
    options: [
      { value: "1", text: "2 : 1" },
      { value: "2", text: "3 : 2" },
      { value: "3", text: "25 : 18" },
      { value: "4", text: "27 : 20" },
    ],
  },
  {
    id: 26,
    text: "David gets on the elevator at the 11th floor of a building and rides up at the rate of 57 floors per minute. At the same time, Albert gets on an elevator at the 51st floor of the same building and rides down at the rate of 63 floors per minute. If they continue traveling at these rates, then at which floor will their paths cross?",
    options: [
      { value: "1", text: "19" },
      { value: "2", text: "28" },
      { value: "3", text: "30" },
      { value: "4", text: "37" },
    ],
  },
  {
    id: 27,
    text: "If log10 = a, then log10(1/70) is equal to :",
    options: [
      { value: "1", text: "(1+a)" },
      { value: "2", text: "(1+a)^-1" },
      { value: "3", text: "a/10" },
      { value: "4", text: "1/10a" },
    ],
  },
  {
    id: 28,
    text: "The product of two numbers is 120 and the sum of their squares is 289. The sum of the numbers is",
    options: [
      { value: "1", text: "20" },
      {
        value: "2",
        text: "23",
      },
      {
        value: "3",
        text: "169",
      },
      {
        value: "4",
        text: "None of these",
      },
    ],
  },
  {
    id: 29,
    text: "These questions are based on a certain code language. Understand the logic in the coding and answer the following questions. PROCESSOR is coded as D4F3C5C1E1S1S1E3C6. Then QUADRANT is Coded as:",
    options: [
      { value: "1", text: "Q1C7A1B2F6A1B7E4" },
      { value: "2", text: "Q1D6A1B2F3A1B7E4" },
      { value: "3", text: "Q1C7A1B2F3A1B7E4" },
      { value: "4", text: "Q1C7A1D2C6A1B7E5" },
    ],
  },
  {
    id: 30,
    text: "1, 3, 4, 8, 15, 27, ?",
    options: [
      { value: "1", text: "37" },
      { value: "2", text: "44" },
      { value: "3", text: "50" },
      { value: "4", text: "55" },
    ],
  },
  {
    id: 31,
    text: "A is the husband of B. E is the daughter of C. A is the father of C. How is B related to E?",
    options: [
      { value: "1", text: "Mother" },
      { value: "2", text: "Grandmother" },
      { value: "3", text: "Aunt" },
      { value: "4", text: "Cousin" },
    ],
  },
  {
    id: 32,
    text: "Find the odd man out 396, 462, 572, 427, 671, 264",
    options: [
      { value: "1", text: "39" },
      { value: "2", text: "427" },
      { value: "3", text: "671" },
      { value: "4", text: "26" },
    ],
  },
  {
    id: 33,
    text: "Pick the odd man out :",
    options: [
      { value: "1", text: "Wheat" },
      { value: "2", text: "Barley" },
      { value: "3", text: "Rice" },
      { value: "4", text: "Pea" },
      { value: "5", text: "Mustard" },
    ],
  },
  {
    id: 34,
    text: "One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now?",
    options: [
      { value: "1", text: "5 years" },
      { value: "2", text: "25 years" },
      { value: "3", text: "10 years" },
      { value: "4", text: "15 years" },
    ],
  },
  {
    id: 35,
    text: "A man said to his son, 'I was one-third of your present age when you were born'. If the present age of the man is 48 years, find the present age of the son.",
    options: [
      { value: "1", text: "25.7 years" },
      { value: "2", text: "28 years" },
      { value: "3", text: "29.3 years" },
      { value: "4", text: "36 years" },
    ],
  },
  {
    id: 36,
    text: "The ratio of Sara's age 4 years ago and Vaishali's age after 4 years is 1: 1. Presently, the ratio of their ages is 5: 3. Find the ratio between Sara's age 4 years hence and Vaishali's age 4 years ago.",
    options: [
      { value: "1", text: "1 : 3" },
      { value: "2", text: "3 : 1" },
      { value: "3", text: "4 : 3" },
      { value: "4", text: "3 : 4" },
    ],
  },
  {
    id: 37,
    text: "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
    options: [
      { value: "1", text: "1 : 3" },
      { value: "2", text: "3 : 2" },
      { value: "3", text: "3 : 4" },
      { value: "4", text: "None of these" },
    ],
  },
  {
    id: 38,
    text: "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
    options: [
      { value: "1", text: "100 kmph" },
      { value: "2", text: "110 kmph" },
      { value: "3", text: "120 kmph" },
      { value: "4", text: "130 kmph" },
    ],
  },
  {
    id: 39,
    text: "A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:",
    options: [
      { value: "1", text: "20 days" },
      { value: "2", text: "22 1/2 days" },
      { value: "3", text: "25 days" },
      { value: "4", text: "30 days" },
    ],
  },
  {
    id: 40,
    text: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    options: [
      { value: "1", text: "30%" },
      { value: "2", text: "70%" },
      { value: "3", text: "100%" },
      { value: "4", text: "250%" },
    ],
  },
  {
    id: 41,
    text: "A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4000 more than B and B Rs. 5000 more than C. Out of a total profit of Rs. 35,000, A receives:",
    options: [
      { value: "1", text: "Rs. 8400" },
      { value: "2", text: "Rs. 11,900" },
      { value: "3", text: "Rs. 13,600" },
      { value: "4", text: "Rs. 14,700" },
    ],
  },
  {
    id: 42,
    text: "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
    options: [
      { value: "1", text: "1" },
      { value: "2", text: "14" },
      { value: "3", text: "20" },
      { value: "4", text: "21" },
    ],
  },
  {
    id: 43,
    text: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
    options: [
      { value: "1", text: "7" },
      { value: "2", text: "8" },
      { value: "3", text: "9" },
      { value: "4", text: "10" },
      { value: "5", text: "11" },
    ],
  },
  {
    id: 44,
    text: "What will be the day of the week 15th August, 2010?",
    options: [
      { value: "1", text: "Sunday" },
      { value: "2", text: "Monday" },
      { value: "3", text: "Tuesday" },
      { value: "4", text: "Friday" },
    ],
  },
  {
    id: 45,
    text: "A watch which gains 5 seconds in 3 minutes was set right at 7 a.m. In the afternoon of the same day, when the watch indicated quarter past 4 o'clock, the true time is:",
    options: [
      { value: "1", text: "59 7/12 min. past 3" },
      { value: "2", text: "4pm" },
      { value: "3", text: "58 7/11 min. past 3" },
      { value: "4", text: "2 3/11 min. past 4" },
    ],
  },
  {
    id: 46,
    text: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
    options: [
      { value: "1", text: "0" },
      { value: "2", text: "1" },
      { value: "3", text: "10" },
      { value: "4", text: "19" },
    ],
  },
  {
    id: 47,
    text: "66 cubic centimetres of silver is drawn into a wire 1 mm in diameter. The length of the wire in metres will be:",
    options: [
      { value: "1", text: "84" },
      { value: "2", text: "90" },
      { value: "3", text: "168" },
      { value: "4", text: "336" },
    ],
  },
  {
    id: 48,
    text: "Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?",
    options: [
      { value: "1", text: "210" },
      { value: "2", text: "1050" },
      { value: "3", text: "25200" },
      { value: "4", text: "21400" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 49,
    text: "In how many ways can the letters of the word 'LEADER' be arranged?",
    options: [
      { value: "1", text: "72" },
      { value: "2", text: "144" },
      { value: "3", text: "360" },
      { value: "4", text: "720" },
      { value: "5", text: "None of these" },
    ],
  },
  {
    id: 50,
    text: "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
    options: [
      { value: "1", text: "76 kg" },
      { value: "2", text: "76.5 kg" },
      { value: "3", text: "85 kg" },
      { value: "4", text: "Data inadequate" },
      { value: "5", text: "None of these" },
    ],
  },
];

const questions = {
  testpaper1: testPaper1,
  testpaper2: testPaper2,
  testpaper3: testPaper3,
  testpaper4: testPaper4,
};

function Home() {
  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testPaper, setTestPaper] = useState(null); // State to store user data after login

  // Function to handle form submission

  // Render the appropriate test paper component based on the userData
  // if (!testPaper) return null; // No data yet, return null
  console.log(testPaper);
  console.log(email);
  console.log(password);

  return (
    <div className="bg-light">
      <div id="appendTestPaper">
        {isLoggedIn ? (
          <ConductTest
            questionPaper={testPaper}
            questions={questions[testPaper]}
            username={email}
            password={password}
          />
        ) : (
          <LoginForm
            setTestPaper={setTestPaper}
            email={email}
            setEmail={setEmail}
            setPassword={setPassword}
            password={password}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        )}
      </div>
    </div>
  );
}

export default Home;

function LoginForm({
  setTestPaper,
  email,
  password,
  setEmail,
  setPassword,
  setIsLoggedIn,
  isLoggedIn,
}) {
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const authenticateUserLogin = async () => {
    // Implement your authentication logic here
    // You can access email and password state variables to get user input
    // For now, let's just print email and password to console
    console.log("Email:", email);
    console.log("Password:", password);
    if (email.trim() === "") {
      setErrorMessage("Email field cannot be empty");
      return;
    }
    // Regular expression to validate email format
    else {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the entered email matches the email pattern
      if (!emailRegex.test(email)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }
    }

    if (password.trim() === "") {
      setIsPasswordError("Password field cannot be empty");
      return;
    }

    setIsLoggedIn(false);

    try {
      const userData = { email, password };
      const response = await axios.post(apiUrl + "login", userData); // await added here
      console.log("Response:", response.data);
      if (response.data.status === 200) {
        setTestPaper("testpaper2");
        console.log("Mail sent successfully!");
        setIsLoggedIn(true);
      } else {
        console.log("Login failed!");
        alert(response.data.message);
        setIsLoggedIn(false);
      }
      // Hide loader

      // Handle response as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full indent-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span id="error-message" className="text-red-500">
                {errorMessage}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full indent-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span id="error-message" className="text-red-500">
                {isPasswordError}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={authenticateUserLogin}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
