let i, sum,avg;
sum = 0;
var n = parseInt (prompt("how many number to add = "));
for (i = 1; i <= n; i++) {
   var num = parseInt (prompt("enter number: "));
   sum = sum + num;  
}
avg=sum/n;
alert(+avg);