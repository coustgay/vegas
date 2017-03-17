function update_score(){
    console.log("money: " + eat("money"));
    result(parseInt(eat("ending")));
    run_narrative();
}

function finish(){
    if (parseInt(eat("rounds")) > 50){ //casino closes
        bake("ending", 0); location.href = "ending.html";
    };
    if (parseInt(eat("money")) <= 0){
        bake("ending", 5);location.href = "ending.html";
    };
    if (parseInt(eat("luck")) > 25){ //arrested for counting cards
        bake("ending", 1);location.href = "ending.html";
    }
    if (parseInt(eat("tolerance")) < 1){
        bake("ending", 2);location.href = "ending.html";
    }
    if (parseInt(eat("charisma")) > 20 && parseInt(eat("married")) > 0){
        bake("ending", 3);location.href = "ending.html";
    }
    if (parseInt(eat("sleep")) < 1){
        bake("ending", 4);location.href = "ending.html";
    };
};

function result(finished){
    switch (finished){
        case 0:
            $("#survive").html("As it gets later and later, your friends slowly drop out of the casino and head to the hotel room. Eventually, security comes to you and asks you to leave, because the casino is closing.");
            $("#result").html($("#result").html() + calc_money() + "$!");
            break;
        case 1:
            $("#survive").html("You hear a commotion coming towards you. You turn from the table and see some security guards. They take you out back and beat you up asking why you were counting cards.");
            $("#result").html("Eventually, after a lot of punching, they release you with a tiny portion of your earnings, but you're banned from that casino forever. You come out with " + (calc_money() * 0.45) + "$.");
            $("#congrats").html("Hooray! You (barely) survived Vegas! Great Job...?")
            break;
        case 2:
            $("#survive").html("You lose track of your drinks. You start to feel really drunk. You suddenly jolt awake the next morning, look around, and realize you're in jail.");
            $("#result").html("It turns out you were playing darts and you tagged an elderly millionaire in the jugular. He did not survive. You might have to postpone your education a bit. Was it worth it?");
            $("#congrats").html("Woooo you got arrested for manslaughter! That's one for the record books, right?")
            break;
        case 3:
            $("#survive").html("Without realizing it, you get into a conversation with a prostitute who kisses you. Your spouse sees this and screams, causing many people to look over, then charges at you with a knife.");
            $("#result").html("Your memory fades in and out as you are transported to a hospital. You feel them put the anesthesia mask on your face. When you awake, you look around at your spouse in handcuffs, three police officers, and a man in a suit.");
            $("#congrats").html("<button type='button' onclick='press_charges(1);'>Press Charges</button><button type='button' onclick='press_charges(0);'>Forgive $1</button>");
            personalize(); break;
        case 4:
            $("#survive").html("You feel yourself getting drowzy, but you push to keep going. Eventually, you pass out on the roulette table. Your friends (or so they tell you) cashed out your meager winnings, even though you swore you were doing better before you passed out.");
            $("#result").html($("#result").html() + (calc_money() * 0.2) + "$..."); break;
        case 5:
            $("#survive").html("WOW! Turns out, you don't have any money left! Thats unfortunate. Your friends pity your loss and pay for the hotel room, escort you upstairs to sleep, then return to keep gambling.");
            $("#result").html("You wake up around the same time as all of your friends, who begin chatting about their winnings. You feign a smile, but you feel pretty embarrased that you lost all of your money.")
    };
};

function press_charges(do_it){
    if (do_it){
        $("#congrats").html("Your spouse is escorted to jail. You pursue a lawsuit that clouds the rest of your semester, and your friends at school avoid you. Eventually, the judge decides that it was a crime of passion, and releases your spouse, giving each of you half of your winnings: " + (calc_money()/2) + "$.");
    } else {
        $("#congrats").html("You affirm your love and forgiveness without hesitation, and the officers acknowledge it. They release $1's hands, who rushes to hug you in the hospital bed. It hurts, but it makes you feel even better to be in your spouse's arms. You are released that afternoon to thunderous applause from your friends, as well as " + calc_money() + "$." );
    }; personalize();
};

function calc_money(){
    /* DEPRECATED
    var luck = parseInt(eat("luck"));
    var char = parseInt(eat("charisma")); var tol = parseInt(eat("tolerance"));
    var cash = parseInt(eat("money"));
    console.log("luck: " + luck + " charisma: " + char + " tolerance: " + tol);
    return (cash * (0.4 * tol + 0.3 * char + 0.7 * luck) + (40 * parseInt(eat("booze")))).toFixed(2);*/
    
    return parseInt(eat("money"));
};


function death(cond){
    switch (cond) {
        case 1:
            bake("tolerance", 10); bake("charisma", 10); bake("sleep",8);
            bake("luck",25); bake("money",10); location.href = "ending.html";
            break;
        case 2:
            bake("luck", 10); bake("charisma", 10); bake("sleep",8);
            bake("tolerance",5); bake("money",10); location.href = "ending.html";
            break;
        case 3:
            bake("luck", 10); bake("tolerance", 10); bake("sleep",8);
            bake("charisma",25); bake("money",10); bake("married",5); location.href = "ending.html";
            break;
        case 4:
            bake("luck", 10); bake("charisma", 10); bake("tolerance",12);
            bake("sleep",3); bake("money",10); location.href = "ending.html";
            break;
        case 5:
            bake("money",-3); bake("luck", 10); bake("charisma", 10); bake("tolerance",12);
            bake("sleep",10); location.href = "ending.html"
        default:
            break;
    };
};
