var q1; var q2; var q3; var qn = 1;
var game_timer5; var game_timer4; var game_timer3; 
var game_timer2; var game_timer1; var game_timer0; 
var a; var b; var c; var d;

$("document").ready(function(){$(".in_game").hide()});
$("document").ready(function(){$(".score").hide()});

function start_test() {
    $(".score").hide();
    qn = 0; document.getElementById("total").value = 0;
    new_question();
    console.log("oh man, we chose a question~")
    $(".in_game").show();
    start_timer();
};

function new_question() {
    q1 = Math.ceil(Math.random() * 1000); document.getElementById("q1").value = q1;
    q3 = Math.ceil(Math.random() * 1000); document.getElementById("q3").value = q3;
    
    console.log("numbers chosen and displayed")
    var operators = [{
        sign: "plus",
        method: function(a,b){ return a + b; }
    },{
        sign: "minus",
        method: function(a,b){ return a - b; }
    },{
        sign: "times",
        method: function(a,b){ return a * b; }
    },{
        sign: "divided by",
        method: function(a,b){ return Math.floor(a / b); }
    }];
    
    op = Math.floor(Math.random() * 4);
    ans = Math.ceil(Math.random() * 4);
    console.log("operator and answer chosen")
    q2 = operators[op];
    document.getElementById("q2").value = q2.sign;
    console.log("operator set and displayed")
    switch (ans) {
        case 1: // a
            a = true; b = false; c = false; d = false;
            switch (op) {
                case 0: // + 
                    $("#a").html("a: " + q2.method(q1, q3));
                    $("#b").html("b: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    break
                case 1: // -
                    $("#a").html("a: " + q2.method(q1, q3));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#c").html("c: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    break
                case 2: // *
                    $("#a").html("a: " + q2.method(q1, q3));
                    $("#b").html("b: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10000)));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10000)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 500)));
                    break
                case 3: // / 
                    $("#a").html("a: " + q2.method(q1, q3));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10)));
                    $("#c").html("c: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 2)));
                    break };
            break
        case 2: // b
            a = false; b = true; c = false; d = false;
            switch (op) {
                case 0: // + 
                    $("#a").html("a: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#b").html("b: " + q2.method(q1, q3));
                    $("#c").html("c: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    break
                case 1: // -
                    $("#a").html("a: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    $("#b").html("b: " + q2.method(q1, q3));
                    $("#c").html("c: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    break
                case 2: // *
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10000)));
                    $("#b").html("b: " + q2.method(q1, q3));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10000)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 500)));
                    break
                case 3: // / 
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10)));
                    $("#b").html("b: " + q2.method(q1, q3));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10)));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 2)));
                    break };
            break
        case 3: // c
            a = false; b = false; c = true; d = false;
            switch (op) {
                case 0: // + 
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#c").html("c: " + q2.method(q1, q3));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    break
                case 1: // -
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#c").html("c: " + q2.method(q1, q3));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    break
                case 2: // *
                    $("#a").html("a: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 500)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10000)));
                    $("#c").html("c: " + q2.method(q1, q3));
                    $("#d").html("d: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10000)));
                    break
                case 3: // / 
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10)));
                    $("#c").html("c: " + q2.method(q1, q3));
                    $("#d").html("d: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 2)));
                    break };
            break
        case 4: // d
            a = false; b = false; c = false; d = true;
            switch (op) {
                case 0: // + 
                    $("#a").html("a: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    $("#b").html("b: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#d").html("d: " + q2.method(q1, q3));
                    break
                case 1: // -
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 100)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 100)));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 50)));
                    $("#d").html("d: " + q2.method(q1, q3));
                    break
                case 2: // *
                    $("#a").html("a: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10000)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10000)));
                    $("#c").html("c: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 500)));
                    $("#d").html("d: " + q2.method(q1, q3));
                    break
                case 3: // / 
                    $("#a").html("a: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 2)));
                    $("#b").html("b: " + (q2.method(q1, q3) - Math.ceil(Math.random() * 10)));
                    $("#c").html("c: " + (q2.method(q1, q3) + Math.ceil(Math.random() * 10)));
                    $("#d").html("d: " + q2.method(q1, q3));
                    break };
            break
    };
};

function answera() {
    console.log("answer a attempted");
    if(a == true) {
            document.getElementById("total").value = parseInt(document.getElementById("total").value) + 1;
        new_question(); start_timer();
    } else {
        new_question(); start_timer();
    };
};
function answerb() {
    console.log("answer b attempted");
    if(b == true) {
            document.getElementById("total").value = parseInt(document.getElementById("total").value) + 1;
        new_question(); start_timer();
    } else {
        new_question(); start_timer();
    };
};
function answerc() {
    console.log("answer c attempted");
    if(c == true) {
            document.getElementById("total").value = parseInt(document.getElementById("total").value) + 1;
        new_question(); start_timer();
    } else {
        new_question(); start_timer();
    };
};
function answerd() {
    console.log("answer d attempted");
    if(d == true) {
        document.getElementById("total").value = parseInt(document.getElementById("total").value) + 1;
        new_question(); start_timer();
    } else {
        new_question(); start_timer();
    };
};

function start_timer() {
    qn++; if (qn < 40) {
        console.log("ran start_timer();");
        clearTimeout(game_timer5); clearTimeout(game_timer4); clearTimeout(game_timer3);
        clearTimeout(game_timer2); clearTimeout(game_timer1); clearTimeout(game_timer0);
        console.log("removed previous timer, starting new one.");
        game_timer5 = setTimeout(function(){document.getElementById("timer").value = 5}, 0);
        game_timer4 = setTimeout(function(){document.getElementById("timer").value = 4}, 1000);
        game_timer3 = setTimeout(function(){document.getElementById("timer").value = 3}, 2000);
        game_timer2 = setTimeout(function(){document.getElementById("timer").value = 2}, 3000);
        game_timer1 = setTimeout(function(){document.getElementById("timer").value = 1}, 4000);
        game_timer0 = setTimeout(function(){new_question();start_timer();}, 5000);
        console.log("timers set");
    } else {
        $("#score").html("Final Score:" + document.getElementById("total").value + "/" + qn);
        $("#start").html("Take Test Again"); $(".in_game").hide(); $(".score").show(); 
    }
};

function go_lose(){location.href = "lose.html"}
