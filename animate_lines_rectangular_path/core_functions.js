//author: froginafog (Liang D.S.)
function draw_line(x_line_start, x_line_end, y_line_start, y_line_end, context, line_width, line_color)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_line_start, y_line_start);
	context.lineTo(x_line_end, y_line_end);
	context.stroke();
	context.closePath();
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
	 var g = get_random_integer(0, 255);
	 var b = get_random_integer(0, 255);
	 
	 while(r <= 10 && g <= 10 && b <= 10)
	 {
	 	r = get_random_integer(0, 255);
		g = get_random_integer(0, 255);
	    b = get_random_integer(0, 255);
	 }
 	 
 	 while(r >= 254 && g >= 254 && b == 254)
	 {
	 	r = get_random_integer(0, 255);
		g = get_random_integer(0, 255);
	    b = get_random_integer(0, 255);
	 }

	 return "rgb(" + r + "," + g + "," + b + ")"; 
}

