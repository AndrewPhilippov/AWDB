// var minYear = birthData[0].year;
const minYear = d3.min(birthData, d => d.year);
// const maxYear = birthData[birthData.length - 1].year;
const maxYear = d3.max(birthData, d => d.year);
const width = 600;
const height = 600;
const barPadding = 10;
const numBars = 12;
const barWidth = width / numBars - barPadding;
const maxBirths = d3.max(birthData, d => d.births);
const yScale = d3.scaleLinear()
                .domain([0, maxBirths])
                .range([height, 0]);

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(function(d) {
    return d.year === minYear;
  }))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return height - yScale(d.births);
    })
    .attr("y", function(d) {
      return yScale(d.births);
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");

const tooltip = d3.select("body")
    .append("div")
    .classed("tooltip", true)
    .text("I am a tooltip");

d3.select("svg")
    .append("text")
    .classed("title", true)
    .text(`Birth data in ${minYear}`)
    .attr("x", width / 2)
    .attr("y", 30)
    .style("text-anchor", "middle")
    .style("font-size", "2em");

d3.select("input")
    .on("input", function() {
      const year = +d3.event.target.value;
      d3.selectAll("rect")
          .on("mousemove", showTooltip)
          .on("touchstart", showTooltip)
          .on("mouseout", hideTooltip)
          .on("touchend", hideTooltip)
        .data(birthData.filter(function(d) {
          return d.year === year;
        }))
          .transition()
          .duration(1000)
          .ease(d3.easeElasticOut)
          .delay((d, i) => i * 50)
          .on("start", function(d, i){
              if(i === 0){
                  d3.select(".title")
                      .text(`Updating to ${year} data...`)
              }
          })
          /*
          Interrupting works on stopping the existing event

          .on("interrupt", function(){
            console.log(`Interrapted. No longer updating to ${year} data`)
          })
          */
          .on("end", function(d, i, nodes){
              if(i === nodes.length - 1){
                  d3.select(".title")
                      .text(`Birth data in ${year}`)
              }
          })
          .attr("height", function(d) {
            return height - yScale(d.births);
          })
          .attr("y", function(d) {
            return yScale(d.births);
          })
    });

function showTooltip(d){
    tooltip
        .style("opacity", 1)
        .html(`
                   <p>The year: ${d.year}</p>
                   <p>Number of births in ${d.month}: ${d.births.toLocaleString()}</p>
                  `)
        .style("left", d3.event.x - tooltip.node().offsetWidth / 2 + "px")
        .style("top", d3.event.y - 25 + "px")
}
function hideTooltip(){
    tooltip
        .style("opacity", 0)
}