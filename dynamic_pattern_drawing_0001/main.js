//author: froginafog (Liang D.S.)
var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var x_line;
var y_line;
var interval_line;
var num_passes = 0;

x_line = 10;
y_line = 10;
context.moveTo(x_line, y_line);
dx_line = 1;
dy_line = 1;
x_line = x_line + dx_line;

context.beginPath();

while((context.strokeStyle = get_random_color()) == ("rgb(" + 255 + "," + 255 + "," + 255 + ")"))
{
	continue;
}

function draw_pattern()
{
	context.lineTo(x_line, y_line);
	context.stroke();
	
	if(x_line == 10 || x_line == 600)
	{	
		if(y_line >= 650)
		{
			context.beginPath();
			context.strokeStyle = get_random_color();
			x_line = 10;
			y_line = 10;
			context.moveTo(x_line, y_line);
			x_line = x_line + dx_line;
			num_passes = 0;
		}
		else
		{
			y_line = y_line + dy_line;
		}
		
		if(y_line == 10 + 20 + num_passes * 20)
		{
			dx_line = -dx_line;
			x_line = x_line + dx_line;
			num_passes++;
		}
	}
	else
	{
		x_line = x_line + dx_line;
	}
	
}

//get a random integer in the range min to max
//min is inclusive
//max in inclusive
function get_random_integer(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_random_color()
{	
	 var r = get_random_integer(0, 255);
	 var b = get_random_integer(0, 255);
	 var g = get_random_integer(0, 255);
 	 var color;
 	 
 	 while(r == 255 && b == 255 & g == 255)
	 {
	 	r = get_random_integer(0, 255);
		b = get_random_integer(0, 255);
	    g = get_random_integer(0, 255);
	 }
	 
	 color = "rgb(" + r + "," + b + "," + g + ")"; 

	 return color;
}

interval_line = setInterval(draw_pattern, 1);
