function updateDisplayCount(elementName, increaseAmount){
	// get the element that holds the current value
	var totalSpan = document.getElementById(elementName);
	// add 1 to the total count and update the display
	totalSpan.innerHTML = parseInt(totalSpan.innerHTML) + increaseAmount;
	return totalSpan.innerHTML;
}

function moveImage(imagename){
	document.getElementById(imagename).style.margin = Math.random() * 100 + "px 0px 0px " + Math.random() * 100 + "px ";
}

function butterflyClick(){
	updateDisplayCount("totalButterflyClicks", 1);
	moveImage();
}

function startCatchingStars(){
	// determine lucky number and set display
	var luckyNumber = parseInt(document.getElementById("luckyNumber").value);
	if (luckyNumber>0){
	document.getElementById("starGameTitle").innerHTML = "You must catch " + luckyNumber + ((luckyNumber == 1) ? " star" : " stars") + " tonight...";

	// hide setup controls
	document.getElementById("starSetup").style.display = "none";

	// display game controls
	document.getElementById("starPlay").style.display = "block";
	}
	else
		document.getElementById("starGameTitle").innerHTML = "Sorry. Must be greater than zero."
}

function starClick(){
	var total = updateDisplayCount("totalStarClicks", 1);
	var luckyNumber = parseInt(document.getElementById("luckyNumber").value);
	//alert(total);
	//alert(luckyNumber);
	if (total == luckyNumber)
	{
		document.getElementById("night").style.backgroundColor = "blue";
		document.getElementById("nightHeader").innerHTML = "Good Morning!";
		document.getElementById("starGameTitle").innerHTML = "You have successfully caught " + luckyNumber + ((luckyNumber == 1) ? " star" : " stars") + ". The sun is now rising.";
	}
	else
		moveImage("starimg");
}