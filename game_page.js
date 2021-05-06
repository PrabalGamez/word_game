player1name=localStorage.getItem("Player 1=");
player2name=localStorage.getItem("Player 2=");
player1score=0;
player2score=0;

document.getElementById("plr1nme").innerHTML=player1name+" : ";
document.getElementById("plr2nme").innerHTML=player2name+" : ";
document.getElementById("plr1scr").innerHTML=player1score;
document.getElementById("plr2scr").innerHTML=player2score;
document.getElementById("plr_quston").innerHTML=player1name;
document.getElementById("plr_anser").innerHTML=player2name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("Word in lowercase="+word);

    char1=word.charAt(1);
    console.log(char1);
    length_divide_by_2=Math.floor(word.length/2);

    char2=word.charAt(length_divide_by_2);
    console.log(char2);

    length_minus_1=word.length-1;
    char3=word.charAt(length_minus_1);
    console.log(char3);

    remove_char1=word.replace(char1,"_");
    remove_char2=remove_char1.replace(char2,"_");
    remove_char3=remove_char2.replace(char3,"_");
    console.log(remove_char3);
    
    question_word="<h4 id='word_display'>Q."+remove_char3+"</h4>";
    input_box="<br>Answer : <input type='text' id='entered_answer'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    getanswer = document.getElementById("entered_answer").value;
    answer = getanswer.toLowerCase();
    console.log("answer in lowercase = "+ answer);
    if(answer == word){
        if(answer_turn == "player1"){
         player1score = player1score + 1;
         document.getElementById("plr1scr").innerHTML = player1score;
         console.log("player 1's score is = "+player1score);
        }
        else{
            player2score = player2score + 1;
            document.getElementById("plr2scr").innerHTML = player2score;
            console.log("player 2's score is = "+player2score);
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("plr_quston").innerHTML=player2name;
    }
    else{
        question_turn = "player1";
        document.getElementById("plr_quston").innerHTML=player1name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("plr_anser").innerHTML=player2name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("plr_anser").innerHTML=player1name;
    }
    document.getElementById("output").innerHTML="";
}