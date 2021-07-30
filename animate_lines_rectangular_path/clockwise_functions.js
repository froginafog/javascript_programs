//author: froginafog (Liang D.S)
function animate_line_left_to_right_clockwise(x_line_min, x_line_max, y_line_min, y_line_max ,x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
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
		draw_line(x_line_max, x_line_max, y_line_min, y_line_min + line_length - (x_line_head - x_line_tail), context, line_width, line_color);
	}
	
	if(x_line_tail == x_line_max)
	{
		clearInterval(interval);
		y_line_tail = y_line_min;
		y_line_head = y_line_min + line_length;
		var interval_animate_line_top_to_bottom_clockwise = setInterval(function(){[y_line_tail, y_line_head] = animate_line_top_to_bottom_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_top_to_bottom_clockwise)}, 5);
	}
	
	return [x_line_tail, x_line_head];
}

function animate_line_top_to_bottom_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
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
		draw_line(x_line_max, x_line_max - (line_length - (y_line_max - y_line_tail)), y_line_max, y_line_max, context, line_width, line_color);
	}
	
	if(y_line_tail == y_line_max)
	{
		clearInterval(interval);
		x_line_tail = x_line_max;
		x_line_head = x_line_max - line_length;
		var interval_animate_line_right_to_left_clockwise = setInterval(function(){[x_line_tail, x_line_head] = animate_line_right_to_left_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_right_to_left_clockwise)}, 5); 
	}
	
	return [y_line_tail, y_line_head];
}

function animate_line_right_to_left_clockwise(x_line_min, x_line_max, y_line_min, y_line_max ,x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
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
		draw_line(x_line_min, x_line_min, y_line_tail, y_line_head -(line_length - (x_line_tail - x_line_min)), context, line_width, line_color);
		x_line_tail = x_line_tail - 1;
	}
	
	if(x_line_tail == x_line_min)
	{
		clearInterval(interval);
		y_line_tail = y_line_max;
		y_line_head = y_line_max - line_length;
		var interval_animate_line_bottom_to_top_clockwise = setInterval(function(){[y_line_tail, y_line_head] = animate_line_bottom_to_top_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_bottom_to_top_clockwise)}, 5);
	}
	
	return [x_line_tail, x_line_head];
}

function animate_line_bottom_to_top_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval)
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
		draw_line(x_line_min, x_line_min + (line_length - (y_line_tail - y_line_min)), y_line_min, y_line_min, context, line_width, line_color);
	}
	
	if(y_line_tail == y_line_min)
	{
		clearInterval(interval);
		x_line_tail = x_line_min;
		x_line_head = x_line_min + line_length;
		var interval_animate_line_left_to_right_clockwise = setInterval(function(){[x_line_tail, x_line_head] = animate_line_left_to_right_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_left_to_right_clockwise)}, 5); 
	}
	
	return [y_line_tail, y_line_head];
}

function animate_line_rectangular_path_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, canvas, context, line_length, line_width, line_color)
{
	var x_line_tail = x_line_min;
	var x_line_head = x_line_min;
	var y_line_tail = y_line_min;
	var y_line_head = y_line_min;
	
	var interval_animate_line_left_to_right_clockwise = setInterval(function(){[x_line_tail, x_line_head] = animate_line_left_to_right_clockwise(x_line_min, x_line_max, y_line_min, y_line_max, x_line_tail, x_line_head, y_line_tail, y_line_head, canvas, context, line_length, line_width, line_color, interval_animate_line_left_to_right_clockwise)}, 5);
}



