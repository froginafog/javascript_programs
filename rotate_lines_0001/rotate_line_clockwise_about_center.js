function rotate_line_clockwise_about_center(x_A, y_A, x_B, y_B, x_P, y_P, angle, dangle, 
                                            canvas, context, line_width, line_color)
{
	//context.clearRect(0, 0, canvas.width, canvas.height);
	
	var PA_x = x_A - x_P;
	var PA_y = y_A - y_P;
	var PB_x = x_B - x_P;
	var PB_y = y_B - y_P;	
	
	var PA = Math.sqrt(PA_x * PA_x + PA_y * PA_y);
	var PB = Math.sqrt(PB_x * PB_x + PB_y * PB_y);
	
	PA_x = PA * Math.sin(3*Math.PI/2 + angle);
	PA_y = PA * Math.cos(3*Math.PI/2 + angle);
	PB_x = PB * Math.cos(angle);
	PB_y = PB * Math.sin(angle);
	
	x_A = x_P + PA_x;
	y_A = y_P - PA_y;
	x_B = x_P + PB_x;
	y_B = y_P + PB_y;
	
	draw_line(x_P, y_P, x_A, y_A, context, line_width, line_color);
	draw_line(x_P, y_P, x_B, y_B, context, line_width, line_color);
	
	angle = angle + dangle;
	
	return [x_A, y_A, x_B, y_B, angle];
}

