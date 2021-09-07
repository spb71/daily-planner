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

    saveBtnEl.on("click", function(event) {
        event.preventDefault();

        for (var i = 0; i < 9; i++) {
            localStorage.setItem("hour" + i, $("#note" + i + "input").val());
        }
    });

    for (var i = 1; i < 11; i++) {
        $("#note" + i + "input").val(localStorage.getItem("note" + i));
    }
});