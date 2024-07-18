const ans={
    equation:[],
    answ:[]
}



let screenbody= document.querySelector("#screenbody");
let btns = document.querySelectorAll(".numb");
let stri = "";
let screen = document.querySelector("#screen");

Array.from(btns).forEach((num) => {
    num.addEventListener("click", (e) => {
        let sc= parseFloat(window.getComputedStyle(screen,null).getPropertyValue('font-size'));
        if(sc>=20){
        screen.style.fontSize = sc +(-1.6) +"px"; }
        
        console.log(e.target);
        if (e.target.innerHTML == "=") {
            ans.equation.push(stri);
            console.log(ans.equation);
            stri = eval(stri);
            ans.answ.push(stri);
            console.log(ans.answ);
            document.querySelector(".y").innerHTML=ans.equation; 
            document.querySelector(".yz").innerHTML=ans.answ; 
    
            screen.innerText = stri;
        }
        else if (e.target.innerHTML == "C") {
             stri="";
            screen.innerText = "0";
        }
        else {
            stri = stri + e.target.innerHTML;
            
            screen.innerText = stri;
        }
    })
})


let on= document.querySelector("#history");
num=1;
on.addEventListener("click", ()=>{
    ams=document.querySelector("#ans"); 
    
    if( num==1){
        ams.style.display= "flex"; 
        num=0;
    }
    else if(num==0){
        ams.style.display= "none"; 
        num=1;

    }      
})

