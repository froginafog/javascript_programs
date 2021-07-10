//author: froginafog (Liang D.S.)
var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var x_rectangle = canvas.width/6;
var y_rectangle = 0;
var width_rectangle = 900;
var height_rectangle = 900;

//----------------------------------------

var x_gradient_start_0;
var y_gradient_start_0;
var x_gradient_end_0;
var y_gradient_end_0; 
var r_gradient_start_0;  //start of the radius of the gradient circle
var r_gradient_end_0; //end of the radius of the gradient circle

x_gradient_start_0 = x_rectangle + width_rectangle/2;
y_gradient_start_0 = y_rectangle + height_rectangle/2;
x_gradient_end_0 = x_rectangle + width_rectangle/2;
y_gradient_end_0 = y_rectangle + height_rectangle/2; 
r_gradient_start_0 = width_rectangle * 0.5;  //start of the radius of the gradient circle
r_gradient_end_0 = 1; //end of the radius of the gradient circle
	
var gradient_0;
var dx_gradient_start_0 = 1;
var dy_gradient_start_0 = 1;
var dx_gradient_end_0 = 1;
var dy_gradient_end_0 = 1;
var dr_gradient_start_0 = 0;
var dr_gradient_end_0 = 1;

var gradient_color_0;

while((gradient_color_0 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function draw_circular_gradient_0()
{
	context.beginPath()
	gradient_0 = context.createRadialGradient(x_gradient_start_0, y_gradient_start_0, r_gradient_start_0, 
	                                          x_gradient_end_0, y_gradient_end_0, r_gradient_end_0);
	gradient_0.addColorStop(0, gradient_color_0);
	gradient_0.addColorStop(1, "white");
	context.fillStyle = gradient_0;
	context.fillRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.closePath();
	//x_gradient_start_0 = x_rectangle + dx_gradient_start_0;
	//y_gradient_start_0 = y_rectangle + dy_gradient_start_0;
	//x_gradient_end_0 = x_rectangle + dx_gradient_end_0;
	//y_gradient_end_0 = y_rectangle + dy_gradient_end_0; 
	//r_gradient_start_0 = r_gradient_start_0 + dr_gradient_start_0;
	r_gradient_end_0 = r_gradient_end_0 + dr_gradient_end_0;
}

//----------------------------------------

var x_gradient_start_1;
var y_gradient_start_1;
var x_gradient_end_1;
var y_gradient_end_1; 
var r_gradient_start_1;  //start of the radius of the gradient circle
var r_gradient_end_1; //end of the radius of the gradient circle

x_gradient_start_1 = x_rectangle + width_rectangle/2;
y_gradient_start_1 = y_rectangle + height_rectangle/2;
x_gradient_end_1 = x_rectangle + width_rectangle;
y_gradient_end_1 = y_rectangle + height_rectangle; 
r_gradient_start_1 = 0;  //start of the radius of the gradient circle
r_gradient_end_1 = 1; //end of the radius of the gradient circle
	
var gradient_1;
var dx_gradient_start_1 = 1;
var dy_gradient_start_1 = 1;
var dx_gradient_end_1 = 1;
var dy_gradient_end_1 = 1;
var dr_gradient_start_1 = 0;
var dr_gradient_end_1 = 1;

var gradient_color_1;

while((gradient_color_1 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function draw_circular_gradient_1()
{
	context.beginPath();
	gradient_1 = context.createRadialGradient(x_gradient_start_1, y_gradient_start_1, r_gradient_start_1, 
	                                          x_gradient_end_1, y_gradient_end_1, r_gradient_end_1);
	gradient_1.addColorStop(0, gradient_color_1);
	gradient_1.addColorStop(1, "white");
	context.fillStyle = gradient_1;
	context.fillRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.closePath();
	//x_gradient_start_1 = x_rectangle + dx_gradient_start_1;
	//y_gradient_start_1 = y_rectangle + dy_gradient_start_1;
	x_gradient_end_1 = x_rectangle + dx_gradient_end_1;
	y_gradient_end_1 = y_rectangle + dy_gradient_end_1; 
	//r_gradient_start_1 = r_gradient_start_1 + dr_gradient_start_1;
	r_gradient_end_1 = r_gradient_end_1 + dr_gradient_end_1;
}

//----------------------------------------

var x_gradient_start_2;
var y_gradient_start_2;
var x_gradient_end_2;
var y_gradient_end_2; 
var r_gradient_start_2;  
var r_gradient_end_2;

x_gradient_start_2 = x_rectangle + width_rectangle/2;
y_gradient_start_2 = y_rectangle + height_rectangle/2;
x_gradient_end_2 = x_rectangle + width_rectangle;
y_gradient_end_2 = y_rectangle + height_rectangle; 
r_gradient_start_2 = 0;  
r_gradient_end_2 = 1; 
	
var gradient_2;
var dx_gradient_start_2 = 1;
var dy_gradient_start_2 = 1;
var dx_gradient_end_2 = 1;
var dy_gradient_end_2 = 1;
var dr_gradient_start_2 = 0;
var dr_gradient_end_2 = 1;

var gradient_color_2;

while((gradient_color_2 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function draw_circular_gradient_2()
{	
	context.beginPath();
	gradient_2 = context.createRadialGradient(x_gradient_start_2, y_gradient_start_2, r_gradient_start_2, 
	                                          x_gradient_end_2, y_gradient_end_2, r_gradient_end_2);
	gradient_2.addColorStop(0, gradient_color_2);
	gradient_2.addColorStop(1, "white");
	context.fillStyle = gradient_2;
	context.fillRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.closePath();
	//x_gradient_start_2 = x_rectangle + dx_gradient_start_2;
	//y_gradient_start_2 = y_rectangle + dy_gradient_start_2;
	x_gradient_end_2 = x_rectangle + dx_gradient_end_2;
	//y_gradient_end_2 = y_rectangle + dy_gradient_end_2; 
	//r_gradient_start_2 = r_gradient_start_2 + dr_gradient_start_2;
	r_gradient_end_2 = r_gradient_end_2 + dr_gradient_end_2;
}

//----------------------------------------

var x_gradient_start_3;
var y_gradient_start_3;
var x_gradient_end_3;
var y_gradient_end_3; 
var r_gradient_start_3;  
var r_gradient_end_3;


x_gradient_start_3 = x_rectangle + width_rectangle/2;
y_gradient_start_3 = y_rectangle + height_rectangle/2;
x_gradient_end_3 = x_rectangle + width_rectangle;
y_gradient_end_3 = y_rectangle + height_rectangle; 
r_gradient_start_3 = 0;  
r_gradient_end_3 = 1; 
	
var gradient_3;
var dx_gradient_start_3 = 1;
var dy_gradient_start_3 = 1;
var dx_gradient_end_3 = 1;
var dy_gradient_end_3 = 1;
var dr_gradient_start_3 = 0;
var dr_gradient_end_3 = 1;

var gradient_color_3;

while((gradient_color_3 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function draw_circular_gradient_3()
{	
	context.beginPath();
	gradient_3 = context.createRadialGradient(x_gradient_start_3, y_gradient_start_3, r_gradient_start_3, 
	                                          x_gradient_end_3, y_gradient_end_3, r_gradient_end_3);
	gradient_3.addColorStop(0, gradient_color_3);
	gradient_3.addColorStop(1, "white");
	context.fillStyle = gradient_3;
	context.fillRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.closePath();
	//x_gradient_start_3 = x_rectangle + dx_gradient_start_3;
	//y_gradient_start_3 = y_rectangle + dy_gradient_start_3;
	//x_gradient_end_3 = x_rectangle + dx_gradient_end_3;
	y_gradient_end_3 = y_rectangle + dy_gradient_end_3; 
	//r_gradient_start_3 = r_gradient_start_3 + dr_gradient_start_3;
	r_gradient_end_3 = r_gradient_end_3 + dr_gradient_end_3;
}

//----------------------------------------

var x_gradient_start_4;
var y_gradient_start_4;
var x_gradient_end_4;
var y_gradient_end_4; 
var r_gradient_start_4;  
var r_gradient_end_4;


x_gradient_start_4 = x_rectangle + width_rectangle/2;
y_gradient_start_4 = y_rectangle + height_rectangle/2;
x_gradient_end_4 = x_rectangle + width_rectangle;
y_gradient_end_4 = y_rectangle + height_rectangle; 
r_gradient_start_4 = 0;  
r_gradient_end_4 = 1; 

	
var gradient_4;
var dx_gradient_start_4 = 1;
var dy_gradient_start_4 = 1;
var dx_gradient_end_4 = 1;
var dy_gradient_end_4 = 1;
var dr_gradient_start_4 = 0;
var dr_gradient_end_4 = 1;

var gradient_color_4;

while((gradient_color_4 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")

{
	continue;
}

function draw_circular_gradient_4()
{	
	context.beginPath();
	gradient_4 = context.createRadialGradient(x_gradient_start_4, y_gradient_start_4, r_gradient_start_4, 
	                                          x_gradient_end_4, y_gradient_end_4, r_gradient_end_4);
	gradient_4.addColorStop(0, gradient_color_4);
	gradient_4.addColorStop(1, "white");
	context.fillStyle = gradient_4;
	context.fillRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	context.closePath();
	//x_gradient_start_4 = x_rectangle + dx_gradient_start_4;
	//y_gradient_start_4 = y_rectangle + dy_gradient_start_4;
	//x_gradient_end_4 = x_rectangle + dx_gradient_end_4;
	//y_gradient_end_4 = y_rectangle + dy_gradient_end_4; 
	//r_gradient_start_4 = r_gradient_start_4 + dr_gradient_start_4;
	r_gradient_end_4 = r_gradient_end_4 + dr_gradient_end_4;
}

//----------------------------------------

function my_animation()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.strokeStyle = "grey"; 
	context.strokeRect(x_rectangle, y_rectangle, width_rectangle, height_rectangle);
	draw_circular_gradient_0();
	draw_circular_gradient_1();
	draw_circular_gradient_2();
	draw_circular_gradient_3();
	draw_circular_gradient_4();
	
	//-------------------------------------------------------------------------------------------------
	
	if((r_gradient_end_0 >= width_rectangle * 0.5) || (r_gradient_end_0 >= height_rectangle * 0.5))
	{
		dr_gradient_end_0 = -dr_gradient_end_0;
	}
	
	if((r_gradient_end_0 <= 1) || (r_gradient_end_0 <= 1))
	{
		dr_gradient_end_0 = -dr_gradient_end_0;
		while((gradient_color_0 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
		{
			continue;
		}
	}
	
	//-------------------------------------------------------------------------------------------------
	
	if((r_gradient_end_1 >= width_rectangle/2) || (r_gradient_end_1 >= height_rectangle/2))
	{
		dr_gradient_end_1 = -dr_gradient_end_1;
	}
	
	if((r_gradient_end_1 <= 1) || (r_gradient_end_1 <= 1))
	{
		dr_gradient_end_1 = -dr_gradient_end_1;
		while((gradient_color_1 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
		{
			continue;
		}
	}
	
	//-------------------------------------------------------------------------------------------------
	
	if((r_gradient_end_2 >= width_rectangle/2) || (r_gradient_end_2 >= height_rectangle/2))
	{
		dr_gradient_end_2 = -dr_gradient_end_2;
	}
	
	if((r_gradient_end_2 <= 1) || (r_gradient_end_2 <= 1))
	{
		dr_gradient_end_2 = -dr_gradient_end_2;
		while((gradient_color_2 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
		{
			continue;
		}
	}
	
	//-------------------------------------------------------------------------------------------------
	
	if((r_gradient_end_3 >= width_rectangle/2) || (r_gradient_end_3 >= height_rectangle/2))
	{
		dr_gradient_end_3 = -dr_gradient_end_3;
	}
	
	if((r_gradient_end_3 <= 1) || (r_gradient_end_3 <= 1))
	{
		dr_gradient_end_3 = -dr_gradient_end_3;
		while((gradient_color_3 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
		{
			continue;
		}
	}
	
	//-------------------------------------------------------------------------------------------------
	
	if((r_gradient_end_4 >= width_rectangle/2) || (r_gradient_end_4 >= height_rectangle/2))
	{
		dr_gradient_end_4 = -dr_gradient_end_4;
	}

	if((r_gradient_end_4 <= 1) || (r_gradient_end_4 <= 1))
	{
		dr_gradient_end_4 = -dr_gradient_end_4;
		while((gradient_color_4 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
		{
			continue;
		}
	}
}

var interval = setInterval(my_animation, 1);

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
