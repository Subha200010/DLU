let yes=document.getElementById("yes");
let no=document.getElementById("no");
let mssg=document.getElementById("mssg")
let btn=document.getElementsByClassName("btn")
let btnPu=Array.from(btn);


yes.addEventListener("click",()=>{
   
   mssg.style.display="block"
  
   btnPu.forEach(element => {
      element.style.display="none"
   });
  mssg.addEventListener("click",()=>{
     mssg.style.display="none"
     mssg.style.cursor="pointer"
     btnPu.forEach((e) => {
        e.style.display="inline"
      

     });
  })
   
    
})
no.addEventListener("mouseover",()=>{
    no.style.position="absolute"
    no.style.top=Math.round(Math.random()*40)+"vh";
    no.style.right=Math.round(Math.random()*40)+"vw";
    // no.style.left=Math.round(Math.random()*40)+"vw";
    // no.style.bottom=Math.round(Math.random()*40)+"vh"
})
// window.alert=(messege,timeout=null)=>{
//     const alert=document.createElement('div')
//     alert.classList.add("alert")
//     alert.setAttribute("style",`
//     position: fixed
//     top: 100px
//     left: 50%
//     padding: 20px
//     border-radius: 10px;
//     box-shadow: 0px 10px 5px 0 #00000044
//     `)
//     alert.innerText=messege
//     document.body.appendChild(alert)
// }
// let c;
// // console.log(c);
// if(c==undefined){ 
// yes.addEventListener("mouseover",()=>{
//     alert("Jaldi click karo yrrr")
//     c++
//     // console.log(c);
//  })
// }else{
//     yes.addEventListener("click",()=>{
   
//         mssg.style.display="block"
       
//         btnPu.forEach(element => {
//            element.style.display="none"
//         });
// }
// }

