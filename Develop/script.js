var currentHour =  moment().hours();
var update= function() {
    $("#currentDay").text( moment().format("dddd, MMMM Do, YYYY"))
};
setInterval (update, 1000);
//Save
$(".saveBtn").on("click",function(){
    var userinput = $(this).siblings("textarea").val()
    var timeblock = $(this).attr("id")
    console.log(userinput,timeblock)
    localStorage.setItem(timeblock,userinput)
})

//retrive
for(let i=9;i<18;i++){
    var userStoredPlan = localStorage.getItem(i)
    $("#"+i).siblings("textarea").val(userStoredPlan)
    if(i<currentHour){
        $("#"+i).siblings("textarea").addClass("past")
    } else if (i===currentHour) {
        $("#"+i).siblings("textarea").addClass("present")
    } else {
        $("#"+i).siblings("textarea").addClass("future")
    }
    
}