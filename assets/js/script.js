var timeEl = $(".time span").text()
var taskColourEl = $(".input-group input")
var currentHour = moment().format("HH:00");


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
    var task1 = $("#task1").val()
    var task2 = $("#task2").val()
    var task3 = $("#task3").val()
    var task4 = $("#task4").val()
    var task5 = $("#task5").val()
    var task6 = $("#task6").val()
    var task7 = $("#task7").val()
    var task8 = $("#task8").val()
    var task9 = $("#task9").val()
    var task10 = $("#task10").val()
    console.log(task1)
    console.log(task2)

    event.preventDefault();

    var savedTasks = {
        task1: task1,
        task2: task2,
        task3: task3,
        task4: task4,
        task5: task5,
        task6: task6,
        task7: task7,
        task8: task8,
        task9: task9,
        task10: task10,


    }
    console.log(savedTasks)
    localStorage.setItem("task", task1)
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    renderTasks();
    console.log("task logged")
});
//render  the tasks if saved in local storage
function renderTasks() {
    var lastTask = JSON.parse(localStorage.getItem("savedTasks"));
    if (lastTask !== null) {
        $("#task1").attr("value", lastTask.task1)
        $("#task2").attr("value", lastTask.task2)
        $("#task3").attr("value", lastTask.task3)
        $("#task4").attr("value", lastTask.task4)
        $("#task5").attr("value", lastTask.task5)
        $("#task6").attr("value", lastTask.task6)
        $("#task7").attr("value", lastTask.task7)
        $("#task8").attr("value", lastTask.task8)
        $("#task9").attr("value", lastTask.task9)
        $("#task10").attr("value", lastTask.task10)
        console.log('hi')
    }
}

renderTasks();
