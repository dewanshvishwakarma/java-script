// Q:1 Print numbers from 1 to 20 using a for loop.
for(let i=1;i<=20;i++){
    console.log(i)
}


// Q:2 Print all even numbers from 1 to 50.
for(let i=1;i<=50;i++){
    if (i%2==0){
        console.log(i)
    }
}


// Q:3 Print the table of 5 using a for loop
for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`)
}

// Q:4 Print numbers from 10 to 1 (reverse loop).
for(let i=10;i>=1;i--){
    console.log(i)
}


//Q:5 Print the sum of numbers from 1 to 100
let sum=0
for(let i=1;i<=100;i++){
    sum=sum+i
}
console.log(sum)


// for…in Loop – Practice Questions

// Q:6 Create an object student with name, age, and city. Use for…in to print keys and values.
 
let student={
    name:"dewansh",
    age:20,
    city:"bhopal"
}

for(key in student){
    console.log(`${key} : ${student[key]}`)
}


// Q:7 Create an object car with 4 properties. Print all properties using for…in.


let car={
    model:"k20",
    color:"black",
    tyre:"mrf",
    type:"cng"
}

for(key in car){
    console.log(`${key} : ${car[key]}`)
}


// Q:8 let marks = {math: 85, sci: 92, eng: 74}; use for loop to print subject and marks

for(i in marks){
    console.log(`${i} : ${marks[i]}`)
}


// Q9:Create an object with 5 movies and their ratings & print only ratings

let movies = {
    Inception: 9,
    Avatar: 8,
    Interstellar: 9.5,
    Joker: 8.8,
    Dangal: 9.2}
for(i in movies){
    console.log(movies[i])
}    

// for…of Loop – Practice Questions

// Q10=Print all items of this array using for…of:
let colors = ["red", "green", "blue"];
for(let i of colors){
    console.log(i)
}

// Q11:Use for…of to print each character of the string "JAVASCRIPT".
let str="JAVASCRIPT"
for(let i of str){
    console.log(i)
}


//Q:13 Print each number using for…of.
let nums = [10, 20, 30, 40];
for(i of nums){
    console.log(i)
}

// Q:13 Print only vowels from a string using for…of.
let name="dewansh"
let vowels="aeiouAEIOU"
for(i of name){
    if(vowels.includes(i)){
        console.log(i)
    }
}

// Mixed Loop Questions
//Q:14 Take an array of marks and count how many are greater than 50.

let marks = [45, 67, 89, 32, 51, 78, 49, 90]
let count=0
for(i of marks){
    if(i>50){
        count++
    }
    
}
  console.log(`marks greaather than 50:${count}`)

// Q:15 Given an array of names, print Long Name if length > 5, else Short Name.
let names = ["Aarav", "Priyansh", "Riya", "Mohit", "Alexander"]
for(i of names){
    if (i.length>5){
        console.log(`${i}=long name:`)
    }

    else{
        console.log(`${i} :short name`)
    }
}


// to do 
// Print the sum of all values in an array using for…of.

// Print the largest number from an array using a for loop.