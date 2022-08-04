const currentDate = () => {
    const dateTime = $("#currentDay")
    const displayNow = momnet().format("dddd, MMMM Do, YYYY")
    dateTime.text(displayNow)
}
