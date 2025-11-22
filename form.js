 function check(){

  let a=document.querySelector("#a").value.trim()
  let b=document.querySelector("#b").value.trim()
  let c=document.querySelector("#c").value.trim()
  let d=document.querySelector("#d").value.trim()
  let e=document.querySelector("#e").value.trim()
 
  let p1=document.querySelector("#name_p")
  let p2=document.querySelector("#num_p")
  let p3=document.querySelector("#email_p")
  let p4=document.querySelector("#password_p")
  let p5=document.querySelector("#cpass_p")
  

  if(a==""){
    p1.innerHTML="enter name"
    p1.style.color="red"
    return false
  }
  else if(b==""){
    p2.innerHTML="enter number"
    p2.style.color="red"
    return false
 }
   else if(c==""){
    p3.innerHTML="enter number"
    p3.style.color="red"
    return false
 }
   else if(d==""){
    p4.innerHTML="enter number"
    p4.style.color="red"
    return false
 }
   else if(e==""){
    p5.innerHTML="enter number"
    p5.style.color="red"
    return false
 }
 else if(b.length!=10 || isNaN(b)){
  p2.innerHTML="enter valid number"
  return false
 }

 else if (!c.includes("@")||!c.includes(".com")){
  p3.innerHTML="enter valid email"
  return false
 }
 else if(d!=e){
  p4.innerHTML="enter matchig password"
  return false

 }
}