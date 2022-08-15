player_1_name= localStorage.getItem("player_1name");
player_2_name= localStorage.getItem("player_2name");

player1_score= 0;
player2_score= 0;

document.getElementById("player_1name").innerHTML= player_1_name + ":";
document.getElementById("player_2name").innerHTML= player_2_name + ":";

document.getElementById("player_1score").innerHTML= player1_score
document.getElementById("player_2score").innerHTML= player2_score

document.getElementById("player_q").innerHTML= "Question turn: " + player_2_name
document.getElementById("player_ans").innerHTML="Answer turn: " + player_1_name

function send(){
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase()

    second_letter= word.charAt(1)

    mid_letter_Index= Math.floor(word.length/2)
    mid_letter= word.charAt(mid_letter_Index)

    last_letter_Index= word.length - 1
    last_letter= word.charAt(last_letter_Index)

    remove_s_l= word.replace(second_letter,"_")
    remove_m_l= remove_s_l.replace(mid_letter,"_")
    remove_l_l= remove_m_l.replace(last_letter,"_")

    q = "<h4 id='word_display'> Q. " + remove_l_l + "</h4>"
    a = "<br> Ans. <input type='text' id='input_check_box'> "
    button = "<br> <br> <button class='btn btn-info' onclick='check()'> check </button>"
    row= q + a + button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value= ""

}

q_turn= "player_2"
ans_turn= "player_1"

function check(){

    get_ans= document.getElementById("input_check_box").value
    answer= get_ans.toLowerCase()
    if(answer==word){
        if(ans_turn=="player_1"){
            player1_score= player1_score+1
            document.getElementById("player_1score").innerHTML= player1_score


        }
        else{
            player2_score= player2_score+1
            document.getElementById("player_2score").innerHTML= player2_score
        }
    }

    if(q_turn=="player_1"){
        q_turn= "player_2"
        document.getElementById("player_q").innerHTML= "Question turn-" + player_2_name
    }
    else{
        q_turn="player_1"
        document.getElementById("player_q").innerHTML= "Question turn-" + player_1_name
    }

    if(ans_turn=="player_1"){
        ans_turn="player_2"
        document.getElementById("player_ans").innerHTML= "Answer turn-" + player_2_name
    }
    else{
        ans_turn="player_1"
        document.getElementById("player_ans").innerHTML="Answer turn-" + player_1_name
    }

    document.getElementById("output").innerHTML= ""
}