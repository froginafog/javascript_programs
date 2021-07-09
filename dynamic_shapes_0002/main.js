//author: froginafog (Liang D.S.)
var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

//---------------------------------------------------------------

var x_circle_1;  //x coordinate of the center of the circle
var y_circle_1;  //y coordinate of the center of the circle
var r_circle_1;  //radius of the circle 
var angle_circle_start;
var angle_circle_end;
var counterclockwise;

var dx_circle_1;
var dy_circle_1;

x_circle_1 = 100;
y_circle_1 = 100;
r_circle_1 = 100;  
angle_circle_start = 0;
angle_circle_end = 2 * Math.PI;
counterclockwise = true;

dx_circle_1 = 1;
dy_circle_1 = 0;

function draw_circle_1()
{
	context.beginPath()
	context.strokeWidth = 3;
	context.strokeStyle = "green";
	context.arc(x_circle_1, y_circle_1, r_circle_1, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_1 = x_circle_1 + dx_circle_1;
	y_circle_1 = y_circle_1 + dy_circle_1;
}

//---------------------------------------------------------------

var x_circle_2;  
var y_circle_2; 
var r_circle_2; 
var angle_circle_start;
var angle_circle_end;
var counterclockwise;

var dx_circle_2;
var dy_circle_2;

x_circle_2 = 100;
y_circle_2 = 100;
r_circle_2 = 100;  
angle_circle_start = 0;
angle_circle_end = 2 * Math.PI;
counterclockwise = true;

dx_circle_2 = 0;
dy_circle_2 = 1;

function draw_circle_2()
{
	context.beginPath()
	context.strokeWidth = 3;
	context.strokeStyle = "blue";
	context.arc(x_circle_2, y_circle_2, r_circle_2, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_2 = x_circle_2 + dx_circle_2;
	y_circle_2 = y_circle_2 + dy_circle_2;
}

//---------------------------------------------------------------

var x_circle_3;  
var y_circle_3; 
var r_circle_3; 
var angle_circle_start;
var angle_circle_end;
var counterclockwise;

var dx_circle_3;
var dy_circle_3;

x_circle_3 = 100;
y_circle_3 = 100;
r_circle_3 = 100;  
angle_circle_start = 0;
angle_circle_end = 2 * Math.PI;
counterclockwise = true;

dx_circle_3 = 1;
dy_circle_3 = 1;

function draw_circle_3()
{
	context.beginPath()
	context.strokeWidth = 3;
	context.strokeStyle = "red";
	context.arc(x_circle_3, y_circle_3, r_circle_3, angle_circle_start, angle_circle_end, counterclockwise);
	context.stroke();
	context.closePath();
	x_circle_3 = x_circle_3 + dx_circle_3;
	y_circle_3 = y_circle_3 + dy_circle_3;
}

//---------------------------------------------------------------

function my_animation()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	draw_circle_1();
	draw_circle_2();
	draw_circle_3();
	
	if(x_circle_1 <= 0 + r_circle_1)
	{
		dx_circle_1 = -dx_circle_1;
	}
	
	if(y_circle_1 <= 0 + r_circle_1)
	{
		dy_circle_1 = -dy_circle_1;
	}
	
	if(x_circle_1 >= canvas.width - r_circle_1)
	{
		dx_circle_1 = -dx_circle_1;
	}
	
	if(y_circle_1 >= canvas.height - r_circle_1)
	{
		dy_circle_1 = -dy_circle_1;
	}
	
	if(x_circle_2 <= 0 + r_circle_2)
	{
		dx_circle_2 = -dx_circle_2;
	}
	
	if(y_circle_2 <= 0 + r_circle_2)
	{
		dy_circle_2 = -dy_circle_2;
	}
	
	if(x_circle_2 >= canvas.width - r_circle_2)
	{
		dx_circle_2 = -dx_circle_2;
	}
	
	if(y_circle_2 >= canvas.height - r_circle_2)
	{
		dy_circle_2 = -dy_circle_2;
	}
	
	if(x_circle_3 <= 0 + r_circle_3)
	{
		dx_circle_3 = -dx_circle_3;
	}
	
	if(y_circle_3 <= 0 + r_circle_3)
	{
		dy_circle_3 = -dy_circle_3;
	}
	
	if(x_circle_3 >= canvas.width - r_circle_3)
	{
		dx_circle_3 = -dx_circle_3;
	}
	
	if(y_circle_3 >= canvas.height - r_circle_3)
	{
		dy_circle_3 = -dy_circle_3;
	}
}

var interval;
						
interval = setInterval(my_animation, 10);						


