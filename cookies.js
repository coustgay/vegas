var leaderboard = ["test"];

function luckplus(){var luck = document.getElementById("luck").value; updatestats(1, parseInt(luck)+1);};
function luckmin(){var luck = document.getElementById("luck").value; updatestats(1, parseInt(luck)-1);};
function charplus(){var char = document.getElementById("charisma").value; updatestats(2, parseInt(char)+1);};
function charmin(){var char = document.getElementById("charisma").value; updatestats(2, parseInt(char)-1);};
function tolplus(){var tol = document.getElementById("tolerance").value; updatestats(3, parseInt(tol)+1);};
function tolmin(){var tol = document.getElementById("tolerance").value; updatestats(3, parseInt(tol)-1);};
function sleplus(){var sle = document.getElementById("sleep").value; updatestats(4, parseInt(sle)+1);};
function slemin(){var sle = document.getElementById("sleep").value; updatestats(4, parseInt(sle)-1);};

function fill_names(){
    name = eat("name"); f1 = eat("f1"); f2 = eat("f2"); f3 = eat("f3"); f4 = eat("f4");
    var names = [[name,"name"], [f1,"f1"], [f2,"f2"], [f3,"f3"], [f4,"f4"]];
    
    for (var i = 0; i <= 5; i++){ if (names[i][0] != ""){
            document.getElementById(names[i][1]).value = names[i][0];};};
};

function updatestats(stat, val) {
    var l = parseInt(document.getElementById("luck").value); 
    var c = parseInt(document.getElementById("charisma").value); 
    var t = parseInt(document.getElementById("tolerance").value); 
    var s = parseInt(document.getElementById("sleep").value);
    switch(stat){
        case 1:
            l = val; break;
        case 2:
            c = val; break;
        case 3:
            t = val; break;
        case 4:
            s = val; break;
        default:
            console.log("wtf" + l + " "+ c + " "+ t + " "+ s)
    }; 
    var p = l + c + t + s;
    console.log("pls" + l + " "+ c + " "+ t + " "+ s + " " + p)
    if (p > 40){
        switch(stat){
            case 1:
                l--; updatestats(1, l); break;
            case 2:
                c--; updatestats(2, c); break;
            case 3:
                t--; updatestats(3, t); break;
            case 4:
                s--; updatestats(4, s); break;
            default:
                console.log("stat="+stat+", sum="+p+">40. l="+l+"; c="+c+"; t = "+t+"; s ="+s);
        };  
    } else if (l < 0){l++; console.log(l); updatestats(1, l);
    } else if (c < 0){c++; updatestats(2, c);
    } else if (t < 0){t++; updatestats(3, t);
    } else if (s < 0){s++; updatestats(4, s);
    } else if (s > 24){s--; updatestats(4, s);
    } else {
        document.getElementById("luck").value = l;
        document.getElementById("charisma").value = c;
        document.getElementById("tolerance").value = t;
        document.getElementById("sleep").value = s;
        document.getElementById("total").value = p;
    };
};

function submitstats(){
    var l = parseInt(document.getElementById("luck").value); 
    var c = parseInt(document.getElementById("charisma").value); 
    var t = parseInt(document.getElementById("tolerance").value); 
    var s = parseInt(document.getElementById("sleep").value);
    var p = l + c + t + s;
    var name = document.getElementById("name").value;
    var friend1 = document.getElementById("f1").value;
    var friend2 = document.getElementById("f2").value;
    var friend3 = document.getElementById("f3").value;
    var friend4 = document.getElementById("f4").value;
    
    var noerror = $("#statcount").html().split("~")[0];
    $("#statcount").html(noerror);
    document.getElementById("total").value = p;
    
    if (p < 40){
        $("#statcount").append(" ~ Please use all of your stat points!");
    } else if (name == "" ){
        $("#statcount").append(" ~ Please provide a name");
    } else if (friend1 == "" ){
        $("#statcount").append(" ~ Please provide names for all friends");
    } else if (friend2 == "" ){
        $("#statcount").append(" ~ Please provide names for all friends");
    } else if (friend3 == "" ){
        $("#statcount").append(" ~ Please provide names for all friends");
    } else if (friend4 == "" ){
        $("#statcount").append(" ~ Please provide names for all friends");
    } else if (leaderboard.indexOf(name) >= 0){
        $("#statcount").append(" ~ Please provide a unique name");
    } else {
        bake_stats();
        $(".stats").hide(1500);
        run_narrative();
    };
};

function bake_stats() {
    bake("name",document.getElementById("name").value);
    
    bake("f1",document.getElementById("f1").value);
    bake("f2",document.getElementById("f2").value);
    bake("f3",document.getElementById("f3").value);
    bake("f4",document.getElementById("f4").value);
    
    bake("luck",document.getElementById("luck").value);
    bake("charisma",document.getElementById("charisma").value);
    bake("tolerance",document.getElementById("tolerance").value);
    bake("sleep",document.getElementById("sleep").value);
};

function bake(name, value) {
    val = escape(value);
		
    nowDate = new Date();
    nowDate.setTime(nowDate.getTime() + (6*30*60*60*1000));
    exp = nowDate.toUTCString();
		
	path = ";Path=" + "napalm.caltech.edu/apps/vegas/";
	
	document.cookie = name + "=" + val
    document.cookie += ";expires=" + exp + path;
    
};

function eat(dataName) {
    var result = null;
	var myCookie = " " + document.cookie + ";";
	var searchName = " " + dataName + "=";
	var startOfCookie = myCookie.indexOf(searchName);
	var endOfCookie;
	
	if (startOfCookie != -1) {
		startOfCookie += searchName.length;
		endOfCookie = myCookie.indexOf(";", startOfCookie);
		result = unescape(myCookie.substring(startOfCookie, endOfCookie));
	} else {result = 0};
	return result;
};

