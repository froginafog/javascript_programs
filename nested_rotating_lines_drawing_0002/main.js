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

function rotate_line_counterclockwise_about_edge(x_P, y_P, x_A, y_A, line_length, angle, dangle, 
                               		             context, line_width, line_color)
{
	var PA_x = line_length * Math.cos(angle);
	var PA_y = -line_length * Math.sin(angle);
	
	x_A = x_P + PA_x;
	y_A = y_P + PA_y; 
	
	draw_line(x_P, y_P, x_A, y_A, context, line_width, line_color);
	
	angle = angle + dangle;
	
	return [x_A, y_A, angle];
}
                               
function main()
{
	document.body.style.backgroundColor = "black";
	
	var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
	var n = 4;

	//create canvas 1
	var canvas_1 = document.getElementById("canvas_1");
	var context_1 = canvas_1.getContext("2d");
	canvas_1.width = 900;
	canvas_1.height = 900;
	var canvas_1_left = 500;
	var canvas_1_top = 0;
	canvas_1.style.position = "absolute";
	canvas_1.style.left = canvas_1_left + "px";
	canvas_1.style.top = canvas_1_top + "px";
	//canvas_1.style.border = "1px solid silver";
	var x_canvas_1_center = canvas_1.width/2;
	var y_canvas_1_center = canvas_1.height/2;
	
	//-----------------------------------------------------------------------------
	
	var length_factor = 0.8;
	var golden_ratio = (1 + Math.sqrt(5))/2;
	
	//-----------------------------------------------------------------------------
	
	//draw line 1
	var line_1_length = 100;
	var line_1_width = 3;
	var line_1_color = "red";
	
	//draw line 1 segment PA
	var x_P_1 = x_canvas_1_center;
	var y_P_1 = y_canvas_1_center;
	var x_A_1 = x_P_1 + line_1_length;
	var y_A_1 = y_P_1;
	//draw_line(x_P_1, y_P_1, x_A_1, y_A_1, context_1, line_1_width, line_1_color);
	
	//rotate line 1
	var angle_1 = 0;
	var dangle_1 = fibonacci[n]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 2
	var line_2_length = length_factor*line_1_length;
	var line_2_width = 3;
	var line_2_color = "green";
	
	//draw line 2 segment PA
	var x_P_2 = x_A_1;
	var y_P_2 = y_A_1;
	var x_A_2 = x_P_2 + line_2_length;
	var y_A_2 = y_P_2;
	
	//rotate line 2
	var angle_2 = 0;
	var dangle_2 = fibonacci[n+1]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 3
	var line_3_length = length_factor*line_2_length;
	var line_3_width = 3;
	var line_3_color = "blue";
	
	//draw line 3 segment PA
	var x_P_3 = x_A_2;
	var y_P_3 = y_A_2;
	var x_A_3 = x_P_3 + line_3_length;
	var y_A_3 = y_P_3;
	

	//rotate line 3
	var angle_3 = 0;
	var dangle_3 = fibonacci[n+2]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 4
	var line_4_length = length_factor*line_3_length;
	var line_4_width = 3;
	var line_4_color = "purple";
	
	//draw line 4 segment PA
	var x_P_4 = x_A_3;
	var y_P_4 = y_A_3;
	var x_A_4 = x_P_4 + line_4_length;
	var y_A_4 = y_P_4;
	

	//rotate line 4
	var angle_4 = 0;
	var dangle_4 = fibonacci[n+3]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 5
	var line_5_length = length_factor*line_4_length;
	var line_5_width = 3;
	var line_5_color = "gold";
	
	//draw line 5 segment PA
	var x_P_5 = x_A_4;
	var y_P_5 = y_A_4;
	var x_A_5 = x_P_5 + line_5_length;
	var y_A_5 = y_P_5;
	
	//rotate line 5
	var angle_5 = 0;
	var dangle_5 = fibonacci[n+4]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 6
	var line_6_length = length_factor*line_5_length;
	var line_6_width = 3;
	var line_6_color = "lightgreen";
	
	//draw line 6 segment PA
	var x_P_6 = x_A_5;
	var y_P_6 = y_A_5;
	var x_A_6 = x_P_6 + line_6_length;
	var y_A_6 = y_P_6;
	
	//rotate line 6
	var angle_6 = 0;
	var dangle_6 = fibonacci[n+5]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 7
	var line_7_length = length_factor*line_6_length;
	var line_7_width = 3;
	var line_7_color = "steelblue";
	
	//draw line 7 segment PA
	var x_P_7 = x_A_6;
	var y_P_7 = y_A_6;
	var x_A_7 = x_P_7 + line_7_length;
	var y_A_7 = y_P_7;
	
	//rotate line 7
	var angle_7 = 0;
	var dangle_7 = fibonacci[n+6]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 8
	var line_8_length = length_factor*line_7_length;
	var line_8_width = 3;
	var line_8_color = "violet";

	//draw line 8 segment PA
	var x_P_8 = x_A_7;
	var y_P_8 = y_A_7;
	var x_A_8 = x_P_8 + line_8_length;
	var y_A_8 = y_P_8;
	
	//rotate line 8
	var angle_8 = 0;
	var dangle_8 = fibonacci[n+7]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 9
	var line_9_length = length_factor*line_8_length;
	var line_9_width = 3;
	var line_9_color = "silver";
	
	//draw line 9 segment PA
	var x_P_9 = x_A_8;
	var y_P_9 = y_A_8;
	var x_A_9 = x_P_9 + line_9_length;
	var y_A_9 = y_P_9;
	
	//rotate line 9
	var angle_9 = 0;
	var dangle_9 = fibonacci[n+8]*0.001*golden_ratio;

	//-----------------------------------------------------------------------------
	
	//create canvas 2
	var canvas_2 = document.getElementById("canvas_2");
	var context_2 = canvas_2.getContext("2d");
	canvas_2.width = 900;
	canvas_2.height = 900;
	var canvas_2_left = 500;
	var canvas_2_top = 0;
	canvas_2.style.position = "absolute";
	canvas_2.style.left = canvas_2_left + "px";
	canvas_2.style.top = canvas_2_top + "px";
	//canvas_2.style.border = "1px solid silver";
	var x_canvas_2_center = canvas_2.width/2;
	var y_canvas_2_center = canvas_2.height/2;
	
	var x_previous_1 = x_A_9;
	var y_previous_1 = y_A_9;
	
	//-----------------------------------------------------------------------------
	//-----------------------------------------------------------------------------
	
	//create canvas 3
	var canvas_3 = document.getElementById("canvas_3");
	var context_3 = canvas_3.getContext("2d");
	canvas_3.width = 900;
	canvas_3.height = 900;
	var canvas_3_left = 500;
	var canvas_3_top = 0;
	canvas_3.style.position = "absolute";
	canvas_3.style.left = canvas_3_left + "px";
	canvas_3.style.top = canvas_3_top + "px";
	//canvas_3.style.border = "1px solid silver";
	var x_canvas_3_center = canvas_3.width/2;
	var y_canvas_3_center = canvas_3.height/2;
	
	//-----------------------------------------------------------------------------
	
	//draw line 10
	var line_10_length = 100;
	var line_10_width = 3;
	var line_10_color = "red";

	//draw line 10 segment PA
	var x_P_10 = x_canvas_3_center;
	var y_P_10 = y_canvas_3_center;
	var x_A_10 = x_P_10 - line_10_length;
	var y_A_10 = y_P_10;
	
	//rotate line 10
	var angle_10 = Math.PI;
	var dangle_10 = fibonacci[n]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------

	//draw line 11
	var line_11_length = length_factor*line_10_length;
	var line_11_width = 3;

	var line_11_color = "green";
	
	//draw line 11 segment PA

	var x_P_11 = x_A_10;
	var y_P_11 = y_A_10;
	var x_A_11 = x_P_11 - line_11_length;
	var y_A_11 = y_P_11;
	
	//rotate line 11
	var angle_11 = Math.PI;
	var dangle_11 = fibonacci[n+1]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------

	//draw line 12
	var line_12_length = length_factor*line_11_length;
	var line_12_width = 3;
	var line_12_color = "blue";
	
	//draw line 12 segment PA
	var x_P_12 = x_A_11;
	var y_P_12 = y_A_11;
	var x_A_12 = x_P_12 - line_12_length;
	var y_A_12 = y_P_12;

	//rotate line 12
	var angle_12 = Math.PI;
	var dangle_12 = fibonacci[n+2]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 13
	var line_13_length = length_factor*line_12_length;
	var line_13_width = 3;
	var line_13_color = "purple";
	
	//draw line 13 segment PA
	var x_P_13 = x_A_12;
	var y_P_13 = y_A_12;
	var x_A_13 = x_P_13 - line_13_length;
	var y_A_13 = y_P_13;
	
	//rotate line 13
	var angle_13 = Math.PI;
	var dangle_13 = fibonacci[n+3]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 14
	var line_14_length = length_factor*line_13_length;
	var line_14_width = 3;
	var line_14_color = "gold";
	
	//draw line 14 segment PA
	var x_P_14 = x_A_13;
	var y_P_14 = y_A_13;
	var x_A_14 = x_P_14 - line_14_length;
	var y_A_14 = y_P_14;
	
	//rotate line 14
	var angle_14 = Math.PI;
	var dangle_14 = fibonacci[n+4]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 15
	var line_15_length = length_factor*line_14_length;
	var line_15_width = 3;
	var line_15_color = "lightgreen";
	
	//draw line 15 segment PA
	var x_P_15 = x_A_14;
	var y_P_15 = y_A_14;
	var x_A_15 = x_P_15 - line_15_length;
	var y_A_15 = y_P_15;

	//rotate line 15
	var angle_15 = Math.PI;
	var dangle_15 = fibonacci[n+5]*0.001*golden_ratio;

	//-----------------------------------------------------------------------------
	
	//draw line 16
	var line_16_length = length_factor*line_15_length;
	var line_16_width = 3;
	var line_16_color = "steelblue";
	
	//draw line 16 segment PA
	var x_P_16 = x_A_15;
	var y_P_16 = y_A_15;
	var x_A_16 = x_P_16 - line_16_length;
	var y_A_16 = y_P_16;
	
	//rotate line 16
	var angle_16 = Math.PI;
	var dangle_16 = fibonacci[n+6]*0.001*golden_ratio;
	
	//-----------------------------------------------------------------------------
	
	//draw line 17
	var line_17_length = length_factor*line_16_length;
	var line_17_width = 3;
	var line_17_color = "violet";

	//draw line 17 segment PA
	var x_P_17 = x_A_16;
	var y_P_17 = y_A_16;
	var x_A_17 = x_P_17 - line_17_length;
	var y_A_17 = y_P_17;
	
	//rotate line 17
	var angle_17 = Math.PI;
	var dangle_17 = fibonacci[n+7]*0.001*golden_ratio;

	//-----------------------------------------------------------------------------
	
	//draw line 18
	var line_18_length = length_factor*line_17_length;
	var line_18_width = 3;
	var line_18_color = "silver";
	
	//draw line 18 segment PA
	var x_P_18 = x_A_17;
	var y_P_18 = y_A_17;
	var x_A_18 = x_P_18 - line_18_length;
	var y_A_18 = y_P_18;

	//rotate line 18
	var angle_18 = Math.PI;
	var dangle_18 = fibonacci[n+8]*0.001*golden_ratio;

	//-----------------------------------------------------------------------------

	//create canvas 4
	var canvas_4 = document.getElementById("canvas_4");
	var context_4 = canvas_4.getContext("2d");
	canvas_4.width = 900;
	canvas_4.height = 900;
	var canvas_4_left = 500;
	var canvas_4_top = 0;
	canvas_4.style.position = "absolute";
	canvas_4.style.left = canvas_4_left + "px";
	canvas_4.style.top = canvas_4_top + "px";
	//canvas_4.style.border = "1px solid silver";

	var x_canvas_4_center = canvas_4.width/2;
	var y_canvas_4_center = canvas_4.height/2;
	
	var x_previous_2 = x_A_18;
	var y_previous_2 = y_A_18;
	
	//-----------------------------------------------------------------------------
	
	var rotate_line_counterclockwise_about_edge_interval = setInterval(function()
																	   {
																		 		context_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
																		 		context_3.clearRect(0, 0, canvas_3.width, canvas_3.height);
																		 
																	   			[x_A_1, y_A_1, angle_1] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_1, y_P_1, x_A_1, y_A_1, line_1_length, angle_1, dangle_1, 
								                      										                              context_1, line_1_width, line_1_color);
								                      							
								                      							x_P_2 = x_A_1;
								                      							y_P_2 = y_A_1;
								                      										                              
								                      							[x_A_2, y_A_2, angle_2] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_2, y_P_2, x_A_2, y_A_2, line_2_length, angle_2, dangle_2, 
								                      										                              context_1, line_2_width, line_2_color);
								                      										                              
								                      							x_P_3 = x_A_2;
								                      							y_P_3 = y_A_2;
								                      										                              
								                      							[x_A_3, y_A_3, angle_3] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_3, y_P_3, x_A_3, y_A_3, line_3_length, angle_3, dangle_3, 
								                      										                              context_1, line_3_width, line_3_color);
								                      										                              
								                      							x_P_4 = x_A_3;
								                      							y_P_4 = y_A_3;
										                              
								                      							[x_A_4, y_A_4, angle_4] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_4, y_P_4, x_A_4, y_A_4, line_4_length, angle_4, dangle_4, 
								                      										                              context_1, line_4_width, line_4_color);
								                      										                              
								                      							x_P_5 = x_A_4;
								                      							y_P_5 = y_A_4;
										                              
								                      							[x_A_5, y_A_5, angle_5] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_5, y_P_5, x_A_5, y_A_5, line_5_length, angle_5, dangle_5, 
								                      										                              context_1, line_5_width, line_5_color);
								                      										                              
								                      							x_P_6 = x_A_5;
								                      							y_P_6 = y_A_5;
										                              
								                      							[x_A_6, y_A_6, angle_6] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_6, y_P_6, x_A_6, y_A_6, line_6_length, angle_6, dangle_6, 
								                      										                              context_1, line_6_width, line_6_color);
								                      										                              
								                      							x_P_7 = x_A_6;
								                      							y_P_7 = y_A_6;
										                              
								                      							[x_A_7, y_A_7, angle_7] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_7, y_P_7, x_A_7, y_A_7, line_7_length, angle_7, dangle_7, 
								                      										                              context_1, line_7_width, line_7_color);
								                      										                              
								                      							x_P_8 = x_A_7;
								                      							y_P_8 = y_A_7;
										                              
								                      							[x_A_8, y_A_8, angle_8] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_8, y_P_8, x_A_8, y_A_8, line_8_length, angle_8, dangle_8, 
								                      										                              context_1, line_8_width, line_8_color);
								                      										                              
								                      							x_P_9 = x_A_8;
								                      							y_P_9 = y_A_8;
										                              
								                      							[x_A_9, y_A_9, angle_9] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_9, y_P_9, x_A_9, y_A_9, line_9_length, angle_9, dangle_9, 
								                      										                              context_1, line_9_width, line_9_color);
								                      							
								                      							draw_line(x_previous_1, y_previous_1, x_A_9, y_A_9, context_2, 1, line_9_color);		                              
								                      										                              
								                      							x_previous_1 = x_A_9;
																				y_previous_1 = y_A_9;
																				
																				//-----------------------------------------------------------------------------------------------------
																				
																				[x_A_10, y_A_10, angle_10] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_10, y_P_10, x_A_10, y_A_10, line_10_length, angle_10, dangle_10, 
								                      										                              context_3, line_10_width, line_10_color);
								                      							
								                      							x_P_11 = x_A_10;
								                      							y_P_11 = y_A_10;
								                      										                              
								                      							[x_A_11, y_A_11, angle_11] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_11, y_P_11, x_A_11, y_A_11, line_11_length, angle_11, dangle_11, 
								                      										                              context_3, line_11_width, line_11_color);
								                      										                              
								                      							x_P_12 = x_A_11;
								                      							y_P_12 = y_A_11;
								                      										                              
								                      							[x_A_12, y_A_12, angle_12] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_12, y_P_12, x_A_12, y_A_12, line_12_length, angle_12, dangle_12, 
								                      										                              context_3, line_12_width, line_12_color);
								                      										                              
								                      							x_P_13 = x_A_12;
								                      							y_P_13 = y_A_12;
										                              
								                      							[x_A_13, y_A_13, angle_13] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_13, y_P_13, x_A_13, y_A_13, line_13_length, angle_13, dangle_13, 
								                      										                              context_3, line_13_width, line_13_color);
								                      										                              
								                      							x_P_14 = x_A_13;
								                      							y_P_14 = y_A_13;
										                              
								                      							[x_A_14, y_A_14, angle_14] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_14, y_P_14, x_A_14, y_A_14, line_14_length, angle_14, dangle_14, 
								                      										                              context_3, line_14_width, line_14_color);
								                      										                              
								                      							x_P_15 = x_A_14;
								                      							y_P_15 = y_A_14;
										                              
								                      							[x_A_15, y_A_15, angle_15] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_15, y_P_15, x_A_15, y_A_15, line_15_length, angle_15, dangle_15, 
								                      										                              context_3, line_15_width, line_15_color);
								                      										                              
								                      							x_P_16 = x_A_15;
								                      							y_P_16 = y_A_15;
										                              
								                      							[x_A_16, y_A_16, angle_16] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_16, y_P_16, x_A_16, y_A_16, line_16_length, angle_16, dangle_16, 
								                      										                              context_3, line_16_width, line_16_color);
								                      										                              
								                      							x_P_17 = x_A_16;
								                      							y_P_17 = y_A_16;
										                              
								                      							[x_A_17, y_A_17, angle_17] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_17, y_P_17, x_A_17, y_A_17, line_17_length, angle_17, dangle_17, 
								                      										                              context_3, line_17_width, line_17_color);
								                      										                              
								                      							x_P_18 = x_A_17;
								                      							y_P_18 = y_A_17;
										                              
								                      							[x_A_18, y_A_18, angle_18] 
																	   			= rotate_line_counterclockwise_about_edge(x_P_18, y_P_18, x_A_18, y_A_18, line_18_length, angle_18, dangle_18, 
								                      										                              context_3, line_18_width, line_18_color);
								                      							
								                      							draw_line(x_previous_2, y_previous_2, x_A_18, y_A_18, context_4, 1, line_18_color);		                              
								                      										                              
								                      							x_previous_2 = x_A_18;
																				y_previous_2 = y_A_18;
																	   },
																	   1
																	  );
}

main();




