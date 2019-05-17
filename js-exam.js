//the prime number 

console.log("¤¤¤¤¤¤¤¤¤  Learn to check if a number is even, odd or prime ############");


const evenAndOdd = (num) => {
  if (num % 2 !== 0) {
    console.log("This number is Odd", num);
  } else {
    if (num % 2 === 0) {
      console.log("This number is even", num);
    }
  }
};


function check(num) {
  for (let index = 0; index < num; index++) {
    evenAndOdd(index);
    prime(index);
  }
}
check(21);

function prime(num) {
  if (num === 2) {
    return console.log("This is prime", num);
  } else if (num < 2) {
    return console.log("This is not prime", num);
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log("This is not prime", num);
    }
  }
  return console.log("This is prime", num);
}


////////// 12. Function
console.log("********** 12. FUNCTION **********");


// 1. Declare a function fullName and it print out your full name.

function myName(first_name, last_name) {
    const full_name = first_name + last_name;
    return full_name;
}
console.log(myName("mostafa ", "hazareh."));
console.log(myName("Rohy ", "Dehqanzada."));
console.log(myName("Niini ", "Jiiji"));

/* 2. Declare a function fullName and now it takes firstName, 
lastName as a parameter and it returns your full name. */

function my_name(fName, lName) {
    const full_name = fName + lName;
    return full_name;
}
console.log(my_name("Nicole ", "Kidman")); // call the function to concat the name and also it can

// 3. Declare a function addNumbers and it takes three parameters and it returns sum.
function addNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}
let sumResult = addNumbers(12, 13, 34);
let d = addNumbers(245, 23, 4);
console.log(`12 + 13 + 34 = ${sumResult}`);
console.log(`245 + 23 + 4 = ${d}`);
console.log(
    sumResult + " + " + d + " + 10" + " = " + addNumbers(sumResult, d, 10)
);

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
    const area = length * width;
    return area;
}
console.log(" The area of rectangle is = " + areaOfRectangle(14, 6) + "cm");
console.log(" The area of rectangle is = " + areaOfRectangle(14, 16) + "cm");
console.log(" The area of rectangle is = " + areaOfRectangle(4, 16) + "cm");

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    var perimeter = 2 * (length + width);
    return perimeter;
}
console.log(
    " perimeter of this rectangle is = " + perimeterOfRectangle(14, 6) + "cm"
);
console.log(
    " perimeter of this rectangle is = " + perimeterOfRectangle(14, 16) + "cm"
);
console.log(
    " perimeter of this rectangle is = " + perimeterOfRectangle(4, 16) + "cm"
);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    var volume = length * width * height;
    return volume;
}
console.log(
    "the volume of rectangular prism is = " + volumeOfRectPrism(14, 6, 5) + "cm"
);
console.log(
    "the volume of rectangular prism is = " + volumeOfRectPrism(4, 16, 5) + "cm"
);
console.log(
    "the volume of rectangular prism is = " + volumeOfRectPrism(4, 6, 15) + "cm"
);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    let pi = Math.PI;
    return pi * radius * radius;
}
console.log("The area of this circle is = " + areaOfCircle(21).toFixed(2)); //toFixed is declare two decimal integer.
console.log("The area of this circle is = " + areaOfCircle(14).toFixed(3));
console.log("The area of this circle is = " + areaOfCircle(7).toFixed(1));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    var circum = 2 * Math.PI * r;
    return circum;
}
console.log("Circumference of the circle is = " + circumOfCircle(12));
console.log("Circumference of the circle is = " + circumOfCircle(8).toFixed(2));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function CalDensity(mass, volume) {
    var density = mass / volume;
    return density;
}
console.log("density of this substance is = " + CalDensity(14, 2) + "ml");
console.log("density of this substance is = " + CalDensity(25, 3).toFixed(3) + "ml");
console.log("density of this substance is = " + CalDensity(36, 4) + "ml");

/* 10. Speed is calculated by dividing the total distance covered by a moving object divided
   by the total amount of time taken. Write a function which calculates a speed of a moving object, speed. */
function CalObjSpeed(DistanceTotal, TimeTotal) {
    let speed = DistanceTotal / TimeTotal;
    return speed;
}
console.log(
    "The object moves 150m within 10s. the speed is =  " +
    CalObjSpeed(150, 10) +
    " m/s "
);
console.log(
    "The object moves 300m within 25s. the speed is =  " +
    CalObjSpeed(300, 25) +
    "m/s"
);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function CalWeight(mass, gravity) {
    let weight = mass * gravity;
    return weight;
}
console.log("The weight of this substance is = " + CalWeight(23, 12) + "kg");
console.log("The weight of this substance is = " + CalWeight(24, 13) + "kg");
console.log("The weight of this substance is = " + CalWeight(25, 14) + "kg");


/* 12. Temperature in ˚C can be converted to ˚F using this formula: ˚F = (˚C x 9 / 5) + 32. Write a function 
which convert ˚C to ˚F convertCelsiusToFahrenheit. */
function ConvertCelsiusToFahrenheit(C) {
    let Fahrenheit = (C * 9) / 5 + 32;
    return Fahrenheit;
}
console.log(
    "the 13˚C is equal to " + ConvertCelsiusToFahrenheit(13).toFixed(2) + "˚F ."
);
console.log(
    "the 23˚C is equal to " + ConvertCelsiusToFahrenheit(23).toFixed(2) + "˚F ."
);
console.log(
    "the -13˚C is equal to " + ConvertCelsiusToFahrenheit(-13).toFixed(2) + "˚F ."
);
// 12.1 this function convert the Fahrenheit to Celsius using this formula ˚C = (˚F - 32) * 5/9.
function ConvertFahrenheitToCelsius(F) {
    let Celsius = (F - 32) * 5 / 9;
    return Celsius;
}
console.log(
    "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(55.4).toFixed(0) +
    "˚C ."
);
console.log(
    "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(73.4).toFixed(0) +
    "˚C ."
);
console.log(
    "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(8.59).toFixed(0) +
    "˚C ."
);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
function BMI(w, h) {
    let height = h / 100; // get height back to centimeter.
    let bmi = w / (height ** 2);
    return bmi;
}
console.log("my Body Mass Index is = " + BMI(89, 174) + " kg/m2");
console.log("my Body Mass Index is = " + BMI(75, 162).toFixed(2) + " kg/m2");
console.log("my Body Mass Index is = " + BMI(45, 122).toFixed(2) + " kg/m2");

/* 13.1   BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obsess based the information given below.
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more */
function CalBMI(w, h) {
    let height = h / 100; // get height back to centimeter.
    let bmi = w / (height ** 2);
    if (bmi >= 30) {
        console.log(
            "your BMI is " + bmi.toFixed(2) + ".  👎 Obsess: BMI is 30 or more"
        );
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(
            "your BMI is = " + bmi.toFixed(2) + ".  ✋ Overweight: BMI is 25 to 29.9"
        );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(
            "your BMI is = " +
            bmi.toFixed(2) +
            ".  👍 Normal weight: BMI is 18.5 to 24.9"
        );
    } else {
        console.log(
            "your BMI is = " +
            bmi.toFixed(2) +
            ".  Underweight: BMI is less than 18.5"
        );
    }
    return bmi;
}
CalBMI(69, 174);
CalBMI(79, 164);
CalBMI(89, 154);
CalBMI(59, 184);
// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch (month) {
        case "March":
        case "April":
        case "May":
            season = "spring";
            console.log("Now is spring!");
            break;
        case "June":
        case "July":
        case "August":
            season = "summer";
            console.log("Now is Summer!");
            break;
        case "September":
        case "October":
        case "November":
            season = "autumn";
            console.log("Now is Autumn!");
            break;
        case "December":
        case "January":
        case "February":
            season = "winter";
            console.log("Now is Winter!");
            break;
        default:
            season = "";
            console.log("I am in the air!!!");
            break;
    }
    return season;
}
checkSeason("March");
checkSeason("July");
checkSeason("September");
checkSeason("February");
checkSeason("12");

console.log(Date());

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maxiumum with out using Math.max method.
function findMax(n1, n2, n3) {
    let maximum;
    if (n1 > n2 && n1 > n3) {
        maximum = n1;
    } else if (n2 > n1 && n2 > n3) {
        maximum = n2;
    } else {
        maximum = n3;
    }
    return maximum;
}
console.log("the maximum number is = " + findMax(13, 12, 8));
console.log("the maximum number is = " + findMax(13, 22, 8));
console.log("the maximum number is = " + findMax(13, 22, 48));
console.log("the maximum number is = " + findMax(-13, -22, -48));

// 16. Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
    let x = (c - b) / a;
    return x;
}
console.log("X = " + solveLinEquation(5, 2, 22));
console.log("X = " + solveLinEquation(4, 1, 13));
console.log("X = " + solveLinEquation(8, 2, 18));

// 17. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write
// a function which calculates value or values of a quadratic equation, solveQuadEquation.



// 18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArr(arr) {
    for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);
    }
    console.log(`${arr}`);
}
printArr([23, 34, 24, 2, 45, 3]);
printArr([4, 346, 35, 2]);

// 19. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    console.log(`The value of x = ${x} and y = ${y}`);
    let m = x;
    x = y;
    y = m;
    return `BUT NOW the  x = ${x} and y = ${y}`;
}
console.log(swapValues(3, 6));
console.log(swapValues(23, 67));

// 20. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use method).
function reverseArr(arr) {
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
        console.log(`${arr[i]}`);
    }
    return reverseArr;
}
console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr(["A", "B", "C", "D", "E"]));
console.log(reverseArr(["I", "II", "III", "IV", "V", "VI"]));

// 21.  Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array.





console.log("¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ Todo list¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤");



const todoList=[];

const dateTime=()=>{
    const date=new Date();
    const yy=date.getFullYear();
    const mm=date.getMonth()+1;
    const day=date.getDay();
    const min=date.getMinutes();
    const hours=date.getHours();

    return `${day}/${mm}/${yy} ${hours}:${min}`
}
console.log(dateTime());


const addTodoList=(task,time,completed)=>{

    const firstTask= todoList.push({task,time,completed})

return firstTask
}

console.log(addTodoList("masood",dateTime(),true));
console.log(todoList);

const deletTodo=(i)=>{

    return todoList.splice(i,1)

}
console.log(deletTodo(0));

const editTodo=(index,task,time,completed)=>{

    return todoList.splice(index,1,{task,time,completed})

}

console.log(editTodo(0,"mustafa",dateTime(),false));




console.log("############################333");


// A quadratic equation is described as follows: ax2 + bx + c = 0.
//Write a function that calculates the value or values of a quadratic equation, solvQuadEquation.

// solve for x given parameters a, b and c: x = (-b ± (b^2 - 4ac)^1/2) / 2a */

function solveQuadEquation(a, b, c) {
 var xNum = ((-b + (b ** 2 - 4 * a * c) ** 0.5) / 2) * a;
 var yNum = ((-b - (b ** 2 - 4 * a * c) ** 0.5) / 2) * a;
 return [xNum, yNum];
}

console.log(solveQuadEquation(1, 2, 1));

function printSolutionsQuadEquation(a, b, c) {
 var xNum = ((-b + (b ** 2 - 4 * a * c) ** 0.5) / 2) * a;
 var yNum = ((-b - (b ** 2 - 4 * a * c) ** 0.5) / 2) * a;
 if (xNum !== xNum && yNum !== yNum) {
   /* this checks if xNum o yNum are NaN, since NaN is the only number not equal to itself */
   console.log(`This quadratic equation has no real solutions.`);
 } else if (xNum === xNum && yNum !== yNum) {
   console.log(
     `This quadratic equation has one real solution: x = ${xNum}; and one imaginary solution.`
   );
 } else if (xNum !== xNum && yNum === yNum) {
   console.log(
     `This quadratic equation has one real solution: x = ${yNum}; and one imaginary solution.`
   );
 } else if (xNum === yNum) {
   console.log(
     `This quadratic equation has two identical real solutions: x = ${xNum}.`
   );
 } else if (xNum !== yNum) {
   console.log(
     `This quadratic equation has two real solutions: x = ${xNum} and x = ${yNum}.`
   );
 } else {
   console.log("Error.");
 }
}

printSolutionsQuadEquation(2, 4, 1);


console.log("¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ prime RAnge ¤¤¤¤¤¤¤44");

function getPrimesInRange(beginning, ending) {
  // declare empty array for prime numbers
  let primes = [];

  // loop through the range
  for (let number = beginning; number < ending + 1; number++) {
    // all numbers have at least one factor (themselves)
    let factors = 1;

    // loop through the divisors of the number, starting at 1 and ending at half the number. Examples:
    // If number = 1, the loop doesn't run
    // If number = 2, the loop runs once (for divisor 1)
    // If number = 6, the loop runs three times (for divisors 1, 2, and 3)
    // If number = 7, the loop runs three times (for divisors 1, 2, and 3)
    // etc
    for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {
      if (number % divisor === 0) {
        factors++;
      }
    }

    // if the number has exactly two factors (1 and itself), it is prime
    if (factors === 2) {
      primes.push(number);
    }
  }

  console.log(primes);
  return primes;
}

getPrimesInRange(1, 100);
getPrimesInRange(-10, 10);



