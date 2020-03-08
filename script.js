// var timeEl = document.querySelector("#time");

// var secondsLeft = 60;
// var timerInterval;
// var intervalFunction = function() {
//   secondsLeft--;
//   timeEl.textContent = secondsLeft;

//   if(secondsLeft === 0) {
//     clearInterval(timerInterval);
//     sendMessage();
//   }
// }

// function setTime() {
//   timerInterval = setInterval(intervalFunction, 1000);
// }
var firstQuestion = "Who's got the meats?"
var firstAnswerSet = ["Arby's", "McDonald's", "Wendy's", "Burger Queen"]

// attribute for right answer

// attrivute for wrong answer 

$("#start-button").on("click", function() {
 $("#start-button").remove(); 
 $("#question").append($(`<h3>${firstQuestion}</h3>`));
 for (i = 0; i < firstAnswerSet.length; i++) {
 $("#options").append($(`<p>${firstAnswerSet[i]}</p>`))
 };
}
);

// setTime();

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// To dos for score keeper:

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Re-render the list
    renderTodos();
  }
});
