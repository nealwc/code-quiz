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
var questionOne = "Who's got the meats?"
var answers = ["Arby's", "McDonald's", "Wendy's", "Burger Queen"]

$("#start-button").on("click", function() {
 $("#start-button").remove(); 
 $("#question").append($(`<h3>${questionOne}</h3>`));
 for (i = 0; i < answers.length; i++) {
 $("#options").append($(`<p>${answers[i]}</p>`))
 };
}
);

// setTime();