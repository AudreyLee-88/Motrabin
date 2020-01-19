class LandFillBin{
	//var counter = 0; 
	constructor(counter){ 
		this.counter = counter; 
	}

	getBinStatus(){
		if(this.counter > 8){ 
			alert("Landfill Bin Almost Full");
		}
			
		else if(this.counter > 5){
			alert("Landfill Bin Half Full");
		}
	}

	emptyBin(){
		this.counter = 0; 
	}
}

class GlassAndMetalBin{
	constructor(counter){ 
		this.counter = counter; 
	} 

	getBinStatus(){
		if(this.counter > 8){
			alert("Glass and Metal Bin Almost Full");
		}	
		else if(this.counter > 5){ 
			alert("Glass and Metal Bin Half Full");
		}
	}

	emptyBin(){
		this.counter = 0; 
	}
}

class PlasticBin{
	constructor(counter){
		this.counter = counter; 
	} 

	getBinStatus(){
		if(this.counter > 8){ 
			alert("Plastic Bin Almost Full"); 
		}	
		else if(this.counter > 5){ 
			alert("Plastic Bin Half Full");
		}
	}

	emptyBin(){
		this.counter = 0; 
	}
}

land1 = new LandFillBin(0); 
plastic1 = new PlasticBin(0); 
metalGlass1 = new GlassAndMetalBin(0); 

var noCounter = 0;

function YesFunction(){
	if (noCounter == 0){
		GetBarcode();
	}else if (noCounter == 1){
		metalGlass1.counter += 1; 
		metalGlass1.getBinStatus(); 
		Reset();
	}else if (noCounter == 2){
		//open platic bin
		plastic1.counter += 1; 
		plastic1.getBinStatus(); 
		
	}
};

function NoFunction(){
	noCounter += 1;
	if (noCounter == 1){
		document.getElementById("prompt").innerHTML = "Is it a metal?";
	}else if (noCounter == 2){
		document.getElementById("prompt").innerHTML = "Is it a plastic?";
	}else if (noCounter == 3){
		document.getElementById("prompt").innerHTML = "It seems like it belongs to landfill";
		//open landfill bin
		land1.counter += 1; 
		land1.getBinStatus(); 
		setTimeout(Reset(), 4000);
	}
};

function GetBarcode(){
	var trashType = window.prompt("Please enter the barcode.");
	if(trashType == 1){
		//open landfill bin
		land1.counter += 1; 
		land1.getBinStatus(); 
		Reset();
	}
	else if(trashType == 2 || trashType == 3){
		metalGlass1.counter += 1; 
		metalGlass1.getBinStatus(); 
		Reset();
	}
	else if(trashType == 4){
		plastic1.counter += 1; 
		plastic1.getBinStatus(); 
		Reset();
	}
}

function Reset(){
	noCounter = 0;
	document.getElementById("prompt").innerHTML = "Do you have a bar code?";
}

function asanIsComing(){
	land1.emptyBin(); 
	plastic1.emptyBin(); 
	metalGlass1.emptyBin(); 
}
