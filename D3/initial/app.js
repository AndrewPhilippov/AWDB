// Event Listeners in D3
/*
selection.on(eventType, callback)
*/

d3.select("h1").on("click", function () {
    console.log("Event listners are sweet!")
})

// To remove listner we have to pass null instead of callback function
d3.select("h1").on("click", null);

d3.select("#new-note").on("submit", function () {
    // How do we accept the event object???
    d3.event.preventDefault();

    var input = d3.select("input");
    d3.select("#notes")
        .append("p")
        .classed("note", true)
        .text(input.property("value"));
    input.property("value", "")
});

/*
To remove elements we use .remove() method
d3.selectAll("p").remove();
*/