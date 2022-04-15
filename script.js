const input=document.querySelector(".textt")
const ul=document.querySelector("ul")
const addBtn=document.querySelector(".dobavit")
const arrow=document.querySelector(".arrow")
const elifba=document.querySelector(".elifba")
const metnisharesi = document.querySelector(".ishare")
let todos

arrow.addEventListener("mouseover",(e)=>{
e.target.src="Group73.svg"
}
)
arrow.addEventListener("mouseover",(e)=>{
    if(e.target.getAttribute("src")=="Group90.svg"){
           e.target.setAttribute("src","Group91.png")
       }
}
)


arrow.addEventListener("mouseout",(e)=>{
    if(e.target.getAttribute("src")=="Group91.png"){
           e.target.setAttribute("src","Group90.svg")
       }
}
)


 arrow.addEventListener("mouseout",(e)=>{
     e.target.src="Group74.svg";
    
     })
    
arrow.addEventListener("click",(e)=>{
    if(e.target.getAttribute("src")=="Group73.svg"){
            todos.sort();
   let space=""
   todos.forEach((item,index)=>{
       space+=`
       <li>
       <p>${item}</p><button class="daire" onclick="deleteFunc(${index})"> <img class = " metnisharesi" src="Group52.svg" alt=""></button>
      </li>  
       `
      
   })
    ul.innerHTML=space
    e.target.setAttribute("src","Group91.png")
    }
    else if(e.target.getAttribute("src")=="Group91.png"){
        todos.sort().reverse();
        let space=""
        todos.forEach((item,index)=>{
            space+=`
            <li>
            <p>${item}</p><button class="daire" onclick="deleteFunc(${index})"> <img class = " metnisharesi" src="Group52.svg" alt=""></button>
           </li>  
            `
           
        })
         ul.innerHTML=space
         e.target.setAttribute("src","Group73.svg")
    }
})
let storage=localStorage.getItem("todos")
if (storage===null){
    todos=[]
}
else{
    todos=JSON.parse(localStorage.getItem("todos"))
    let space=""
    todos.forEach((item,index)=>{
        space+=`
        <li>
        <p>${item}</p><button class="daire" onclick="deleteFunc(${index})"> <img class = " metnisharesi" src="Group52.svg" alt=""></button>
       </li>  
        `
    })
        ul.innerHTML=space
}











addBtn.addEventListener("click",()=>{
    todos.push(input.value)
   storage=localStorage.setItem("todos",JSON.stringify(todos))
    let space=""
    todos.forEach((item,index)=>{
        space+=`
        <li>
        <p>${item}</p><button class="daire" onclick="deleteFunc(${index})"> <img class = " metnisharesi" src="Group52.svg" alt=""></button>
       </li>  
        `
        ul.innerHTML=space
    })
    input.value=""

})


function deleteFunc(index) {
    todos.splice(index,1)
    let space=""
    todos.forEach((item,index)=>{
        space+=`
        <li>
        <p>${item}</p><button class="daire" onclick="deleteFunc(${index})"> <img class = " metnisharesi" src="Group52.svg" alt=""></button>
       </li>  
        `
        
    })
    ul.innerHTML=space
}



