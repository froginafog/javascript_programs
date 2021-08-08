//author: froginafog (Liang D.S.)
function main()
{
	document.body.style.backgroundColor = "black";

	//create canvas 
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = 1000;
	canvas.height = 1000;
	var canvas_left = 0;
	var canvas_top = 50;
	canvas.style.position = "absolute";
	canvas.style.left = canvas_left + "px";
	canvas.style.top = canvas_top + "px";
	//canvas.style.border = "1px solid silver";
	var x_canvas_center = canvas.width/2;
	var y_canvas_center = canvas.height/2;
	
	var canvas_dleft = 0.5;
	
	//draw line 1
	var line_1_length = 400;
	var line_1_width = 3;
	var line_1_color = "green";
	
	//draw line 1 segment PA
	var x_P_1 = x_canvas_center;
	var y_P_1 = y_canvas_center;
	var x_A_1 = x_canvas_center - line_1_length/2;
	var y_A_1 = y_canvas_center;
	draw_line(x_P_1, y_P_1, x_A_1, y_A_1, context, line_1_width, line_1_color);
	
	//draw line 1 segment PB
	var x_B_1 = x_canvas_center + line_1_length/2;
	var y_B_1 = y_canvas_center;
	draw_line(x_P_1, y_P_1, x_B_1, y_B_1, context, line_1_width, line_1_color);
	
	//angles of line 1
	var angle_1 = 0;
	var dangle_1 = 0.0002*Math.PI;
																		  
	//--------------------------------------------------------------------------------------
	
	//draw line 2
	var line_2_length = 400;
	var line_2_width = 3;
	var line_2_color = "blue";
	
	//draw line 2 segment PA
	var x_P_2 = x_canvas_center;
	var y_P_2 = y_canvas_center;
	var x_A_2 = x_canvas_center - line_2_length/2;
	var y_A_2 = y_canvas_center;
	draw_line(x_P_2, y_P_2, x_A_2, y_A_2, context, line_2_width, line_2_color);
	
	//draw line 2 segment PB
	var x_B_2 = x_canvas_center + line_2_length/2;
	var y_B_2 = y_canvas_center;
	draw_line(x_P_2, y_P_2, x_B_2, y_B_2, context, line_2_width, line_2_color);
	
	//angles of line 2
	var angle_2 = Math.PI/2;
	var dangle_2 = 0.0002*Math.PI;
	
	//--------------------------------------------------------------------------------------
	
	var dangle_factor = 3.5;
	var line_length_factor = 0.6;
	
	//--------------------------------------------------------------------------------------

	//draw line 3 (to rotate about point A of line 1)
	var line_3_length = line_length_factor*line_1_length;
	var line_3_width = 3;
	var line_3_color = "darkturquoise";
	
	//draw line 3 segment PA
	var x_P_3 = x_A_1;
	var y_P_3 = y_A_1;
	var x_A_3 = x_P_3;
	var y_A_3 = y_P_3 - line_3_length/2;
	draw_line(x_P_3, y_P_3, x_A_3, y_A_3, context, line_3_width, line_3_color);
	
	//draw line 3 segment PB
	var x_B_3 = x_P_3;
	var y_B_3 = y_P_3 + line_3_length/2;
	draw_line(x_P_3, y_P_3, x_B_3, y_B_3, context, line_3_width, line_3_color);

	//angles of line 3
	var angle_3 = angle_1;
	var dangle_3 = dangle_factor * dangle_1;
	
	//--------------------------------------------------------------------------------------

	//draw line 4 (to rotate about point B of line 1)
	var line_4_length = line_length_factor*line_1_length;
	var line_4_width = 3;
	var line_4_color = "darkturquoise";
	
	//draw line 4 segment PA

	var x_P_4 = x_B_1;
	var y_P_4 = y_B_1;
	var x_A_4 = x_P_4;
	var y_A_4 = y_P_4 - line_4_length/2;
	draw_line(x_P_4, y_P_4, x_A_4, y_A_4, context, line_4_width, line_4_color);
	
	//draw line 4 segment PB
	var x_B_4 = x_P_4;
	var y_B_4 = y_P_4 + line_4_length/2;
	draw_line(x_P_4, y_P_4, x_B_4, y_B_4, context, line_4_width, line_4_color);

	//angles of line 4
	var angle_4 = angle_1;
	var dangle_4 = dangle_factor * dangle_1;
	
	//--------------------------------------------------------------------------------------

	//draw line 5 (to rotate about point A of line 2)
	var line_5_length = line_length_factor*line_2_length;
	var line_5_width = 3;
	var line_5_color = "steelblue";
	
	//draw line 5 segment PA
	var x_P_5 = x_A_2;
	var y_P_5 = y_A_2;
	var x_A_5 = x_P_5;
	var y_A_5 = y_P_5 - line_5_length/2;
	draw_line(x_P_5, y_P_5, x_A_5, y_A_5, context, line_5_width, line_5_color);
	
	//draw line 5 segment PB
	var x_B_5 = x_P_5;
	var y_B_5 = y_P_5 + line_5_length/2;
	draw_line(x_P_5, y_P_5, x_B_5, y_B_5, context, line_5_width, line_5_color);

	//angles of line 5
	var angle_5 = angle_2;
	var dangle_5 = dangle_factor * dangle_2;
	
	//--------------------------------------------------------------------------------------

	//draw line 6 (to rotate about point B of line 2)
	var line_6_length = line_length_factor*line_2_length;
	var line_6_width = 3;
	var line_6_color = "steelblue";
	
	//draw line 6 segment PA
	var x_P_6 = x_B_2;
	var y_P_6 = y_B_2;
	var x_A_6 = x_P_6;
	var y_A_6 = y_P_6 - line_6_length/2;
	draw_line(x_P_6, y_P_6, x_A_6, y_A_6, context, line_6_width, line_6_color);
	
	//draw line 6 segment PB
	var x_B_6 = x_P_6;
	var y_B_6 = y_P_6 + line_6_length/2;
	draw_line(x_P_6, y_P_6, x_B_6, y_B_6, context, line_6_width, line_6_color);

	//angles of line 6
	var angle_6 = angle_2;
	var dangle_6 = dangle_factor * dangle_2;
	
	//--------------------------------------------------------------------------------------

	//draw line 7 (to rotate about point A of line 3)
	var line_7_length = line_length_factor*line_3_length;
	var line_7_width = 3;
	var line_7_color = "lightgreen";
	
	//draw line 7 segment PA
	var x_P_7 = x_A_3;
	var y_P_7 = y_A_3;
	var x_A_7 = x_P_7;
	var y_A_7 = y_P_7 - line_7_length/2;
	draw_line(x_P_7, y_P_7, x_A_7, y_A_7, context, line_7_width, line_7_color);

	//draw line 7 segment PB
	var x_B_7 = x_P_7;
	var y_B_7 = y_P_7 + line_7_length/2;
	draw_line(x_P_7, y_P_7, x_B_7, y_B_7, context, line_7_width, line_7_color);

	//angles of line 7
	var angle_7 = angle_3;
	var dangle_7 = dangle_factor * dangle_3;
	
	//--------------------------------------------------------------------------------------

	//draw line 8 (to rotate about point B of line 3)
	var line_8_length = line_length_factor*line_3_length;
	var line_8_width = 3;
	var line_8_color = "lightgreen";
	
	//draw line 8 segment PA
	var x_P_8 = x_B_3;
	var y_P_8 = y_B_3;
	var x_A_8 = x_P_8;
	var y_A_8 = y_P_8 - line_8_length/2;
	draw_line(x_P_8, y_P_8, x_A_8, y_A_8, context, line_8_width, line_8_color);

	//draw line 8 segment PB
	var x_B_8 = x_P_8;
	var y_B_8 = y_P_8 + line_8_length/2;
	draw_line(x_P_8, y_P_8, x_B_8, y_B_8, context, line_8_width, line_8_color);

	//angles of line 8
	var angle_8 = angle_3;
	var dangle_8 = dangle_factor * dangle_3;
	
	//--------------------------------------------------------------------------------------

	//draw line 9 (to rotate about point A of line 4)

	var line_9_length = line_length_factor*line_4_length;
	var line_9_width = 3;
	var line_9_color = "lightgreen";

	//draw line 9 segment PA
	var x_P_9 = x_A_4;
	var y_P_9 = y_A_4;
	var x_A_9 = x_P_9;
	var y_A_9 = y_P_9 - line_9_length/2;
	draw_line(x_P_9, y_P_9, x_A_9, y_A_9, context, line_9_width, line_9_color);

	//draw line 9 segment PB
	var x_B_9 = x_P_9;
	var y_B_9 = y_P_9 + line_9_length/2;
	draw_line(x_P_9, y_P_9, x_B_9, y_B_9, context, line_9_width, line_9_color);

	//angles of line 9
	var angle_9 = angle_4;
	var dangle_9 = dangle_factor * dangle_4;
	
	//--------------------------------------------------------------------------------------

	//draw line 10 (to rotate about point B of line 4)

	var line_10_length = line_length_factor*line_4_length;
	var line_10_width = 3;
	var line_10_color = "lightgreen";

	//draw line 10 segment PA
	var x_P_10 = x_B_4;
	var y_P_10 = y_B_4;
	var x_A_10 = x_P_10;
	var y_A_10 = y_P_10 - line_10_length/2;
	draw_line(x_P_10, y_P_10, x_A_10, y_A_10, context, line_10_width, line_10_color);

	//draw line 10 segment PB
	var x_B_10 = x_P_10;
	var y_B_10 = y_P_10 + line_10_length/2;
	draw_line(x_P_10, y_P_10, x_B_10, y_B_10, context, line_10_width, line_10_color);

	//angles of line 10
	var angle_10 = angle_4;
	var dangle_10 = dangle_factor * dangle_4;
	
	//--------------------------------------------------------------------------------------

	//draw line 11 (to rotate about point A of line 5)

	var line_11_length = line_length_factor*line_5_length;
	var line_11_width = 3;
	var line_11_color = "deepskyblue";

	//draw line 11 segment PA
	var x_P_11 = x_A_5;
	var y_P_11 = y_A_5;
	var x_A_11 = x_P_11;
	var y_A_11 = y_P_11 - line_11_length/2;
	draw_line(x_P_11, y_P_11, x_A_11, y_A_11, context, line_11_width, line_11_color);

	//draw line 11 segment PB
	var x_B_11 = x_P_11;
	var y_B_11 = y_P_11 + line_11_length/2;
	draw_line(x_P_11, y_P_11, x_B_11, y_B_11, context, line_11_width, line_11_color);

	//angles of line 11
	var angle_11 = angle_5;
	var dangle_11 = dangle_factor * dangle_5;
	
	//--------------------------------------------------------------------------------------

	//draw line 12 (to rotate about point B of line 5)
	var line_12_length = line_length_factor*line_5_length;
	var line_12_width = 3;
	var line_12_color = "deepskyblue";

	//draw line 12 segment PA
	var x_P_12 = x_B_5;
	var y_P_12 = y_B_5;
	var x_A_12 = x_P_12;
	var y_A_12 = y_P_12 - line_12_length/2;
	draw_line(x_P_12, y_P_12, x_A_12, y_A_12, context, line_12_width, line_12_color);

	//draw line 12 segment PB
	var x_B_12 = x_P_12;
	var y_B_12 = y_P_12 + line_12_length/2;
	draw_line(x_P_12, y_P_12, x_B_12, y_B_12, context, line_12_width, line_12_color);

	//angles of line 12
	var angle_12 = angle_5;
	var dangle_12 = dangle_factor * dangle_5;
	
	//--------------------------------------------------------------------------------------

	//draw line 13 (to rotate about point A of line 6)
	var line_13_length = line_length_factor*line_6_length;
	var line_13_width = 3;
	var line_13_color = "deepskyblue";

	//draw line 13 segment PA
	var x_P_13 = x_B_6;
	var y_P_13 = y_B_6;
	var x_A_13 = x_P_13;
	var y_A_13 = y_P_13 - line_13_length/2;
	draw_line(x_P_13, y_P_13, x_A_13, y_A_13, context, line_13_width, line_13_color);

	//draw line 13 segment PB
	var x_B_13 = x_P_13;
	var y_B_13 = y_P_13 + line_13_length/2;
	draw_line(x_P_13, y_P_13, x_B_13, y_B_13, context, line_13_width, line_13_color);

	//angles of line 13
	var angle_13 = angle_6;
	var dangle_13 = dangle_factor * dangle_6;
	
	//--------------------------------------------------------------------------------------

	//draw line 14 (to rotate about point B of line 6)
	var line_14_length = line_length_factor*line_6_length;
	var line_14_width = 3;
	var line_14_color = "deepskyblue";

	//draw line 14 segment PA
	var x_P_14 = x_B_6;
	var y_P_14 = y_B_6;
	var x_A_14 = x_P_14;
	var y_A_14 = y_P_14 - line_14_length/2;
	draw_line(x_P_14, y_P_14, x_A_14, y_A_14, context, line_14_width, line_14_color);

	//draw line 14 segment PB
	var x_B_14 = x_P_14;
	var y_B_14 = y_P_14 + line_14_length/2;
	draw_line(x_P_14, y_P_14, x_B_14, y_B_14, context, line_14_width, line_14_color);

	//angles of line line 14
	var angle_14 = angle_6;
	var dangle_14 = dangle_factor * dangle_6;
	
	//--------------------------------------------------------------------------------------

	//draw line 15 (to rotate about point A of line 7)
	var line_15_length = line_length_factor*line_7_length;
	var line_15_width = 3;
	var line_15_color = "mediumslateblue";

	//draw line 15 segment PA
	var x_P_15 = x_A_7;
	var y_P_15 = y_A_7;
	var x_A_15 = x_P_15;
	var y_A_15 = y_P_15 - line_15_length/2;
	draw_line(x_P_15, y_P_15, x_A_15, y_A_15, context, line_15_width, line_15_color);

	//draw line 15 segment PB
	var x_B_15 = x_P_15;
	var y_B_15 = y_P_15 + line_15_length/2;
	draw_line(x_P_15, y_P_15, x_B_15, y_B_15, context, line_15_width, line_15_color);

	//angles of line line 15
	var angle_15 = angle_7;
	var dangle_15 = dangle_factor * dangle_7;
	
	//--------------------------------------------------------------------------------------

	//draw line 16 (to rotate about point B of line 7)
	var line_16_length = line_length_factor*line_7_length;
	var line_16_width = 3;
	var line_16_color = "mediumslateblue";

	//draw line 16 segment PA
	var x_P_16 = x_B_7;
	var y_P_16 = y_B_7;
	var x_A_16 = x_P_16;
	var y_A_16 = y_P_16 - line_16_length/2;
	draw_line(x_P_16, y_P_16, x_A_16, y_A_16, context, line_16_width, line_16_color);

	//draw line 16 segment PB
	var x_B_16 = x_P_16;
	var y_B_16 = y_P_16 + line_16_length/2;
	draw_line(x_P_16, y_P_16, x_B_16, y_B_16, context, line_16_width, line_16_color);

	//angles of line 16
	var angle_16 = angle_7;
	var dangle_16 = dangle_factor * dangle_7;
	
	//--------------------------------------------------------------------------------------

	//draw line 17 (to rotate about point A of line 8)
	var line_17_length = line_length_factor*line_8_length;
	var line_17_width = 3;
	var line_17_color = "mediumslateblue";

	//draw line 17 segment PA
	var x_P_17 = x_A_8;
	var y_P_17 = y_A_8;
	var x_A_17 = x_P_17;
	var y_A_17 = y_P_17 - line_17_length/2;
	draw_line(x_P_17, y_P_17, x_A_17, y_A_17, context, line_17_width, line_17_color);

	//draw line 17 segment PB
	var x_B_17 = x_P_17;
	var y_B_17 = y_P_17 + line_17_length/2;
	draw_line(x_P_17, y_P_17, x_B_17, y_B_17, context, line_17_width, line_17_color);

	//angles of line 17
	var angle_17 = angle_8;
	var dangle_17 = dangle_factor * dangle_8;
	
	//--------------------------------------------------------------------------------------

	//draw line 18 (to rotate about point B of line 8)
	var line_18_length = line_length_factor*line_8_length;
	var line_18_width = 3;
	var line_18_color = "mediumslateblue";

	//draw line 18 segment PA
	var x_P_18 = x_B_8;
	var y_P_18 = y_B_8;
	var x_A_18 = x_P_18;
	var y_A_18 = y_P_18 - line_18_length/2;
	draw_line(x_P_18, y_P_18, x_A_18, y_A_18, context, line_18_width, line_18_color);

	//draw line 18 segment PB
	var x_B_18 = x_P_18;
	var y_B_18 = y_P_18 + line_18_length/2;
	draw_line(x_P_18, y_P_18, x_B_18, y_B_18, context, line_18_width, line_18_color);

	//angles of line 18
	var angle_18 = angle_8;
	var dangle_18 = dangle_factor * dangle_8;
	
	//--------------------------------------------------------------------------------------

	//draw line 19 (to rotate about point A of line 9)
	var line_19_length = line_length_factor*line_9_length;
	var line_19_width = 3;
	var line_19_color = "mediumslateblue";

	//draw line 19 segment PA
	var x_P_19 = x_A_9;
	var y_P_19 = y_A_9;
	var x_A_19 = x_P_19;
	var y_A_19 = y_P_19 - line_19_length/2;
	draw_line(x_P_19, y_P_19, x_A_19, y_A_19, context, line_19_width, line_19_color);

	//draw line 19 segment PB
	var x_B_19 = x_P_19;
	var y_B_19 = y_P_19 + line_19_length/2;
	draw_line(x_P_19, y_P_19, x_B_19, y_B_19, context, line_19_width, line_19_color);

	//angles of line 19
	var angle_19 = angle_9;
	var dangle_19 = dangle_factor * dangle_9;
	
	//--------------------------------------------------------------------------------------

	//draw line 20 (to rotate about point B of line 9)
	var line_20_length = line_length_factor*line_9_length;
	var line_20_width = 3;
	var line_20_color = "mediumslateblue";

	//draw line 20 segment PA
	var x_P_20 = x_B_9;
	var y_P_20 = y_B_9;
	var x_A_20 = x_P_20;
	var y_A_20 = y_P_20 - line_20_length/2;
	draw_line(x_P_20, y_P_20, x_A_20, y_A_20, context, line_20_width, line_20_color);

	//draw line 20 segment PB
	var x_B_20 = x_P_20;
	var y_B_20 = y_P_20 + line_20_length/2;
	draw_line(x_P_20, y_P_20, x_B_20, y_B_20, context, line_20_width, line_20_color);

	//angles of line 20
	var angle_20 = angle_9;
	var dangle_20 = dangle_factor * dangle_9;
	
	//--------------------------------------------------------------------------------------

	//draw line 21 (to rotate about point A of line 10)
	var line_21_length = line_length_factor*line_10_length;
	var line_21_width = 3;
	var line_21_color = "mediumslateblue";

	//draw line 21 segment PA
	var x_P_21 = x_A_10;
	var y_P_21 = y_A_10;
	var x_A_21 = x_P_21;
	var y_A_21 = y_P_21 - line_21_length/2;
	draw_line(x_P_21, y_P_21, x_A_21, y_A_21, context, line_21_width, line_21_color);

	//draw line 21 segment PB
	var x_B_21 = x_P_21;
	var y_B_21 = y_P_21 + line_21_length/2;
	draw_line(x_P_21, y_P_21, x_B_21, y_B_21, context, line_21_width, line_21_color);

	//angles of line 21
	var angle_21 = angle_10;
	var dangle_21 = dangle_factor * dangle_10;
	
	//--------------------------------------------------------------------------------------

	//draw line 22 (to rotate about point B of line 10)
	var line_22_length = line_length_factor*line_10_length;
	var line_22_width = 3;
	var line_22_color = "mediumslateblue";

	//draw line 22 segment PA
	var x_P_22 = x_B_10;
	var y_P_22 = y_B_10;
	var x_A_22 = x_P_22;
	var y_A_22 = y_P_22 - line_22_length/2;
	draw_line(x_P_22, y_P_22, x_A_22, y_A_22, context, line_22_width, line_22_color);

	//draw line 22 segment PB
	var x_B_22 = x_P_22;
	var y_B_22 = y_P_22 + line_22_length/2;
	draw_line(x_P_22, y_P_22, x_B_22, y_B_22, context, line_22_width, line_22_color);

	//angles of line 22
	var angle_22 = angle_10;
	var dangle_22 = dangle_factor * dangle_10;
	
	//--------------------------------------------------------------------------------------

	//draw line 23 (to rotate about point A of line 11)
	var line_23_length = line_length_factor*line_11_length;
	var line_23_width = 3;
	var line_23_color = "darkgoldenrod";

	//draw line 23 segment PA
	var x_P_23 = x_A_11;
	var y_P_23 = y_A_11;
	var x_A_23 = x_P_23;
	var y_A_23 = y_P_23 - line_23_length/2;
	draw_line(x_P_23, y_P_23, x_A_23, y_A_23, context, line_23_width, line_23_color);

	//draw line 23 segment PB
	var x_B_23 = x_P_23;
	var y_B_23 = y_P_23 + line_23_length/2;
	draw_line(x_P_23, y_P_23, x_B_23, y_B_23, context, line_23_width, line_23_color);

	//angles of line 23
	var angle_23 = angle_11;
	var dangle_23 = dangle_factor * dangle_11;
	
	//--------------------------------------------------------------------------------------

	//draw line 24 (to rotate about point B of line 11)
	var line_24_length = line_length_factor*line_11_length;
	var line_24_width = 3;
	var line_24_color = "darkgoldenrod";

	//draw line 24 segment PA
	var x_P_24 = x_B_11;
	var y_P_24 = y_B_11;
	var x_A_24 = x_P_24;
	var y_A_24 = y_P_24 - line_24_length/2;
	draw_line(x_P_24, y_P_24, x_A_24, y_A_24, context, line_24_width, line_24_color);

	//draw line 24 segment PB
	var x_B_24 = x_P_24;
	var y_B_24 = y_P_24 + line_24_length/2;
	draw_line(x_P_24, y_P_24, x_B_24, y_B_24, context, line_24_width, line_24_color);

	//angles of line 24
	var angle_24 = angle_11;
	var dangle_24 = dangle_factor * dangle_11;
	
	//--------------------------------------------------------------------------------------

	//draw line 25 (to rotate about point A of line 12)
	var line_25_length = line_length_factor*line_12_length;
	var line_25_width = 3;
	var line_25_color = "darkgoldenrod";

	//draw line 25 segment PA
	var x_P_25 = x_A_12;
	var y_P_25 = y_A_12;
	var x_A_25 = x_P_25;
	var y_A_25 = y_P_25 - line_25_length/2;
	draw_line(x_P_25, y_P_25, x_A_25, y_A_25, context, line_25_width, line_25_color);

	//draw line 25 segment PB
	var x_B_25 = x_P_25;
	var y_B_25 = y_P_25 + line_25_length/2;
	draw_line(x_P_25, y_P_25, x_B_25, y_B_25, context, line_25_width, line_25_color);

	//angles of line 25
	var angle_25 = angle_12;
	var dangle_25 = dangle_factor * dangle_12;
	
	//--------------------------------------------------------------------------------------

	//draw line 26 (to rotate about point B of line 12)
	var line_26_length = line_length_factor*line_12_length;
	var line_26_width = 3;
	var line_26_color = "darkgoldenrod";

	//draw line 26 segment PA
	var x_P_26 = x_B_12;
	var y_P_26 = y_B_12;
	var x_A_26 = x_P_26;
	var y_A_26 = y_P_26 - line_26_length/2;
	draw_line(x_P_26, y_P_26, x_A_26, y_A_26, context, line_26_width, line_26_color);

	//draw line 26 segment PB
	var x_B_26 = x_P_26;
	var y_B_26 = y_P_26 + line_26_length/2;
	draw_line(x_P_26, y_P_26, x_B_26, y_B_26, context, line_26_width, line_26_color);

	//angles of line 26
	var angle_26 = angle_12;
	var dangle_26 = dangle_factor * dangle_12;
	
	//--------------------------------------------------------------------------------------

	//draw line 27 (to rotate about point A of line 13)
	var line_27_length = line_length_factor*line_13_length;
	var line_27_width = 3;
	var line_27_color = "darkgoldenrod";

	//draw line 27 segment PA
	var x_P_27 = x_A_13;
	var y_P_27 = y_A_13;
	var x_A_27 = x_P_27;
	var y_A_27 = y_P_27 - line_27_length/2;
	draw_line(x_P_27, y_P_27, x_A_27, y_A_27, context, line_27_width, line_27_color);

	//draw line 27 segment PB
	var x_B_27 = x_P_27;
	var y_B_27 = y_P_27 + line_27_length/2;
	draw_line(x_P_27, y_P_27, x_B_27, y_B_27, context, line_27_width, line_27_color);

	//angles of line 27
	var angle_27 = angle_13;
	var dangle_27 = dangle_factor * dangle_13;
	
	//--------------------------------------------------------------------------------------

	//draw line 28 (to rotate about point B of line 13)
	var line_28_length = line_length_factor*line_13_length;
	var line_28_width = 3;
	var line_28_color = "darkgoldenrod";

	//draw line 28 segment PA
	var x_P_28 = x_B_13;
	var y_P_28 = y_B_13;
	var x_A_28 = x_P_28;
	var y_A_28 = y_P_28 - line_28_length/2;
	draw_line(x_P_28, y_P_28, x_A_28, y_A_28, context, line_28_width, line_28_color);

	//draw line 28 segment PB
	var x_B_28 = x_P_28;
	var y_B_28 = y_P_28 + line_28_length/2;
	draw_line(x_P_28, y_P_28, x_B_28, y_B_28, context, line_28_width, line_28_color);

	//angles of line 28
	var angle_28 = angle_13;
	var dangle_28 = dangle_factor * dangle_13;
	
	//--------------------------------------------------------------------------------------

	//draw line 29 (to rotate about point A of line 14)

	var line_29_length = line_length_factor*line_14_length;
	var line_29_width = 3;
	var line_29_color = "darkgoldenrod";

	//draw line 29 segment PA
	var x_P_29 = x_A_14;
	var y_P_29 = y_A_14;
	var x_A_29 = x_P_29;
	var y_A_29 = y_P_29 - line_29_length/2;
	draw_line(x_P_29, y_P_29, x_A_29, y_A_29, context, line_29_width, line_29_color);

	//draw line 29 segment PB
	var x_B_29 = x_P_29;
	var y_B_29 = y_P_29 + line_29_length/2;
	draw_line(x_P_29, y_P_29, x_B_29, y_B_29, context, line_29_width, line_29_color);

	//angles of line 29
	var angle_29 = angle_14;
	var dangle_29 = dangle_factor * dangle_14;
	
	//--------------------------------------------------------------------------------------

	//draw line 30 (to rotate about point B of line 14)

	var line_30_length = line_length_factor*line_14_length;
	var line_30_width = 3;
	var line_30_color = "darkgoldenrod";

	//draw line 30 segment PA
	var x_P_30 = x_B_14;
	var y_P_30 = y_B_14;
	var x_A_30 = x_P_30;
	var y_A_30 = y_P_30 - line_30_length/2;
	draw_line(x_P_30, y_P_30, x_A_30, y_A_30, context, line_30_width, line_30_color);

	//draw line 30 segment PB
	var x_B_30 = x_P_30;
	var y_B_30 = y_P_30 + line_30_length/2;
	draw_line(x_P_30, y_P_30, x_B_30, y_B_30, context, line_30_width, line_30_color);

	//angles of line 30
	var angle_30 = angle_14;
	var dangle_30 = dangle_factor * dangle_14;
	
	//--------------------------------------------------------------------------------------
	
	var interval = setInterval(function()
							   {
							   		context.clearRect(0, 0, canvas.width, canvas.height);	
							   	
							   		[x_A_1, y_A_1, x_B_1, y_B_1, angle_1] 
									= rotate_line_counterclockwise_about_center(x_A_1, y_A_1, x_B_1, y_B_1, x_P_1, y_P_1, angle_1, dangle_1, 
								                      							canvas, context, line_1_width, line_1_color);
								                      							
								    //--------------------------------------------------------------------------------------------------  
								                    							
							   		[x_A_2, y_A_2, x_B_2, y_B_2, angle_2] 
									= rotate_line_clockwise_about_center(x_A_2, y_A_2, x_B_2, y_B_2, x_P_2, y_P_2, angle_2, dangle_2, 
										                  				 canvas, context, line_2_width, line_2_color);
							  		
							  		//--------------------------------------------------------------------------------------------------
							  		
							  		x_P_3 = x_A_1;
							  		y_P_3 = y_A_1;
							  		x_A_3 = x_P_3;
									y_A_3 = y_P_3 - line_3_length/2;
									x_B_3 = x_P_3;
									y_B_3 = y_P_3 + line_3_length/2;
									
									[x_A_3, y_A_3, x_B_3, y_B_3, angle_3] 
									= rotate_line_clockwise_about_center(x_A_3, y_A_3, x_B_3, y_B_3, x_P_3, y_P_3, angle_3, dangle_3, 
																		 canvas, context, line_3_width, line_3_color);
												
									//--------------------------------------------------------------------------------------------------
																		 
									x_P_4 = x_B_1;
							  		y_P_4 = y_B_1;
							  		x_A_4 = x_P_4;
									y_A_4 = y_P_4 - line_4_length/2;
									x_B_4 = x_P_4;
									y_B_4 = y_P_4 + line_4_length/2;
							  
									[x_A_4, y_A_4, x_B_4, y_B_4, angle_4] 
									= rotate_line_clockwise_about_center(x_A_4, y_A_4, x_B_4, y_B_4, x_P_4, y_P_4, angle_4, dangle_4, 
																		 canvas, context, line_4_width, line_4_color);
									
									//--------------------------------------------------------------------------------------------------
																		 
									x_P_5 = x_A_2;
							  		y_P_5 = y_A_2;
							  		x_A_5 = x_P_5;
									y_A_5 = y_P_5 - line_5_length/2;
									x_B_5 = x_P_5;
									y_B_5 = y_P_5 + line_5_length/2;
							  
									[x_A_5, y_A_5, x_B_5, y_B_5, angle_5] 
									= rotate_line_counterclockwise_about_center(x_A_5, y_A_5, x_B_5, y_B_5, x_P_5, y_P_5, angle_5, dangle_5, 
																		        canvas, context, line_5_width, line_5_color);
										
									//--------------------------------------------------------------------------------------------------	
																		 		
									x_P_6 = x_B_2;
							  		y_P_6 = y_B_2;
							  		x_A_6 = x_P_6;
									y_A_6 = y_P_6 - line_6_length/2;
									x_B_6 = x_P_6;
									y_B_6 = y_P_6 + line_6_length/2;
							  
									[x_A_6, y_A_6, x_B_6, y_B_6, angle_6] 
									= rotate_line_counterclockwise_about_center(x_A_6, y_A_6, x_B_6, y_B_6, x_P_6, y_P_6, angle_6, dangle_6, 
																		        canvas, context, line_6_width, line_6_color);	
									
									//--------------------------------------------------------------------------------------------------
																		 		
									x_P_7 = x_A_3;
							  		y_P_7 = y_A_3;
							  		x_A_7 = x_P_7;
									y_A_7 = y_P_7 - line_7_length/2;
									x_B_7 = x_P_7;
									y_B_7 = y_P_7 + line_7_length/2;
							  
									[x_A_7, y_A_7, x_B_7, y_B_7, angle_7] 
									= rotate_line_counterclockwise_about_center(x_A_7, y_A_7, x_B_7, y_B_7, x_P_7, y_P_7, angle_7, dangle_7, 
																			    canvas, context, line_7_width, line_7_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_8 = x_B_3;
							  		y_P_8 = y_B_3;
							  		x_A_8 = x_P_8;
									y_A_8 = y_P_8 - line_8_length/2;
									x_B_8 = x_P_8;
									y_B_8 = y_P_8 + line_8_length/2;
							  
									[x_A_8, y_A_8, x_B_8, y_B_8, angle_8] 
									= rotate_line_counterclockwise_about_center(x_A_8, y_A_8, x_B_8, y_B_8, x_P_8, y_P_8, angle_8, dangle_8, 
																		 		canvas, context, line_8_width, line_8_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_9 = x_A_4;
							  		y_P_9 = y_A_4;
							  		x_A_9 = x_P_9;
									y_A_9 = y_P_9 - line_9_length/2;
									x_B_9 = x_P_9;
									y_B_9 = y_P_9 + line_9_length/2;
							  
									[x_A_9, y_A_9, x_B_9, y_B_9, angle_9] 
									= rotate_line_counterclockwise_about_center(x_A_9, y_A_9, x_B_9, y_B_9, x_P_9, y_P_9, angle_9, dangle_9, 
																		 		canvas, context, line_9_width, line_9_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_10 = x_B_4;
							  		y_P_10 = y_B_4;
							  		x_A_10 = x_P_10;
									y_A_10 = y_P_10 - line_10_length/2;
									x_B_10 = x_P_10;
									y_B_10 = y_P_10 + line_10_length/2;
							  
									[x_A_10, y_A_10, x_B_10, y_B_10, angle_10] 
									= rotate_line_counterclockwise_about_center(x_A_10, y_A_10, x_B_10, y_B_10, x_P_10, y_P_10, angle_10, dangle_10, 
																		 		canvas, context, line_10_width, line_10_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_11 = x_A_5;
							  		y_P_11 = y_A_5;
							  		x_A_11 = x_P_11;
									y_A_11 = y_P_11 - line_11_length/2;
									x_B_11 = x_P_11;
									y_B_11 = y_P_11 + line_11_length/2;
							  
									[x_A_11, y_A_11, x_B_11, y_B_11, angle_11] 
									= rotate_line_clockwise_about_center(x_A_11, y_A_11, x_B_11, y_B_11, x_P_11, y_P_11, angle_11, dangle_11, 
																		 canvas, context, line_11_width, line_11_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_12 = x_B_5;
							  		y_P_12 = y_B_5;
							  		x_A_12 = x_P_12;
									y_A_12 = y_P_12 - line_12_length/2;
									x_B_12 = x_P_12;
									y_B_12 = y_P_12 + line_12_length/2;

									[x_A_12, y_A_12, x_B_12, y_B_12, angle_12] 
									= rotate_line_clockwise_about_center(x_A_12, y_A_12, x_B_12, y_B_12, x_P_12, y_P_12, angle_12, dangle_12, 
																		 canvas, context, line_12_width, line_12_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_13 = x_A_6;
							  		y_P_13 = y_A_6;
							  		x_A_13 = x_P_13;
									y_A_13 = y_P_13 - line_13_length/2;
									x_B_13 = x_P_13;
									y_B_13 = y_P_13 + line_13_length/2;

									[x_A_13, y_A_13, x_B_13, y_B_13, angle_13] 
									= rotate_line_clockwise_about_center(x_A_13, y_A_13, x_B_13, y_B_13, x_P_13, y_P_13, angle_13, dangle_13, 
																		 canvas, context, line_13_width, line_13_color);	 		
									
									//--------------------------------------------------------------------------------------------------
									
									x_P_14 = x_B_6;
							  		y_P_14 = y_B_6;
							  		x_A_14 = x_P_14;
									y_A_14 = y_P_14 - line_14_length/2;
									x_B_14 = x_P_14;
									y_B_14 = y_P_14 + line_14_length/2;

									[x_A_14, y_A_14, x_B_14, y_B_14, angle_14] 
									= rotate_line_clockwise_about_center(x_A_14, y_A_14, x_B_14, y_B_14, x_P_14, y_P_14, angle_14, dangle_14, 
																		 canvas, context, line_14_width, line_14_color);	
																		 
									//--------------------------------------------------------------------------------------------------
									
									x_P_15 = x_A_7;
							  		y_P_15 = y_A_7;
							  		x_A_15 = x_P_15;
									y_A_15 = y_P_15 - line_15_length/2;
									x_B_15 = x_P_15;
									y_B_15 = y_P_15 + line_15_length/2;

									[x_A_15, y_A_15, x_B_15, y_B_15, angle_15] 
									= rotate_line_clockwise_about_center(x_A_15, y_A_15, x_B_15, y_B_15, x_P_15, y_P_15, angle_15, dangle_15, 
																		 canvas, context, line_15_width, line_15_color);	
											
									//--------------------------------------------------------------------------------------------------	
									
									x_P_16 = x_B_7;
							  		y_P_16 = y_B_7;
							  		x_A_16 = x_P_16;
									y_A_16 = y_P_16 - line_16_length/2;
									x_B_16 = x_P_16;
									y_B_16 = y_P_16 + line_16_length/2;

									[x_A_16, y_A_16, x_B_16, y_B_16, angle_16] 
									= rotate_line_clockwise_about_center(x_A_16, y_A_16, x_B_16, y_B_16, x_P_16, y_P_16, angle_16, dangle_16, 
																		 canvas, context, line_16_width, line_16_color);
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_17 = x_A_8;
							  		y_P_17 = y_A_8;
							  		x_A_17 = x_P_17;
									y_A_17 = y_P_17 - line_17_length/2;
									x_B_17 = x_P_17;
									y_B_17 = y_P_17 + line_17_length/2;

									[x_A_17, y_A_17, x_B_17, y_B_17, angle_17] 
									= rotate_line_clockwise_about_center(x_A_17, y_A_17, x_B_17, y_B_17, x_P_17, y_P_17, angle_17, dangle_17, 
																		 canvas, context, line_17_width, line_17_color);	
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_18 = x_B_8;
							  		y_P_18 = y_B_8;
							  		x_A_18 = x_P_18;
									y_A_18 = y_P_18 - line_18_length/2;
									x_B_18 = x_P_18;
									y_B_18 = y_P_18 + line_18_length/2;

									[x_A_18, y_A_18, x_B_18, y_B_18, angle_18] 
									= rotate_line_clockwise_about_center(x_A_18, y_A_18, x_B_18, y_B_18, x_P_18, y_P_18, angle_18, dangle_18, 
																		 canvas, context, line_18_width, line_18_color);	
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_19 = x_A_9;
							  		y_P_19 = y_A_9;
							  		x_A_19 = x_P_19;
									y_A_19 = y_P_19 - line_19_length/2;
									x_B_19 = x_P_19;
									y_B_19 = y_P_19 + line_19_length/2;

									[x_A_19, y_A_19, x_B_19, y_B_19, angle_19] 
									= rotate_line_clockwise_about_center(x_A_19, y_A_19, x_B_19, y_B_19, x_P_19, y_P_19, angle_19, dangle_19, 
																		 canvas, context, line_19_width, line_19_color);
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_20 = x_B_9;
							  		y_P_20 = y_B_9;
							  		x_A_20 = x_P_20;
									y_A_20 = y_P_20 - line_20_length/2;
									x_B_20 = x_P_20;
									y_B_20 = y_P_20 + line_20_length/2;

									[x_A_20, y_A_20, x_B_20, y_B_20, angle_20] 
									= rotate_line_clockwise_about_center(x_A_20, y_A_20, x_B_20, y_B_20, x_P_20, y_P_20, angle_20, dangle_20, 
																		 canvas, context, line_20_width, line_20_color);
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_21 = x_A_10;
							  		y_P_21 = y_A_10;
							  		x_A_21 = x_P_21;
									y_A_21 = y_P_21 - line_21_length/2;
									x_B_21 = x_P_21;
									y_B_21 = y_P_21 + line_21_length/2;

									[x_A_21, y_A_21, x_B_21, y_B_21, angle_21] 
									= rotate_line_clockwise_about_center(x_A_21, y_A_21, x_B_21, y_B_21, x_P_21, y_P_21, angle_21, dangle_21, 
																		 canvas, context, line_21_width, line_21_color);
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_22 = x_B_10;
							  		y_P_22 = y_B_10;
							  		x_A_22 = x_P_22;
									y_A_22 = y_P_22 - line_22_length/2;
									x_B_22 = x_P_22;
									y_B_22 = y_P_22 + line_22_length/2;

									[x_A_22, y_A_22, x_B_22, y_B_22, angle_22] 
									= rotate_line_clockwise_about_center(x_A_22, y_A_22, x_B_22, y_B_22, x_P_22, y_P_22, angle_22, dangle_22, 
																		 canvas, context, line_22_width, line_22_color);
																		 
									//--------------------------------------------------------------------------------------------------	
									
									x_P_23 = x_A_11;
							  		y_P_23 = y_A_11;
							  		x_A_23 = x_P_23;
									y_A_23 = y_P_23 - line_23_length/2;
									x_B_23 = x_P_23;
									y_B_23 = y_P_23 + line_23_length/2;

									[x_A_23, y_A_23, x_B_23, y_B_23, angle_23] 
									= rotate_line_counterclockwise_about_center(x_A_23, y_A_23, x_B_23, y_B_23, x_P_23, y_P_23, angle_23, dangle_23, 
																		        canvas, context, line_23_width, line_23_color);
																		        
									//--------------------------------------------------------------------------------------------------	
									
									x_P_24 = x_B_11;
							  		y_P_24 = y_B_11;
							  		x_A_24 = x_P_24;
									y_A_24 = y_P_24 - line_24_length/2;
									x_B_24 = x_P_24;
									y_B_24 = y_P_24 + line_24_length/2;

									[x_A_24, y_A_24, x_B_24, y_B_24, angle_24] 
									= rotate_line_counterclockwise_about_center(x_A_24, y_A_24, x_B_24, y_B_24, x_P_24, y_P_24, angle_24, dangle_24, 
																		        canvas, context, line_24_width, line_24_color);
																		        
									//--------------------------------------------------------------------------------------------------	
							
									x_P_25 = x_A_12;
							  		y_P_25 = y_A_12;
							  		x_A_25 = x_P_25;
									y_A_25 = y_P_25 - line_25_length/2;
									x_B_25 = x_P_25;
									y_B_25 = y_P_25 + line_25_length/2;

									[x_A_25, y_A_25, x_B_25, y_B_25, angle_25] 
									= rotate_line_counterclockwise_about_center(x_A_25, y_A_25, x_B_25, y_B_25, x_P_25, y_P_25, angle_25, dangle_25, 
																		        canvas, context, line_25_width, line_25_color);
									
									//--------------------------------------------------------------------------------------------------	
							
									x_P_26 = x_B_12;
							  		y_P_26 = y_B_12;
							  		x_A_26 = x_P_26;
									y_A_26 = y_P_26 - line_26_length/2;
									x_B_26 = x_P_26;
									y_B_26 = y_P_26 + line_26_length/2;

									[x_A_26, y_A_26, x_B_26, y_B_26, angle_26] 
									= rotate_line_counterclockwise_about_center(x_A_26, y_A_26, x_B_26, y_B_26, x_P_26, y_P_26, angle_26, dangle_26, 
																		        canvas, context, line_26_width, line_26_color);
																		        
									//--------------------------------------------------------------------------------------------------	
							
									x_P_27 = x_A_13;
							  		y_P_27 = y_A_13;
							  		x_A_27 = x_P_27;
									y_A_27 = y_P_27 - line_27_length/2;
									x_B_27 = x_P_27;
									y_B_27 = y_P_27 + line_27_length/2;

									[x_A_27, y_A_27, x_B_27, y_B_27, angle_27] 
									= rotate_line_counterclockwise_about_center(x_A_27, y_A_27, x_B_27, y_B_27, x_P_27, y_P_27, angle_27, dangle_27, 
																		        canvas, context, line_27_width, line_27_color);
																		        
									//--------------------------------------------------------------------------------------------------	
							
									x_P_28 = x_B_13;
							  		y_P_28 = y_B_13;
							  		x_A_28 = x_P_28;
									y_A_28 = y_P_28 - line_28_length/2;
									x_B_28 = x_P_28;
									y_B_28 = y_P_28 + line_28_length/2;

									[x_A_28, y_A_28, x_B_28, y_B_28, angle_28] 
									= rotate_line_counterclockwise_about_center(x_A_28, y_A_28, x_B_28, y_B_28, x_P_28, y_P_28, angle_28, dangle_28, 
																		        canvas, context, line_28_width, line_28_color);
																		        
									//--------------------------------------------------------------------------------------------------	
							
									x_P_29 = x_A_14;
							  		y_P_29 = y_A_14;
							  		x_A_29 = x_P_29;
									y_A_29 = y_P_29 - line_29_length/2;
									x_B_29 = x_P_29;
									y_B_29 = y_P_29 + line_29_length/2;

									[x_A_29, y_A_29, x_B_29, y_B_29, angle_29] 
									= rotate_line_counterclockwise_about_center(x_A_29, y_A_29, x_B_29, y_B_29, x_P_29, y_P_29, angle_29, dangle_29, 
																		        canvas, context, line_29_width, line_29_color);
																		        
									//--------------------------------------------------------------------------------------------------	
							
									x_P_30 = x_B_14;
							  		y_P_30 = y_B_14;
							  		x_A_30 = x_P_30;
									y_A_30 = y_P_30 - line_30_length/2;
									x_B_30 = x_P_30;
									y_B_30 = y_P_30 + line_30_length/2;

									[x_A_30, y_A_30, x_B_30, y_B_30, angle_30] 
									= rotate_line_counterclockwise_about_center(x_A_30, y_A_30, x_B_30, y_B_30, x_P_30, y_P_30, angle_30, dangle_30, 
																		        canvas, context, line_30_width, line_30_color);
											
									//--------------------------------------------------------------------------------------------------		
										
									canvas.style.left = canvas_left + "px";
									canvas_left = canvas_left + canvas_dleft;	
									if(canvas_left <= 0 || canvas_left >= canvas.width - 80)
									{
										canvas_dleft = -canvas_dleft;
									}		
							   },
							   1
							  );							   										
}

main();




