// Global variables
var timeEl = document.querySelector("#time");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var startButton = document.getElementById("start-button")

// Data variables 
var quizOne = {
  question: "What does CSS stand for?",
  options: ["Cascading Style Sheets", "Cool Symbiotic Styles", "Coding Standards for Scientists"],
  answer: "one",
}
var quizTwo = {
  question: "Question 2",
  options: ["one", "two", "three", "four"],
  answer: "two",
}
var quizThree = {
  question: "Question 3",
  options: ["one", "two", "three", "four"],
  answer: "one",
}
var quizFour = {
  question: "Question 4",
  options: ["one", "two", "three", "four"],
  answer: "two",
}

// Style elements


// Timer function
var secondsLeft = 60;
var timerInterval;
var intervalFunction = function() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
  }
}

function setTime() {
  timerInterval = setInterval(intervalFunction, 1000);
}

// Runs quiz after start button is clicked
startButton.addEventListener("click", function () {
  setTime();
  startButton.remove(); 
  questionEl.textContent = quizOne.question;
  for (i = 0; i < quizOne.options.length; i++) {
    var newOption = document.createElement("div");
    newOption.setAttribute("type", "button");
    newOption.setAttribute("class", "btn btn-primary");
    newOption.textContent = quizOne.options[i];
    optionsEl.appendChild(newOption);
  }

})

// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// // To dos for score keeper:

// // When form is submitted...
// todoForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Re-render the list
//   var element = event.target;
//   renderTodos();
// });

// // When a element inside of the todoList is clicked...
// todoList.addEventListener("click", function (event) {

//   // If that element is a button...
//   if (element.matches("button") === true) {

//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Re-render the list
//     renderTodos();
//   }
// });