# Quiz Dishes
An application with typical dishes from different countries with an integrated rating system.

# Live Demo
https://quiz-food.netlify.app/

# 🛠 Technologies

React.js ⚛️  
React Router  
Tailwind CSS  
useReducer  
JSON Server  

# Installation

git clone https://github.com/Giovanni-Serra-Git/quiz-food.git

cd quiz-food  
npm install  
npm run dev  

# Brief API Description → What data does it provide?

A simple app that provides an array of questions.
Additionally, there is also the possibility to keep track of points and see the highest score previously achieved.

# Sample data received

    {
      "question": "What is the typical Italian dish with pasta and tomato?",
      "options": ["Lasagna", "Spaghetti with tomato", "Risotto", "Pizza"],
      "correctOption": 1,
      "points": 10
    }  




# Enpoints

**Read Carefully** ❗❗❗❗  

**GET list of questions :**

**Locally, change endpoint from :**  
fetch('/.netlify/functions/questions')  

**To :**  
fetch('http://localhost:[PORT]/questions')

# Features of the App

✔️ Display list of questions  
✔️ Display the wrong or right question  
✔️ Keep track of the previous and current score  
✔️ Restart the game  

# Author 

Giovanni Serra
    





