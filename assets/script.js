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
        var textarea = element;
        console.log(textarea);
        console.log(timeBlockHour);
        for (var i = textAreaEl[0]; i < textAreaEl.length; i++) {
            if (timeBlockHour < currentHour) {
                textAreaEl[i].addClass("past");
                textAreaEl[i].removeClass("future");
                textAreaEl[i].removeClass("present");
            } else if (timeBlockHour === currentHour) {
                textAreaEl[i].removeClass("past");
                textAreaEl[i].removeClass("future");
                textAreaEl[i].addClass("present");
            } else {
                textAreaEl[i].removeClass("past");
                textAreaEl[i].removeClass("present");
                textAreaEl[i].addClass("future");
            }
        }
    });

    saveBtnEl.on("click", function(event) {
        event.preventDefault();

        //function for localStorage
    });
});