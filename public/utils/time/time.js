/*
 * Time Server
 * ===========
 * Angular Module.
 * Progressively develop into test case for factory then service thereafter.
 * Jquery Abstraction.
 *
 * Development Stages/Steps
 * ========================
 * Create test case working on html page loading from the desktop.
 * Transfer to standalone script.
 * Load into page via angular.js
 * Develop into module.
 * Create a custom directive as practice.
 * Develop a factory via angular.
 * Develop a server via angular.
 *
 * Development Stages/Steps
 * ========================
 * Test hr min 
 * Test day date hr min
 * Test day date hr min sec.
 * Test day date hr min blinking colon.
 * Angular delivery.
 * Angular module.
 * Angular Factory.
 * Angular Service in app.
 *
 */
 
 /*
      
      //var = ["tdate", "tday", "thr", "tmin", "tsec", "tcurrent"];

    getNowTime function(){
      var clock = getElementById("headerclock");
      var nd = newDate();
        //tdate = nd.get;
       // tday = nd.get;
      thr = nd.getHours;
        //tmin = nd.get; 
        
      clock.innerHTML=thr;
         
        //tcurrent = ("tdate" + "tday"  + "thr" + "tmin" + "tsec" + "tcurrent");
                              
       // return (tcurrent);
        
    };
      
      //var showTime = function(tcurrent){
      //  alert(tcurrent);
     // };
      
      //getTime();

  
  

var showTime=setInterval(function(){getNowTime()},1000);

function addZero(i){
if (i<10) 
  {
  i="0" + i;
  }
return i;
}

function getNowTime(){
var nd = new Date();
var clock = document.getElementById("headerclock");
var thr = addZero(nd.getHours());
var tmin = addZero(nd.getMinutes());
var tsec = addZero(nd.getSeconds());
clock.innerHTML = thr + ":" + tmin + ":" + tsec;
}
  */
  
var showTime=setInterval(function(){getNowTime()},1000);

function getNowTime(){
var nd = new Date();
var tcurrent = nd.toLocaleTimeString();
document.getElementById("headerclock").innerHTML = tcurrent;
} 
