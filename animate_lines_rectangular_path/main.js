function main()
{
	document.body.style.backgroundColor = "black";
	
	//--------------------------------------------------------------------------

	var canvas_1 = document.getElementById("canvas_1");
	var context_1 = canvas_1.getContext("2d");
	canvas_1.width = 800;
	canvas_1.height = 900;
	
	var canvas_1_left = 500;
	var canvas_1_top = 0;
	canvas_1.style.position = "absolute";
	canvas_1.style.left = canvas_1_left + "px";
	canvas_1.style.top = canvas_1_top + "px";
	canvas_1.style.border = "1px solid silver";
	
	var x_line_1_min = 0.05*canvas_1.width;
	var x_line_1_max = 0.95*canvas_1.width;
	var y_line_1_min = 0.05*canvas_1.height;
	var y_line_1_max = 0.95*canvas_1.height;
	
	var line_1_length = 150;
	var line_1_width = 2;
	var line_1_color = get_random_color();
	
	//--------------------------------------------------------------------------
	
	var canvas_2 = document.getElementById("canvas_2");
	var context_2 = canvas_2.getContext("2d");
	canvas_2.width = 800;
	canvas_2.height = 900;
	
	var canvas_2_left = 500;
	var canvas_2_top = 0;
	canvas_2.style.position = "absolute";
	canvas_2.style.left = canvas_2_left + "px";
	canvas_2.style.top = canvas_2_top + "px";
	canvas_2.style.border = "1px solid silver";
	
	var x_line_2_min = 0.1*canvas_2.width;
	var x_line_2_max = 0.9*canvas_2.width;
	var y_line_2_min = 0.1*canvas_2.height;
	var y_line_2_max = 0.9*canvas_2.height;
	
	var line_2_length = 150;
	var line_2_width = 2;
	var line_2_color = get_random_color();;
	
	//--------------------------------------------------------------------------
	
	var canvas_3 = document.getElementById("canvas_3");
	var context_3 = canvas_3.getContext("2d");
	canvas_3.width = 800;
	canvas_3.height = 900;
	
	var canvas_3_left = 500;
	var canvas_3_top = 0;
	canvas_3.style.position = "absolute";
	canvas_3.style.left = canvas_3_left + "px";
	canvas_3.style.top = canvas_3_top + "px";
	canvas_3.style.border = "1px solid silver";
	
	var x_line_3_min = 0.15*canvas_3.width;
	var x_line_3_max = 0.85*canvas_3.width;
	var y_line_3_min = 0.15*canvas_3.height;
	var y_line_3_max = 0.85*canvas_3.height;
	
	var line_3_length = 150;
	var line_3_width = 2;
	var line_3_color = get_random_color();
	
	//--------------------------------------------------------------------------
	
	var canvas_4 = document.getElementById("canvas_4");
	var context_4 = canvas_4.getContext("2d");
	canvas_4.width = 800;
	canvas_4.height = 900;
	
	var canvas_4_left = 500;
	var canvas_4_top = 0;
	canvas_4.style.position = "absolute";
	canvas_4.style.left = canvas_4_left + "px";
	canvas_4.style.top = canvas_4_top + "px";
	canvas_4.style.border = "1px solid silver";
	
	var x_line_4_min = 0.2*canvas_4.width;
	var x_line_4_max = 0.8*canvas_4.width;
	var y_line_4_min = 0.2*canvas_4.height;
	var y_line_4_max = 0.8*canvas_4.height;
	
	var line_4_length = 150;
	var line_4_width = 2;
	var line_4_color = get_random_color();
	
	//--------------------------------------------------------------------------
	
	var canvas_5 = document.getElementById("canvas_5");
	var context_5 = canvas_5.getContext("2d");
	canvas_5.width = 800;
	canvas_5.height = 900;
	
	var canvas_5_left = 500;
	var canvas_5_top = 0;
	canvas_5.style.position = "absolute";
	canvas_5.style.left = canvas_5_left + "px";
	canvas_5.style.top = canvas_5_top + "px";
	canvas_5.style.border = "1px solid silver";
	
	var x_line_5_min = 0.25*canvas_5.width;
	var x_line_5_max = 0.75*canvas_5.width;
	var y_line_5_min = 0.25*canvas_5.height;
	var y_line_5_max = 0.75*canvas_5.height;
	
	var line_5_length = 150;
	var line_5_width = 2;
	var line_5_color = get_random_color();
	
	//--------------------------------------------------------------------------
	
	var canvas_6 = document.getElementById("canvas_6");
	var context_6 = canvas_6.getContext("2d");
	canvas_6.width = 800;
	canvas_6.height = 900;
	
	var canvas_6_left = 500;
	var canvas_6_top = 0;
	canvas_6.style.position = "absolute";
	canvas_6.style.left = canvas_6_left + "px";
	canvas_6.style.top = canvas_6_top + "px";
	canvas_6.style.border = "1px solid silver";
	
	var x_line_6_min = 0.3*canvas_6.width;
	var x_line_6_max = 0.7*canvas_6.width;
	var y_line_6_min = 0.3*canvas_6.height;
	var y_line_6_max = 0.7*canvas_6.height;
	
	var line_6_length = 150;
	var line_6_width = 2;
	var line_6_color = get_random_color();
	
	//--------------------------------------------------------------------------

	animate_line_rectangular_path_clockwise(x_line_1_min, x_line_1_max, y_line_1_min, y_line_1_max, canvas_1, context_1, line_1_length, line_1_width, line_1_color);
	animate_line_rectangular_path_counterclockwise(x_line_2_min, x_line_2_max, y_line_2_min, y_line_2_max, canvas_2, context_2, line_2_length, line_2_width, line_2_color);
	animate_line_rectangular_path_clockwise(x_line_3_min, x_line_3_max, y_line_3_min, y_line_3_max, canvas_3, context_3, line_3_length, line_3_width, line_3_color);
	animate_line_rectangular_path_counterclockwise(x_line_4_min, x_line_4_max, y_line_4_min, y_line_4_max, canvas_4, context_4, line_4_length, line_4_width, line_4_color);
	animate_line_rectangular_path_clockwise(x_line_5_min, x_line_5_max, y_line_5_min, y_line_5_max, canvas_5, context_5, line_5_length, line_5_width, line_5_color);
	animate_line_rectangular_path_counterclockwise(x_line_6_min, x_line_6_max, y_line_6_min, y_line_6_max, canvas_6, context_6, line_6_length, line_6_width, line_6_color);
}

main();
