
//author: froginafog (Liang D.S.)
var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var x_square = 0;
var y_square = 0;
var square_width = 200;
var square_height = 200;
var dx_square = -2;
var dy_square = 2;
var num_passes = 0;

while((context.fillStyle = get_random_color()) == ("rgb(" + 255 + "," + 255 + "," + 255 + ")"))
{
	continue;
}

function paint_wall()
{
	context.fillRect(x_square, y_square, square_width, square_height);	
	if(x_square == 0 || x_square == 1200)
	{
		if(y_square < num_passes * 200)
		{
			y_square = y_square + dy_square;
		}
		else
		{
			num_passes++;
			dx_square = -dx_square;
			x_square = x_square + dx_square;
		}
	}
	else
	{
		x_square = x_square + dx_square;
	}
	
	if(y_square > 1200)
	{
		x_square = 0;
		y_square = 0;
		num_passes = 0;
		dx_square = -2;
		context.fillStyle = get_random_color();
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

interval_1 = setInterval(paint_wall, 1);  //1 millisecond

