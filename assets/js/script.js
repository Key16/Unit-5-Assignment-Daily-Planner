var timeEl = $(".time span").text()
var taskColourEl = $(".input-group input")
var currentHour = moment().format("HH:00");
var task1 = $("#task1").val()

// grabs the time in the span and splits them into an array
timeEl = timeEl.split(" ")
// using pop as it made an extra white value at the end but i couldn't find out why. so this removes it
timeEl.pop();

// console.log(tasks)
// tasks.value()
console.log(timeEl)
console.log(timeEl[0]);
console.log(currentHour)

// displays time interval every second

function displayTime() {
    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDate);
}
setInterval(displayTime, 1000);
displayTime();

// loop through each time span to determine the time and change colour depending on the current hour

for (let i = 0; i < timeEl.length; i++) {
    if (timeEl[i] === currentHour) {

        taskColourEl[i].classList.add("list-group-item-primary");
    }
    else if (timeEl[i] < currentHour) {

        console.log(timeEl[i] + "is less than" + currentHour)
        taskColourEl[i].classList.add("list-group-item-secondary");
    }
    else {
        taskColourEl[i].classList.add("list-group-item-success");

    }
}

// to listen for the save button click
$(".save").click(function (event) {
    event.preventDefault();

    console.log("task logged")
});

var savedTasks = {
    task1: task1,

}


localStorage.setItem("savedTasks", JSON.stringify(savedTasks));

var tasks = localStorage.setItem("task", task1)