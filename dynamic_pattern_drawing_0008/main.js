//author: froginafog (Liang D.S.)
var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var counterclockwise = true;
var angle_circle_start = 0;
var angle_circle_end = 2*Math.PI;

var x_0 = canvas.width/2;
var y_0 = canvas.height/2;

var frequency_min = 2;
var frequency_max = 15;

var r_circle_min = 30;
var r_circle_max = 100;

var r_0_min = 10;
var r_0_max = 40;

var dr_0_min = 3;
var dr_0_max = 20;

//-------------------------------------------------------------------------------------

var x_circle_1 = x_0;  //x-coordinate of the center of circle 1
var y_circle_1 = y_0;  //y-coordinate of the center of circle 1
var r_circle_1 = get_random_integer(r_circle_min, r_circle_max);  //radius of circle 1
var color_circle_1 = get_random_color();
var r_0_1 = get_random_integer(r_0_min, r_0_max);  //distance between the center of the frame and the center of circle 1  
var f_1 = get_random_integer(frequency_min, frequency_max);  //frequency of circle 1 
var w_1 = 2*Math.PI*f_1;  //angular frequency of circle 1
var t_1 = 0; 
var dt_1 = 0.01;
var dr_0_1 = 0.1 * get_random_integer(dr_0_min, dr_0_max);

function draw_circle_1()
{
	context.beginPath();
	context.arc(x_circle_1, y_circle_1, r_circle_1, angle_circle_start, angle_circle_end, counterclockwise);
	context.strokeStyle = color_circle_1;
	context.lineWidth = 1;
	context.stroke();
	context.closePath();
}

function animate_1()
{
	x_circle_1 = x_0 + r_0_1 * Math.cos(w_1 * t_1);
	y_circle_1 = y_0 - r_0_1 * Math.sin(w_1 * t_1);
	draw_circle_1();
	t_1 = t_1 + dt_1;
	r_0_1 = r_0_1 + dr_0_1;
}

//-------------------------------------------------------------------------------------

var x_circle_2 = x_0;  //x-coordinate of the center of circle 2
var y_circle_2 = y_0;  //y-coordinate of the center of circle 2
var r_circle_2 = r_circle_1;  //radius of circle 2
var color_circle_2 = get_random_color();
var r_0_2 = r_0_1 + r_circle_2;  //distance between the center of the frame and the center of circle 2  
var f_2 = get_random_integer(frequency_min, frequency_max);  //frequency of circle 2 
var w_2 = 2*Math.PI*f_2;  //angular frequency of circle 2
var t_2 = 0; 
var dt_2 = 0.01;
var dr_0_2 = 0.1 * get_random_integer(dr_0_min, dr_0_max);

function draw_circle_2()
{
	context.beginPath();
	context.arc(x_circle_2, y_circle_2, r_circle_2, angle_circle_start, angle_circle_end, counterclockwise);
	context.strokeStyle = color_circle_2;
	context.lineWidth = 1;
	context.stroke();
	context.closePath();
}

function animate_2()
{
	x_circle_2 = x_0 + r_0_2 * Math.cos(w_2 * t_2);
	y_circle_2 = y_0 + r_0_2 * Math.sin(w_2 * t_2);
	draw_circle_2();
	t_2 = t_2 + dt_2;
	r_0_2 = r_0_2 + dr_0_2;
}

//-------------------------------------------------------------------------------------

var x_circle_3 = x_0;  //x-coordinate of the center of circle 3
var y_circle_3 = y_0;  //y-coordinate of the center of circle 3
var r_circle_3 = r_circle_1;  //radius of circle 3
var color_circle_3 = get_random_color();
var r_0_3 = r_0_2 + r_circle_3;  //distance between the center of the frame and the center of circle 3
var f_3 = get_random_integer(frequency_min, frequency_max);  //frequency of circle 3 
var w_3 = 2*Math.PI*f_3;  //angular frequency of circle 3
var t_3 = 0; 
var dt_3 = 0.01;
var dr_0_3 = 0.1 * get_random_integer(dr_0_min, dr_0_max);

function draw_circle_3()
{
	context.beginPath();
	context.arc(x_circle_3, y_circle_3, r_circle_3, angle_circle_start, angle_circle_end, counterclockwise);
	context.strokeStyle = color_circle_3;
	context.lineWidth = 1;
	context.stroke();
	context.closePath();
}

function animate_3()
{
	x_circle_3 = x_0 + r_0_3 * Math.cos(w_3 * t_3);
	y_circle_3 = y_0 - r_0_3 * Math.sin(w_3 * t_3);
	draw_circle_3();
	t_3 = t_3 + dt_3;
	r_0_3 = r_0_3 + dr_0_3;
}

//-------------------------------------------------------------------------------------

var x_circle_4 = x_0;  //x-coordinate of the center of circle 4
var y_circle_4 = y_0;  //y-coordinate of the center of circle 4
var r_circle_4 = r_circle_1;  //radius of circle 4
var color_circle_4 = get_random_color();
var r_0_4 = r_0_3 + r_circle_4;  //distance between the center of the frame and the center of circle 4
var f_4 = get_random_integer(frequency_min, frequency_max);  //frequency of circle 4 
var w_4 = 2*Math.PI*f_4;  //angular frequency of circle 4
var t_4 = 0; 
var dt_4 = 0.01;
var dr_0_4 = 0.1 * get_random_integer(dr_0_min, dr_0_max);

function draw_circle_4()
{
	context.beginPath();
	context.arc(x_circle_4, y_circle_4, r_circle_4, angle_circle_start, angle_circle_end, counterclockwise);
	context.strokeStyle = color_circle_4;
	context.lineWidth = 1;
	context.stroke();
	context.closePath();
}

function animate_4()
{
	x_circle_4 = x_0 + r_0_4 * Math.cos(w_4 * t_4);
	y_circle_4 = y_0 + r_0_4 * Math.sin(w_4 * t_4);
	draw_circle_4();
	t_4 = t_4 + dt_4;
	r_0_4 = r_0_4 + dr_0_4;
}

//-------------------------------------------------------------------------------------

var x_circle_5 = x_0;  //x-coordinate of the center of circle 5
var y_circle_5 = y_0;  //y-coordinate of the center of circle 5
var r_circle_5 = r_circle_1;  //radius of circle 5
var color_circle_5 = get_random_color();
var r_0_5 = r_0_4 + r_circle_5;  //distance between the center of the frame and the center of circle 5
var f_5 = get_random_integer(frequency_min, frequency_max);  //frequency of circle 5 
var w_5 = 2*Math.PI*f_5;  //angular frequency of circle 5
var t_5 = 0; 
var dt_5 = 0.01;
var dr_0_5 = 0.1 * get_random_integer(dr_0_min, dr_0_max);

function draw_circle_5()
{
	context.beginPath();
	context.arc(x_circle_5, y_circle_5, r_circle_5, angle_circle_start, angle_circle_end, counterclockwise);
	context.strokeStyle = color_circle_5;
	context.lineWidth = 1;
	context.stroke();
	context.closePath();
}

function animate_5()

{
	x_circle_5 = x_0 + r_0_5 * Math.cos(w_5 * t_5);
	y_circle_5 = y_0 - r_0_5 * Math.sin(w_5 * t_5);
	draw_circle_5();
	t_5 = t_5 + dt_5;
	r_0_5 = r_0_5 + dr_0_5;
}

//-------------------------------------------------------------------------------------

var interval_1;

function start_interval_1()
{
	interval_1 = setInterval(animate_1, 50);
}

function clear_interval_1()
{
	clearInterval(interval_1);
}

//-------------------------------------------------------------------------------------

var interval_2;

function start_interval_2()
{
	interval_2 = setInterval(animate_2, 50);
}

function clear_interval_2()
{
	clearInterval(interval_2);
}

//-------------------------------------------------------------------------------------

var interval_3;

function start_interval_3()
{
	interval_3 = setInterval(animate_3, 50);
}

function clear_interval_3()
{
	clearInterval(interval_3);
}

//-------------------------------------------------------------------------------------

var interval_4;

function start_interval_4()
{
	interval_4 = setInterval(animate_4, 50);
}

function clear_interval_4()
{
	clearInterval(interval_4);
}

//-------------------------------------------------------------------------------------

var interval_5;

function start_interval_5()
{
	interval_5 = setInterval(animate_5, 50);
}

function clear_interval_5()
{
	clearInterval(interval_5);
}

//-------------------------------------------------------------------------------------

function start_all_intervals()
{
	interval_1 = setInterval(animate_1, 50);
	interval_2 = setInterval(animate_2, 50);
	interval_3 = setInterval(animate_3, 50);
	interval_4 = setInterval(animate_4, 50);
	interval_5 = setInterval(animate_5, 50);
}

function clear_all_intervals()
{
	clearInterval(interval_1);
	clearInterval(interval_2);
	clearInterval(interval_3);
	clearInterval(interval_4);
	clearInterval(interval_5);
}

function reset()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	clear_all_intervals();
	f_1 = get_random_integer(frequency_min, frequency_max);
	f_2 = get_random_integer(frequency_min, frequency_max);
	f_3 = get_random_integer(frequency_min, frequency_max);
	f_4 = get_random_integer(frequency_min, frequency_max);
	f_5 = get_random_integer(frequency_min, frequency_max);
	w_1 = 2*Math.PI*f_1;
	w_2 = 2*Math.PI*f_2;
	w_3 = 2*Math.PI*f_3;
	w_4 = 2*Math.PI*f_4;
	w_5 = 2*Math.PI*f_5;
	r_circle_1 = get_random_integer(r_circle_min, r_circle_max);
	r_circle_2 = get_random_integer(r_circle_min, r_circle_max);
	r_circle_3 = get_random_integer(r_circle_min, r_circle_max);
	r_circle_4 = get_random_integer(r_circle_min, r_circle_max);
	r_circle_5 = get_random_integer(r_circle_min, r_circle_max);
	r_0_1 = get_random_integer(r_0_min, r_0_max); 
	r_0_2 = r_0_1 + r_circle_2;
	r_0_3 = r_0_2 + r_circle_3;
	r_0_4 = r_0_3 + r_circle_4;
	r_0_5 = r_0_4 + r_circle_5;
	dr_0_1 = 0.1 * get_random_integer(dr_0_min, dr_0_max);
	dr_0_2 = 0.1 * get_random_integer(dr_0_min, dr_0_max);
	dr_0_3 = 0.1 * get_random_integer(dr_0_min, dr_0_max);
	dr_0_4 = 0.1 * get_random_integer(dr_0_min, dr_0_max);
	dr_0_5 = 0.1 * get_random_integer(dr_0_min, dr_0_max);
	color_circle_1 = get_random_color();
	color_circle_2 = get_random_color();
	color_circle_3 = get_random_color();
	color_circle_4 = get_random_color();
	color_circle_5 = get_random_color();
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

