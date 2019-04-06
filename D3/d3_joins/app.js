var quotes = [{
  quote: "I see dead people.",
  movie: "The Sixth Sense",
  year: 1999,
  rating: "PG-13"
}, {
  quote: "May the force be with you.",
  movie: "Star Wars: Episode IV - A New Hope",
  year: 1977,
  rating: "PG"
}, {
  quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
  movie: "Dirty Harry",
  year: 1971,
  rating: "R"
}, {
  quote: "You had me at 'hello.'",
  movie: "Jerry Maguire",
  year: 1996,
  rating: "R"
}, {
  quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
  movie: "Finding Nemo",
  year: 2003,
  rating: "G"
}];

var colors = {
  "G": "3Cff00",
  "PG": "#f9f000",
  "PG-13": "#ff9000",
  "R": "#ff0000"
};

var sizes = {
  "G": "600px",
  "PG": "500px",
  "PG-13": "400px",
  "R": "300px"
};

d3.select('#quotes')
    .style("list-style", "none")
  .selectAll("li")
  .data(quotes)
  .enter()
  .append('li')
    .text(d => `"${d.quote}" quote - is from the movie "${d.movie}". It was filmed in ${d.year} and got rating ${d.rating}`)
  .style("margin", "20px")
  .style("padding", "20px")
  .style("width", d => sizes[d.rating])
  .style("height", d => sizes[d.rating])
  .style("font-size", d => d.quote.length < 25 ? "2em" : "1.5em")
  .style("background-color", d => colors[d.rating])
  .style("border-radius", "50%")
  .style("display", "flex")
  .style("align-items", "center");

var nonRQuotes = quotes.filter(movie => movie.rating !== "R");
d3.selectAll("li")
    .data(nonRQuotes, d => d.quote)
    .exit()
    .remove()