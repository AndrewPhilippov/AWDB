d3.select('#page-title');
d3.selectAll('li');

// I should not do like this...
d3.selectAll('li')._groups[0]; // !!NO

// to select multiple elements we have to use * selection.nodes() *
d3.selectAll('li').nodes();
// to select single element we have to use * selection.node() *
d3.selectAll('li').node();

d3.select('#page-title')
    .style("background-color", "#00feab")
    .style("color", "#ffffff")
    .attr("class", "new-class")
    .text("D3 IS COOL!!!");

// There are 
/*
* style,
* attr,
* text,
* html
METHODS which can help us to get or to set values to element/elements
Working with classes we can use 'classed' method
The syntax is:
.classed("new-class", true) 
*/