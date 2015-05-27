console.log("Rainbow IS!")

colors = ["red", "orange", "yellow", "green", "cyan", "RoyalBlue", "MediumOrchid", "pink"];
shuffle(colors);

colorOfFailed = colors[getRandomInt(0, colors.length)];
colors.splice(colors.indexOf(colorOfFailed), 1);

$(".data1 tr").each( function(index, elem) {
	grade = $(this).find("td:nth-child(5)");
	if(grade[0] && $(grade[0]).text() !== " ") {
		color = null;
		
		switch($(grade[0]).text()) {
		case "A":
			color = colors[0];
			break;
		case "B":
			color = colors[1];
			break;
		case "C":
			color = colors[2];			
			break;
		case "D":
			color = colors[3];			
			break;
		case "E":
			color = colors[4];			
			break;
		case "F":
			color = colors[indexOfFailed];			
			break;
		case "P":
			color = colors[5];
			break;
		case "Z":
			color = colors[6];			
			break;
		case "N":
			color = colors[indexOfFailed];			
			break;
		case "-":
			color = colors[indexOfFailed];			
			break;
		}
		
		if(color) {
			$(grade[0]).next().css("background-color", color);
			$(grade[0]).css("background-color", color);
		}
	}
});

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}