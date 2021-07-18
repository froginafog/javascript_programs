var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var x_rectangle = canvas.width/6;
var y_rectangle = 0;
var width_rectangle = 900;
var height_rectangle = 900;

var x_gradient_start = x_rectangle + width_rectangle/2;;
var y_gradient_start = y_rectangle + height_rectangle/2;;
var x_gradient_end = x_rectangle + width_rectangle/2;;
var y_gradient_end = y_rectangle + height_rectangle/2;; 
var r_gradient_start = 0;  //start of the radius of the gradient circle
var r_gradient_end = 1; //end of the radius of the gradient circle

var gradient;
var dx_gradient_start = 1;
var dy_gradient_start = 1;
var dx_gradient_end = 1;
var dy_gradient_end = 1;
var dr_gradient_start = 0;
var dr_gradient_end = 1;

var gradient_color;

while((gradient_color = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function draw_circular_gradient()
{
	context.beginPath()
	gradient = context.createRadialGradient(x_gradient_start, y_gradient_start, r_gradient_start, x_gradient_end, y_gradient_end, r_gradient_end);
	gradient.addColorStop(0, gradient_color);
	gradient.addColorStop(1, "white");
	context.strokeStyle = "grey"; 
	context.strokeRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.fillStyle = gradient;
	context.fillRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.closePath();
	//x_gradient_start = x_rectangle + dx_gradient_start;
	//y_gradient_start = y_rectangle + dy_gradient_start;
	//x_gradient_end = x_rectangle + dx_gradient_end;
	//y_gradient_end = y_rectangle + dy_gradient_end; 
	//r_gradient_start = r_gradient_start + dr_gradient_start;
	r_gradient_end = r_gradient_end + dr_gradient_end;
}

function my_animation()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	draw_circular_gradient();
	
	if((r_gradient_end >= width_rectangle * 0.8) || (r_gradient_end >= height_rectangle * 0.8))
	{
		dr_gradient_end = -dr_gradient_end;
	}
	
	if((r_gradient_end <= 1) || (r_gradient_end <= 1))
	{
		dr_gradient_end = -dr_gradient_end;
		while((gradient_color = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
		{
			continue;
		}
	}
	
	draw_circle_1();
	draw_circle_2();
	draw_circle_3();
	draw_circle_4();
	draw_circle_5();
	draw_circle_6();
	draw_circle_7();
	draw_circle_8();
	
	//-----------------------------------------
	
	if(x_circle_1 >= x_rectangle + width_rectangle - r_circle_1)
	{
		dx_circle_1 = -dx_circle_1;
	}
	
	if(y_circle_1 >= y_rectangle + height_rectangle - r_circle_1)
	{
		dy_circle_1 = -dy_circle_1;
	}
	
	if(x_circle_2 >= x_rectangle + width_rectangle - r_circle_2)
	{
		dx_circle_2 = -dx_circle_2;
	}
	
	if(y_circle_2 >= y_rectangle + height_rectangle - r_circle_2)
	{
		dy_circle_2 = -dy_circle_2;
	}
	
	if(x_circle_3 >= x_rectangle + width_rectangle - r_circle_3)
	{
		dx_circle_3 = -dx_circle_3;
	}
	
	if(y_circle_3 >= y_rectangle + height_rectangle - r_circle_3)
	{
		dy_circle_3 = -dy_circle_3;
	}
	
	if(x_circle_4 >= x_rectangle + width_rectangle - r_circle_4)
	{
		dx_circle_4 = -dx_circle_4;
	}
	
	if(y_circle_4 >= y_rectangle + height_rectangle - r_circle_4)
	{
		dy_circle_4 = -dy_circle_4;
	}
	
	if(y_circle_5 >= y_rectangle + height_rectangle - r_circle_5)
	{

		dy_circle_5 = -dy_circle_5;
	}
	
	if(y_circle_6 >= y_rectangle + height_rectangle - r_circle_6)
	{

		dy_circle_6 = -dy_circle_6;
	}
	
	if(x_circle_7 >= x_rectangle + width_rectangle - r_circle_7)
	{

		dx_circle_7 = -dx_circle_7;
	}
	
	if(x_circle_8 >= x_rectangle + width_rectangle - r_circle_8)
	{

		dx_circle_8 = -dx_circle_8;
	}
	
	//-----------------------------------------
	
	if(x_circle_1 <= x_rectangle + r_circle_1)
	{
		dx_circle_1 = -dx_circle_1;
	}
	
	if(y_circle_1 <= y_rectangle + r_circle_1)
	{
		dy_circle_1 = -dy_circle_1;
	}
	
	if(x_circle_2 <= x_rectangle + r_circle_2)
	{
		dx_circle_2 = -dx_circle_2;
	}
	
	if(y_circle_2 <= y_rectangle + r_circle_2)
	{
		dy_circle_2 = -dy_circle_2;
	}
	
	if(x_circle_3 <= x_rectangle + r_circle_3)
	{
		dx_circle_3 = -dx_circle_3;
	}
	
	if(y_circle_3 <= y_rectangle + r_circle_3)
	{
		dy_circle_3 = -dy_circle_3;
	}
	
	if(x_circle_4 <= x_rectangle + r_circle_4)
	{
		dx_circle_4 = -dx_circle_4;
	}
	
	if(y_circle_4 <= y_rectangle + r_circle_4)
	{
		dy_circle_4 = -dy_circle_4;
	}
	
	if(y_circle_5 <= y_rectangle + r_circle_5)
	{
		dy_circle_5 = -dy_circle_5;
	}
	
	if(y_circle_6 <= y_rectangle + r_circle_6)
	{
		dy_circle_6 = -dy_circle_6;
	}
	
	if(x_circle_7 <= x_rectangle + r_circle_7)
	{
		dx_circle_7 = -dx_circle_7;
	}
	
	if(x_circle_8 <= x_rectangle + r_circle_8)
	{
		dx_circle_8 = -dx_circle_8;
	}
}

var interval = setInterval(my_animation, 1);

//---------------------------------------------------------------

var angle_circle_start = 0;
var angle_circle_end = angle_circle_end = 2 * Math.PI;
var counterclockwise = counterclockwise = true;

//---------------------------------------------------------------

var x_circle_1 = x_rectangle + width_rectangle/2;  //x coordinate of the center of the circle
var y_circle_1 = y_rectangle + height_rectangle/2;  //y coordinate of the center of the circle
var r_circle_1 = 100;  //radius of the circle 

var dx_circle_1 = 0.48;
var dy_circle_1 = -0.48;

function draw_circle_1()
{
	context.beginPath(); 
	context.lineWidth = 2;
	context.strokeStyle = "green";
	context.arc(x_circle_1, y_circle_1, r_circle_1, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_1 = x_circle_1 + dx_circle_1;
	y_circle_1 = y_circle_1 + dy_circle_1;
}

//---------------------------------------------------------------

var x_circle_2 = x_rectangle + width_rectangle/2;
var y_circle_2 = y_rectangle + height_rectangle/2;
var r_circle_2 = 100; 

var dx_circle_2 = 0.48;
var dy_circle_2 = 0.48;

function draw_circle_2()
{
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "blue";
	context.arc(x_circle_2, y_circle_2, r_circle_2, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_2 = x_circle_2 + dx_circle_2;
	y_circle_2 = y_circle_2 + dy_circle_2;
}

//---------------------------------------------------------------

var x_circle_3 = x_rectangle + width_rectangle/2;
var y_circle_3 = y_rectangle + height_rectangle/2;
var r_circle_3 = 100; 

var dx_circle_3 = -0.48;
var dy_circle_3 = 0.48;

function draw_circle_3()
{
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "red";
	context.arc(x_circle_3, y_circle_3, r_circle_3, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_3 = x_circle_3 + dx_circle_3;
	y_circle_3 = y_circle_3 + dy_circle_3;
}

//---------------------------------------------------------------

var x_circle_4 = x_rectangle + width_rectangle/2;  
var y_circle_4 = y_rectangle + height_rectangle/2; 
var r_circle_4 = 100;   

var dx_circle_4 = -0.48;
var dy_circle_4 = -0.48;

function draw_circle_4()
{
	context.beginPath()
	context.lineWidth = 2;
	context.strokeStyle = "purple";
	context.arc(x_circle_4, y_circle_4, r_circle_4, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_4 = x_circle_4 + dx_circle_4;
	y_circle_4 = y_circle_4 + dy_circle_4;
}

//---------------------------------------------------------------

var x_circle_5 = x_rectangle + width_rectangle/2;  
var y_circle_5 = y_rectangle + height_rectangle/2; 
var r_circle_5 = 100; 

var theta_circle_5 = 0;

var dx_circle_5 = 1.49*Math.cos(theta_circle_5);
var dy_circle_5 = 0.48;

function draw_circle_5()
{
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "gray";
	context.arc(x_circle_5, y_circle_5, r_circle_5, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_5 = x_circle_5 + dx_circle_5;
	y_circle_5 = y_circle_5 + dy_circle_5;
	dx_circle_5 = 1.49*Math.cos(theta_circle_5);
	theta_circle_5 = theta_circle_5 + 0.0043;
}

//---------------------------------------------------------------

var x_circle_6 = x_rectangle + width_rectangle/2;
var y_circle_6 = y_rectangle + height_rectangle/2;
var r_circle_6 = 100; 

var theta_circle_6 = 0;

var dx_circle_6 = -1.49*Math.cos(theta_circle_6);
var dy_circle_6 = -0.48;

function draw_circle_6()
{
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "teal";
	context.arc(x_circle_6, y_circle_6, r_circle_6, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_6 = x_circle_6 + dx_circle_6;
	y_circle_6 = y_circle_6 + dy_circle_6;
	dx_circle_6 = -1.49*Math.cos(theta_circle_6);
	theta_circle_6 = theta_circle_6 + 0.0043;
}

//---------------------------------------------------------------

var x_circle_7 = x_rectangle + width_rectangle/2;
var y_circle_7 = y_rectangle + height_rectangle/2;
var r_circle_7 = 100; 

var theta_circle_7 = 0;

var dx_circle_7 = -0.48;
var dy_circle_7 = -1.49*Math.cos(theta_circle_7);

function draw_circle_7()
{
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "orange";
	context.arc(x_circle_7, y_circle_7, r_circle_7, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_7 = x_circle_7 + dx_circle_7;
	y_circle_7 = y_circle_7 + dy_circle_7;
	dy_circle_7 = -1.49*Math.cos(theta_circle_7);
	theta_circle_7 = theta_circle_7 + 0.0043;
}

//---------------------------------------------------------------

var x_circle_8 = x_rectangle + width_rectangle/2;
var y_circle_8 = y_rectangle + height_rectangle/2;
var r_circle_8 = 100; 

var theta_circle_8 = 0;

var dx_circle_8 = 0.48;
var dy_circle_8 = 1.49*Math.cos(theta_circle_8);

function draw_circle_8()
{
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "maroon";
	context.arc(x_circle_8, y_circle_8, r_circle_8, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_8 = x_circle_8 + dx_circle_8;
	y_circle_8 = y_circle_8 + dy_circle_8;
	dy_circle_8 = 1.49*Math.cos(theta_circle_8);
	theta_circle_8 = theta_circle_8 + 0.0043;
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
	 var g = get_random_integer(0, 255);
	 var b = get_random_integer(0, 255);
 	 var color;
 	 
 	 while((r == 255 || r == 254) && (g == 255 || g == 254) && (b == 255 || b == 254))
	 {
	 	r = get_random_integer(0, 255);
	    g = get_random_integer(0, 255);
		b = get_random_integer(0, 255);
	 }
	 
	 color = "rgb(" + r + "," + b + "," + g + ")"; 

	 return color;
}
