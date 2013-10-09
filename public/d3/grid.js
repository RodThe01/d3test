function loadGrid(){

  d3.select("body").style("background-color", "#04040B");


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
						
// Appending Test frame to grid.
	// Plotting Quardant I  
  var headerBox01 = canvas.append("svg:rect")
      .attr("x", (hy * .001) )
      .attr("y", (hy * .001) )
      .attr("width", (wx * 1))
      .attr("height", (hy * .125) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "yellow")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);

  var headerBoxText = canvas.append("svg:text")
          .attr("x", (hy * .015))
          .attr("y", (hy * .0325))
          .text("HEADER")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white"); 
      
// Appending left box/panel.
      	            
  var leftBox01 = canvas.append("svg:rect")
      .attr("x", (hy * .001) )
      .attr("y", (795 * .125) )
      .attr("width", (hy * .25))
      .attr("height", (hy * .75) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);
      
  var testText = canvas.append("svg:text")
          .attr("x", (hy * .015))
          .attr("y", (hy * .1575))
          .text("LEFT")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");       
      
// Appending RIGHT box/panel.
      	            
  var rightBox02 = canvas.append("svg:rect")
      .attr("x", (hy * 1.5))
      .attr("y", (795 * .125) )
      .attr("width", (hy * .125))
      .attr("height", (hy * .75) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);
      
  var rightBoxText = canvas.append("svg:text")
          .attr("x", (hy * 1.515))
          .attr("y", (hy * .1575))
          .text("RIGHT")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");       
      
// Appending FOOTER box/panel.
      	                  
  var footerBox03 = canvas.append("svg:rect")
      .attr("x", (hy * .001))
      .attr("y", (hy * .875) )
      .attr("width", (wx * 1))
      .attr("height", (795 * .375) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);

  var testText = canvas.append("svg:text")
          .attr("x", (hy * .015))
          .attr("y", (hy * .9075))
          .text("FOOTER")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white"); 
                    
// Appending MAIN box/panel.
      	            
  var mainBox03 = canvas.append("svg:rect")
      .attr("x", (hy * .25))
      .attr("y", (795 * .125) )
      .attr("width", (hy * 1.25))
      .attr("height", (795 * .75) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3) 

  var testText = canvas.append("svg:text")
          .attr("x", (hy * .265))
          .attr("y", (hy * .1575))
          .text("MAIN")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");                

// Appending FEEDBOX 01
      
  var feedBox01 = canvas.append("svg:rect")
      .attr("x", (hy * .125))
      .attr("y", (795 * .125) )
      .attr("width", (hy * .25))
      .attr("height", (hy * .25) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3); 
      
  var feedBox01Text = canvas.append("svg:text")
          .attr("x", (hy * .140))
          .attr("y", (hy * .1575))
          .text("FEED TEST 01")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");       

// Appending FEEDBOX 02      

  var feedBox02 = canvas.append("svg:rect")
      .attr("x", (hy * .25))
      .attr("y", (795 * .25) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .375) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);
      
  var feedBox02Text = canvas.append("svg:text")
          .attr("x", (hy * .265))
          .attr("y", (hy * .2825))
          .text("FEED TEST 02")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");    

/*
// Appending FEEDBOX 03      

  var feedBox03 = canvas.append("svg:rect")
      .attr("x", (hy * .375))
      .attr("y", (795 * .375) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .375) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "#F0F2FA")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);  
      
  var feedBox03Text = canvas.append("svg:text")
          .attr("x", (hy * .390))
          .attr("y", (hy * .4075))
          .text("FEED TEST 03")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");
          
*/          
          
// Create a textbox template.
// Use an 'f' index to denote nimber of fields that are present in the document.

// Appending FEEDBOX 03      

  var textBoxField01 = canvas.append("svg:rect")
      .attr("x", (hy * .375))
      .attr("y", (795 * .375) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .04) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "red")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);  
      
  var textBoxField01text = canvas.append("svg:text")
          .attr("x", (hy * .39))
          .attr("y", (hy * .406))
          .text("TOP HEADER")
          .attr("font-family", "Miso")
          .attr("font-size", "28px")
          .attr("fill", "white");

         
  var textBoxFieldBox02 = canvas.append("svg:rect")
      .attr("x", (hy * .375))
      .attr("y", (795 * .415) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .032) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "white")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);  
      
  var textBoxField02text = canvas.append("svg:text")
          .attr("x", (hy * .390))
          .attr("y", (hy * .435))
          .text("SUB HEADER")
          .attr("font-family", "Miso")
          .attr("font-size", "12px")
          .attr("fill", "white");

  var textBoxFieldBox02 = canvas.append("svg:rect")
      .attr("x", (hy * .375))
      .attr("y", (795 * .447) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .178) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "white")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3); 
                
  var textBoxField02text = canvas.append("svg:text")
          .attr("x", (hy * .390))
          .attr("y", (hy * .469))
          .text("Description Area. A set limit on characters that will always show on given views.")
          .attr("font-family", "Miso")
          .attr("font-size", "10px")
          .attr("fill", "white");          

  var textBoxFooterBox = canvas.append("svg:rect")
      .attr("x", (hy * .375))
      .attr("y", (795 * .626) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .032) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "white")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);  
      
  var textBoxFootertext = canvas.append("svg:text")
          .attr("x", (hy * .390))
          .attr("y", (hy * .646))
          .text("FOOTER")
          .attr("font-family", "Miso")
          .attr("font-size", "12px")
          .attr("fill", "white");         
/*
          
  var textBoxFieldBox03 = canvas.append("svg:rect")
      .attr("x", (hy * .375))
      .attr("y", (795 * .375) )
      .attr("width", (hy * .375))
      .attr("height", (795 * .375) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("fill", "green")      
      .style("stroke-opacity", 1)
      .style("fill-opacity", .3);  
      
  var textBoxField03text = canvas.append("svg:text")
          .attr("x", (hy * .390))
          .attr("y", (hy * .4075))
          .text("FEED TEST 03")
          .attr("font-family", "Miso")
          .attr("font-size", "15px")
          .attr("fill", "white");          





*/








				
// Appending Internal Y axis frame of grid.
	// Plotting Y axis.              
  var intY7 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .125) )
      .attr("x2", 1279)
      .attr("y2", (795 * .125) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);
     
  var intY6 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .25) )
      .attr("x2", 1279)
      .attr("y2", (795 * .25) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intY5 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .375) )
      .attr("x2", 1279)
      .attr("y2", (795 * .375) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intY4 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (794 * .5))
      .attr("x2", 1279)
      .attr("y2", (794 * .5))
      .style("stroke", "white")
      .style("stroke-width", .225)
      .style("stroke-opacity", 1.0);

  var intY3 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .625) )
      .attr("x2", 1279)
      .attr("y2", (795 * .625) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);
     
  var intY2 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .75) )
      .attr("x2", 1279)
      .attr("y2", (795 * .75) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);
    
  var intY1 = canvas.append("svg:line")
      .attr("x1", 1)
      .attr("y1", (795 * .875) )
      .attr("x2", 1279)
      .attr("y2", (795 * .875) )
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

                          

// Appending Internal X axis frame of grid.
	// Plotting internal X axis lines.         

  var intX12 = canvas.append("svg:line")
      .attr("x1", (hy * 1.5) )
      .attr("y1", 1)
      .attr("x2", (hy * 1.5) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX11 = canvas.append("svg:line")
      .attr("x1", (hy * 1.375) )
      .attr("y1", 1)
      .attr("x2", (hy * 1.375) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX10 = canvas.append("svg:line")
      .attr("x1", (hy * 1.25) )
      .attr("y1", 1)
      .attr("x2", (hy * 1.25) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX9 = canvas.append("svg:line")
      .attr("x1", (hy * 1.125) )
      .attr("y1", 1)
      .attr("x2", (hy * 1.125) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .225)
      .style("stroke-opacity", 1.0);

  var intX8 = canvas.append("svg:line")
      .attr("x1", (hy * 1) )
      .attr("y1", 1)
      .attr("x2", (hy * 1) )
      .attr("y2", hy)
      .style("stroke", "blue")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);


  var intX7 = canvas.append("svg:line")
      .attr("x1", (hy * .125) )
      .attr("y1", 1)
      .attr("x2", (hy * .125) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX6 = canvas.append("svg:line")
      .attr("x1", (hy * .25) )
      .attr("y1", 1)
      .attr("x2", (hy * .25) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX5 = canvas.append("svg:line")
      .attr("x1", (hy * .375) )
      .attr("y1", 1)
      .attr("x2", (hy * .375) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX4 = canvas.append("svg:line")
      .attr("x1", (hy * .5) )
      .attr("y1", 1)
      .attr("x2", (hy * .5) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .225)
      .style("stroke-opacity", 1.0);

  var intX3 = canvas.append("svg:line")
      .attr("x1", (hy * .625) )
      .attr("y1", 1)
      .attr("x2", (hy * .625) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);


  var intX2 = canvas.append("svg:line")
      .attr("x1", (hy * .75) )
      .attr("y1", 1)
      .attr("x2", (hy * .75) )
      .attr("y2", hy)
      .style("stroke", "blue")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);

  var intX1 = canvas.append("svg:line")
      .attr("x1", (hy * .875) )
      .attr("y1", 1)
      .attr("x2", (hy * .875) )
      .attr("y2", hy)
      .style("stroke", "white")
      .style("stroke-width", .25)
      .style("stroke-opacity", 1.0);
      
          	         	       
}      	       
loadGrid();                        
