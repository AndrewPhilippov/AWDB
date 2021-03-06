var width = 800;
var height = 300;
var barPadding = 10;
var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height)


d3.select("#reset")
    .on("click", function() {
      d3.selectAll(".letter")
        .remove();

      d3.select("#phrase")
          .text("");

      d3.select("#count")
          .text("");
    });

d3.select("form")
    .on("submit", function() {
      d3.event.preventDefault();
      const input = d3.select("input");
      const text = input.property("value");
      const data = getFrequencies(text);
      const barWidth = width / data.length - barPadding;
      const letters = svg
                      .selectAll(".letter")
                      .data(data, d => d.character);

      letters
          .classed("new", false)
        .exit()
        .remove();

      var letterEnter = letters
        .enter()
        .append("g")
          .classed("letter", true)
          .classed("new", true);

      letterEnter.append("rect");
      letterEnter.append("text");

      letterEnter.merge(letters)
          .select("rect")
          .style("width", barWidth)
          .style("height", d => d.count * 20)
          .attr("x", (d, i) => (barWidth + barPadding) * i)
          .attr("y", d => height - d.count * 20 );

      letterEnter.merge(letters)
          .select("text")
          .attr("x", (d, i) => (barWidth + barPadding) * i + barWidth / 2)
          .attr("text-anchor", "middle")
          .attr("y", d => height -d.count * 20 - 10)
          .text(d => d.character);

      d3.select("#phrase")
          .text("Analysis of: " + text);

      d3.select("#count")
          .text("(New characters: " + letters.enter().nodes().length + ")");

      input.property("value", "");
    });

function getFrequencies(str) {
  const sorted = str.split("").sort();
  const data = [];
  for (let i = 0; i < sorted.length; i++) {
    const last = data[data.length - 1];
    if (last && last.character === sorted[i]) last.count++;
    else data.push({ character: sorted[i], count: 1 });
  }
  return data;
}