var score = [90, 80, 70, 60, 50];
console.log(score[4]);

console.log(score.length);
for(var i = 0; i < score.length; i++) {
    if(i%2 == 0) {
        console.log(score[i]);
    }
}

var data = ["Andi", "Budi", "Caca", "Dedi", "Eka"];

console.log("Before Push")
for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
}

data.push("Feri");
console.log("After Push")
for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
}

data.pop();
data.pop();
data.pop();
console.log("After Pop")
for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
}

var data2 = [
    [1,2,3,4,17,18], //i = 0
    [5,6,7,8], //i = 1
    [9,10,11,12], //i = 2
    [13,14,15,16] //i =3
];

for(var i = 0; i < data2.length; i++) {
    console.log("Data ke-" + i);
    for(var j = 0; j < data2[i].length; j++) {
        console.log(data2[i][j]);
    }
}