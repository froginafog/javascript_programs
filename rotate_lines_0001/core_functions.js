function draw_line(x_line_start, y_line_start, x_line_end, y_line_end, context, line_width, line_color)
{
	context.beginPath();
	context.strokeStyle = line_color;
	context.lineWidth = line_width;
	context.moveTo(x_line_start, y_line_start);
	context.lineTo(x_line_end, y_line_end);
	context.stroke();
	context.closePath();
}



