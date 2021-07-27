function draw_line(context, x_line_start, y_line_start, x_line_end, y_line_end, line_color, line_width)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_line_start, y_line_start);
	context.lineTo(x_line_end, y_line_end);
	context.stroke();
	context.closePath();
}

document.body.style.backgroundColor = "black";

var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
var canvas_left = 0;
var canvas_top = 0;
canvas.style.position = "absolute";
canvas.style.left = canvas_left + "px";
canvas.style.top = canvas_top + "px";
canvas.style.border = "1px solid silver";

var line_length = 200;

//-------------------------------------------------------------------------------------------

var dlength_line_1_1 = 0.5;
var x_line_1_1_start = 0.2*canvas.width;
var y_line_1_1_start = 0.2*canvas.height;
var x_line_1_1_end = x_line_1_1_start;
var y_line_1_1_end = y_line_1_1_start;
var dx_line_1_1_start = 0.5;
//var dy_line_1_1_start = 0;
var dx_line_1_1_end = 0.5;
//var dy_line_1_1_end = 0;

var x_line_1_1_min = 0.2*canvas.width;
var y_line_1_1_min = 0.2*canvas.height;
var x_line_1_1_max = 0.8*canvas.width;
var y_line_1_1_max = 0.8*canvas.height;

var color_line_1_1 = get_random_color();

//-------------------------------------------------------------------------------------------

var dlength_line_1_2 = 0.5;
var x_line_1_2_start = 0.8*canvas.width;
var y_line_1_2_start = 0.2*canvas.height;
var x_line_1_2_end = x_line_1_2_start;
var y_line_1_2_end = y_line_1_2_start;
//var dx_line_1_2_start = 0.5;
var dy_line_1_2_start = 0.5;
//var dx_line_1_2_end = 0.5;
var dy_line_1_2_end = 0.5;

var x_line_1_2_min = 0.2*canvas.width;
var y_line_1_2_min = 0.2*canvas.height;
var x_line_1_2_max = 0.8*canvas.width;
var y_line_1_2_max = 0.8*canvas.height;

var color_line_1_2 = get_random_color();

//-------------------------------------------------------------------------------------------

var dlength_line_1_3 = 0.5;
var x_line_1_3_start = 0.8*canvas.width;
var y_line_1_3_start = 0.8*canvas.height;
var x_line_1_3_end = x_line_1_3_start;
var y_line_1_3_end = y_line_1_3_start;
var dx_line_1_3_start = 0.5;
//var dy_line_1_3_start = 0;
var dx_line_1_3_end = 0.5;
//var dy_line_1_3_end = 0;

var x_line_1_3_min = 0.2*canvas.width;
var y_line_1_3_min = 0.2*canvas.height;
var x_line_1_3_max = 0.8*canvas.width;
var y_line_1_3_max = 0.8*canvas.height;

var color_line_1_3 = get_random_color();

//-------------------------------------------------------------------------------------------

var dlength_line_1_4 = 0.5;
var x_line_1_4_start = 0.2*canvas.width;
var y_line_1_4_start = 0.8*canvas.height;
var x_line_1_4_end = x_line_1_4_start;
var y_line_1_4_end = y_line_1_4_start;
//var dx_line_1_4_start = 0.5;
var dy_line_1_4_start = 0.5;
//var dx_line_1_4_end = 0.5;
var dy_line_1_4_end = 0.5;

var x_line_1_4_min = 0.2*canvas.width;
var y_line_1_4_min = 0.2*canvas.height;
var x_line_1_4_max = 0.8*canvas.width;
var y_line_1_4_max = 0.8*canvas.height;

var color_line_1_4 = get_random_color();

//-------------------------------------------------------------------------------------------

function reset_line_1()
{
	dlength_line_1_1 = 0.5;
	x_line_1_1_start = 0.2*canvas.width;
	y_line_1_1_start = 0.2*canvas.height;
	x_line_1_1_end = x_line_1_1_start;
	y_line_1_1_end = y_line_1_1_start;
	dx_line_1_1_start = 0.5;
	//dy_line_1_1_start = 0;
	dx_line_1_1_end = 0.5;
	//dy_line_1_1_end = 0;
	x_line_1_1_min = 0.2*canvas.width;
	y_line_1_1_min = 0.2*canvas.height;
	x_line_1_1_max = 0.8*canvas.width;
	y_line_1_1_max = 0.8*canvas.height;
	color_line_1_1 = get_random_color();
}

function reset_line_2()
{
	dlength_line_1_2 = 0.5;
	x_line_1_2_start = 0.8*canvas.width;
	y_line_1_2_start = 0.2*canvas.height;
	x_line_1_2_end = x_line_1_2_start;
	y_line_1_2_end = y_line_1_2_start;
	//dx_line_1_2_start = 0;
	dy_line_1_2_start = 0.5;
	//dx_line_1_2_end = 0;
	dy_line_1_2_end = 0.5;
	x_line_1_2_min = 0.2*canvas.width;
	y_line_1_2_min = 0.2*canvas.height;
	x_line_1_2_max = 0.8*canvas.width;
	y_line_1_2_max = 0.8*canvas.height;
	color_line_1_2 = get_random_color();
}

function reset_line_3()
{
	dlength_line_1_3 = 0.5;
	x_line_1_3_start = 0.8*canvas.width;
	y_line_1_3_start = 0.8*canvas.height;
	x_line_1_3_end = x_line_1_3_start;
	y_line_1_3_end = y_line_1_3_start;
	dx_line_1_3_start = 0.5;
	//dy_line_1_3_start = 0;
	dx_line_1_3_end = 0.5;
	//dy_line_1_3_end = 0;
	x_line_1_3_min = 0.2*canvas.width;
	y_line_1_3_min = 0.2*canvas.height;
	x_line_1_3_max = 0.8*canvas.width;
	y_line_1_3_max = 0.8*canvas.height;
	color_line_1_3 = get_random_color();
}

function reset_line_4()
{
	dlength_line_1_4 = 0.5;
	x_line_1_4_start = 0.2*canvas.width;
	y_line_1_4_start = 0.8*canvas.height;
	x_line_1_4_end = x_line_1_4_start;
	y_line_1_4_end = y_line_1_4_start;
	//dx_line_1_4_start = 0;
	dy_line_1_4_start = 0.5;
    //dx_line_1_4_end = 0;
	dy_line_1_4_end = 0.5;
	x_line_1_4_min = 0.2*canvas.width;
	y_line_1_4_min = 0.2*canvas.height;
	x_line_1_4_max = 0.8*canvas.width;
	y_line_1_4_max = 0.8*canvas.height;
	color_line_1_4 = get_random_color();
}

//-------------------------------------------------------------------------------------------

var is_end_of_cycle = false;

function animate_line_in_rectangular_path()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	if(x_line_1_1_start >= x_line_1_1_min 
	   && x_line_1_1_start < x_line_1_1_max
	   && y_line_1_1_start == y_line_1_1_min)
	{
		context.strokeStyle = color_line_1_1;
		draw_line(context, x_line_1_1_start, y_line_1_1_start, x_line_1_1_end,  y_line_1_1_end, color_line_1_1, 2);
		if(x_line_1_1_end < x_line_1_1_min + line_length)
		{
			x_line_1_1_end = x_line_1_1_end + dlength_line_1_1;
		}
		else
		{
			x_line_1_1_start = x_line_1_1_start + dx_line_1_1_start;
			x_line_1_1_end = x_line_1_1_end + dx_line_1_1_end;
		}
		
		if(x_line_1_1_start == x_line_1_1_max)
		{
			dx_line_1_1_start = 0;
		}
		
		if(x_line_1_1_end == x_line_1_1_max)
		{
			dx_line_1_1_end = 0;
		}
	}
	
	if(x_line_1_1_end == x_line_1_1_max 
	   && y_line_1_2_start >= y_line_1_2_min 
	   && y_line_1_2_start <= y_line_1_2_max)
	{
		context.strokeStyle = color_line_1_1;
		draw_line(context, x_line_1_2_start, y_line_1_2_start, x_line_1_2_end,  y_line_1_2_end, color_line_1_2, 2);
		if(y_line_1_2_end < y_line_1_2_min + line_length)
		{
			y_line_1_2_end = y_line_1_2_end + dlength_line_1_2;
		}
		else
		{
			y_line_1_2_start = y_line_1_2_start + dy_line_1_2_start;
			y_line_1_2_end = y_line_1_2_end + dy_line_1_2_end;
		}
		
		if(y_line_1_2_start == y_line_1_2_max)
		{
			dy_line_1_2_start = 0;
		}
		
		if(y_line_1_2_end == y_line_1_2_max)
		{
			dy_line_1_2_end = 0;
		}
	} 
	
	if(x_line_1_3_start >= x_line_1_3_min 
	   && x_line_1_3_start <= x_line_1_3_max
	   && y_line_1_2_end == y_line_1_2_max)
	{
		context.strokeStyle = color_line_1_3; 
		draw_line(context, x_line_1_3_start, y_line_1_3_start, x_line_1_3_end, y_line_1_3_end, color_line_1_3, 2);
		if(x_line_1_3_end >= x_line_1_3_max - line_length)
		{
			x_line_1_3_end = x_line_1_3_end - dlength_line_1_3;
		}
		else
		{
			x_line_1_3_start = x_line_1_3_start - dx_line_1_3_start;
			x_line_1_3_end = x_line_1_3_end - dx_line_1_3_end;
		}
		
		if(x_line_1_3_start == x_line_1_3_min)
		{
			dx_line_1_3_start = 0;
		}
		
		if(x_line_1_3_end == x_line_1_3_min)
		{
			dx_line_1_3_end = 0;
		}
	}
	
	if(x_line_1_3_end == x_line_1_3_min 
	   && y_line_1_4_start >= y_line_1_4_min 
	   && y_line_1_4_start <= y_line_1_4_max)
	{
		context.strokeStyle = color_line_1_4;
		draw_line(context, x_line_1_4_start, y_line_1_4_start, x_line_1_4_end,  y_line_1_4_end, color_line_1_4, 2);
		if(y_line_1_4_end >= y_line_1_4_max - line_length)
		{
			y_line_1_4_end = y_line_1_4_end - dlength_line_1_4;
		}
		else
		{
			y_line_1_4_start = y_line_1_4_start - dy_line_1_4_start;
			y_line_1_4_end = y_line_1_4_end - dy_line_1_4_end;
		}
		
		if(y_line_1_4_start == y_line_1_4_min)
		{
			dy_line_1_4_start = 0;
			reset_line_2();
			reset_line_3();
			reset_line_4();
			is_end_of_cycle = false;
		}
		
		if(y_line_1_4_end == y_line_1_4_min)
		{
			dy_line_1_4_end = 0;
			if(is_end_of_cycle == false)
			{
				reset_line_1();
				is_end_of_cycle = true;
			}
		}
	} 
}

var interval = setInterval(animate_line_in_rectangular_path, 1);

//-------------------------------------------------------------------------------------------

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
