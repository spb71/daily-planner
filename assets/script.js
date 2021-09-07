$(document).ready(function () {

    var timeDisplayEl = $("#currentDay");
    var textAreaEl = $("textarea");
    var saveBtnEl = $(".saveBtn");


    function displayTime() {
        var today = moment();
        timeDisplayEl.text(today.format("dddd, MMMM Do, [at] hh:mm:ss a"));
    }
    setInterval(displayTime, 1000);
    var currentHour = moment().hour();

    textAreaEl.each(function () {
        var id = textAreaEl.attr("id");
        var timeBlockHour = moment().hours(id, "HH");
        console.log(timeBlockHour);
        if (timeBlockHour < currentHour) {
            textAreaEl.addClass("past");
            textAreaEl.removeClass("future");
            textAreaEl.removeClass("present");
        } else if (timeBlockHour === currentHour) {
            textAreaEl.removeClass("past");
            textAreaEl.removeClass("future");
            textAreaEl.addClass("present");
        } else {
            textAreaEl.removeClass("past");
            textAreaEl.removeClass("present");
            textAreaEl.addClass("future");
        }
    });
    
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    saveBtnEl.on("click", function(event) {
        event.preventDefault();

        var text = saveBtnEl.siblings(".description").val();
        var time = saveBtnEl.parent().attr("id");

        localStorage.setItem(time, text);
    });
});