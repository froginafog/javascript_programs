function draw_line(context, x_line_start, x_line_end, y_line_start, y_line_end, line_width, line_color)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_line_start, y_line_start);
	context.lineTo(x_line_end, y_line_end);
	context.stroke();
	context.closePath();
}

function animate_line_left_to_right(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max ,x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(context, x_line_tail, x_line_head, y_line_tail, y_line_head, line_width, line_color);
	
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
		draw_line(context, x_line_max, x_line_max, y_line_min, y_line_min + line_length - (x_line_head - x_line_tail), line_width, line_color);
	}
	
	if(x_line_tail == x_line_max)
	{
		clearInterval(interval);
		y_line_tail = y_line_min;
		y_line_head = y_line_min + line_length;
		var interval_animate_line_top_to_bottom = setInterval(function(){[y_line_tail, y_line_head] = animate_line_top_to_bottom(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval_animate_line_top_to_bottom)}, 5);
	}
	
	return [x_line_tail, x_line_head];
}

function animate_line_top_to_bottom(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(context, x_line_tail, x_line_head, y_line_tail, y_line_head, line_width, line_color);
	
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
		draw_line(context, x_line_max, x_line_max - (line_length - (y_line_max - y_line_tail)), y_line_max, y_line_max, line_width, line_color);
	}
	
	if(y_line_tail == y_line_max)
	{
		clearInterval(interval);
		x_line_tail = x_line_max;
		x_line_head = x_line_max - line_length;
		var interval_animate_line_right_to_left = setInterval(function(){[x_line_tail, x_line_head] = animate_line_right_to_left(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval_animate_line_right_to_left)}, 5); 
	}
	
	return [y_line_tail, y_line_head];
}

function animate_line_right_to_left(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max ,x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(context, x_line_tail, x_line_head, y_line_tail, y_line_head, line_width, line_color);
	
	if(x_line_head <= x_line_max - line_length && x_line_head > x_line_min)
	{
		x_line_tail = x_line_tail - 1;
		x_line_head = x_line_head - 1;
	}
	
	if(x_line_head == x_line_min)
	{
		console.log("x_line_head == x_line_min");
		draw_line(context, x_line_min, x_line_min, y_line_tail, y_line_head -(line_length - (x_line_tail - x_line_min)), line_width, line_color);
		x_line_tail = x_line_tail - 1;
	}
	
	if(x_line_tail == x_line_min)
	{
		clearInterval(interval);
		y_line_tail = y_line_max;
		y_line_head = y_line_max - line_length;
		var interval_animate_line_bottom_to_top = setInterval(function(){[y_line_tail, y_line_head] = animate_line_bottom_to_top(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval_animate_line_bottom_to_top)}, 5);
	}
	
	return [x_line_tail, x_line_head];
}

function animate_line_bottom_to_top(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	line_color = get_random_color();
	draw_line(context, x_line_tail, x_line_head, y_line_tail, y_line_head, line_width, line_color);
	
	if(y_line_head > y_line_min && y_line_tail > y_line_min + line_length)
	{
		y_line_head = y_line_head - 1;
		y_line_tail = y_line_tail - 1;
	}

	if(y_line_head == y_line_min)
	{
		y_line_tail = y_line_tail - 1;
		draw_line(context, x_line_min, x_line_min + (line_length - (y_line_tail - y_line_min)), y_line_min, y_line_min, line_width, line_color);
	}
	
	if(y_line_tail == y_line_min)
	{
		clearInterval(interval);
		x_line_tail = x_line_min;
		x_line_head = x_line_min + line_length;
		var interval_animate_line_left_to_right = setInterval(function(){[x_line_tail, x_line_head] = animate_line_left_to_right (canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, line_length, line_width, line_color, interval_animate_line_left_to_right)}, 5); 
	}
	
	return [y_line_tail, y_line_head];
}


function main()
{
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
	
	var x_line_min = 0.2*canvas.width;
	var x_line_max = 0.8*canvas.width;
	var y_line_min = 0.2*canvas.height;
	var y_line_max = 0.8*canvas.height;

	var x_line_start;
	var x_line_end;
	var y_line_start;
	var y_line_end;
	
	var line_length;
	var line_width;
	var line_color;
	
	line_length = 200;
	line_width = 2;
	line_color = get_random_color();
	
	x_line_start = x_line_min;
	x_line_end = x_line_min;
	y_line_start = y_line_min;
	y_line_end = y_line_min;

	var interval_animate_line_left_to_right = setInterval(function(){[x_line_start, x_line_end] = animate_line_left_to_right(canvas, context, x_line_min, x_line_max, y_line_min, y_line_max, x_line_start, x_line_end, y_line_start, y_line_end, line_length, line_width, line_color, interval_animate_line_left_to_right)}, 5);
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
