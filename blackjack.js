var discard = []; var player_ai = [];

//----------------------------------------
// BLACKJACK UI
//----------------------------------------


function start_blackjack(){
    //using two players until I get better at life
    //var players = p_check(parseInt(prompt("How many players do you want to play with? (2-8), default 5")));
    show_players(2); 
    var deck_stack = []; for(var i=0;i<Math.floor(players/2)+1;i++){deck_stack+=build_deck(52);};
    var full_deck = shuffle(full_deck);
    deal_bj(full_deck, player_ai);
    /*var pi = 0; while (hands.length > 0){
        if (pi == players){
            $("#buttons").show();
        }
        player_ai[pi].act() 
    }*/
};

function p_check(players){
    if(players >= 8){return 8;} else if(players <= 2){return 2;} 
    else if(players > 2){return players;} else {return 5;};
};

//----------------------------------------
// BLACKJACK LOGIC
//----------------------------------------
function show_players(players){
    for (var i = 0; i < players - 1; i++){
        if (i == 0){
            $("#dealer_cards").show();
            player_ai[i] = new Player()
        }
        else if (i == players - 1){
            $("#my_cards").show();
        }
        else {
            $("p" + i + "_cards").show();};                
        }; 
        
        //$("#pot").show();
};
function choose_ai(players){
    switch (players){
            /*  Gonna have to figure out how to work this  */
        case 2:
            player_ai = [Dealer, User]; break;
        default:
            player_ai = [Dealer]; for(var i=0;i<players-1;i++){player_ai.push(Basic)}; player_ai.push(User)
    };
};
function compare_hands(hands){
    
};
function deal_bj(deck, players){
    
};


//----------------------------------------
// BLACKJACK PLAYER AI
//----------------------------------------
function Player(hand,num,bet) {
    this.hand = hand;
    this.num = num;
    // should probably implement sum as a separate function 
    // to use in the ai functions
    this.sum = function(){
        var sum = 0; var aces = 0;        
        for(var i = 0; i < hand.length; i++){
            if (hand[i].number<=10){
                sum += hand[i].number;
            } else if (hand[i].number == 14){
                sum += 11; aces++;
            } else { sum += 10};
        };
        while (aces > 0){
            if (sum > 21) {
                sum -= 10; aces--;
            };
        }; return sum;
    };
    
    this.bet = bet;
    this.hit = function(){
        
        
    }
    this.play = function(){
        switch (num){
            case -1:
                return dealer(hand); break;
            case 0:
                return player(hand); break;
            default:
                alert("More players not available"); break;
        }
    }
};

// -------------LIVE PLAYER---------------
function raise(){
    
};
function check(hand){
    
};
function hit(hand){
    
};
function fold(hand){
    
};

//-----------------------------------------
// CARD GAME LOGIC
//-----------------------------------------

function Card(suit, number) {
    this.hidden = false;
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
