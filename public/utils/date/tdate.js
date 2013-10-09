function getNewDay(){
var nd = new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var dycurrent = weekday[nd.getUTCDay()];
document.getElementById("headerday").innerHTML = dycurrent;
}

getNewDay();

function getNewDate(){
var nd = new Date();
var dtcurrent = nd.getUTCDate();
document.getElementById("headerdate").innerHTML = dtcurrent;
}

getNewDate();



function getNewMonth(){
var nd = new Date();
var month =new Array(12);
month[0]="Jan";
month[1]="Feb";
month[2]="Mar";
month[3]="Apr";
month[4]="May";
month[5]="Jun";
month[6]="Jul";
month[7]="Aug";
month[8]="Sep";
month[9]="Oct";
month[10]="Nov";
month[11]="Nov";
var mtcurrent = month[nd.getUTCMonth()];
document.getElementById("headermonth").innerHTML = mtcurrent;
}


getNewMonth();

