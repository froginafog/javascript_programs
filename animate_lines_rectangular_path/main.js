//author: froginafog (Liang D.S.)
function main()
{
	for(var i = 0; i < 100000000; i++)
	{
		continue;
	}

	document.body.style.backgroundColor = "black";
	var line_length = 320;
	var scalar = 0.98;
	var dscalar = 0.02;
	
	//--------------------------------------------------------------------------

	var canvas_1 = document.getElementById("canvas_1");
	var context_1 = canvas_1.getContext("2d");
	canvas_1.width = 1900;
	canvas_1.height = 920;
	
	var canvas_1_left = 0;
	var canvas_1_top = 0;
	canvas_1.style.position = "absolute";
	canvas_1.style.left = canvas_1_left + "px";
	canvas_1.style.top = canvas_1_top + "px";
	//canvas_1.style.border = "1px solid silver";
	
	var x_line_1_min = (1 - scalar)*canvas_1.width;
	var x_line_1_max = scalar*canvas_1.width;
	var y_line_1_min = (1 - scalar)*canvas_1.height;
	var y_line_1_max = scalar*canvas_1.height;
	
	x_line_1_min = parseInt(x_line_1_min); 
	x_line_1_max = parseInt(x_line_1_max);
	y_line_1_min = parseInt(y_line_1_min);
	y_line_1_max = parseInt(y_line_1_max);
	
	var line_1_length = parseInt(scalar*line_length);
	var line_1_width = 2;
	var line_1_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_2 = document.getElementById("canvas_2");
	var context_2 = canvas_2.getContext("2d");
	canvas_2.width = 1900;
	canvas_2.height = 920;
	
	var canvas_2_left = 0;
	var canvas_2_top = 0;
	canvas_2.style.position = "absolute";
	canvas_2.style.left = canvas_2_left + "px";
	canvas_2.style.top = canvas_2_top + "px";
	//canvas_2.style.border = "1px solid silver";
	
	var x_line_2_min = (1 - scalar)*canvas_2.width;
	var x_line_2_max = scalar*canvas_2.width;
	var y_line_2_min = (1 - scalar)*canvas_2.height;
	var y_line_2_max = scalar*canvas_2.height;
	
	x_line_2_min = parseInt(x_line_2_min); 
	x_line_2_max = parseInt(x_line_2_max);
	y_line_2_min = parseInt(y_line_2_min);
	y_line_2_max = parseInt(y_line_2_max);
	
	var line_2_length = parseInt(scalar*line_length);
	var line_2_width = 2;
	var line_2_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_3 = document.getElementById("canvas_3");
	var context_3 = canvas_3.getContext("2d");
	canvas_3.width = 1900;
	canvas_3.height = 920;
	
	var canvas_3_left = 0;
	var canvas_3_top = 0;
	canvas_3.style.position = "absolute";
	canvas_3.style.left = canvas_3_left + "px";
	canvas_3.style.top = canvas_3_top + "px";
	//canvas_3.style.border = "1px solid silver";
	
	var x_line_3_min = (1 - scalar)*canvas_3.width;
	var x_line_3_max = scalar*canvas_3.width;
	var y_line_3_min = (1 - scalar)*canvas_3.height;
	var y_line_3_max = scalar*canvas_3.height;
	
	x_line_3_min = parseInt(x_line_3_min); 
	x_line_3_max = parseInt(x_line_3_max);
	y_line_3_min = parseInt(y_line_3_min);
	y_line_3_max = parseInt(y_line_3_max);
	
	var line_3_length = parseInt(scalar*line_length);
	var line_3_width = 2;
	var line_3_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_4 = document.getElementById("canvas_4");
	var context_4 = canvas_4.getContext("2d");
	canvas_4.width = 1900;
	canvas_4.height = 920;
	
	var canvas_4_left = 0;
	var canvas_4_top = 0;
	canvas_4.style.position = "absolute";
	canvas_4.style.left = canvas_4_left + "px";
	canvas_4.style.top = canvas_4_top + "px";
	//canvas_4.style.border = "1px solid silver";
	
	var x_line_4_min = (1 - scalar)*canvas_4.width;
	var x_line_4_max = scalar*canvas_4.width;
	var y_line_4_min = (1 - scalar)*canvas_4.height;
	var y_line_4_max = scalar*canvas_4.height;
	
	x_line_4_min = parseInt(x_line_4_min); 
	x_line_4_max = parseInt(x_line_4_max);
	y_line_4_min = parseInt(y_line_4_min);
	y_line_4_max = parseInt(y_line_4_max);
	
	var line_4_length = parseInt(scalar*line_length);
	var line_4_width = 2;
	var line_4_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_5 = document.getElementById("canvas_5");
	var context_5 = canvas_5.getContext("2d");
	canvas_5.width = 1900;
	canvas_5.height = 920;
	
	var canvas_5_left = 0;
	var canvas_5_top = 0;
	canvas_5.style.position = "absolute";
	canvas_5.style.left = canvas_5_left + "px";
	canvas_5.style.top = canvas_5_top + "px";
	//canvas_5.style.border = "1px solid silver";
	
	var x_line_5_min = (1 - scalar)*canvas_5.width;
	var x_line_5_max = scalar*canvas_5.width;
	var y_line_5_min = (1 - scalar)*canvas_5.height;
	var y_line_5_max = scalar*canvas_5.height;
	
	x_line_5_min = parseInt(x_line_5_min); 
	x_line_5_max = parseInt(x_line_5_max);
	y_line_5_min = parseInt(y_line_5_min);
	y_line_5_max = parseInt(y_line_5_max);
	
	var line_5_length = parseInt(scalar*line_length);
	var line_5_width = 2;
	var line_5_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_6 = document.getElementById("canvas_6");
	var context_6 = canvas_6.getContext("2d");
	canvas_6.width = 1900;
	canvas_6.height = 920;
	
	var canvas_6_left = 0;
	var canvas_6_top = 0;
	canvas_6.style.position = "absolute";
	canvas_6.style.left = canvas_6_left + "px";
	canvas_6.style.top = canvas_6_top + "px";
	//canvas_6.style.border = "1px solid silver";
	
	var x_line_6_min = (1 - scalar)*canvas_6.width;
	var x_line_6_max = scalar*canvas_6.width;
	var y_line_6_min = (1 - scalar)*canvas_6.height;
	var y_line_6_max = scalar*canvas_6.height;
	
	x_line_6_min = parseInt(x_line_6_min); 
	x_line_6_max = parseInt(x_line_6_max);
	y_line_6_min = parseInt(y_line_6_min);
	y_line_6_max = parseInt(y_line_6_max);
	
	var line_6_length = parseInt(scalar*line_length);
	var line_6_width = 2;
	var line_6_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_7 = document.getElementById("canvas_7");
	var context_7 = canvas_7.getContext("2d");
	canvas_7.width = 1900;
	canvas_7.height = 920;
	
	var canvas_7_left = 0;
	var canvas_7_top = 0;
	canvas_7.style.position = "absolute";
	canvas_7.style.left = canvas_7_left + "px";
	canvas_7.style.top = canvas_7_top + "px";
	//canvas_7.style.border = "1px solid silver";
	
	var x_line_7_min = (1 - scalar)*canvas_7.width;
	var x_line_7_max = scalar*canvas_7.width;
	var y_line_7_min = (1 - scalar)*canvas_7.height;
	var y_line_7_max = scalar*canvas_7.height;
	
	x_line_7_min = parseInt(x_line_7_min); 
	x_line_7_max = parseInt(x_line_7_max);
	y_line_7_min = parseInt(y_line_7_min);
	y_line_7_max = parseInt(y_line_7_max);
	
	var line_7_length = parseInt(scalar*line_length);
	var line_7_width = 2;
	var line_7_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_8 = document.getElementById("canvas_8");
	var context_8 = canvas_8.getContext("2d");
	canvas_8.width = 1900;
	canvas_8.height = 920;
	
	var canvas_8_left = 0;
	var canvas_8_top = 0;
	canvas_8.style.position = "absolute";
	canvas_8.style.left = canvas_8_left + "px";
	canvas_8.style.top = canvas_8_top + "px";
	//canvas_8.style.border = "1px solid silver";
	
	var x_line_8_min = (1 - scalar)*canvas_8.width;
	var x_line_8_max = scalar*canvas_8.width;
	var y_line_8_min = (1 - scalar)*canvas_8.height;
	var y_line_8_max = scalar*canvas_8.height;
	
	x_line_8_min = parseInt(x_line_8_min); 
	x_line_8_max = parseInt(x_line_8_max);
	y_line_8_min = parseInt(y_line_8_min);
	y_line_8_max = parseInt(y_line_8_max);
	
	var line_8_length = parseInt(scalar*line_length);
	var line_8_width = 2;
	var line_8_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_9 = document.getElementById("canvas_9");
	var context_9 = canvas_9.getContext("2d");
	canvas_9.width = 1900;
	canvas_9.height = 920;
	
	var canvas_9_left = 0;
	var canvas_9_top = 0;
	canvas_9.style.position = "absolute";
	canvas_9.style.left = canvas_9_left + "px";
	canvas_9.style.top = canvas_9_top + "px";
	//canvas_9.style.border = "1px solid silver";
	
	var x_line_9_min = (1 - scalar)*canvas_9.width;
	var x_line_9_max = scalar*canvas_9.width;
	var y_line_9_min = (1 - scalar)*canvas_9.height;
	var y_line_9_max = scalar*canvas_9.height;
	
	x_line_9_min = parseInt(x_line_9_min); 
	x_line_9_max = parseInt(x_line_9_max);
	y_line_9_min = parseInt(y_line_9_min);
	y_line_9_max = parseInt(y_line_9_max);
	
	var line_9_length = parseInt(scalar*line_length);
	var line_9_width = 2;
	var line_9_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_10 = document.getElementById("canvas_10");
	var context_10 = canvas_10.getContext("2d");
	canvas_10.width = 1900;
	canvas_10.height = 920;
	
	var canvas_10_left = 0;
	var canvas_10_top = 0;
	canvas_10.style.position = "absolute";
	canvas_10.style.left = canvas_10_left + "px";
	canvas_10.style.top = canvas_10_top + "px";
	//canvas_10.style.border = "1px solid silver";
	
	var x_line_10_min = (1 - scalar)*canvas_10.width;
	var x_line_10_max = scalar*canvas_10.width;
	var y_line_10_min = (1 - scalar)*canvas_10.height;
	var y_line_10_max = scalar*canvas_10.height;
	
	x_line_10_min = parseInt(x_line_10_min); 
	x_line_10_max = parseInt(x_line_10_max);
	y_line_10_min = parseInt(y_line_10_min);
	y_line_10_max = parseInt(y_line_10_max);
	
	var line_10_length = parseInt(scalar*line_length);
	var line_10_width = 2;
	var line_10_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_11 = document.getElementById("canvas_11");
	var context_11 = canvas_11.getContext("2d");
	canvas_11.width = 1900;
	canvas_11.height = 920;
	
	var canvas_11_left = 0;
	var canvas_11_top = 0;

	canvas_11.style.position = "absolute";
	canvas_11.style.left = canvas_11_left + "px";
	canvas_11.style.top = canvas_11_top + "px";
	//canvas_11.style.border = "1px solid silver";

	var x_line_11_min = (1 - scalar)*canvas_11.width;
	var x_line_11_max = scalar*canvas_11.width;
	var y_line_11_min = (1 - scalar)*canvas_11.height;
	var y_line_11_max = scalar*canvas_11.height;
	
	x_line_11_min = parseInt(x_line_11_min); 
	x_line_11_max = parseInt(x_line_11_max);
	y_line_11_min = parseInt(y_line_11_min);
	y_line_11_max = parseInt(y_line_11_max);
	
	var line_11_length = parseInt(scalar*line_length);
	var line_11_width = 2;
	var line_11_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_12 = document.getElementById("canvas_12");
	var context_12 = canvas_12.getContext("2d");
	canvas_12.width = 1900;
	canvas_12.height = 920;
	
	var canvas_12_left = 0;
	var canvas_12_top = 0;
	canvas_12.style.position = "absolute";
	canvas_12.style.left = canvas_12_left + "px";
	canvas_12.style.top = canvas_12_top + "px";
	//canvas_12.style.border = "1px solid silver";
	
	var x_line_12_min = (1 - scalar)*canvas_12.width;
	var x_line_12_max = scalar*canvas_12.width;
	var y_line_12_min = (1 - scalar)*canvas_12.height;
	var y_line_12_max = scalar*canvas_12.height;
	
	x_line_12_min = parseInt(x_line_12_min); 
	x_line_12_max = parseInt(x_line_12_max);
	y_line_12_min = parseInt(y_line_12_min);
	y_line_12_max = parseInt(y_line_12_max);
	
	var line_12_length = parseInt(scalar*line_length);
	var line_12_width = 2;
	var line_12_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_13 = document.getElementById("canvas_13");
	var context_13 = canvas_13.getContext("2d");
	canvas_13.width = 1900;
	canvas_13.height = 920;
	
	var canvas_13_left = 0;
	var canvas_13_top = 0;
	canvas_13.style.position = "absolute";
	canvas_13.style.left = canvas_13_left + "px";
	canvas_13.style.top = canvas_13_top + "px";
	//canvas_13.style.border = "1px solid silver";
	
	var x_line_13_min = (1 - scalar)*canvas_13.width;
	var x_line_13_max = scalar*canvas_13.width;
	var y_line_13_min = (1 - scalar)*canvas_13.height;
	var y_line_13_max = scalar*canvas_13.height;
	
	x_line_13_min = parseInt(x_line_13_min); 
	x_line_13_max = parseInt(x_line_13_max);
	y_line_13_min = parseInt(y_line_13_min);
	y_line_13_max = parseInt(y_line_13_max);
	
	var line_13_length = parseInt(scalar*line_length);
	var line_13_width = 2;
	var line_13_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_14 = document.getElementById("canvas_14");
	var context_14 = canvas_14.getContext("2d");
	canvas_14.width = 1900;
	canvas_14.height = 920;
	
	var canvas_14_left = 0;
	var canvas_14_top = 0;
	canvas_14.style.position = "absolute";
	canvas_14.style.left = canvas_14_left + "px";
	canvas_14.style.top = canvas_14_top + "px";
	//canvas_14.style.border = "1px solid silver";
	
	var x_line_14_min = (1 - scalar)*canvas_14.width;
	var x_line_14_max = scalar*canvas_14.width;
	var y_line_14_min = (1 - scalar)*canvas_14.height;
	var y_line_14_max = scalar*canvas_14.height;
	
	x_line_14_min = parseInt(x_line_14_min); 
	x_line_14_max = parseInt(x_line_14_max);
	y_line_14_min = parseInt(y_line_14_min);
	y_line_14_max = parseInt(y_line_14_max);
	
	var line_14_length = parseInt(scalar*line_length);
	var line_14_width = 2;
	var line_14_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_15 = document.getElementById("canvas_15");
	var context_15 = canvas_15.getContext("2d");
	canvas_15.width = 1900;
	canvas_15.height = 920;
	
	var canvas_15_left = 0;
	var canvas_15_top = 0;
	canvas_15.style.position = "absolute";
	canvas_15.style.left = canvas_15_left + "px";
	canvas_15.style.top = canvas_15_top + "px";
	//canvas_15.style.border = "1px solid silver";
	
	var x_line_15_min = (1 - scalar)*canvas_15.width;
	var x_line_15_max = scalar*canvas_15.width;
	var y_line_15_min = (1 - scalar)*canvas_15.height;
	var y_line_15_max = scalar*canvas_15.height;
	
	x_line_15_min = parseInt(x_line_15_min); 
	x_line_15_max = parseInt(x_line_15_max);
	y_line_15_min = parseInt(y_line_15_min);
	y_line_15_max = parseInt(y_line_15_max);
	
	var line_15_length = parseInt(scalar*line_length);
	var line_15_width = 2;
	var line_15_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_16 = document.getElementById("canvas_16");
	var context_16 = canvas_16.getContext("2d");
	canvas_16.width = 1900;
	canvas_16.height = 920;
	
	var canvas_16_left = 0;
	var canvas_16_top = 0;
	canvas_16.style.position = "absolute";
	canvas_16.style.left = canvas_16_left + "px";
	canvas_16.style.top = canvas_16_top + "px";
	//canvas_16.style.border = "1px solid silver";
	
	var x_line_16_min = (1 - scalar)*canvas_16.width;
	var x_line_16_max = scalar*canvas_16.width;
	var y_line_16_min = (1 - scalar)*canvas_16.height;
	var y_line_16_max = scalar*canvas_16.height;
	
	x_line_16_min = parseInt(x_line_16_min); 
	x_line_16_max = parseInt(x_line_16_max);
	y_line_16_min = parseInt(y_line_16_min);
	y_line_16_max = parseInt(y_line_16_max);
	
	var line_16_length = parseInt(scalar*line_length);
	var line_16_width = 2;
	var line_16_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_17 = document.getElementById("canvas_17");
	var context_17 = canvas_17.getContext("2d");
	canvas_17.width = 1900;
	canvas_17.height = 920;
	
	var canvas_17_left = 0;
	var canvas_17_top = 0;
	canvas_17.style.position = "absolute";
	canvas_17.style.left = canvas_17_left + "px";
	canvas_17.style.top = canvas_17_top + "px";
	//canvas_17.style.border = "1px solid silver";
	
	var x_line_17_min = (1 - scalar)*canvas_17.width;
	var x_line_17_max = scalar*canvas_17.width;
	var y_line_17_min = (1 - scalar)*canvas_17.height;
	var y_line_17_max = scalar*canvas_17.height;
	
	x_line_17_min = parseInt(x_line_17_min); 
	x_line_17_max = parseInt(x_line_17_max);
	y_line_17_min = parseInt(y_line_17_min);
	y_line_17_max = parseInt(y_line_17_max);
	
	var line_17_length = parseInt(scalar*line_length);
	var line_17_width = 2;
	var line_17_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------
	
	var canvas_18 = document.getElementById("canvas_18");
	var context_18 = canvas_18.getContext("2d");
	canvas_18.width = 1900;
	canvas_18.height = 920;
	
	var canvas_18_left = 0;
	var canvas_18_top = 0;
	canvas_18.style.position = "absolute";
	canvas_18.style.left = canvas_18_left + "px";
	canvas_18.style.top = canvas_18_top + "px";
	//canvas_18.style.border = "1px solid silver";
	
	var x_line_18_min = (1 - scalar)*canvas_18.width;
	var x_line_18_max = scalar*canvas_18.width;
	var y_line_18_min = (1 - scalar)*canvas_18.height;
	var y_line_18_max = scalar*canvas_18.height;
	
	x_line_18_min = parseInt(x_line_18_min); 
	x_line_18_max = parseInt(x_line_18_max);
	y_line_18_min = parseInt(y_line_18_min);
	y_line_18_max = parseInt(y_line_18_max);
	
	var line_18_length = parseInt(scalar*line_length);
	var line_18_width = 2;
	var line_18_color = get_random_color();
	
	scalar = scalar - dscalar;
	
	//--------------------------------------------------------------------------

	animate_line_rectangular_path_clockwise(x_line_1_min, x_line_1_max, y_line_1_min, y_line_1_max, canvas_1, context_1, line_1_length, line_1_width, line_1_color);
	animate_line_rectangular_path_counterclockwise(x_line_2_min, x_line_2_max, y_line_2_min, y_line_2_max, canvas_2, context_2, line_2_length, line_2_width, line_2_color);
	animate_line_rectangular_path_clockwise(x_line_3_min, x_line_3_max, y_line_3_min, y_line_3_max, canvas_3, context_3, line_3_length, line_3_width, line_3_color);
	animate_line_rectangular_path_counterclockwise(x_line_4_min, x_line_4_max, y_line_4_min, y_line_4_max, canvas_4, context_4, line_4_length, line_4_width, line_4_color);
	animate_line_rectangular_path_clockwise(x_line_5_min, x_line_5_max, y_line_5_min, y_line_5_max, canvas_5, context_5, line_5_length, line_5_width, line_5_color);
	animate_line_rectangular_path_counterclockwise(x_line_6_min, x_line_6_max, y_line_6_min, y_line_6_max, canvas_6, context_6, line_6_length, line_6_width, line_6_color);
	animate_line_rectangular_path_clockwise(x_line_7_min, x_line_7_max, y_line_7_min, y_line_7_max, canvas_7, context_7, line_7_length, line_7_width, line_7_color);
	animate_line_rectangular_path_counterclockwise(x_line_8_min, x_line_8_max, y_line_8_min, y_line_8_max, canvas_8, context_8, line_8_length, line_8_width, line_8_color);
	animate_line_rectangular_path_clockwise(x_line_9_min, x_line_9_max, y_line_9_min, y_line_9_max, canvas_9, context_9, line_9_length, line_9_width, line_9_color);
	animate_line_rectangular_path_counterclockwise(x_line_10_min, x_line_10_max, y_line_10_min, y_line_10_max, canvas_10, context_10, line_10_length, line_10_width, line_10_color);
	animate_line_rectangular_path_clockwise(x_line_11_min, x_line_11_max, y_line_11_min, y_line_11_max, canvas_11, context_11, line_11_length, line_11_width, line_11_color);
	animate_line_rectangular_path_counterclockwise(x_line_12_min, x_line_12_max, y_line_12_min, y_line_12_max, canvas_12, context_12, line_12_length, line_12_width, line_12_color);
	animate_line_rectangular_path_clockwise(x_line_13_min, x_line_13_max, y_line_13_min, y_line_13_max, canvas_13, context_13, line_13_length, line_13_width, line_13_color);
	animate_line_rectangular_path_counterclockwise(x_line_14_min, x_line_14_max, y_line_14_min, y_line_14_max, canvas_14, context_14, line_14_length, line_14_width, line_14_color);
	animate_line_rectangular_path_clockwise(x_line_15_min, x_line_15_max, y_line_15_min, y_line_15_max, canvas_15, context_15, line_15_length, line_15_width, line_15_color);
	animate_line_rectangular_path_counterclockwise(x_line_16_min, x_line_16_max, y_line_16_min, y_line_16_max, canvas_16, context_16, line_16_length, line_16_width, line_16_color);
	animate_line_rectangular_path_clockwise(x_line_17_min, x_line_17_max, y_line_17_min, y_line_17_max, canvas_17, context_17, line_17_length, line_17_width, line_17_color);
	animate_line_rectangular_path_counterclockwise(x_line_18_min, x_line_18_max, y_line_18_min, y_line_18_max, canvas_18, context_18, line_18_length, line_18_width, line_18_color);
}

main();
