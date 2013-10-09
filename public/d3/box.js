function loadGrid(){

  d3.select("body").style("background-color", "DDE6F4");


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
                              

	// Internal fineDot frame.

  var fineDot1 = canvas.append("circle")
	           .attr("cx", (dw * .25))
  	         .attr("cy", (dw * .25))
			       .attr("r", .9)
      	     .attr("fill", "red"); 
           
  var fineDot2 = canvas.append("circle")
	           .attr("cx", (dw * .25))
  	         .attr("cy", (dw * .75))
    	       .attr("r", .9)
     		     .attr("fill", "black");  
           
  var fineDot3 = canvas.append("circle")
	  	       .attr("cx", (dw * .75))
  		       .attr("cy", (dw * .25))
    	       .attr("r", .9)
      	     .attr("fill", "green"); 
            
  var fineDot4 = canvas.append("circle")
		           .attr("cx", (dw * .75))
  		         .attr("cy", (dw * .75))
    		       .attr("r", .9)
      	       .attr("fill", "orange"); 
// Internal dot frame.

	var intDot1 = canvas.append("circle")
  	         .attr("cx", 1)
    	       .attr("cy", 1)
		  	     .attr("r", .9)
        	   .attr("fill", "red"); 
          	  
  var intDot2 = canvas.append("circle")
		         .attr("cx", 1)
  		       .attr("cy", dw)
    	       .attr("r", .9)
     		     .attr("fill", "blue");  
           
  var intDot3 = canvas.append("circle")
		          .attr("cx", dw)
  		        .attr("cy", 1)
    	        .attr("r", .9)
      	      .attr("fill", "green"); 
            
  var intDot4 = canvas.append("circle")
		           .attr("cx", dw)
  		         .attr("cy", dw)
    		       .attr("r", .9)
      	       .attr("fill", "orange");
// Marking the center of the dotgridUnit.   

  var ctrRectDot5 = canvas.append("svg:rect")
		           .attr("x", (dw * .4))
		           .attr("y", (dw * .4))
  			       .attr("height", (dw * .2))
		  	    	 .attr("width", (dw * .2))
        		   .attr("stroke", "red") 
        	  	 .attr("stroke-width", ".5")
      	       .attr("fill", "none");         	  	  

            
  var intDot5 = canvas.append("circle")
		           .attr("cx", (dw * .5))
  		         .attr("cy", (dw * .5))
    		       .attr("r", .9)
      	       .attr("fill", "black");   	       
}      	       
loadGrid();                        
