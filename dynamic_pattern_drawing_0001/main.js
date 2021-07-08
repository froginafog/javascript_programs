var canvas = document.getElementById("canvas_1");

var context = canvas.getContext("2d");

var x_line_1;
var y_line_1;
var interval_1;
var num_passes_1 = 0;

x_line_1 = 10;
y_line_1 = 10;
context.moveTo(x_line_1, y_line_1);
dx_line_1 = 1;
dy_line_1 = 1;
x_line_1 = x_line_1 + dx_line_1;

context.strokeStyle = get_random_color();

//horizontally
function draw_pattern_1()
{
	context.beginPath();
	context.moveTo(x_line_1, y_line_1);
	
	if(x_line_1 == 10 || x_line_1 == 400 - 10)
	{	
		if(y_line_1 == 400 - 10)
		{
			context.beginPath();
			context.strokeStyle = get_random_color();
			x_line_1 = 10;
			y_line_1 = 10;
			context.moveTo(x_line_1, y_line_1);
			x_line_1 = x_line_1 + dx_line_1;
			num_passes_1 = 0;
		}
		else
		{
			y_line_1 = y_line_1 + dy_line_1;
		}
		
		if(y_line_1 == 10 + num_passes_1 * 20)
		{
			dx_line_1 = -dx_line_1;
			x_line_1 = x_line_1 + dx_line_1;
			num_passes_1++;
		}
	}
	else
	{
		x_line_1 = x_line_1 + dx_line_1;
	}
	
	context.lineTo(x_line_1, y_line_1);
	context.closePath();
	context.stroke();
}

//---------------------------------------------------------------

var x_line_2;
var y_line_2;
var interval_2;
var num_passes_2 = 0;

x_line_2 = 10;
y_line_2 = 10;
context.moveTo(x_line_2, y_line_2);
dx_line_2 = 1;
dy_line_2 = 1;
y_line_2 = y_line_2 + dy_line_2;

context.strokeStyle = get_random_color();

//vertically
function draw_pattern_2()
{
	context.beginPath();
	context.moveTo(x_line_2, y_line_2);
	
	if(y_line_2 == 10 || y_line_2 == 400 - 10)
	{	
		if(x_line_2 == 400 - 10)
		{
			context.beginPath();
			context.strokeStyle = get_random_color();
			x_line_2 = 10;
			y_line_2 = 10;
			context.moveTo(x_line_2, y_line_2);
			y_line_2 = y_line_2 + dy_line_2;
			num_passes_2 = 0;
		}
		else
		{
			x_line_2 = x_line_2 + dx_line_2;
		}
		
		if(x_line_2 == 10 + num_passes_2 * 20)
		{
			dy_line_2 = -dy_line_2;
			y_line_2 = y_line_2 + dy_line_2;
			num_passes_2++;
		}
	}
	else
	{
		y_line_2 = y_line_2 + dy_line_2;
	}
	
	context.lineTo(x_line_2, y_line_2);
	context.closePath();
	context.stroke();
}

//---------------------------------------------------------------

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

interval_1 = setInterval(draw_pattern_1, 1);
interval_2 = setInterval(draw_pattern_2, 1);
