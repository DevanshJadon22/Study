let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#message");
const userscorepara=document.querySelector("#your-score");
const comp_scorepara=document.querySelector("#computer-score")

const getcompchoice=()=>{
    //rock ,paper,scisossors.
    const options=["Rock","Paper","Scissors"];
    //in js we can not generate random string from a given pair of strings so we have to store the strings ie is 'rock','paper' and 'scissors' in an array and we can acess strings randomly by generating random numbers in the range from 0 to 2 acting as index by multiplying Math.ramdom()*3;
    //using math.floor() will return the lower int for an given decimal number.
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawgame=()=>{
    console.log("the game was drawn. ");
    msg.innerText="Game was Drawn. Play Again ";
    msg.style.backgroundColor = "#081b31";
}

const showwinner=(userwin,userchoice,comp_choice)=>{
    if(userwin){
        user_score++;
        userscorepara.innerText=user_score;
        console.log("You win ! ");
        msg.innerText="You Win !."+`Your ${userchoice} beats ${comp_choice} .`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp_score++;
        comp_scorepara.innerText=comp_score;
        console.log("You loose !.");
        msg.innerText="You Loose !." +`${comp_choice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame=(userchoice)=>{
    console.log("user's choice = ",userchoice);
    //generate computer's choice.
    const comp_choice=getcompchoice();
    console.log("Computer's choice = ",comp_choice);

    if(userchoice===comp_choice){
        //draw condition
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="Rock"){
            //computer can have either paper or scissors.
            userwin=comp_choice==="Paper"?false:true;
        }
        else if(userchoice==="Paper"){
            //computer can choice either rock or scissors.
            userwin=comp_choice==="Scissors"?false:true;
        }
        else{
            //computer can have either paper or rock
            userwin=comp_choice==="Rock"?false:true;
        }
        showwinner(userwin,userchoice,comp_choice);
    }
    
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked. ",userchoice );
        playgame(userchoice);
    })
})