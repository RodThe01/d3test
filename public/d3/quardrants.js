function loadGrid(){

  d3.select("body").style("background-color", "#133239");


	var wx = 1279,
			hy = 795;


	// External dot frame. 
  var canvas = d3.select("body")

      .append("svg:svg")
      .attr("width", wx)   
      .attr("height", hy);
      
// Declaring variables for the dot frame.
	var width = dw,
				dw = 50;

// External dot frame.
  var circle1 = canvas.append("circle")
              .attr("cx", wx)
              .attr("cy", 1)
              .attr("r", 2)
              .attr("fill", "white"); 
              
  var circle2 = canvas.append("circle")
              .attr("cx", 1)
              .attr("cy", hy)
              .attr("r", 2)
              .attr("fill", "white");  
              
  var circle3 = canvas.append("circle")
              .attr("cx", wx)
              .attr("cy", hy)
              .attr("r", 2)
              .attr("fill", "white"); 

              
  var circle4 = canvas.append("circle")
              .attr("cx", 1)
              .attr("cy", 1)
              .attr("r", 2)
              .attr("fill", "white");     
                                 
// Plotting Quardants        
  var lineY2 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .5))
      .attr("x2", 1279)
      .attr("y2", (795 * .5))
      .style("stroke", "hsla(320,100%,100%,1.0)")
      .style("stroke-width", 1.0)
      .style("stroke-opacity", 1.0);
      
  var lineX2 = canvas.append("svg:line")
      .attr("x1", (1279 * .5))
      .attr("y1", 1)
      .attr("x2", (1279 * .5))
      .attr("y2", 795)
      .style("stroke", "hsla(320,100%,100%,1.0)")
      .style("stroke-width", 1.0)
      .style("stroke-opacity", 1.0); 
   
// Appending Grid Quardrants.

// Plotting the Grid Frame.
  var line1 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", 1)
      .attr("x2", 1279)
      .attr("y2", 1)
      .style("stroke", "hsla(320,100%,100%,1.0)")
      .style("stroke-width", 1.0)
      .style("stroke-opacity", 1.0);
      
  var line2 = canvas.append("svg:line")
      .attr("x1", 1279)
      .attr("y1", 1)
      .attr("x2", 1279)
      .attr("y2", 795)
      .style("stroke", "hsla(320,100%,100%,1.0)") 
      .style("stroke-width", 1.0)
      .style("stroke-opacity", 1.0);
      
              
  var line3 = canvas.append("svg:line")
      .attr("x1", 1279)
      .attr("y1", 795)
      .attr("x2", 1)
      .attr("y2", 795)
      .style("stroke", "hsla(320,100%,100%,1.0)")
      .style("stroke-width", 1.0)
      .style("stroke-opacity", 1.0);
      
  var line4 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", 795)
      .attr("x2", 1)
      .attr("y2", 1)
      .style("stroke", "hsla(320,100%,100%,1.0)")
      .style("stroke-width", 1.0)
      .style("stroke-opacity", 1.0);           	         	       
}      	       
loadGrid();   
