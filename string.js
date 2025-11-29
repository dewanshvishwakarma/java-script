let a="JAVA SCRIPT"
let nam=new String("DEWANSH")
console.log(nam)
console.log(typeof(name))
console.log(a.length)
console.log(a.charCodeAt(1))//65
console.log(a.charAt(1))//A
console.log(a.indexOf("A"))
console.log(a.lastIndexOf("A"))
console.log(a.includes("JAVA"))
console.log(a.startsWith("JAVA"))
console.log(a.slice(0,4))
console.log(a.substring(1,10))
console.log(a.split(" "))
console.log(a.concat(nam))

console.log(a.replace("JAVA","MAVA"))

console.log(a.padStart(15,"J"))
console.log(a.padEnd(15,"J"))



// reverse a string
let clg ="oist"
let rev=""
for(let i=clg.length-1;i>=0;i--){
    rev=rev+clg[i]
}
console.log(rev)

// meathod 2
let rev2=clg.split("").reverse().join("")
console.log(rev2)