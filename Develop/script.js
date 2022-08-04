var currentHour = moment().hours();
var update= function() {
    $("#currentDay").text( moment().format("dddd, MMMM Do, YYYY"))
};
setInterval (update, 1000);

$(".saveBtn").on("click",function(){
    var userinput = $(this).siblings("textarea").val()
    var timeblock = $(this).attr("id")
    console.log(userinput,timeblock)
})
