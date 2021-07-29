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

function animate_line_left_to_right(x_line_min, x_line_max, y_line_min, y_line_max ,x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(x_line_tail, x_line_head, y_line_tail, y_line_head, context, line_width, line_color);
	
	if(x_line_head <= x_line_min + line_length)
	{
		x_line_head = x_line_head + 1;
	}

	if(x_line_head >= x_line_min + line_length && x_line_head < x_line_max)
	{
		x_line_tail = x_line_tail + 1;
		x_line_head = x_line_head + 1;
	}
	
	if(x_line_head == x_line_max)
	{
		x_line_tail = x_line_tail + 1;
		draw_line(x_line_max, x_line_max, y_line_max, y_line_max - (line_length - (x_line_head - x_line_tail)), context, line_width, line_color);
	}
	
	if(x_line_tail == x_line_max)
	{
		clearInterval(interval);
		y_line_tail = y_line_max;
		y_line_head = y_line_max - line_length;
		var interval_animate_line_bottom_to_top = setInterval(function(){[y_line_tail, y_line_head] = animate_line_bottom_to_top(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_bottom_to_top)}, 5);
	}
	
	return [x_line_tail, x_line_head];
}

function animate_line_top_to_bottom(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(x_line_tail, x_line_head, y_line_tail, y_line_head, context, line_width, line_color);
	
	if(y_line_head <= y_line_min + line_length)
	{
		y_line_head = y_line_head + 1;
	}

	if(y_line_head >= y_line_min + line_length && y_line_head < y_line_max)
	{
		y_line_tail = y_line_tail + 1;
		y_line_head = y_line_head + 1;
	}
	
	if(y_line_head == y_line_max)
	{
		y_line_tail = y_line_tail + 1;
		draw_line(x_line_min, x_line_min + (line_length - (y_line_max - y_line_tail)), y_line_max, y_line_max, context, line_width, line_color);
	}
	
	if(y_line_tail == y_line_max)
	{
		clearInterval(interval);
		x_line_tail = x_line_min;
		x_line_head = x_line_min + line_length;
		var interval_animate_line_left_to_right = setInterval(function(){[x_line_tail, x_line_head] = animate_line_left_to_right(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_left_to_right)}, 5); 
	}
	
	return [y_line_tail, y_line_head];
}

function animate_line_right_to_left(x_line_min, x_line_max, y_line_min, y_line_max ,x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(x_line_tail, x_line_head, y_line_tail, y_line_head, context, line_width, line_color);
	
	if(x_line_head <= x_line_max - line_length && x_line_head > x_line_min)
	{
		x_line_tail = x_line_tail - 1;
		x_line_head = x_line_head - 1;
	}
	
	if(x_line_head == x_line_min)
	{
		x_line_tail = x_line_tail - 1;
		draw_line(x_line_min, x_line_min, y_line_min, y_line_min + (line_length - (x_line_tail - x_line_min)), context, line_width, line_color);
	}
	
	if(x_line_tail == x_line_min)
	{
		clearInterval(interval);
		y_line_tail = y_line_min;
		y_line_head = y_line_min + line_length;
		var interval_animate_line_top_to_bottom = setInterval(function(){[y_line_tail, y_line_head] = animate_line_top_to_bottom(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_top_to_bottom)}, 5);
	}
	
	return [x_line_tail, x_line_head];
}

function animate_line_bottom_to_top(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(x_line_tail, x_line_head, y_line_tail, y_line_head, context, line_width, line_color);
	
	if(y_line_head > y_line_min && y_line_tail > y_line_min + line_length)
	{
		y_line_head = y_line_head - 1;
		y_line_tail = y_line_tail - 1;
	}

	if(y_line_head == y_line_min)
	{
		y_line_tail = y_line_tail - 1;
		draw_line(x_line_max, x_line_max - (line_length - (y_line_tail - y_line_min)), y_line_min, y_line_min, context, line_width, line_color);
	}
	
	if(y_line_tail == y_line_min)
	{
		clearInterval(interval);
		x_line_tail = x_line_max;
		x_line_head = x_line_max - line_length;
		var interval_animate_line_right_to_left = setInterval(function(){[x_line_tail, x_line_head] = animate_line_right_to_left(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_right_to_left)}, 5); 
	}
	
	return [y_line_tail, y_line_head];
}


function animate_line_rectangular_path_counterclockwise(x_line_min, x_line_max, y_line_min, y_line_max, canvas, context, line_length, line_width, line_color)
{
	var x_line_tail = x_line_min;
	var x_line_head = x_line_min;
	var y_line_tail = y_line_min;
	var y_line_head = y_line_min;
	
	var interval_animate_line_top_to_bottom = setInterval(function(){[y_line_tail, y_line_head] = animate_line_top_to_bottom(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_top_to_bottom)}, 5);
}

function main()
{
	document.body.style.backgroundColor = "black";

	var canvas_1 = document.getElementById("canvas_1");
	var context_1 = canvas_1.getContext("2d");
	canvas_1.width = 800;
	canvas_1.height = 800;
	
	var canvas_1_left = 0;
	var canvas_1_top = 0;
	canvas_1.style.position = "absolute";
	canvas_1.style.left = canvas_1_left + "px";
	canvas_1.style.top = canvas_1_top + "px";
	canvas_1.style.border = "1px solid silver";
	
	var x_line_1_min = 0.2*canvas_1.width;
	var x_line_1_max = 0.8*canvas_1.width;
	var y_line_1_min = 0.2*canvas_1.height;
	var y_line_1_max = 0.8*canvas_1.height;
	
	var line_1_length;
	var line_1_width;
	var line_1_color;
	
	line_1_length = 200;
	line_1_width = 2;
	line_1_color = get_random_color();

	animate_line_rectangular_path_counterclockwise(x_line_1_min, x_line_1_max, y_line_1_min, y_line_1_max, canvas_1, context_1, line_1_length, line_1_width, line_1_color);
}

main();


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
