console.log(
  "#################### Question number one #########################"
);


//#################### Question number one #########################

//Looping a triangle Write a loop that makes seven calls to console.log to output the following triangle:

var triangle = "";
for (var i = 0; i < 7; i++) {
  triangle += "#";
  console.log(triangle);
}
console.log(
  "#################### Question 2 #########################"
);
// ############ Question 2 ############

//FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
//(and still print "Fizz" or "Buzz"for numbers divisible by only one of those).
/* function Buzz(){
for(let i=0;i<=10;i++){

    if(i%3===0&&i%5===0){
        console.log('FizzBuzz');
        
    }else if(i%3===0){
        console.log(i,'Fizz');
        
    }else if(i%5===0){

        console.log(i,'Buzz');
        
/*     }
}
} */
/* Buzz(); */ 

const  FizzBuzz=()=>{
const FizzBuzz=[];
for(let i=0;i<=100;i++){
    if(i%3===0){
        FizzBuzz.push(i,'Fizz');
    }else if(i%5===0){

        FizzBuzz.push(i,'Buzz')
    }else{
        FizzBuzz.push(i,'FizzBuzz')
    }
}
return FizzBuzz
}

console.log(FizzBuzz());

console.log(
  "#################### Question 3 #########################"
);
//########### Question 3 ########

/* Maximum Math.max returns its largest argument.
 We can build something like that now. Write a function findMax that
 takes three arguments and returns their maxiumum. Without method Math.max method. */

/* function findMax(){
    const arr=[...arguments];
    let biggest=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>biggest){
            biggest=arr[i];
        }
        return biggest;
    }
}
console.log("the biggest numbers is", findMax(0, 10, 5));

console.log("the biggest numbers is", findMax(0, -10, -2)); */


const findMax=(A,B,C)=>{
    let MaxNum='';
    if(A>B && A>C){
        MaxNum=A;
    }else if(B>A && B>C){
        MaxNum=B;
    }else if(C>A && C>B){
        MaxNum=C;
    }
    return MaxNum;
    
}
console.log(findMax(200,10,5));
console.log(findMax(5,-2,-200));


console.log(
  "#################### Question 4 #########################"
);
// ########### Question 4 ###########

/* Reversing an array Arrays have a reverse method which changes the array
 by inverting the order in which its elements appear. For this exercise,
  write a function, reverseArray. The reverseArray, takes an array as argument and produces a
   new array that has the same elements in the inverse order. Without reverse method. */

    /* var arrayOne = [1, 2, 3, 4, 5]; */

    var reverse = function(array) {
    /*   var arrayOne = array; */
      var array2 = [];

      for (var i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
      }
      return array2;
    };

    console.log(reverse(['A','B','C']));
    

  
console.log(
  "#################### Question 5 #########################"
);
 
/*  ############# Question 5 ############### */

/* Modifying an array Write a function called modifyArray takes array as
 parameter and modifies the fifth item of the array 
and returns the array. If the array length is less than five it return ‘item not found’. */

const modifyArray=(array)=>{
  if(array.length<5){
      return 'Not Found';
  }
  return array.map((item,index)=>{
      if(index===4){
          return item.toUpperCase();
      }
      return item
    })
}
console.log(modifyArray(['carrot','banana','apple','orange','avacado','tomato']))
console.log(modifyArray(['badrang','banjasia','muli','zardak','kachalo']))
console.log(modifyArray(['Apple','Sumsung','LG']))

console.log(
  "#################### Question 6 #########################"
);
/*  ################### Question 6 ############### */
/* 
Write a function which returns array of seven random numbers in a range of 0-9.
 All the numbers must be unique */

const sevenRandomNumbers = () => {

const arr=[];

while(arr.length<7){
    const rand=Math.floor(Math.random()*9)
    if(!arr.includes(rand)){
        arr.push(rand)
    }
}
return arr;
 
};
console.log(sevenRandomNumbers());

console.log(
  "#################### Question 7 #########################"
);

/* ################# Question 7 ########### */

/* 
Write a funch which takes any number of arguments and return the sum of the arguments


 */

 const SumOfNumbers=(...arr)=>{
     let Total=0;
     for(item of arr){
         Total+=item
     }
     return Total
 }

 console.log(SumOfNumbers(1,2,3));


 // Second mehtod

 function sum() {
   var sum = 0;
   for (var i = 0; i < arguments.length; i++) {
     sum += arguments[i];
   }
   return sum;
 }
 console.log(sum(1, 2, 3,5));

 console.log(
   "#################### Question 8 #########################"
 );

 /* ¤¤¤¤¤¤¤¤¤¤ Question 8 ¤¤¤¤¤¤¤¤¤¤¤¤ */

 /* Write a function which removes items 
 from the middle of an array and replace with three items */


 const removeMiddleItem=(arr, ...replacement)=>{

    const pointIndex=(arr.length-1)/2;
    const howManyToRemove=Math.floor(pointIndex) !==Math.ceil(pointIndex)?2:1;
    arr.splice(Math.floor(pointIndex),howManyToRemove, ...replacement);
 return arr;

}
 console.log(removeMiddleItem(['Masood','Mustafa','koray','sheery','kunjan','harri','garland'],1,2,3));
 console.log(removeMiddleItem(['A','B','C','D','E'],25,30,40));

 
 console.log("################## Qeustion 9 ################## ");
 /* 
 ################## Qeustion 9 ################## */

/* Calculate the total annual income of the person by extracting the following text.
 'He earns 5000 euro from salary per
 month, 10000 euro annual bonus, 15000 euro online courses per month.' */
 
 function Calculate() {
     const text =
     "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
     const numbers = text.match(/[\d]+/g).map((num) => Number(num));
     const [salary, annualBonus, courses] = numbers;
     
     const yearlyIncome = salary * 12 + annualBonus + courses * 12;
     
     console.log("Yearly income: ", yearlyIncome);
    }
    Calculate();

     console.log("################## Qeustion 10 ################## ");

/*      Create a function that takes two strings and returns true if the first argument ends 
     with the second argument; otherewise return false . Take two strings as arguments.
      Determine if second string matches ending of first string. Return boolean value. Example */

    const Intgrify=(str1,str2)=>{
        return str1.endsWith(str2);

    }
    console.log(Intgrify("integrity", "ity"));
    console.log(Intgrify("integration", "tio"));
    console.log(Intgrify("connection", "sion"));
    console.log(Intgrify("connection", "tion"));
           

   
    


 
 