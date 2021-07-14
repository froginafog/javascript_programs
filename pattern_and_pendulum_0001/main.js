//author: froginafog (Liang D.S.)
var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var width_frame = 1400;
var height_frame = 900;

var x_frame = canvas.width/9.5;
var y_frame = 0;

context.strokeStyle = "gray"; 
context.strokeRect(x_frame, y_frame, width_frame, height_frame);

var interval_1;
var interval_2;
var interval_3;  //after interval_1 and interval_2

var counterclockwise = true;

//-------------------------------------------------------------------------------------

var x_0 = x_frame + width_frame/2;
var y_0 = y_frame + height_frame/2;

var r_0_1_min = 30;
var r_0_1_max = r_0_1_min + 150;

var r_0_1 = r_0_1_min;
var dr_0_1 = 0.06;
var theta_0_1 = 0;
var dtheta_0_1 = 0.01;

var x_1 = x_0 + r_0_1_min * Math.cos(theta_0_1); 
var y_1 = y_0 - r_0_1_min * Math.sin(theta_0_1); 

var r_sentinel = r_0_1_max + 1;

function animate_1()
{
	 context.beginPath();
	 context.moveTo(x_0 + r_0_1_min * Math.cos(theta_0_1), y_0 - r_0_1_min * Math.sin(theta_0_1));
	 context.lineTo(x_1, y_1);
	 context.strokeStyle = get_random_color();
	 context.lineWidth = 2;
	 context.stroke();
	 context.closePath();
	 
	 r_0_1 = r_0_1 + dr_0_1;
	 theta_0_1 = theta_0_1 + dtheta_0_1;
	 
	 if(r_0_1 > r_sentinel)
	 {
	 	clearInterval(interval_1);
	 	clearInterval(interval_2);
	 	interval_3 = setInterval(animate_3, 1);
	 }
	 
	 x_1 = x_0 + r_0_1 * Math.cos(theta_0_1);
	 y_1 = y_0 - r_0_1 * Math.sin(theta_0_1); 
}

interval_1 = setInterval(animate_1, 1);   //pause 1 milliseconds per interval

//-------------------------------------------------------------------------------------

var r_0_2_min = r_0_1_max;
var r_0_2_max = r_0_2_min + 150;

var r_0_2 = r_0_2_max;
var dr_0_2 = -0.06;
var theta_0_2 = 0;
var dtheta_0_2 = -0.01;

var x_2 = x_0 + r_0_2_max * Math.cos(theta_0_2); 
var y_2 = y_0 - r_0_2_max * Math.sin(theta_0_2); 

function animate_2()
{
	 context.beginPath();
	 context.moveTo(x_0 + r_0_2_max * Math.cos(theta_0_2), y_0 - r_0_2_max * Math.sin(theta_0_2));
	 context.lineTo(x_2, y_2);
	 context.strokeStyle = get_random_color();
	 context.lineWidth = 2;
	 context.stroke();
	 context.closePath();
	 
	 r_0_2 = r_0_2 + dr_0_2;
	 theta_0_2 = theta_0_2 + dtheta_0_2;
	 x_2 = x_0 + r_0_2 * Math.cos(theta_0_2);
	 y_2 = y_0 - r_0_2 * Math.sin(theta_0_2); 
}

interval_2 = setInterval(animate_2, 1);

//-----------------------------------------------------------------------

var t = 0;
var dt = 0.05;

function animate_3()
{
	 context.clearRect(0, 0, canvas.width, canvas.height);
	 context.strokeStyle = "gray"; 
	 context.strokeRect(x_frame, y_frame, width_frame, height_frame);
	 
	 //----------------------------------------------------------------
	 
	 context.beginPath();
	 context.moveTo(x_0 + r_0_1_min * Math.cos(theta_0_1), y_0 - r_0_1_min * Math.sin(theta_0_1));
	 context.lineTo(x_1, y_1);
	 context.strokeStyle = get_random_color();
	 context.lineWidth = 4;
	 context.stroke();
	 context.closePath();
	 
	 theta_0_1 = theta_0_1 + dtheta_0_1;
	 
	 x_1 = x_0 + r_0_1 * Math.cos(theta_0_1);
	 y_1 = y_0 - r_0_1 * Math.sin(theta_0_1); 
	 
	 //----------------------------------------------------------------
	 
	 context.beginPath();
	 context.moveTo(x_0 + r_0_2_max * Math.cos(theta_0_2), y_0 - r_0_2_max * Math.sin(theta_0_2));
	 context.lineTo(x_2, y_2);
	 context.strokeStyle = get_random_color();
	 context.lineWidth = 4;
	 context.stroke();
	 context.closePath();

	 theta_0_2 = theta_0_2 + dtheta_0_2;
	 x_2 = x_0 + r_0_2 * Math.cos(theta_0_2);
	 y_2 = y_0 - r_0_2 * Math.sin(theta_0_2); 
	 
	 //----------------------------------------------------------------
	 
	 draw_circle_0();
	 draw_circle_1();
	 draw_circle_2();
	 draw_line_to_circle_0();
	 
	 //----------------------------------------------------------------
	 
	 x_circle_0 = x_0;
	 y_circle_0 = y_0;
	 x_circle_1 = x_0;
	 y_circle_1 = y_0;
	 x_circle_2 = x_0;
	 y_circle_2 = y_0;
	 
	 //----------------------------------------------------------------
	 
	 x_0 = x_frame + width_frame/2 + L * Math.sin(theta_circle_0(t));
	 y_0 = y_frame + L * Math.cos(theta_circle_0(t));
	 t = t + dt;
}

//---------------------------------------------------------------

var x_circle_0;  //x coordinate of the center of the circle
var y_circle_0;  //y coordinate of the center of the circle
var r_circle_0;  //radius of the circle 

x_circle_0 = x_frame + width_frame/2;
y_circle_0 = y_frame + height_frame/2;
r_circle_0 = r_0_1_min;  

var angle_circle_0_start = 0;
var angle_circle_0_end = 2 * Math.PI;

function draw_circle_0()
{
	context.beginPath()
	context.lineWidth = 5;
	context.strokeStyle = get_random_color();
	context.arc(x_circle_0, y_circle_0, r_circle_0, angle_circle_0_start, angle_circle_0_end, counterclockwise);
	context.stroke();
	context.closePath();
}

//---------------------------------------------------------------

var x_circle_1;  //x coordinate of the center of the circle
var y_circle_1;  //y coordinate of the center of the circle
var r_circle_1;  //radius of the circle 

x_circle_1 = x_frame + width_frame/2;
y_circle_1 = y_frame + height_frame/2;
r_circle_1 = r_0_1_max;  

var angle_circle_1_start = 0;
var angle_circle_1_end = 2 * Math.PI;

function draw_circle_1()
{
	context.beginPath()
	context.lineWidth = 5;
	context.strokeStyle = get_random_color();
	context.arc(x_circle_1, y_circle_1, r_circle_1, angle_circle_1_start, angle_circle_1_end, counterclockwise);
	context.stroke();
	context.closePath();
}

//---------------------------------------------------------------

var x_circle_2;  //x coordinate of the center of the circle
var y_circle_2;  //y coordinate of the center of the circle
var r_circle_2;  //radius of the circle 

x_circle_2 = x_frame + width_frame/2;
y_circle_2 = y_frame + height_frame/2;
r_circle_2 = r_0_2_max;  

var angle_circle_2_start = 0;
var angle_circle_2_end = 2 * Math.PI;

function draw_circle_2()
{
	context.beginPath()
	context.lineWidth = 5;
	context.strokeStyle = get_random_color();
	context.arc(x_circle_2, y_circle_2, r_circle_2, angle_circle_2_start, angle_circle_2_end, counterclockwise);
	context.stroke();
	context.closePath();
}

//-----------------------------------------------------------------------

var L = y_0;  //length of the pendulum

function theta_circle_0(t)
{
	var theta_circle_0_amplitude = 0.5;
	var g = 9.8;
	return theta_circle_0_amplitude * Math.cos(Math.sqrt(g/L)*t);
}

//-----------------------------------------------------------------------

var x_frame_top = x_frame + width_frame/2;
var y_frame_top = y_frame;

function draw_line_to_circle_0()
{
	context.beginPath();
	context.moveTo(x_frame_top, y_frame_top);
	context.lineTo(x_0, y_0);
	context.strokeStyle = get_random_color();
	context.lineWidth = 2;
	context.stroke();
	context.closePath();
}

//-----------------------------------------------------------------------

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
	 
	 return "rgb(" + r + "," + b + "," + g + ")";
}

//-----------------------------------------------------------------------


