const button=document.querySelectorAll(".btn");
const msg=document.querySelector(".h2");
const new_game=document.querySelector(".new");
let turn=true;

let winpatt=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];
 
button.forEach((btn)=>{
   btn.addEventListener("click",()=>{
    if(turn==true){
        btn.innerText='X';
        btn.style.color='#38bdf8';
        turn=false;
    }
    else
    {
        btn.innerText='O';
        btn.style.color='#fbbf24';
        turn=true;
    }
    btn.disabled=true;
    checkwinner();
   });
});

const checkwinner=()=>{
    for(patt of winpatt)
    {
        let p1=button[patt[0]].innerText;
        let p2=button[patt[1]].innerText;
        let p3=button[patt[2]].innerText;

        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3){
                msg.innerHTML=`Congratulation!! Winner is ${p1}`;
                for(let btn of button){
                    btn.disabled=true;
                }
            }

        }

    }

};

new_game.addEventListener("click",()=>{
    for(let btn of button){
        turn=true;
        btn.disabled=false;
        btn.innerText="";
        msg.innerHTML="Welcome!!";

}
});



    


