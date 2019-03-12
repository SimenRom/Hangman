let hemmeligOrd; // = "hangman"
let gjettaBokstaver = "";
let tegnaBokstaver = "";
console.log("Script laster...");


function nyttSpel(){
	console.log("Starter nytt spel. Loader...");
	//settOrd();
	hemmeligOrd = document.getElementById("ordInput").value;
	console.log("Hemmelig ord er blitt endret til " + hemmeligOrd + ".");
	//viskUt();
	let gjettaBokstaver = "";
	console.log("Starter nytt spel med hemmelig ord " + hemmeligOrd);
	viskUt();
	lagLinjer();
}

function settOrd(){
	hemmeligOrd = document.getElementById("ordInput").value;
	console.log("Hemmelig ord er blitt endret til "+window.hemmeligOrd);
	//alert("hemmeligOrd: " +hemmeligOrd);
}

function sjekkBokstav(){
	let bokstav = document.getElementById("bokstavInput").value;
	if(bokstav.length != 1 || gjettaBokstaver.includes(bokstav)){
		//feilmelding
		console.log("Ugyldig bokstav!");
	} else if (hemmeligOrd.includes(bokstav)){
		gjettaBokstaver = gjettaBokstaver + bokstav;
		console.log("Rett bokstav! :)");
		tegnBokstav(bokstav);
	} else {
		gjettaBokstaver = gjettaBokstaver + bokstav;
		console.log("Ordet har ikkje denne bokstaven! ord:" + hemmeligOrd);
	}
	
}

function lagLinjer(){
	let x1 = 10;
	let y1 = 100;
	let x2 = 40;
	let y2 = 100;
	for(i = 0; i<hemmeligOrd.length; i++){
		tegnLinje(x1, y1, x2, y2);
		x1 = x1 + 40;
		x2 = x2 + 40;
	}
}

function tegnLinje (x1, y1, x2, y2){
	let c = document.getElementById("vindu");
	let context = c.getContext("2d");
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.strokeSyle = "white";
	context.stroke();
}

function viskUt(){
	let canvas = document.getElementById("vindu");
	let context = canvas.getContext("2d");
	context.beginPath();
	context.clearRect(0, 0, canvas.width, canvas.height);
	console.log("Har viska ut vindu");
}

function tegnBokstav(bokstav){
	let x1 = 12;
	let y1 = 97;
	let c = document.getElementById("vindu");
	let context = c.getContext("2d");
	context.moveTo(x1, y1);
	context.font = "40px Arial";
	for(i = 0; i < hemmeligOrd.length; i++){
		if(hemmeligOrd.charAt(i) == bokstav){
			context.fillText(bokstav, x1, y1);
		}
		x1 = x1 + 40;
	}
}

console.log("Script ferdig lastet!");

//nyttSpel();