//author: froginafog (Liang D.S.)

function draw_rectangle(x_top_left_corner, y_top_left_corner, 
                        width_rectangle, height_rectangle, 
                        context, line_width, line_color)
{
	context.beginPath();
	context.lineWidth = line_width;
	context.strokeStyle = line_color;
	context.strokeRect(x_top_left_corner, y_top_left_corner, width_rectangle, height_rectangle);
	context.closePath();
}

function draw_circle(x_circle_center, y_circle_center, radius,
                     angle_start, angle_end, is_counterclockwise,
                     context, line_width, line_color)
{
	context.beginPath();
	context.lineWidth = line_width;
	context.strokeStyle = line_color;
	context.arc(x_circle_center, y_circle_center, radius,
	            angle_start, angle_end, is_counterclockwise);
	context.stroke();
	context.closePath();
}

function draw_line_AB(x_A, y_A, x_B, y_B, context, line_width, line_color)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_A, y_A);
	context.lineTo(x_B, y_B);
	context.stroke();
	context.closePath();
}

function draw_line_BC(x_B, y_B, x_C, y_C, context, line_width, line_color)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_B, y_B);
	context.lineTo(x_C, y_C);
	context.stroke();
	context.closePath();
}

function draw_line_CA(x_C, y_C, x_A, y_A, context, line_width, line_color)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_C, y_C);
	context.lineTo(x_A, y_A);
	context.stroke();
	context.closePath();
}

function draw_triangle(x_A, y_A, x_B, y_B, x_C, y_C, context, line_width, line_color)
{
	draw_line_AB(x_A, y_A, x_B, y_B, context, line_width, line_color);
	draw_line_BC(x_B, y_B, x_C, y_C, context, line_width, line_color);
	draw_line_CA(x_C, y_C, x_A, y_A, context, line_width, line_color);
}

function main()
{
	document.body.style.backgroundColor = "midnightblue";
	
	//--------------------------------------------------------------------------------------
	//create the canvas

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = 900;
	canvas.height = 900;
	var canvas_left = 500;
	var canvas_top = 0;
	canvas.style.position = "absolute";
	canvas.style.left = canvas_left + "px";
	canvas.style.top = canvas_top + "px";
	canvas.style.border = "1px solid silver";
	var x_canvas_center = canvas.width/2;
	var y_canvas_center = canvas.height/2;
	
	//--------------------------------------------------------------------------------------
	//draw the rectangle
	
	var width_rectangle = 400;  
	var height_rectangle = 400;
	draw_rectangle(x_canvas_center - width_rectangle/2, y_canvas_center - height_rectangle/2,
	               width_rectangle, height_rectangle,
	               context, 3, "lightblue");
	               
	//--------------------------------------------------------------------------------------
	//draw the circle
	               
	var x_circle_center = x_canvas_center;
	var y_circle_center = y_canvas_center;
	var circle_radius = height_rectangle/2;
	
	draw_circle(x_circle_center, y_circle_center, circle_radius,
	            0, 2*Math.PI, true,
	            context, 3, "orange");
	
	//--------------------------------------------------------------------------------------
	//draw the triangle
	
	var x_A;
	var y_A;
	var x_B;
	var y_B;
	var x_C;
	var y_C;
	var side_length;
	side_length = Math.sqrt(3)*height_rectangle/2;
	x_B = x_canvas_center;
	y_B = y_canvas_center - circle_radius;
	x_A = x_B - side_length/2;
	y_A = y_B + Math.sqrt(3)*side_length/2;
	x_C = x_A + side_length;
	y_C = y_A;
	draw_triangle(x_A, y_A, x_B, y_B, x_C, y_C, context, 3, "lightgreen");
}

main();

