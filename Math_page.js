var player1_name = localStorage.getItem("playername1");
var player2_name = localStorage.getItem("playername2");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = "<h4>" + player1_name + ":</h4>";
document.getElementById("player2name").innerHTML = "<h4>" + player2_name + ":</h4>";

document.getElementById("player1score").innerHTML = "<h4>" + player1score + "</h4>";
document.getElementById("player2score").innerHTML = "<h4>" + player2score + "</h4>";

document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;

function send() {
    var num1=Number(document.getElementById("word").value);
    var num2=Number(document.getElementById("word2").value);
     result=num1 * num2 
    /*how to bring display*/

    var questionword="<h4 id='word_display'> Q. "+ num1 +"x" + num2 +"</h4>";
    var inputbox="<br>Answer: <input type='text' id='input_check_box'>";
    var checkbutton="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    var row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    console.log(row);

    document.getElementById("word").value = "";
    document.getElementById("word2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check() {
     get_answer = document.getElementById("input_check_box").value;
     answer = get_answer.toLowerCase();
    console.log(answer);

    if (answer == result) {
        console.log("yes");
        if (answer_turn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = "<h4>" + player1score + "</h4>";
            console.log("player1score" + player1score);

        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = "<h4>" + player2score + "</h4>";
            console.log("player2score" + player2score);
        }

    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn -" + player2_name;
        console.log(question_turn);
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn -" + player1_name;
        console.log(question_turn);

    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn -" + player2_name;
        console.log(answer_turn);
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn -" + player1_name;
        console.log(answer_turn);

    }
}