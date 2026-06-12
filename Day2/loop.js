console.log("For loop");
var temp = 0;
var k="";
for(var i = 1;i<=10;i++){
    k+=i+" ";
} 
console.log(k);

console.log("For loop nested");

var temp = "";
for(var j = 1;j<=5;j++){
    for(var k = 1;k<=j;k++){
        temp+="*";
    }
    temp+="\n";
}

console.log(temp);

// console.log("While loop");

// var j = 1;
// while(j<=10){
//     console.log(j);
//     j++
// }

// console.log("Do while loop");

// var k = 11;
// do{
// console.log(k);
// k++;
// }while(k<=10)
