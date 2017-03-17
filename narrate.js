//-------------------------------------------------
// CHOOSE YOUR OWN ADVENTURE
//-------------------------------------------------

//from school
function go_desert(){location.href = "desert.html"};
function go_test(){location.href = "test.html"};

//from desert
function go_whiskey(){location.href = "whiskey.html"};
function go_war(){location.href = "war.html"};
function go_scorpion(){location.href = "scorpion.html"};
function go_mountain(){location.href = "mountain.html"};

//from minigames
function go_vegas(stat, laid){
    bake("laid",laid); 
    location.href = "vegas.html";
    bake(stat,parseInt(eat(stat)) + 5);};

//from vegas
function go_casino(){location.href = "casino.html"};
function go_chapel(){location.href = "chapel.html"};
function get_(thing){
    var do_it;
    switch (thing){
        case 'food':
            do_it = confirm("Buy food for 30$, will keep you awake longer and raise your tolerance.")
            if(do_it){bake("money",parseInt(eat("money")) - 30);
                bake("sleep",parseInt(eat("sleep")) + 5);
                bake("tolerance",parseInt(eat("tolerance")) + 5);
                $("#food").hide(); $("#hotel").hide();
            }; do_it = false; break;
        case 'booze':
            do_it = confirm("Much cheaper than booze from the bar.");
            if(do_it){
                bake("booze",parseInt(eat("booze")) + 3);
                $("#booze").hide(); $("#hotel").hide();
            }; do_it = false; break;
        case 'hotel':
            do_it = confirm("Saves you 100$ on a hotel room later, but leaves no time for other stops.")
            if(do_it){ bake("money",parseInt(eat("money")) - 100);
                bake("hotel",true); $("#hotel").hide(); $("#food").hide(); 
                $("#hooker").hide(); $("#booze").hide(); $("#married").hide();
            }; do_it = false; break;
        case 'hooker':
            do_it = confirm('You "get lucky", get it? Also raises your charisma. Costs 75$.');
            if(do_it){bake("money",parseInt(eat("money")) - 75);
                bake("luck",parseInt(eat("luck")) + 5);
                bake("charisma",parseInt(eat("charisma")) + 5);
                $("#hooker").hide(); $("#hotel").hide(); $("#married").hide();
};};};

//-----------------------------------------------------------------
// Casino Games
//-----------------------------------------------------------------
function atm(){
    var balance = parseInt(eat("atm")); var noleave = false;
    var withdraw = parseInt(prompt("Your current balance is: $" + balance + ", How much would you like to withdraw?"));
    if(withdraw > 0 && withdraw <= balance){
        bake("atm", balance - withdraw); bake("money", parseInt(eat("money")) + withdraw);
        noleave = confirm("Withdrawal successful, money converted automatically into chips.\nYour balance is: $" + eat("atm") + ". Continue using ATM?")
    } else {noleave = confirm("Not a valid amount to withdraw. Continue using ATM?")};
    if(noleave){atm();} else {location.href = casino.html};
};

//------------------BAR--------------------------------------------
function bar(){location.href = "bar.html"};
function drink(bev){
    var booze = parseInt(eat("booze"));
    if (booze > 0){
        if (confirm("You remember you have " + booze + " shots in your flask, do you want a swig of that instead?")) {
            bake("charisma",parseInt(eat("charisma")) + 1); bake("tolerance",parseInt(eat("charisma")) - 1);
            booze--; bake("booze",booze); location.href = bar.html;};}
/*----- make sure the below doesn't run if the above location changes  -----*/    
    switch (bev){
        case "whiskey":
            bake("charisma",parseInt(eat("charisma")) + 2);
            bake("tolerance",parseInt(eat("tolerance")) - 1);
            bake("sleep",parseInt(eat("sleep")) + 1);
            bake("money",parseInt(eat("money")) - 5);
            break;
        case "beer":
            bake("charisma",parseInt(eat("charisma")) + 1);
            bake("sleep",parseInt(eat("sleep")) - 1);
            bake("money",parseInt(eat("money")) - 2);
            break;
        case "draft":
            bake("charisma",parseInt(eat("charisma")) + 1);
            bake("luck",parseInt(eat("luck")) + 1);
            bake("tolerance",parseInt(eat("tolerance")) - 1);
            bake("money",parseInt(eat("money")) - 3);
            break;
        case "white":
            bake("sleep",parseInt(eat("sleep")) - 1);
            bake("luck",parseInt(eat("luck")) + 1);
            bake("tolerance",parseInt(eat("tolerance")) - 1);
            bake("money",parseInt(eat("money")) - 4);
            break;
        case "red":
            bake("charisma",parseInt(eat("charisma")) + 1);
            bake("sleep",parseInt(eat("sleep")) + 1);
            bake("tolerance",parseInt(eat("tolerance")) - 1);
            bake("money",parseInt(eat("money")) - 6);
            break;
        case "gin":
            bake("charisma",parseInt(eat("charisma")) + 1);
            bake("luck",parseInt(eat("luck")) + 3);
            bake("tolerance",parseInt(eat("tolerance")) - 1);
            bake("money",parseInt(eat("money")) - 6);
            break;
        case "tequila":
            bake("charisma",parseInt(eat("charisma")) + 3);
            bake("luck",parseInt(eat("luck")) + 1);
            bake("tolerance",parseInt(eat("tolerance")) - 2);
            bake("money",parseInt(eat("money")) - 5);
            break;
        case "jaeger":
            bake("charisma",parseInt(eat("charisma")) + 3);
            bake("luck",parseInt(eat("luck")) + 1);
            bake("sleep",parseInt(eat("sleep")) - 1);
            bake("tolerance",parseInt(eat("tolerance")) - 2);
            bake("money",parseInt(eat("money")) - 4);
            break;
    };
    if(confirm("Would you like to order another drink?")){
        location.href = "bar.html"} else {location.href = "casino.html"};
};

//--------------------SLOTS----------------------
function slots(){location.href = "slots.html"};
function slot_plus(){$("#bet").value += 5; bake("money",parseInt(eat("money")) - 5); personalize();};
function slot_fifty(){$("#bet").value += 50; bake("money",parseInt(eat("money")) - 50); personalize();};
function slot_min(){$("#bet").value -= 5; bake("money",parseInt(eat("money")) + 5); personalize();};
function slot_all(){bake("money",parseInt(eat("money")) + $("#bet").value); $("#bet").value = 0; personalize();};
var slot_icons = ["7", "O", "X", "T", "Z", "W", "L", "~"]; var timers = [[], [], []]; var slot_speed = 300; //ms of visibility per icon
function spin_slots(){
    for (var j = 0; j < timers.length; j++){
        for (var i = 0; i < slot_icons.length; i++){
            setTimeout(function(){
                timers[j][i] = setInterval(show_slot(j+1,i), slot_speed*slot_icons.length);
                },slot_speed*i);
};};};
function show_slot(slot,icon){$("#slot" + slot).value = slot_icons[icon];};
function stop_slots(){
    for (var j = 0; j < timers.length; j++){
        setTimeout(function(){
            for (var i = 0; i < slot_icons.length; i++){ //I hope this leaves one showing lol
                clearInterval(timers[j][i]);
            }; // slot will spin at most twice before stopping, next slot waits minimum of one more revolution
        }, Math.floor(Math.random() * slot_speed * 2 * slot_icons.length)+(slot_speed * slot_icons.length * 3 * j));
};};

// I think these warrant their own javascript files lmao
// Really this is a list of the ones I havent finished xD
function roulette(){location.href = "roulette.html"}; // Should be v similar to slots if random instead of calculating trajectory
function blackjack(){location.href = "blackjack.html"}; //half done. Finish writing AI and holy moly a whole lot
function darts(){location.href = "darts.html"}; // no idea how I'm gonna do this. Moving div? Havent decided on the mechanics even



//-------------------------------------------------------------------
// Content Display Tools
//------------------------------------------------------------------
$("document").ready(function(){$(".narrative").css('opacity','0.0')});

function narrate() {
    $(".stats").animate({height: 0}, 3000)
    $(".narrative").each(
        function (i) {
            $( this ).delay(3000*i)
            .animate({opacity: 1.0}, 1500);
    });
};

function personalize() {
    $("p").each(
        function() {
            var line = $(this).html();
            while (line.indexOf("$n") >= 0){
                line = line.replace("$n",eat("name"));
            };
            while (line.indexOf("$1") >= 0){
                line = line.replace("$1",eat("f1"));
            };
            while (line.indexOf("$2") >= 0){
                line = line.replace("$2",eat("f2"))
            };
            while (line.indexOf("$3") >= 0){
                line = line.replace("$3",eat("f3"))
            };
            while (line.indexOf("$4") >= 0){
                line = line.replace("$4",eat("f4"))
            };
            while (line.indexOf("$l") >= 0){
                line = line.replace("$l",eat("luck"))
            };
            while (line.indexOf("$c") >= 0){
                line = line.replace("$c",eat("charisma"))
            };
            while (line.indexOf("$t") >= 0){
                line = line.replace("$t",eat("tolerance"))
            };
            while (line.indexOf("$s") >= 0){
                line = line.replace("$s",eat("sleep"))
            };
            while (line.indexOf("$m") >= 0){
                line = line.replace("$m",eat("money"))
            };
            $(this).html(line);
    });
};

function run_narrative(){
    personalize();
    narrate();
};



