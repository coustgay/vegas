var my_hand = []; var my_disc = []; 
var your_hand = []; var your_disc = [];


function Card(suit, number) {
    this.suit = suit;
    this.rank = function(){
        switch (suit){
            case "spades": return 4; break;
            case "diamonds": return 3; break;
            case "hearts": return 2; break;
            case "clubs": return 1; break;
            default: return 0;
        };
    };
    this.number = number;
    this.name = function(){
        switch (this.number){
            case 14:
                return "Ace"; break;
            case 11:
                return "Jack"; break;
            case 12:
                return "Queen"; break;
            case 13:
                return "King"; break;
            default:
                return "" + this.number; break;
        };
    };
};

function start_war(){
    var new_deck = build_deck(52);
    new_deck = shuffle(new_deck);
    var hands = deal(new_deck, 2);
    my_hand = hands[0]; your_hand = hands[1];
    personalize(); 
    $(".in_game").show(); $("#start").hide(); 
    $("#play").show(); $("#test").show();
}

function play_card(){
    if (my_hand.length == 0) {my_hand = shuffle(my_disc); my_disc = [];}
    if (your_hand.length == 0) {your_hand = shuffle(your_disc); your_disc = [];}
    var my_card = my_hand.pop();
    var your_card = your_hand.pop();
    console.log(my_card.name() + " of " + my_card.suit);
    console.log(your_card.name() + " of " + your_card.suit);
    
    $("#mycard").html("$n's card: " + my_card.name() + " of " + my_card.suit);
    $("#yourcard").html("$3's card: " + your_card.name() + " of " + your_card.suit);
    
    if (my_card.number > your_card.number){
        my_disc.unshift(my_card, your_card);
        $("#winner").html("Winner: $n!");
    } else if (my_card.number < your_card.number){
        your_disc.unshift(your_card, my_card);
        $("#winner").html("Winner: $3!");
    } else if (my_card.rank() > your_card.rank()){
         my_disc.unshift(my_card, your_card);
        $("#winner").html("Winner: $n!");
    } else {
        your_disc.unshift(your_card, my_card);
        $("#winner").html("Winner: $3!");
    };
    
    console.log("$n's deck size: " + my_hand.length + "<hand ~ discard>" + my_disc.length);
    console.log("$3's deck size: " + your_hand.length + "<hand ~ discard>" + your_disc.length);
    $("#mycards").html("$n's deck size: " + (my_hand.length + my_disc.length));
    $("#yourcards").html("$3's deck size: " + (your_hand.length + your_disc.length));
    
    if(my_hand.length + my_disc.length <= 0){
        $("#winner").html("$n Lost the Game of War!!");
        $("#start").html("Play Again?");
        $("#play").hide(); $("#start").show(); $("#test").hide();
    }; if(your_hand.length + your_disc.length <= 0){
        $("#winner").html("$3 Lost the Game of War!!");
        $("#start").html("Play Again?");
        $("#play").hide(); $("#start").show(); $("#test").hide();
    };
    personalize();
}

// when do you shuffle in blackjack?

function deal(deck, num_hands, size_deck, size_hands){
    if (size_deck === undefined) {size_deck = 52};                                                                                                                                                                                                                                                                                                                                          
    if (size_hands === undefined) {size_hands = 52/num_hands};
    
    var new_hands = [];
    // deals me top half and you bottom half. This is not vegas.
    for (var i = 0; i < num_hands; i++){
        new_hands[i] = [];
        for (var j = 0; j < size_hands; j++){
            new_hands[i][j] = deck.pop();
        };
    };
    return new_hands;
}

function build_deck(deck_size) {
    var deck = [];
    switch (deck_size) {
        case 52:
            deck.push(new Card("spades",14)); deck.push(new Card("spades",2));
            deck.push(new Card("spades",3)); deck.push(new Card("spades",4));
            deck.push(new Card("spades",5)); deck.push(new Card("spades",6));
            deck.push(new Card("spades",7)); deck.push(new Card("spades",8));
            deck.push(new Card("spades",9)); deck.push(new Card("spades",10));
            deck.push(new Card("spades",11)); deck.push(new Card("spades",12));
            deck.push(new Card("spades",13));
            deck.push(new Card("diamonds",14)); deck.push(new Card("diamonds",2));
            deck.push(new Card("diamonds",3)); deck.push(new Card("diamonds",4));
            deck.push(new Card("diamonds",5)); deck.push(new Card("diamonds",6));
            deck.push(new Card("diamonds",7)); deck.push(new Card("diamonds",8));
            deck.push(new Card("diamonds",9)); deck.push(new Card("diamonds",10));
            deck.push(new Card("diamonds",11)); deck.push(new Card("diamonds",12));
            deck.push(new Card("diamonds",13));
            deck.push(new Card("hearts",14)); deck.push(new Card("hearts",2));
            deck.push(new Card("hearts",3)); deck.push(new Card("hearts",4));
            deck.push(new Card("hearts",5)); deck.push(new Card("hearts",6));
            deck.push(new Card("hearts",7)); deck.push(new Card("hearts",8));
            deck.push(new Card("hearts",9)); deck.push(new Card("hearts",10));
            deck.push(new Card("hearts",11)); deck.push(new Card("hearts",12));
            deck.push(new Card("hearts",13));
            deck.push(new Card("clubs",14)); deck.push(new Card("clubs",2));
            deck.push(new Card("clubs",3)); deck.push(new Card("clubs",4));
            deck.push(new Card("clubs",5)); deck.push(new Card("clubs",6));
            deck.push(new Card("clubs",7)); deck.push(new Card("clubs",8));
            deck.push(new Card("clubs",9)); deck.push(new Card("clubs",10));
            deck.push(new Card("clubs",11)); deck.push(new Card("clubs",12));
            deck.push(new Card("clubs",13));
            break;
        default:
            console.log("idk wtf you're playing");
            deck = []; break;
    };
    return deck;
}

function shuffle(deck) {
    return deck.sort(function (a,b){return 0.5-Math.random();});
    //new_deck = [];
    //for (var i = 0; i < deck.length; i++){
    //    card = deck.pop();
    //    spot = Math.floor(Math.random() * deck.length);
    //    new_deck[spot] = card;
    //};
};

function personalize() {
    $(".in_game").each(
        function() {
            var line = $(this).html();
            while (line.indexOf("$n") >= 0){
                line = line.replace("$n",eat("name"));
            };
            while (line.indexOf("$3") >= 0){
                line = line.replace("$3",eat("f3"))
            };
            $(this).html(line);
    });
};


function test_war(){
    var too_big = 5000; var i = 0;
    console.log("begin test");
    while (my_hand.length + my_disc.length > 0 && your_hand.length + your_disc.length > 0 && i < too_big){
        play_card(); i += 1; console.log("Turns:" + i);
    }; console.log("The Game of War Has Ended")
}

function go_vegas(){
    bake("married",0);
    bake(parseInt(eat("luck")) + 5);
    location.href = "vegas.html";
}