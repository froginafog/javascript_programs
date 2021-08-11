var canvas_1 = document.getElementById("canvas_1");
var context_1 = canvas_1.getContext("2d");

var width_frame_1 = canvas_1.width;
var height_frame_1 = canvas_1.height;

var x_gradient_start_1 = 0;
var y_gradient_start_1 = 0;
var x_gradient_end_1 = width_frame_1;
var y_gradient_end_1 = y_gradient_start_1;
	
var gradient_1;
var dx_gradient_start_1 = 1;
var dy_gradient_start_1 = 1;
var dx_gradient_end_1 = 1;
var dy_gradient_end_1 = 1;

var gradient_color_1 = get_random_color();

function draw_linear_gradient_1()
{
	context_1.beginPath();
	gradient_1 = context_1.createLinearGradient(x_gradient_start_1, y_gradient_start_1, 
	                                            x_gradient_end_1, y_gradient_end_1);
	gradient_1.addColorStop(0, gradient_color_1);
	gradient_1.addColorStop(1, "rgb(0,0,20)");
	context_1.fillStyle = gradient_1;
	context_1.fillRect(0, 0, width_frame_1, height_frame_1);
	context_1.closePath();
	x_gradient_start_1 = x_gradient_start_1 + dx_gradient_start_1;
	//y_gradient_start_1 = y_radient_start_1 + dy_gradient_start_1;
	//x_gradient_end_1 = x_gradient_end_1 + dx_gradient_end_1;
	//y_gradient_end_1 = y_gradient_end_1 + dy_gradient_end_1; 
}

function animate_canvas_1()
{
	//context_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
	draw_linear_gradient_1();
	if(x_gradient_start_1 >= width_frame_1)
	{
		dx_gradient_start_1 = -dx_gradient_start_1;
		clearInterval(interval_1);
		interval_2 = setInterval(animate_canvas_2, 1);
	}
	if(x_gradient_start_1 <= 0)
	{
		dx_gradient_start_1 = -dx_gradient_start_1;
		gradient_color_1 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_2 = document.getElementById("canvas_2");
var context_2 = canvas_2.getContext("2d");

var width_frame_2 = canvas_2.width;
var height_frame_2 = canvas_2.height;

var x_gradient_start_2 = 0;
var y_gradient_start_2 = 0;
var x_gradient_end_2 = width_frame_2;
var y_gradient_end_2 = y_gradient_start_2;
	
var gradient_2;
var dx_gradient_start_2 = 1;
var dy_gradient_start_2 = 1;
var dx_gradient_end_2 = 1;
var dy_gradient_end_2 = 1;

var gradient_color_2 = get_random_color();

function draw_linear_gradient_2()
{
	context_2.beginPath();
	gradient_2 = context_2.createLinearGradient(x_gradient_start_2, y_gradient_start_2, 
	                                            x_gradient_end_2, y_gradient_end_2);
	gradient_2.addColorStop(0, gradient_color_2);
	gradient_2.addColorStop(1, "rgb(0,0,20)");
	context_2.fillStyle = gradient_2;
	context_2.fillRect(0, 0, width_frame_2, height_frame_2);
	context_2.closePath();
	x_gradient_start_2 = x_gradient_start_2 + dx_gradient_start_2;
	//y_gradient_start_2 = y_radient_start_2 + dy_gradient_start_2;
	//x_gradient_end_2 = x_gradient_end_2 + dx_gradient_end_2;
	//y_gradient_end_2 = y_gradient_end_2 + dy_gradient_end_2; 
}

function animate_canvas_2()
{
	//context_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
	draw_linear_gradient_2();
	if(x_gradient_start_2 >= width_frame_2)
	{
		dx_gradient_start_2 = -dx_gradient_start_2;
		clearInterval(interval_2);
		interval_3 = setInterval(animate_canvas_3, 1);
	}
	if(x_gradient_start_2 <= 0)
	{
		dx_gradient_start_2 = -dx_gradient_start_2;
		clearInterval(interval_2, 1);
		interval_1 = setInterval(animate_canvas_1, 1);
		gradient_color_2 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_3 = document.getElementById("canvas_3");
var context_3 = canvas_3.getContext("2d");

var width_frame_3 = canvas_3.width;
var height_frame_3 = canvas_3.height;

var x_gradient_start_3 = 0;
var y_gradient_start_3 = 0;
var x_gradient_end_3 = width_frame_3;
var y_gradient_end_3 = y_gradient_start_3;
	
var gradient_3;
var dx_gradient_start_3 = 1;
var dy_gradient_start_3 = 1;
var dx_gradient_end_3 = 1;
var dy_gradient_end_3 = 1;

var gradient_color_3 = get_random_color();

function draw_linear_gradient_3()
{
	context_3.beginPath();
	gradient_3 = context_3.createLinearGradient(x_gradient_start_3, y_gradient_start_3, 
	                                            x_gradient_end_3, y_gradient_end_3);
	gradient_3.addColorStop(0, gradient_color_3);
	gradient_3.addColorStop(1, "rgb(0,0,20)");
	context_3.fillStyle = gradient_3;
	context_3.fillRect(0, 0, width_frame_3, height_frame_3);
	context_3.closePath();
	x_gradient_start_3 = x_gradient_start_3 + dx_gradient_start_3;
	//y_gradient_start_3 = y_radient_start_3 + dy_gradient_start_3;
	//x_gradient_end_3 = x_gradient_end_3 + dx_gradient_end_3;
	//y_gradient_end_3 = y_gradient_end_3 + dy_gradient_end_3; 
}

function animate_canvas_3()
{
	//context_3.clearRect(0, 0, canvas_3.width, canvas_3.height);
	draw_linear_gradient_3();
	if(x_gradient_start_3 >= width_frame_3)
	{
		dx_gradient_start_3 = -dx_gradient_start_3;
		clearInterval(interval_3);
		interval_4 = setInterval(animate_canvas_4, 1);
	}
	if(x_gradient_start_3 <= 0)
	{
		dx_gradient_start_3 = -dx_gradient_start_3;
		clearInterval(interval_3);
		interval_2 = setInterval(animate_canvas_2, 1);
		gradient_color_3 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_4 = document.getElementById("canvas_4");
var context_4 = canvas_4.getContext("2d");

var width_frame_4 = canvas_4.width;
var height_frame_4 = canvas_4.height;

var x_gradient_start_4 = 0;
var y_gradient_start_4 = 0;
var x_gradient_end_4 = width_frame_4;
var y_gradient_end_4 = y_gradient_start_4;
	
var gradient_4;
var dx_gradient_start_4 = 1;
var dy_gradient_start_4 = 1;
var dx_gradient_end_4 = 1;
var dy_gradient_end_4 = 1;

var gradient_color_4 = get_random_color();

function draw_linear_gradient_4()
{
	context_4.beginPath();
	gradient_4 = context_4.createLinearGradient(x_gradient_start_4, y_gradient_start_4, 
	                                            x_gradient_end_4, y_gradient_end_4);
	gradient_4.addColorStop(0, gradient_color_4);
	gradient_4.addColorStop(1, "rgb(0,0,20)");
	context_4.fillStyle = gradient_4;
	context_4.fillRect(0, 0, width_frame_4, height_frame_4);
	context_4.closePath();
	x_gradient_start_4 = x_gradient_start_4 + dx_gradient_start_4;
	//y_gradient_start_4 = y_radient_start_4 + dy_gradient_start_4;
	//x_gradient_end_4 = x_gradient_end_4 + dx_gradient_end_4;
	//y_gradient_end_4 = y_gradient_end_4 + dy_gradient_end_4; 
}

function animate_canvas_4()
{
	//context_4.clearRect(0, 0, canvas_4.width, canvas_4.height);
	draw_linear_gradient_4();
	if(x_gradient_start_4 >= width_frame_4)
	{
		dx_gradient_start_4 = -dx_gradient_start_4;
		clearInterval(interval_4);
		interval_5 = setInterval(animate_canvas_5, 1);
	}
	if(x_gradient_start_4 <= 0)
	{
		dx_gradient_start_4 = -dx_gradient_start_4;
		clearInterval(interval_4);
		interval_3 = setInterval(animate_canvas_3, 1);
		gradient_color_4 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_5 = document.getElementById("canvas_5");
var context_5 = canvas_5.getContext("2d");

var width_frame_5 = canvas_5.width;
var height_frame_5 = canvas_5.height;

var x_gradient_start_5 = 0;
var y_gradient_start_5 = 0;
var x_gradient_end_5 = width_frame_5;
var y_gradient_end_5 = y_gradient_start_5;
	
var gradient_5;
var dx_gradient_start_5 = 1;
var dy_gradient_start_5 = 1;
var dx_gradient_end_5 = 1;
var dy_gradient_end_5 = 1;

var gradient_color_5 = get_random_color();

function draw_linear_gradient_5()
{
	context_5.beginPath();
	gradient_5 = context_5.createLinearGradient(x_gradient_start_5, y_gradient_start_5, 
	                                            x_gradient_end_5, y_gradient_end_5);
	gradient_5.addColorStop(0, gradient_color_5);
	gradient_5.addColorStop(1, "rgb(0,0,20)");
	context_5.fillStyle = gradient_5;
	context_5.fillRect(0, 0, width_frame_5, height_frame_5);
	context_5.closePath();
	x_gradient_start_5 = x_gradient_start_5 + dx_gradient_start_5;
	//y_gradient_start_5 = y_radient_start_5 + dy_gradient_start_5;
	//x_gradient_end_5 = x_gradient_end_5 + dx_gradient_end_5;
	//y_gradient_end_5 = y_gradient_end_5 + dy_gradient_end_5; 
}

function animate_canvas_5()
{
	//context_5.clearRect(0, 0, canvas_5.width, canvas_5.height);
	draw_linear_gradient_5();
	if(x_gradient_start_5 >= width_frame_5)
	{
		dx_gradient_start_5 = -dx_gradient_start_5;
		clearInterval(interval_5);
		interval_6 = setInterval(animate_canvas_6, 1);
	}
	if(x_gradient_start_5 <= 0)
	{
		dx_gradient_start_5 = -dx_gradient_start_5;
		clearInterval(interval_5);
		interval_4 = setInterval(animate_canvas_4, 1);
		gradient_color_5 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_6 = document.getElementById("canvas_6");
var context_6 = canvas_6.getContext("2d");

var width_frame_6 = canvas_6.width;
var height_frame_6 = canvas_6.height;

var x_gradient_start_6 = 0;
var y_gradient_start_6 = 0;
var x_gradient_end_6 = width_frame_6;
var y_gradient_end_6 = y_gradient_start_6;
	
var gradient_6;
var dx_gradient_start_6 = 1;
var dy_gradient_start_6 = 1;
var dx_gradient_end_6 = 1;
var dy_gradient_end_6 = 1;

var gradient_color_6 = get_random_color();

function draw_linear_gradient_6()
{
	context_6.beginPath();
	gradient_6 = context_6.createLinearGradient(x_gradient_start_6, y_gradient_start_6, 
	                                            x_gradient_end_6, y_gradient_end_6);
	gradient_6.addColorStop(0, gradient_color_6);
	gradient_6.addColorStop(1, "rgb(0,0,20)");
	context_6.fillStyle = gradient_6;
	context_6.fillRect(0, 0, width_frame_6, height_frame_6);
	context_6.closePath();
	x_gradient_start_6 = x_gradient_start_6 + dx_gradient_start_6;
	//y_gradient_start_6 = y_radient_start_6 + dy_gradient_start_6;
	//x_gradient_end_6 = x_gradient_end_6 + dx_gradient_end_6;
	//y_gradient_end_6 = y_gradient_end_6 + dy_gradient_end_6; 
}

function animate_canvas_6()
{
	//context_6.clearRect(0, 0, canvas_6.width, canvas_6.height);
	draw_linear_gradient_6();
	if(x_gradient_start_6 >= width_frame_6)
	{
		dx_gradient_start_6 = -dx_gradient_start_6;
		clearInterval(interval_6);
		interval_7 = setInterval(animate_canvas_7, 1);
	}
	if(x_gradient_start_6 <= 0)
	{
		dx_gradient_start_6 = -dx_gradient_start_6;
		clearInterval(interval_6);
		interval_5 = setInterval(animate_canvas_5, 1);
		gradient_color_6 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_7 = document.getElementById("canvas_7");
var context_7 = canvas_7.getContext("2d");

var width_frame_7 = canvas_7.width;
var height_frame_7 = canvas_7.height;

var x_gradient_start_7 = 0;
var y_gradient_start_7 = 0;
var x_gradient_end_7 = width_frame_7;
var y_gradient_end_7 = y_gradient_start_7;
	
var gradient_7;
var dx_gradient_start_7 = 1;
var dy_gradient_start_7 = 1;
var dx_gradient_end_7 = 1;
var dy_gradient_end_7 = 1;

var gradient_color_7 = get_random_color();

function draw_linear_gradient_7()
{
	context_7.beginPath();
	gradient_7 = context_7.createLinearGradient(x_gradient_start_7, y_gradient_start_7, 
	                                            x_gradient_end_7, y_gradient_end_7);
	gradient_7.addColorStop(0, gradient_color_7);
	gradient_7.addColorStop(1, "rgb(0,0,20)");
	context_7.fillStyle = gradient_7;
	context_7.fillRect(0, 0, width_frame_7, height_frame_7);
	context_7.closePath();
	x_gradient_start_7 = x_gradient_start_7 + dx_gradient_start_7;
	//y_gradient_start_7 = y_radient_start_7 + dy_gradient_start_7;
	//x_gradient_end_7 = x_gradient_end_7 + dx_gradient_end_7;
	//y_gradient_end_7 = y_gradient_end_7 + dy_gradient_end_7; 
}

function animate_canvas_7()
{
	//context_7.clearRect(0, 0, canvas_7.width, canvas_7.height);
	draw_linear_gradient_7();
	if(x_gradient_start_7 >= width_frame_7)
	{
		dx_gradient_start_7 = -dx_gradient_start_7;
		clearInterval(interval_7);
		interval_8 = setInterval(animate_canvas_8, 1);
	}
	if(x_gradient_start_7 <= 0)
	{
		dx_gradient_start_7 = -dx_gradient_start_7;
		clearInterval(interval_7);
		interval_6 = setInterval(animate_canvas_6, 1);
		gradient_color_7 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var canvas_8 = document.getElementById("canvas_8");
var context_8 = canvas_8.getContext("2d");

var width_frame_8 = canvas_8.width;
var height_frame_8 = canvas_8.height;

var x_gradient_start_8 = 0;
var y_gradient_start_8 = 0;
var x_gradient_end_8 = width_frame_8;
var y_gradient_end_8 = y_gradient_start_8;
	
var gradient_8;
var dx_gradient_start_8 = 1;
var dy_gradient_start_8 = 1;
var dx_gradient_end_8 = 1;
var dy_gradient_end_8 = 1;

var gradient_color_8 = get_random_color();

function draw_linear_gradient_8()
{
	context_8.beginPath();
	gradient_8 = context_8.createLinearGradient(x_gradient_start_8, y_gradient_start_8, 
	                                            x_gradient_end_8, y_gradient_end_8);
	gradient_8.addColorStop(0, gradient_color_8);
	gradient_8.addColorStop(1, "rgb(0,0,20)");
	context_8.fillStyle = gradient_8;
	context_8.fillRect(0, 0, width_frame_8, height_frame_8);
	context_8.closePath();
	x_gradient_start_8 = x_gradient_start_8 + dx_gradient_start_8;
	//y_gradient_start_8 = y_radient_start_8 + dy_gradient_start_8;
	//x_gradient_end_8 = x_gradient_end_8 + dx_gradient_end_8;
	//y_gradient_end_8 = y_gradient_end_8 + dy_gradient_end_8; 
}

function animate_canvas_8()
{
	//context_8.clearRect(0, 0, canvas_8.width, canvas_8.height);
	draw_linear_gradient_8();
	if(x_gradient_start_8 >= width_frame_8)
	{
		dx_gradient_start_8 = -dx_gradient_start_8;
	}
	if(x_gradient_start_8 <= 0)
	{
		dx_gradient_start_8 = -dx_gradient_start_8;
		clearInterval(interval_8);
		interval_7 = setInterval(animate_canvas_7, 1);
		gradient_color_8 = get_random_color();
	}
}

//-------------------------------------------------------------------------------------------

var interval_1;
var interval_2;
var interval_3;
var interval_4;
var interval_5;
var interval_6;
var interval_7;
var interval_8;

function start()
{
	interval_1 = setInterval(animate_canvas_1, 1);
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
	 
	 return "rgb(" + r + "," + g + "," + b + ")";
}
