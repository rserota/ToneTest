var tones = [
	new Audio('sounds/C1.wav'),
	new Audio('sounds/Db1.wav'),
	new Audio('sounds/D1.wav'),
	new Audio('sounds/Eb1.wav'),
	new Audio('sounds/E1.wav'),
	new Audio('sounds/F1.wav'),
	new Audio('sounds/Gb1.wav'),
	new Audio('sounds/G1.wav'),
	new Audio('sounds/Ab1.wav'),
	new Audio('sounds/A1.wav'),
	new Audio('sounds/Bb1.wav'),
	new Audio('sounds/B1.wav'),
	new Audio('sounds/C2.wav'),
	new Audio('sounds/Db2.wav'),
	new Audio('sounds/D2.wav'),
	new Audio('sounds/Eb2.wav'),
	new Audio('sounds/E2.wav'),
	new Audio('sounds/F2.wav'),
	new Audio('sounds/Gb2.wav'),
	new Audio('sounds/G2.wav'),
	new Audio('sounds/Ab2.wav'),
	new Audio('sounds/A2.wav'),
	new Audio('sounds/Bb2.wav')
];


var enabledIntervals = [
	[true,1],
	[true,2],
	[true,3],
	[true,4],
	[true,5],
	[true,7],
	[true,8],
	[true,9],
	[true,10],
	[true,11],
	[true,12]
];

var size2KeyCode = function(size){
	if (size === 1){
		return 81
	}
	else if (size === 2){
		return 50
	}
	else if (size === 3){
		return 87
	}
	else if (size === 4){
		return 51
	}
	else if (size === 5){
		return 52
	}
	else if (size === 7){
		return 53
	}
	else if (size === 8){
		return 84
	}
	else if (size === 9){
		return 54
	}
	else if (size === 10){
		return 89
	}
	else if (size === 11){
		return 55
	}
	else if (size === 12){
		return 56
	}

}

var definePossibilities = function(intervalsArray){
	possibilities = []
    for (var i = 0; i < intervalsArray.length; i++){
    	if (intervalsArray[i][0]===true){possibilities.push(intervalsArray[i][1])}
    }
	return possibilities
}


var pickNotes = function(possibilities){
	interval = possibilities[Math.floor(Math.random()*possibilities.length)]
	var pick = Math.floor(Math.random()*(22-interval));
	return [tones[pick],tones[pick+interval],interval]
}

var playNotes = function(notes){
	intervalID = setInterval(function(){
		notes[0].currentTime = 0;
		notes[0].play();
		setTimeout(function(){
			notes[1].currentTime = 0;
			notes[1].play();
		},250)
	},500)
	return {"intervalID" : intervalID, "intervalSize" : notes[2]}
}


var startTime;

$(document).ready(function(){
    var trialLoop = function(){
    	
    	setInterval(function(){
    		$(".timer").text(new Date() - startTime)
    	},250)
		trialInfo = playNotes(pickNotes(definePossibilities(enabledIntervals)))
		$(document).one('keydown',function(event){
			if (event.which === size2KeyCode(trialInfo["intervalSize"])){
				console.log("correct!")
			}
			else {
				console.log("nope!")
			}
			clearInterval(trialInfo["intervalID"])
			if (new Date() - startTime < 30000){
				trialLoop()
			}

		})
	}

	$(".button").on("click",function(){
		$(this).toggleClass("on")
		console.log($(this).index())
		enabledIntervals[$(this).index()][0] = !enabledIntervals[$(this).index()][0]
	})
    
    $(".go").on("click",function(){
    	startTime = new Date();
    	trialLoop()
    })




	
	
})

















