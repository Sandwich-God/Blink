//
//Blink!
//Reuben Clemens
//Due: 10/26/20
//

//This Project is about using onmouseover/out events and timer events.

pic=''; //This is a Global Variable named pic, it will be used later on to define x from the mouseover() parameter.

//This function is named blink(). Its purpose is to change the src of the two images in the middle table to closed eyes for a brief amount of time.
function blink() 
{
	document.getElementById("picture").src='images/eyeclosed.gif'; //Changes the src of the image that has the id, picture, to an image of eyes closed.
	document.getElementById("picture2").src='images/eyeclosed.gif'; //Changes the src of the image that has the id, picture2, to an image of eyes closed.
	setTimeout(open, 500); //Sets up timer event that will go to the open() function in 500 milliseconds.
}

//This function is named open(). Its purpose is to change the src of the two images to whatever the onmouseover event has in its parameters, or eyes forward when page loads.
function open()
{
	//This if statement is set up so that when the page loads, it will change the images to eyeforward.gif after the blink. This is because pic is null as
	//the onmouseover event hasn't been activated yet, so the pic variable has not changed.
	if (pic === '') //If pic equals null, activate.
	{
		document.getElementById("picture").src='images/eyeforward.gif'; //Changes the src of the image that has the id, picture, to an image of eyes looking forward.
		document.getElementById("picture2").src='images/eyeforward.gif'; //Changes the src of the image that has the id, picture2, to an image of eyes looking forward.
	}
	if (pic == 'eyeforward')
	{
		document.getElementById("picture").src='images/eyeleft.gif';
		document.getElementById("picture2").src='images/eyeright.gif';
	}
	//This else if statement will activate when you move onto the page. This is because the pic variable will change values as the onmouseover event will come into action.
	else if (pic != '') //Else if pic is anything but null.
	{
		document.getElementById("picture").src='images/' + pic + '.gif'; //Changes the src of the image that has the id, picture, to an image of whatever onmouseover event parameter is.
		document.getElementById("picture2").src='images/' + pic + '.gif'; //Changes the src of the image that has the id, picture2, to an image of whatever onmouseover event parameter is.
	}
	setTimeout(blink, 1000); //Sets up a timer event that will go to the blink() function in 1000 miliseconds/1 second.
}


//This function is named mouseover(). Its purpose is to trigger whenever the onmouseover event is activated. The parameter x will get whatever message the
//specific onmouseover event has.
function mouseover(x)
{
	pic = x; //Defines the pic variable by what x is from the parameter. The pic will return its value to the global variable pic.
	document.getElementById("picture").src='images/' + x + '.gif'; //Changes the src of the image that has the id, picture, to an image of whatever onmouseover event parameter is.
	document.getElementById("picture2").src='images/' + x + '.gif'; //Changes the src of the image that has the id, picture2, to an image of whatever onmouseover event parameter is.
}

//This function is named mouseout(). Its purpose is to trigger whenever the onmouseout event is activated. The parameter y will get whatever message the
//specific onmouseout event has.
function mouseout(y)
{
	document.getElementById("picture").src='images/' + y + '.gif'; //Changes the src of the image that has the id, picture, to an image of whatever onmouseover event parameter is.
	document.getElementById("picture2").src='images/' + y + '.gif'; //Changes the src of the image that has the id, picture2, to an image of whatever onmouseover event parameter is.
}