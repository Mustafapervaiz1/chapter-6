/* document.write("Result:<br>")
 var a = 10
 document.write(`The value of a is ${a} <br>`)
 document.write(".............................<br><br>")
 document.write(`The value of ++a is${++a} <br>`)
 document.write(`Now value of a is${a} <br><br>`)
 // step 3
 document.write(`The value of a++ is${a++} <br>`)
 document.write(`Now value of a is${a} <br><br>`)
 // step 4
 document.write(`The value of --a is${--a} <br>`)
 document.write(`Now value of a is${a} <br><br>`)
 // step 5
 document.write(`The value of a-- is${a--} <br>`)
 document.write(`Now value of a is${a} <br>`)
 //step 2.1 
var a =2,b=1;

document.write(`a is ${a}<br>`)
document.write(`b is ${b}<br>`)
document.write(`result  is ${--a - --b + ++b + b--} <br>`)*/
// question 3  greet the user
// var names =prompt("what is your name")
// document.write(`welcome to here ${names}`)

// question   4/5  table nooooooooooooooooooooooooooooooot completexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//var value = prompt("Type any Number")
// var tabel = prompt("write any number for table")
// document.write(` table of ${tabel*10} is`)

// question   6  subject name
////step 6.1
var sub1 = prompt("subject first");
var sub2 = prompt("subject second");
var sub3 = prompt("subject third");

//             ////step 6.b
var total_marks = 100;
//          ////step 6.c
var Obtained_Marks_1 = prompt("subject first number");
//          ////step 6.d
var Obtained_Marks_2 = prompt("subject second number");
var Obtained_Marks_3 = prompt("subject third number");
var percentage1 = (Obtained_Marks_1 / total_marks*100)
var percentage2 = (Obtained_Marks_2 / total_marks*100)
var percentage3 = (Obtained_Marks_3 / total_marks*100)

document.write(
  `<table border='4  px'> <th>subject</th><th>total marks</th><th>Obtained_Marks</th><th>percentage</th></table>`
);
document.write(
  `<table border='1px'><th>${sub1}</th><th>${total_marks}</th><th>${Obtained_Marks_1}</th><th>${percentage1}%</th></table>`
);
document.write(
  `<table border='1px'><th>${sub2}</th><th>${total_marks}</th><th>${Obtained_Marks_2}</th><th>${percentage2}%</th></table>`
);
document.write(
  `<table border='1px'><th>${sub3}</th><th>${total_marks}</th><th>${Obtained_Marks_3}</th><th>${percentage3}%</th></table>`
);
