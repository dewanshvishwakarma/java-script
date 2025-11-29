function changecolor(){
    let ok=document.querySelector("#input").value.toLowerCase()
    if(ok === "red"){
        document.body.style.backgroundColor = "red"
     }
     else if (ok === "blue"){
         document.body.style.backgroundColor = "blue"
     }
     else if (ok === "black"){
         document.body.style.backgroundColor = "black"
     }
     else if (ok === "green"){
         document.body.style.backgroundColor = "green"
     }
     else if (ok === "yellow"){
         document.body.style.backgroundColor = "yellow"
     }
     else if (ok === "pink"){
         document.body.style.backgroundColor = "pink"
     }
     else{
        alert("nikal yaha se")
     }

}

function box_color(){
    let ok1=document.querySelector("#input").value.toLowerCase()
    let ok2=document.querySelector(".main")
    if(ok1==="red"){
         ok2.style.backgroundColor="red"
    }
    else if (ok1 === "blue"){
          ok2.style.backgroundColor = "blue"
     }
     else if (ok1 === "black"){
          ok2.style.backgroundColor = "black"
     }
     else if (ok1 === "green"){
       ok2.style.backgroundColor = "green"
     }
     else if (ok1 === "yellow"){
          ok2.style.backgroundColor = "yellow"
     }
     else if (ok1 === "pink"){
         ok2.style.backgroundColor = "pink"
     }
     else{
        alert("nikal yaha se")
     }
}