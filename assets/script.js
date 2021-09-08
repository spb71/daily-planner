$(document).ready(function () {

    var timeDisplayEl = $("#currentDay");
    var textAreaEl = $("textarea");
    var saveBtnEl = $(".saveBtn");


    function displayTime() {
        var today = moment();
        timeDisplayEl.text(today.format("dddd, MMMM Do, [at] hh:mm:ss a"));
    }
    setInterval(displayTime, 1000);
    var currentHour = moment().hours();

    textAreaEl.each(function (index, element) {
        var timeBlockHour = index + 9;
        console.log(element);
        console.log(timeBlockHour);
        if (timeBlockHour < currentHour) {
            element.classList.add("past");
            element.classList.remove("future");
            element.classList.remove("present");
        } else if (timeBlockHour === currentHour) {
            element.classList.remove("past");
            element.classList.remove("future");
            element.classList.add("present");
        } else {
            element.classList.remove("past");
            element.classList.remove("present");
            element.classList.add("future");
        }
    });

    saveBtnEl.on("click", function(event) {
        event.preventDefault();

        //function for localStorage
        var text = $(this).parent().siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().parent().attr("id");
        console.log(text, time);
        localStorage.setItem(time, text);
        loadText();
    });

    function loadText() {
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
    }

    loadText();
});