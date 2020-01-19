class LandFillBin{
	//var status = 1; 
	//var counter = 0; 
	constructor(status, counter){
		this.status = status; 
		this.counter = counter; 
	}

	getBinStatus(){
		if(counter > 8){
			status = 3; 
			return; 
		}
		else if(counter > 5){
			status = 2; 
			return; 
		}
		else if(counter < 5){
			status = 1; 
			return; 
		}
	}
	//when bin is full alert cleaner
	emptyBin(){
		counter = 0; 
	}
}

class GlassAndMetalBin{

	constructor(status, counter){
		this.status = status; 
		this.counter = counter; 
	} 
	getBinStatus(){
		if(counter > 8){
			status = 3; 
			return; 
		}		
		else if(counter > 5){
			status = 2; 
			return; 
		}	
		else if(counter < 5){
			status = 1; 
			return; 
		}
	}
	emptyBin(){
		counter = 0; 
	}
}

class PlasticBin{
	constructor(status, counter){
		this.status = status; 
		this.counter = counter; 
	} 
	getBinStatus(){
		if(counter > 8){
			status = 3; 
			return; 
		}
		else if(counter > 5){
			status = 2; 
			return; 
		}	
		else if(counter < 5){
			status = 1; 
			return; 
		}
	}
	emptyBin(){
		counter = 0; 
	}
}

land1 = new LandFillBin(1,0); 
plastic1 = new PlasticBin(1,0); 
metalGlass1 = new GlassAndMetalBin(1,0); 

function readBarCode(){
	var trashType = window.prompt("Please enter the barcode.");
	window.alert(trashType); 
	if(trashType == 1){
		//open landfill bin
		land1.counter = land1.counter + 1; 
		land1.getBinStatus(); 
		window.alert("landfill bin open"); 
	}
	else if(trashType == 2 || trashType == 3){
		metalGlass1.counter = land1.metalGlass1 + 1; 
		metalGlass1.getBinStatus(); 
	}
	else if(trashType == 4){
		plastic1.counter = plastic1.counter + 1; 
		plastic1.getBinStatus(); 
	}
}

function ifHaveBarCode(){

}

function noBarCode(){
	window.location.href = "ifMetal.html"; 
}

function isMetal(){
	//open metal glass 
		metalGlass1.counter = land1.metalGlass1 + 1; 
		metalGlass1.getBinStatus(); 
}

function notMetal(){
	window.location.href = "ifPlastic.html"; 
}

function isPlastic(){
	//open platic bin
	plastic1.counter = plastic1.counter + 1; 
	plastic1.getBinStatus(); 
}

function notPlastic(){
	window.location.href = "landfill.html"; 
	landfill(); 
}

function landfill(){
	document.getElementById("prompt").innerHTML = "It seems like it belongs to landfill";
		//open landfill bin
		land1.counter = land1.counter + 1; 
		land1.getBinStatus(); 
		
		

}

function continueToLoop(){
	window.location.href = "ModernTrashBin.html"; 
}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

 
/*
function ifMetal(){
	//document.getElementById("prompt").innerHTML = "Is it a metal?";
	var input = document.getElementById("YesButton");
	var input2 = document.getElementById("NoButton");
	if(input.value == "true"){
		//open metal glass 
		metalGlass1.counter = land1.metalGlass1 + 1; 
		metalGlass1.getBinStatus(); 
	}
	else if(input2.value == "true"){
			window.location.href = "ifPlastic.html"; 
			ifPlastic(); 
	}
}
/*
function ifPlastic(){
	//document.getElementById("prompt").innerHTML = "Is it a plastic?";
		var input = document.getElementById("YesButton"); 
		if(input.clicked == "true"){
			//open platic bin
			plastic1.counter = plastic1.counter + 1; 
			plastic1.getBinStatus(); 
		}
		else{
			window.loction.href = "landfill.html"; 
			landfill(); 
		}
}

function landfill(){
	document.getElementById("prompt").innerHTML = "It seems like it belongs to landfill";
		//open landfill bin
		land1.counter = land1.counter + 1; 
		land1.getBinStatus(); 
}

*/





