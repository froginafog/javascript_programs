var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var width_frame = 1300;
var height_frame = 900;

var x_frame = canvas.width/9.5;
var y_frame = 0;

context.strokeStyle = "gray"; 
context.strokeRect(x_frame, y_frame, width_frame, height_frame);

//-------------------------------------------------------------------------------------

var r_0_1 = height_frame/3;  //distance between the center of top of frame and the center of circle 1
var theta_circle_1;  //angle of oscillation of circle 1
var x_circle_1;  //x-coordinate of the center of circle 1
var y_circle_1;  //y-coordinate of the center of circle 1
var r_circle_1 = 80;  //redius of circle 1 

var angle_circle_start_1 = 0;
var angle_circle_end_1 = 2*Math.PI;
var counterclockwise = true;
var color_circle_1 = "yellow";
var x_circle_data_1 = [];
var y_circle_data_1 = [];

//-------------------------------------------------------------------------------------

var r_1_2 = 300;  //distance between the center of circle 1 and the center of circle 2

var f_2 = 0.1;  //frequency of circle 2
var w_2 = 2*Math.PI*f_2;  //angular frequency of circle 2
var phi_2 = 0;  //phase angle of circle 2
var x_circle_2 = x_circle_1 + r_1_2 * Math.cos(w_2*0 - phi_2);
var y_circle_2 = y_circle_1 + r_1_2 * Math.sin(w_2*0 - phi_2);
var r_circle_2 = 20; 
var angle_circle_start_2 = 0;
var angle_circle_end_2 = 2*Math.PI;
var counterclockwise = true;
var color_circle_2 = "blue";
var x_circle_data_2 = [];
var y_circle_data_2 = [];

//-------------------------------------------------------------------------------------

var r_2_3 = 50;  //distance between the center of circle 2 and the center of circle 3

var f_3 = 0.5;  //frequency of circle 3
var w_3 = 2*Math.PI*f_3;  //angular frequency of circle 3
var phi_3 = 0;  //phase angle of circle 3
var x_circle_3 = x_circle_2 + r_2_3 * Math.cos(w_3*0 - phi_3);
var y_circle_3 = y_circle_2 + r_2_3 * Math.sin(w_3*0 - phi_3);
var r_circle_3 = 10; 
var angle_circle_start_3 = 0;
var angle_circle_end_3 = 2*Math.PI;
var counterclockwise = true;
var color_circle_3 = "silver";
var x_circle_data_3 = [];
var y_circle_data_3 = [];

//-------------------------------------------------------------------------------------

function theta_circle_1(t)
{
	var theta_circle_1_amplitude = 1;
	var g = 9.8;
	return theta_circle_1_amplitude * Math.cos(Math.sqrt(g/r_0_1)*t);
}

for(var t = 0; t < 2000; t = t + 0.02)
{
	x_circle_1 = x_frame + width_frame/2 + r_0_1 * Math.sin(theta_circle_1(t));
	y_circle_1 = y_frame + height_frame/4 + r_0_1 * Math.cos(theta_circle_1(t));
	x_circle_data_1.push(x_circle_1);
	y_circle_data_1.push(y_circle_1);
	
	x_circle_data_2.push(x_circle_2);
	y_circle_data_2.push(y_circle_2);
	x_circle_2 = x_circle_1 + r_1_2 * Math.cos(w_2*t - phi_2);
	y_circle_2 = y_circle_1 + r_1_2 * Math.sin(w_2*t - phi_2);
	
	x_circle_data_3.push(x_circle_3);
	y_circle_data_3.push(y_circle_3);
	x_circle_3 = x_circle_2 + r_2_3 * Math.cos(w_3*t - phi_3);
	y_circle_3 = y_circle_2 + r_2_3 * Math.sin(w_3*t - phi_3);
}

//-------------------------------------------------------------------------------------

var i = 0;  

function draw_circle_1()
{
	context.beginPath();
	context.arc(x_circle_data_1[i], y_circle_data_1[i], r_circle_1, angle_circle_start_1, angle_circle_end_1, counterclockwise);
	context.fillStyle = color_circle_1;
	context.fill();
	context.closePath();
}

function draw_circle_2()
{
	context.beginPath();
	context.arc(x_circle_data_2[i], y_circle_data_2[i], r_circle_2, angle_circle_start_2, angle_circle_end_2, counterclockwise);
	context.fillStyle = color_circle_2;
	context.fill();
	context.closePath();
}

function draw_circle_3()
{
	context.beginPath();
	context.arc(x_circle_data_3[i], y_circle_data_3[i], r_circle_3, angle_circle_start_3, angle_circle_end_3, counterclockwise);
	context.fillStyle = color_circle_3;
	context.fill();
	context.closePath();
}

function draw_line_1()
{
	for(var j = 0; j < i - 1; j++)
	{
		context.beginPath();
		context.strokeStyle = color_circle_1;
		context.lineWidth = 1;
		context.moveTo(x_circle_data_1[j], y_circle_data_1[j]);
		context.lineTo(x_circle_data_1[j+1], y_circle_data_1[j+1]);
		context.stroke();
		context.closePath();
	}
}

function draw_line_2()
{
	for(var j = 0; j < i - 1; j++)
	{
		context.beginPath();
		context.strokeStyle = color_circle_2;
		context.lineWidth = 1;
		context.moveTo(x_circle_data_2[j], y_circle_data_2[j]);
		context.lineTo(x_circle_data_2[j+1], y_circle_data_2[j+1]);
		context.stroke();
		context.closePath();
	}
}

function draw_line_3()
{
	for(var j = 0; j < i - 1; j++)
	{
		context.beginPath()
		context.strokeStyle = color_circle_3;
		context.lineWidth = 1;
		context.moveTo(x_circle_data_3[j], y_circle_data_3[j]);
		context.lineTo(x_circle_data_3[j+1], y_circle_data_3[j+1]);
		context.stroke();
		context.closePath();
	}
}

var blue = 1;
var dblue = 1;

function animate()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.strokeStyle = "grey"; 
	context.strokeRect(x_frame, y_frame, width_frame, height_frame);
	draw_circle_1();
	draw_circle_2();
	draw_circle_3();
	draw_line_1();
	draw_line_2();
	draw_line_3();
	if(i % 2 == 0)
	{
		if(blue == 0 || blue == 220)
		{
			dblue = -dblue;
		}
		document.body.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + blue + ")";
		blue = blue + dblue;
	}
	i++;
}

var interval = setInterval(animate, 1);   //pause 1 milliseconds per interval



