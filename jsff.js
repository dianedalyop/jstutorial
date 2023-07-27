function exfile(){

document.getElementById("demo2").innerHTML ="name";

}

function exfile2(){
document.getElementById("demo3").innerHTML = 5 + 6 ;

}

function replace(){
document.write(5 + 6);
} 

let x,y,z;
x = 5;
y = 6;
z = x + y;

document.getElementById("demo4").innerHTML = "The value of z is "+ z + ".";


function changeps() {

    document.getElementById("p1").innerHTML = "My name is diane";
    document.getElementById("p2").innerHTML = "Iam learning javascript";


    const cars = ["Saab", "Volvo" , "BMW"] ;

    // change element:

    cars[0] = "Toyota";

    // add an element

    cars.push("Audi");

    // Display the Array

    document.getElementById("p2").innerHTML = cars;

    const  cars2 = {type:"Fait ", model:"500", color: "red"};

    // changing and adding

    cars2.color = "red";

    cars2.owner = "'johnson";

    // call

    document.getElementById("p1").innerHTML = "car owner is "+ cars2.owner + "the car color is "+ cars2.color;

}

