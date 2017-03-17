var friend = [
    "Well, I will be the judge of that, $n. Let's see here. *swigs*<br>WHOOWEEE that is some powerful stuff! I'm pretty sure it's whiskey, but we need more data to be sure.",
    "You may be right, but let's see if more experiments continue to verify that theory *sip*<br>After some careful consideration and objective observation, I would put this 72.3% on the 'is whiskey' side",
    "I see you, $n, I see you. However, I definitely need to help gather some more data *swig*<br>Hmmmm I get where the hypothesis is coming from, but I'm still pretty skeptical.",
    "Your statistical analysis is sound, but I think a little more data may skew the results.*swig*<br>Ahhh that's definitely tasty, but I'm pretty sure it could potentially not be whiskey. Check it again."
             ];
var you = ["You put the bottle to your mouth and turn your head back. Slowly, a cold yet burning fluid enters your throat. You cringe, but you feel an ethereal tranquility fall over you.",
          "You grab the bottle and take a deep swig. You taste a light, nutty flavor, masked by a deep, smoky aroma. Your tounge tingles with a deep, painful throb of heat. The sensation makes you reconsider your existence.",
           "$1 hands you the bottle, sporting a knowing grin. You take it, feeling your trust in $1 growing more every moment. You hide an involuntary smile with the bottle as you take a drink, feeling your self-control wane.",
          ];
var yes = ["Well, it certainly tastes like whiskey",
           "I project the odds of it being whiskey to 82%",
           "While I'm no whiskey connoisseur, I still vote yes"
          ];
var no = ["I've had a lot of whiskey in my day, and this is not it",
          "While it could be whiskey, I don't know if I would bet my life on it",
          "I probably shouldn't commit to an unsure gamble right before Vegas"
         ];


var yesvotes = 0;
var novotes = 0;

function votey(){
    
    console.log(yesvotes + "~" + novotes);
    new_round();update_score(1);
    console.log(yesvotes + "~" + novotes);
};

function voten(){
    
    console.log(yesvotes + "~" + novotes);
    new_round();update_score(0);
    console.log(yesvotes + "~" + novotes);
};

function update_score(vote) {
    if(vote>0){yesvotes+=1}else{novotes+=1};
    var yesdata="whiskey: " + yesvotes;
    var nodata="unclear: " + novotes;
    $("#yesstat").html(yesdata); 
    $("#nostat").html(nodata);
}

function new_round() {
    if((yesvotes + novotes) > 10 + parseInt(eat("tolerance"))){
        console.log("shhhhh");
        $("#friend").html('$1 looks at the bottle, holds it upside down, and watches a single drop fall out onto the sand. $1 says "Thanks, $n, for this. It has been really fun"');
        $("#you").html('$1 stares into your eyes for a few moments, with a questioning look, then says, "$n, I really like hanging out with you."<br><br> $1 leans toward you with eyes closed.')
        $("#kiss").html($("#kiss").html().replace("$1",eat("f1")));
        personalize();
        $("#choice").hide(); $(".win").show();
        $("#vegas").hide(); $("#yesstat").hide(); $("#nostat").hide();
        console.log("where are you going?");
    } else {
        var friend_ind = Math.floor(Math.random()*friend.length);
        if (friend_ind < friend.length/2){yesvotes+=1}else{novotes+=1};
        $("#friend").html(friend[friend_ind]);
        $("#you").html(you[Math.floor(Math.random()*you.length)]);
        $("#yes").html(yes[Math.floor(Math.random()*yes.length)]);
        $("#no").html(no[Math.floor(Math.random()*no.length)]);
        console.log("~"+eat("tolerance")+10);
        personalize(); console.log("names are in");
    };
};

function go_vegas(laid){
    location.href = "vegas.html";
    bake("laid",laid);
    bake("charisma",parseInt(eat("charisma")) + 5);
}

function personalize() {
    $(".win").hide();
    $(".in_game").each(
        function() {
            var line = $(this).html();
            while (line.indexOf("$n") >= 0){
                line = line.replace("$n",eat("name"));
            };
            while (line.indexOf("$1") >= 0){
                line = line.replace("$1",eat("f1"));
            };
            $(this).html(line);
    });
};
