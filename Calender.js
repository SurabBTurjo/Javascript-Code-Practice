//Calendar of any month of any year 


var days=30;
var monthname="April";
var year=2021;
var startingday=5;

console.log("\n \n Calender of Month",monthname,",",year,"\n \n");
console.log("Sun   Mon   Tue   Wed   Thu   Fri   Sat")

for(var i=0;i<5;i++){
    var dayrow="";
    for(var j=1;j<=7;j++){
        
        var currentday=(7*i+j)-startingday;
        if(currentday>days){
            break;
        }
        else if(currentday<1){
            currentday=" ";
        }
        if(currentday>9){
            dayrow=dayrow+currentday+"    ";
        }
        else
        dayrow=dayrow+currentday+"     ";

    }
    console.log(dayrow);
}