var counterclockwise = true;
var time_interval = 9;

//---------------------------------------------------------------------------------------------------

var canvas_1 = document.getElementById("canvas_1");
var context_1 = canvas_1.getContext("2d");

canvas_1.width = 300;
canvas_1.height = 300;

var canvas_1_left = 0;
var canvas_1_top = 0;

canvas_1.style.position = "absolute";
canvas_1.style.left = canvas_1_left + "px";
canvas_1.style.top = canvas_1_top + "px";
//canvas_1.style.border = "1px solid silver";

var dcanvas_1_left = 1;
var dcanvas_1_top = 1;

var x_radial_gradient_start_1 = canvas_1.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_1 = canvas_1.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_1 = canvas_1.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_1 = canvas_1.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_1 = (canvas_1.width + canvas_1.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_1 = (canvas_1.width + canvas_1.height)/4;    //radius of the outer circle 

var gradient_1;
//var dx_radial_gradient_start_1 = 1;
//var dy_radial_gradient_start_1 = 1;
//var dx_radial_gradient_end_1 = 1;
//var dy_radial_gradient_end_1 = 1;
var dr_radial_gradient_start_1 = 1;
var dr_radial_gradient_end_1 = 1;

var radial_gradient_color_inner_1 = get_random_color();
var radial_gradient_color_outer_1 = "black";

while((gradient_color_1 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_1()
{
	context_1.beginPath();
	gradient_1 = context_1.createRadialGradient(x_radial_gradient_start_1, y_radial_gradient_start_1, r_radial_gradient_start_1, 
	                                            x_radial_gradient_end_1, y_radial_gradient_end_1, r_radial_gradient_end_1);
	gradient_1.addColorStop(0, radial_gradient_color_inner_1);
	gradient_1.addColorStop(0.1, radial_gradient_color_outer_1);
	gradient_1.addColorStop(0.2, radial_gradient_color_inner_1);
	gradient_1.addColorStop(0.3, radial_gradient_color_outer_1);
	gradient_1.addColorStop(0.4, radial_gradient_color_inner_1);
	gradient_1.addColorStop(0.5, radial_gradient_color_outer_1);
	gradient_1.addColorStop(0.6, radial_gradient_color_inner_1);
	gradient_1.addColorStop(0.7, radial_gradient_color_outer_1);
	gradient_1.addColorStop(0.8, radial_gradient_color_inner_1);
	gradient_1.addColorStop(1, "black");
	
	context_1.fillStyle = gradient_1;
	context_1.fillRect(0, 0, canvas_1.width, canvas_1.height);
	context_1.closePath();
	//x_radial_gradient_start_1 = x_radial_gradient_start_1 + dx_radial_gradient_start_1;
	//y_radial_gradient_start_1 = y_radial_gradient_start_1 + dy_radial_gradient_start_1;
	//x_radial_gradient_start_1 = x_radial_gradient_end_1 + dx_radial_gradient_end_1;
	//y_radial_gradient_start_1 = y_radial_gradient_end_1 + dy_radial_gradient_end_1;
	r_radial_gradient_start_1 = r_radial_gradient_start_1 + dr_radial_gradient_start_1;
	//r_radial_gradient_end_1 = r_radial_gradient_end_1 + dr_radial_gradient_end_1;
	
	if(r_radial_gradient_start_1 <= 0 || r_radial_gradient_start_1 > canvas_1.width/3)
	{
		if(r_radial_gradient_start_1 <= 0)
		{
			radial_gradient_color_inner_1 = get_random_color();
		}
		dr_radial_gradient_start_1 = -dr_radial_gradient_start_1;
	}
	
	if((canvas_1_top == 0) && (canvas_1_left >= 0 && canvas_1_left < 2*canvas_1.width))
	{
		canvas_1_left = canvas_1_left + dcanvas_1_left;
		canvas_1.style.left = canvas_1_left + "px";
	}
	
	if(canvas_1_left == 2*canvas_1.width && (canvas_1_top >= 0 && canvas_1_top < 2*canvas_1.height))
	{
		canvas_1_top = canvas_1_top + dcanvas_1_top;
		canvas_1.style.top = canvas_1_top + "px";
	}
	
	if((canvas_1_top == 2*canvas_1.height) && (canvas_1_left >= 0 && canvas_1_left <= 2*canvas_1.width))
	{
		canvas_1_left = canvas_1_left - dcanvas_1_left;
		canvas_1.style.left = canvas_1_left + "px";
	}
	
	if((canvas_1_left == 0) && (canvas_1_top >= 0 && canvas_1_top <= 2*canvas_1.height))
	{
		canvas_1_top = canvas_1_top - dcanvas_1_top;
		canvas_1.style.top = canvas_1_top + "px";
	}
}	

var interval_1 = setInterval(animate_canvas_1, time_interval);		

//---------------------------------------------------------------------------------------------------	
	
var canvas_2 = document.getElementById("canvas_2");
var context_2 = canvas_2.getContext("2d");

canvas_2.width = 300;
canvas_2.height = 300;

var canvas_2_left = 600;
var canvas_2_top = 0;

canvas_2.style.position = "absolute";
canvas_2.style.left = canvas_2_left + "px";
canvas_2.style.top = canvas_2_top + "px";
//canvas_2.style.border = "1px solid silver";

var dcanvas_2_left = 1;
var dcanvas_2_top = 1;

var x_radial_gradient_start_2 = canvas_2.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_2 = canvas_2.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_2 = canvas_2.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_2 = canvas_2.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_2 = (canvas_2.width + canvas_2.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_2 = (canvas_2.width + canvas_2.height)/4;    //radius of the outer circle 

var gradient_2;
//var dx_radial_gradient_start_2 = 1;
//var dy_radial_gradient_start_2 = 1;
//var dx_radial_gradient_end_2 = 1;
//var dy_radial_gradient_end_2 = 1;
var dr_radial_gradient_start_2 = 1;
var dr_radial_gradient_end_2 = 1;

var radial_gradient_color_inner_2 = get_random_color();
var radial_gradient_color_outer_2 = "black";

while((gradient_color_2 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_2()
{
	context_2.beginPath();
	gradient_2 = context_2.createRadialGradient(x_radial_gradient_start_2, y_radial_gradient_start_2, r_radial_gradient_start_2, 
	                                            x_radial_gradient_end_2, y_radial_gradient_end_2, r_radial_gradient_end_2);
	gradient_2.addColorStop(0, radial_gradient_color_inner_2);
	gradient_2.addColorStop(0.1, radial_gradient_color_outer_2);
	gradient_2.addColorStop(0.2, radial_gradient_color_inner_2);
	gradient_2.addColorStop(0.3, radial_gradient_color_outer_2);
	gradient_2.addColorStop(0.4, radial_gradient_color_inner_2);
	gradient_2.addColorStop(0.5, radial_gradient_color_outer_2);
	gradient_2.addColorStop(0.6, radial_gradient_color_inner_2);
	gradient_2.addColorStop(0.7, radial_gradient_color_outer_2);
	gradient_2.addColorStop(0.8, radial_gradient_color_inner_2);
	gradient_2.addColorStop(1, "black");
	

	context_2.fillStyle = gradient_2;
	context_2.fillRect(0, 0, canvas_2.width, canvas_2.height);
	context_2.closePath();

	//x_radial_gradient_start_2 = x_radial_gradient_start_2 + dx_radial_gradient_start_2;
	//y_radial_gradient_start_2 = y_radial_gradient_start_2 + dy_radial_gradient_start_2;
	//x_radial_gradient_start_2 = x_radial_gradient_end_2 + dx_radial_gradient_end_2;
	//y_radial_gradient_start_2 = y_radial_gradient_end_2 + dy_radial_gradient_end_2;
	r_radial_gradient_start_2 = r_radial_gradient_start_2 + dr_radial_gradient_start_2;
	//r_radial_gradient_end_2 = r_radial_gradient_end_2 + dr_radial_gradient_end_2;
	
	if(r_radial_gradient_start_2 <= 0 || r_radial_gradient_start_2 > canvas_2.width/3)
	{

		if(r_radial_gradient_start_2 <= 0)
		{
			radial_gradient_color_inner_2 = get_random_color();
		}
		dr_radial_gradient_start_2 = -dr_radial_gradient_start_2;
	}

	if((canvas_2_top == 0) && (canvas_2_left >= 0 && canvas_2_left < 2*canvas_2.width))
	{

		canvas_2_left = canvas_2_left + dcanvas_2_left;
		canvas_2.style.left = canvas_2_left + "px";
	}
	
	if(canvas_2_left == 2*canvas_2.width && (canvas_2_top >= 0 && canvas_2_top < 2*canvas_2.height))
	{
		canvas_2_top = canvas_2_top + dcanvas_2_top;
		canvas_2.style.top = canvas_2_top + "px";
	}
	
	if((canvas_2_top == 2*canvas_2.height) && (canvas_2_left >= 0 && canvas_2_left <= 2*canvas_2.width))
	{
		canvas_2_left = canvas_2_left - dcanvas_2_left;
		canvas_2.style.left = canvas_2_left + "px";
	}
	
	if((canvas_2_left == 0) && (canvas_2_top >= 0 && canvas_2_top <= 2*canvas_2.height))
	{
		canvas_2_top = canvas_2_top - dcanvas_2_top;
		canvas_2.style.top = canvas_2_top + "px";
	}
}	

var interval_2 = setInterval(animate_canvas_2, time_interval);		

//---------------------------------------------------------------------------------------------------		

var canvas_3 = document.getElementById("canvas_3");
var context_3 = canvas_3.getContext("2d");

canvas_3.width = 300;
canvas_3.height = 300;

var canvas_3_left = 600;
var canvas_3_top = 600;

canvas_3.style.position = "absolute";
canvas_3.style.left = canvas_3_left + "px";
canvas_3.style.top = canvas_3_top + "px";
//canvas_3.style.border = "1px solid silver";

var dcanvas_3_left = 1;
var dcanvas_3_top = 1;

var x_radial_gradient_start_3 = canvas_3.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_3 = canvas_3.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_3 = canvas_3.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_3 = canvas_3.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_3 = (canvas_3.width + canvas_3.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_3 = (canvas_3.width + canvas_3.height)/4;    //radius of the outer circle 

var gradient_3;
//var dx_radial_gradient_start_3 = 1;
//var dy_radial_gradient_start_3 = 1;
//var dx_radial_gradient_end_3 = 1;
//var dy_radial_gradient_end_3 = 1;
var dr_radial_gradient_start_3 = 1;
var dr_radial_gradient_end_3 = 1;

var radial_gradient_color_inner_3 = get_random_color();
var radial_gradient_color_outer_3 = "black";

while((gradient_color_3 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_3()
{
	context_3.beginPath();
	gradient_3 = context_3.createRadialGradient(x_radial_gradient_start_3, y_radial_gradient_start_3, r_radial_gradient_start_3, 
	                                            x_radial_gradient_end_3, y_radial_gradient_end_3, r_radial_gradient_end_3);
	gradient_3.addColorStop(0, radial_gradient_color_inner_3);
	gradient_3.addColorStop(0.1, radial_gradient_color_outer_3);
	gradient_3.addColorStop(0.2, radial_gradient_color_inner_3);
	gradient_3.addColorStop(0.3, radial_gradient_color_outer_3);
	gradient_3.addColorStop(0.4, radial_gradient_color_inner_3);
	gradient_3.addColorStop(0.5, radial_gradient_color_outer_3);
	gradient_3.addColorStop(0.6, radial_gradient_color_inner_3);
	gradient_3.addColorStop(0.7, radial_gradient_color_outer_3);
	gradient_3.addColorStop(0.8, radial_gradient_color_inner_3);
	gradient_3.addColorStop(1, "black");
	
	context_3.fillStyle = gradient_3;
	context_3.fillRect(0, 0, canvas_3.width, canvas_3.height);
	context_3.closePath();

	//x_radial_gradient_start_3 = x_radial_gradient_start_3 + dx_radial_gradient_start_3;
	//y_radial_gradient_start_3 = y_radial_gradient_start_3 + dy_radial_gradient_start_3;
	//x_radial_gradient_start_3 = x_radial_gradient_end_3 + dx_radial_gradient_end_3;
	//y_radial_gradient_start_3 = y_radial_gradient_end_3 + dy_radial_gradient_end_3;
	r_radial_gradient_start_3 = r_radial_gradient_start_3 + dr_radial_gradient_start_3;
	//r_radial_gradient_end_3 = r_radial_gradient_end_3 + dr_radial_gradient_end_3;
	
	if(r_radial_gradient_start_3 <= 0 || r_radial_gradient_start_3 > canvas_3.width/3)
	{
		if(r_radial_gradient_start_3 <= 0)
		{
			radial_gradient_color_inner_3 = get_random_color();
		}
		dr_radial_gradient_start_3 = -dr_radial_gradient_start_3;
	}

	if((canvas_3_top == 0) && (canvas_3_left >= 0 && canvas_3_left < 2*canvas_3.width))
	{
		canvas_3_left = canvas_3_left + dcanvas_3_left;
		canvas_3.style.left = canvas_3_left + "px";
	}
	
	if(canvas_3_left == 2*canvas_3.width && (canvas_3_top >= 0 && canvas_3_top < 2*canvas_3.height))
	{
		canvas_3_top = canvas_3_top + dcanvas_3_top;
		canvas_3.style.top = canvas_3_top + "px";
	}
	
	if((canvas_3_top == 2*canvas_3.height) && (canvas_3_left >= 0 && canvas_3_left <= 2*canvas_3.width))
	{
		canvas_3_left = canvas_3_left - dcanvas_3_left;
		canvas_3.style.left = canvas_3_left + "px";
	}
	
	if((canvas_3_left == 0) && (canvas_3_top >= 0 && canvas_3_top <= 2*canvas_3.height))
	{
		canvas_3_top = canvas_3_top - dcanvas_3_top;
		canvas_3.style.top = canvas_3_top + "px";
	}
}	

var interval_3 = setInterval(animate_canvas_3, time_interval);		

//---------------------------------------------------------------------------------------------------	
	
var canvas_4 = document.getElementById("canvas_4");
var context_4 = canvas_4.getContext("2d");

canvas_4.width = 300;
canvas_4.height = 300;

var canvas_4_left = 0;
var canvas_4_top = 600;

canvas_4.style.position = "absolute";
canvas_4.style.left = canvas_4_left + "px";
canvas_4.style.top = canvas_4_top + "px";
//canvas_4.style.border = "1px solid silver";

var dcanvas_4_left = 1;
var dcanvas_4_top = 1;

var x_radial_gradient_start_4 = canvas_4.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_4 = canvas_4.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_4 = canvas_4.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_4 = canvas_4.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_4 = (canvas_4.width + canvas_4.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_4 = (canvas_4.width + canvas_4.height)/4;    //radius of the outer circle 

var gradient_4;
//var dx_radial_gradient_start_4 = 1;
//var dy_radial_gradient_start_4 = 1;
//var dx_radial_gradient_end_4 = 1;
//var dy_radial_gradient_end_4 = 1;
var dr_radial_gradient_start_4 = 1;
var dr_radial_gradient_end_4 = 1;

var radial_gradient_color_inner_4 = get_random_color();
var radial_gradient_color_outer_4 = "black";

while((gradient_color_4 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")

{
	continue;
}

function animate_canvas_4()
{
	context_4.beginPath();
	gradient_4 = context_4.createRadialGradient(x_radial_gradient_start_4, y_radial_gradient_start_4, r_radial_gradient_start_4, 
	                                            x_radial_gradient_end_4, y_radial_gradient_end_4, r_radial_gradient_end_4);
	gradient_4.addColorStop(0, radial_gradient_color_inner_4);
	gradient_4.addColorStop(0.1, radial_gradient_color_outer_4);
	gradient_4.addColorStop(0.2, radial_gradient_color_inner_4);
	gradient_4.addColorStop(0.3, radial_gradient_color_outer_4);
	gradient_4.addColorStop(0.4, radial_gradient_color_inner_4);
	gradient_4.addColorStop(0.5, radial_gradient_color_outer_4);

	gradient_4.addColorStop(0.6, radial_gradient_color_inner_4);
	gradient_4.addColorStop(0.7, radial_gradient_color_outer_4);
	gradient_4.addColorStop(0.8, radial_gradient_color_inner_4);
	gradient_4.addColorStop(1, "black");
	
	context_4.fillStyle = gradient_4;
	context_4.fillRect(0, 0, canvas_4.width, canvas_4.height);
	context_4.closePath();

	//x_radial_gradient_start_4 = x_radial_gradient_start_4 + dx_radial_gradient_start_4;
	//y_radial_gradient_start_4 = y_radial_gradient_start_4 + dy_radial_gradient_start_4;
	//x_radial_gradient_start_4 = x_radial_gradient_end_4 + dx_radial_gradient_end_4;
	//y_radial_gradient_start_4 = y_radial_gradient_end_4 + dy_radial_gradient_end_4;
	r_radial_gradient_start_4 = r_radial_gradient_start_4 + dr_radial_gradient_start_4;
	//r_radial_gradient_end_4 = r_radial_gradient_end_4 + dr_radial_gradient_end_4;
	
	if(r_radial_gradient_start_4 <= 0 || r_radial_gradient_start_4 > canvas_4.width/3)
	{
		if(r_radial_gradient_start_4 <= 0)
		{
			radial_gradient_color_inner_4 = get_random_color();
		}
		dr_radial_gradient_start_4 = -dr_radial_gradient_start_4;
	}


	if((canvas_4_top == 0) && (canvas_4_left >= 0 && canvas_4_left < 2*canvas_4.width))
	{
		canvas_4_left = canvas_4_left + dcanvas_4_left;
		canvas_4.style.left = canvas_4_left + "px";
	}
	
	if(canvas_4_left == 2*canvas_4.width && (canvas_4_top >= 0 && canvas_4_top < 2*canvas_4.height))
	{
		canvas_4_top = canvas_4_top + dcanvas_4_top;
		canvas_4.style.top = canvas_4_top + "px";
	}
	

	if((canvas_4_top == 2*canvas_4.height) && (canvas_4_left > 0 && canvas_4_left <= 2*canvas_4.width))
	{
		canvas_4_left = canvas_4_left - dcanvas_4_left;
		canvas_4.style.left = canvas_4_left + "px";
	}

	
	if((canvas_4_left == 0) && (canvas_4_top >= 0 && canvas_4_top <= 2*canvas_4.height))
	{
		canvas_4_top = canvas_4_top - dcanvas_4_top;
		canvas_4.style.top = canvas_4_top + "px";
	}
}	

var interval_4 = setInterval(animate_canvas_4, time_interval);		

//---------------------------------------------------------------------------------------------------		

var canvas_5 = document.getElementById("canvas_5");
var context_5 = canvas_5.getContext("2d");

canvas_5.width = 300;
canvas_5.height = 300;

var canvas_5_left = 900;
var canvas_5_top = 0;

canvas_5.style.position = "absolute";
canvas_5.style.left = canvas_5_left + "px";
canvas_5.style.top = canvas_5_top + "px";
//canvas_5.style.border = "1px solid silver";

var dcanvas_5_left = 1;
var dcanvas_5_top = 1;

var x_radial_gradient_start_5 = canvas_5.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_5 = canvas_5.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_5 = canvas_5.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_5 = canvas_5.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_5 = (canvas_5.width + canvas_5.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_5 = (canvas_5.width + canvas_5.height)/4;    //radius of the outer circle 

var gradient_5;
//var dx_radial_gradient_start_5 = 1;
//var dy_radial_gradient_start_5 = 1;
//var dx_radial_gradient_end_5 = 1;
//var dy_radial_gradient_end_5 = 1;
var dr_radial_gradient_start_5 = 1;
var dr_radial_gradient_end_5 = 1;

var radial_gradient_color_inner_5 = "black";
var radial_gradient_color_outer_5 = get_random_color();

while((gradient_color_5 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_5()
{
	context_5.beginPath();
	gradient_5 = context_5.createRadialGradient(x_radial_gradient_start_5, y_radial_gradient_start_5, r_radial_gradient_start_5, 
	                                            x_radial_gradient_end_5, y_radial_gradient_end_5, r_radial_gradient_end_5);
	gradient_5.addColorStop(0, radial_gradient_color_inner_5);
	gradient_5.addColorStop(0.1, radial_gradient_color_outer_5);
	gradient_5.addColorStop(0.2, radial_gradient_color_inner_5);
	gradient_5.addColorStop(0.3, radial_gradient_color_outer_5);
	gradient_5.addColorStop(0.4, radial_gradient_color_inner_5);
	gradient_5.addColorStop(0.5, radial_gradient_color_outer_5);
	gradient_5.addColorStop(0.6, radial_gradient_color_inner_5);
	gradient_5.addColorStop(0.7, radial_gradient_color_outer_5);
	gradient_5.addColorStop(0.8, radial_gradient_color_inner_5);
	gradient_5.addColorStop(1, "black");
	
	context_5.fillStyle = gradient_5;
	context_5.fillRect(0, 0, canvas_5.width, canvas_5.height);
	context_5.closePath();

	//x_radial_gradient_start_5 = x_radial_gradient_start_5 + dx_radial_gradient_start_5;
	//y_radial_gradient_start_5 = y_radial_gradient_start_5 + dy_radial_gradient_start_5;
	//x_radial_gradient_start_5 = x_radial_gradient_end_5 + dx_radial_gradient_end_5;
	//y_radial_gradient_start_5 = y_radial_gradient_end_5 + dy_radial_gradient_end_5;
	r_radial_gradient_start_5 = r_radial_gradient_start_5 + dr_radial_gradient_start_5;
	//r_radial_gradient_end_5 = r_radial_gradient_end_5 + dr_radial_gradient_end_5;
	
	if(r_radial_gradient_start_5 <= 0 || r_radial_gradient_start_5 > canvas_5.width/3)
	{
		if(r_radial_gradient_start_5 <= 0)
		{
			radial_gradient_color_outer_5 = get_random_color();
		}
		dr_radial_gradient_start_5 = -dr_radial_gradient_start_5;
	}
	
	if((canvas_5_left == 900) && (canvas_5_top >= 0 && canvas_5_top < 2*canvas_5.height))
	{
		canvas_5_top = canvas_5_top + dcanvas_5_top;
		canvas_5.style.top = canvas_5_top + "px";
	}
	
	if((canvas_5_top == 2*canvas_5.height) && (canvas_5_left >= 900 && canvas_5_left < 900 + 2*canvas_5.width))
	{
		canvas_5_left = canvas_5_left + dcanvas_5_left;
		canvas_5.style.left = canvas_5_left + "px";
	}
	
	if((canvas_5_left == 900 + 2*canvas_5.width) && (canvas_5_top > 0 && canvas_5_top <= 2*canvas_5.height))
	{
		canvas_5_top = canvas_5_top - dcanvas_5_top;
		canvas_5.style.top = canvas_5_top + "px";
	}
	
	if((canvas_5_top == 0) && (canvas_5_left > 900 && canvas_5_left <= 900 + 2*canvas_5.width))
	{
		canvas_5_left = canvas_5_left - dcanvas_5_left;
		canvas_5.style.left = canvas_5_left + "px";
	}
}	

var interval_5 = setInterval(animate_canvas_5, time_interval);		

//---------------------------------------------------------------------------------------------------		

var canvas_6 = document.getElementById("canvas_6");
var context_6 = canvas_6.getContext("2d");

canvas_6.width = 300;
canvas_6.height = 300;

var canvas_6_left = 900;
var canvas_6_top = 2*canvas_6.height;

canvas_6.style.position = "absolute";
canvas_6.style.left = canvas_6_left + "px";
canvas_6.style.top = canvas_6_top + "px";
//canvas_6.style.border = "1px solid silver";

var dcanvas_6_left = 1;
var dcanvas_6_top = 1;

var x_radial_gradient_start_6 = canvas_6.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_6 = canvas_6.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_6 = canvas_6.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_6 = canvas_6.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_6 = (canvas_6.width + canvas_6.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_6 = (canvas_6.width + canvas_6.height)/4;    //radius of the outer circle 

var gradient_6;
//var dx_radial_gradient_start_6 = 1;
//var dy_radial_gradient_start_6 = 1;
//var dx_radial_gradient_end_6 = 1;
//var dy_radial_gradient_end_6 = 1;
var dr_radial_gradient_start_6 = 1;
var dr_radial_gradient_end_6 = 1;

var radial_gradient_color_inner_6 = "black";
var radial_gradient_color_outer_6 = get_random_color();

while((gradient_color_6 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_6()
{
	context_6.beginPath();
	gradient_6 = context_6.createRadialGradient(x_radial_gradient_start_6, y_radial_gradient_start_6, r_radial_gradient_start_6, 
	                                            x_radial_gradient_end_6, y_radial_gradient_end_6, r_radial_gradient_end_6);
	gradient_6.addColorStop(0, radial_gradient_color_inner_6);
	gradient_6.addColorStop(0.1, radial_gradient_color_outer_6);
	gradient_6.addColorStop(0.2, radial_gradient_color_inner_6);
	gradient_6.addColorStop(0.3, radial_gradient_color_outer_6);
	gradient_6.addColorStop(0.4, radial_gradient_color_inner_6);
	gradient_6.addColorStop(0.5, radial_gradient_color_outer_6);
	gradient_6.addColorStop(0.6, radial_gradient_color_inner_6);
	gradient_6.addColorStop(0.7, radial_gradient_color_outer_6);
	gradient_6.addColorStop(0.8, radial_gradient_color_inner_6);
	gradient_6.addColorStop(1, "black");
	
	context_6.fillStyle = gradient_6;
	context_6.fillRect(0, 0, canvas_6.width, canvas_6.height);
	context_6.closePath();

	//x_radial_gradient_start_6 = x_radial_gradient_start_6 + dx_radial_gradient_start_6;
	//y_radial_gradient_start_6 = y_radial_gradient_start_6 + dy_radial_gradient_start_6;
	//x_radial_gradient_start_6 = x_radial_gradient_end_6 + dx_radial_gradient_end_6;
	//y_radial_gradient_start_6 = y_radial_gradient_end_6 + dy_radial_gradient_end_6;
	r_radial_gradient_start_6 = r_radial_gradient_start_6 + dr_radial_gradient_start_6;
	//r_radial_gradient_end_6 = r_radial_gradient_end_6 + dr_radial_gradient_end_6;
	
	if(r_radial_gradient_start_6 <= 0 || r_radial_gradient_start_6 > canvas_6.width/3)
	{
		if(r_radial_gradient_start_6 <= 0)
		{
			radial_gradient_color_outer_6 = get_random_color();
		}
		dr_radial_gradient_start_6 = -dr_radial_gradient_start_6;
	}
	
	if((canvas_6_left == 900) && (canvas_6_top >= 0 && canvas_6_top < 2*canvas_6.height))
	{
		canvas_6_top = canvas_6_top + dcanvas_6_top;
		canvas_6.style.top = canvas_6_top + "px";
	}
	
	if((canvas_6_top == 2*canvas_6.height) && (canvas_6_left >= 900 && canvas_6_left < 900 + 2*canvas_6.width))
	{
		canvas_6_left = canvas_6_left + dcanvas_6_left;
		canvas_6.style.left = canvas_6_left + "px";
	}
	
	if((canvas_6_left == 900 + 2*canvas_6.width) && (canvas_6_top > 0 && canvas_6_top <= 2*canvas_6.height))
	{
		canvas_6_top = canvas_6_top - dcanvas_6_top;
		canvas_6.style.top = canvas_6_top + "px";
	}
	
	if((canvas_6_top == 0) && (canvas_6_left > 900 && canvas_6_left <= 900 + 2*canvas_6.width))
	{
		canvas_6_left = canvas_6_left - dcanvas_6_left;
		canvas_6.style.left = canvas_6_left + "px";
	}
}	

var interval_6 = setInterval(animate_canvas_6, time_interval);	

//---------------------------------------------------------------------------------------------------		

var canvas_7 = document.getElementById("canvas_7");
var context_7 = canvas_7.getContext("2d");

canvas_7.width = 300;
canvas_7.height = 300;

var canvas_7_left = 900 + 2*canvas_7.width;
var canvas_7_top = 2*canvas_7.height;

canvas_7.style.position = "absolute";
canvas_7.style.left = canvas_7_left + "px";
canvas_7.style.top = canvas_7_top + "px";
//canvas_7.style.border = "1px solid silver";

var dcanvas_7_left = 1;
var dcanvas_7_top = 1;

var x_radial_gradient_start_7 = canvas_7.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_7 = canvas_7.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_7 = canvas_7.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_7 = canvas_7.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_7 = (canvas_7.width + canvas_7.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_7 = (canvas_7.width + canvas_7.height)/4;    //radius of the outer circle 

var gradient_7;
//var dx_radial_gradient_start_7 = 1;
//var dy_radial_gradient_start_7 = 1;
//var dx_radial_gradient_end_7 = 1;
//var dy_radial_gradient_end_7 = 1;
var dr_radial_gradient_start_7 = 1;
var dr_radial_gradient_end_7 = 1;

var radial_gradient_color_inner_7 = "black";
var radial_gradient_color_outer_7 = get_random_color();

while((gradient_color_7 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_7()
{
	context_7.beginPath();
	gradient_7 = context_7.createRadialGradient(x_radial_gradient_start_7, y_radial_gradient_start_7, r_radial_gradient_start_7, 
	                                            x_radial_gradient_end_7, y_radial_gradient_end_7, r_radial_gradient_end_7);
	gradient_7.addColorStop(0, radial_gradient_color_inner_7);
	gradient_7.addColorStop(0.1, radial_gradient_color_outer_7);
	gradient_7.addColorStop(0.2, radial_gradient_color_inner_7);
	gradient_7.addColorStop(0.3, radial_gradient_color_outer_7);
	gradient_7.addColorStop(0.4, radial_gradient_color_inner_7);
	gradient_7.addColorStop(0.5, radial_gradient_color_outer_7);
	gradient_7.addColorStop(0.6, radial_gradient_color_inner_7);
	gradient_7.addColorStop(0.7, radial_gradient_color_outer_7);
	gradient_7.addColorStop(0.8, radial_gradient_color_inner_7);
	gradient_7.addColorStop(1, "black");

	context_7.fillStyle = gradient_7;
	context_7.fillRect(0, 0, canvas_7.width, canvas_7.height);
	context_7.closePath();

	//x_radial_gradient_start_7 = x_radial_gradient_start_7 + dx_radial_gradient_start_7;
	//y_radial_gradient_start_7 = y_radial_gradient_start_7 + dy_radial_gradient_start_7;
	//x_radial_gradient_start_7 = x_radial_gradient_end_7 + dx_radial_gradient_end_7;
	//y_radial_gradient_start_7 = y_radial_gradient_end_7 + dy_radial_gradient_end_7;
	r_radial_gradient_start_7 = r_radial_gradient_start_7 + dr_radial_gradient_start_7;
	//r_radial_gradient_end_7 = r_radial_gradient_end_7 + dr_radial_gradient_end_7;
	
	if(r_radial_gradient_start_7 <= 0 || r_radial_gradient_start_7 > canvas_7.width/3)
	{
		if(r_radial_gradient_start_7 <= 0)
		{
			radial_gradient_color_outer_7 = get_random_color();
		}
		dr_radial_gradient_start_7 = -dr_radial_gradient_start_7;
	}
	
	if((canvas_7_left == 900) && (canvas_7_top >= 0 && canvas_7_top < 2*canvas_7.height))
	{
		canvas_7_top = canvas_7_top + dcanvas_7_top;
		canvas_7.style.top = canvas_7_top + "px";
	}
	
	if((canvas_7_top == 2*canvas_7.height) && (canvas_7_left >= 900 && canvas_7_left < 900 + 2*canvas_7.width))
	{
		canvas_7_left = canvas_7_left + dcanvas_7_left;
		canvas_7.style.left = canvas_7_left + "px";
	}

	if((canvas_7_left == 900 + 2*canvas_7.width) && (canvas_7_top > 0 && canvas_7_top <= 2*canvas_7.height))
	{
		canvas_7_top = canvas_7_top - dcanvas_7_top;
		canvas_7.style.top = canvas_7_top + "px";
	}
	
	if((canvas_7_top == 0) && (canvas_7_left > 900 && canvas_7_left <= 900 + 2*canvas_7.width))
	{
		canvas_7_left = canvas_7_left - dcanvas_7_left;
		canvas_7.style.left = canvas_7_left + "px";
	}
}	

var interval_7 = setInterval(animate_canvas_7, time_interval);	

//---------------------------------------------------------------------------------------------------		

var canvas_8 = document.getElementById("canvas_8");
var context_8 = canvas_8.getContext("2d");

canvas_8.width = 300;
canvas_8.height = 300;

var canvas_8_left = 900 + 2*canvas_8.width;
var canvas_8_top = 0;

canvas_8.style.position = "absolute";
canvas_8.style.left = canvas_8_left + "px";
canvas_8.style.top = canvas_8_top + "px";
//canvas_8.style.border = "1px solid silver";

var dcanvas_8_left = 1;
var dcanvas_8_top = 1;

var x_radial_gradient_start_8 = canvas_8.width/2;   //x coordinate of the center of the inner circle
var y_radial_gradient_start_8 = canvas_8.height/2;  //y coordinate of the center of the inner circle
var x_radial_gradient_end_8 = canvas_8.width/2;     //x coordinate of the center of the out circle
var y_radial_gradient_end_8 = canvas_8.height/2;    //y coordinate of the center of the out circle
var r_radial_gradient_start_8 = (canvas_8.width + canvas_8.height)/30;  //radius of the inner circle 
var r_radial_gradient_end_8 = (canvas_8.width + canvas_8.height)/4;    //radius of the outer circle 

var gradient_8;
//var dx_radial_gradient_start_8 = 1;
//var dy_radial_gradient_start_8 = 1;
//var dx_radial_gradient_end_8 = 1;
//var dy_radial_gradient_end_8 = 1;
var dr_radial_gradient_start_8 = 1;
var dr_radial_gradient_end_8 = 1;

var radial_gradient_color_inner_8 = "black";
var radial_gradient_color_outer_8 = get_random_color();

while((gradient_color_8 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

function animate_canvas_8()
{
	context_8.beginPath();
	gradient_8 = context_8.createRadialGradient(x_radial_gradient_start_8, y_radial_gradient_start_8, r_radial_gradient_start_8, 
	                                            x_radial_gradient_end_8, y_radial_gradient_end_8, r_radial_gradient_end_8);
	gradient_8.addColorStop(0, radial_gradient_color_inner_8);
	gradient_8.addColorStop(0.1, radial_gradient_color_outer_8);
	gradient_8.addColorStop(0.2, radial_gradient_color_inner_8);
	gradient_8.addColorStop(0.3, radial_gradient_color_outer_8);
	gradient_8.addColorStop(0.4, radial_gradient_color_inner_8);
	gradient_8.addColorStop(0.5, radial_gradient_color_outer_8);
	gradient_8.addColorStop(0.6, radial_gradient_color_inner_8);
	gradient_8.addColorStop(0.7, radial_gradient_color_outer_8);
	gradient_8.addColorStop(0.8, radial_gradient_color_inner_8);
	gradient_8.addColorStop(1, "black");
	context_8.fillStyle = gradient_8;
	context_8.fillRect(0, 0, canvas_8.width, canvas_8.height);
	context_8.closePath();

	//x_radial_gradient_start_8 = x_radial_gradient_start_8 + dx_radial_gradient_start_8;
	//y_radial_gradient_start_8 = y_radial_gradient_start_8 + dy_radial_gradient_start_8;
	//x_radial_gradient_start_8 = x_radial_gradient_end_8 + dx_radial_gradient_end_8;
	//y_radial_gradient_start_8 = y_radial_gradient_end_8 + dy_radial_gradient_end_8;
	r_radial_gradient_start_8 = r_radial_gradient_start_8 + dr_radial_gradient_start_8;
	//r_radial_gradient_end_8 = r_radial_gradient_end_8 + dr_radial_gradient_end_8;
	
	if(r_radial_gradient_start_8 <= 0 || r_radial_gradient_start_8 > canvas_8.width/3)
	{
		if(r_radial_gradient_start_8 <= 0)
		{
			radial_gradient_color_outer_8 = get_random_color();
		}
		dr_radial_gradient_start_8 = -dr_radial_gradient_start_8;
	}
	
	if((canvas_8_left == 900) && (canvas_8_top >= 0 && canvas_8_top < 2*canvas_8.height))
	{
		canvas_8_top = canvas_8_top + dcanvas_8_top;
		canvas_8.style.top = canvas_8_top + "px";
	}
	
	if((canvas_8_top == 2*canvas_8.height) && (canvas_8_left >= 900 && canvas_8_left < 900 + 2*canvas_8.width))
	{
		canvas_8_left = canvas_8_left + dcanvas_8_left;
		canvas_8.style.left = canvas_8_left + "px";
	}
	if((canvas_8_left == 900 + 2*canvas_8.width) && (canvas_8_top > 0 && canvas_8_top <= 2*canvas_8.height))
	{
		canvas_8_top = canvas_8_top - dcanvas_8_top;
		canvas_8.style.top = canvas_8_top + "px";
	}
	
	if((canvas_8_top == 0) && (canvas_8_left > 900 && canvas_8_left <= 900 + 2*canvas_8.width))
	{
		canvas_8_left = canvas_8_left - dcanvas_8_left;
		canvas_8.style.left = canvas_8_left + "px";
	}
}	

var interval_8 = setInterval(animate_canvas_8, time_interval);	

//---------------------------------------------------------------------------------------------------

var canvas_9 = document.getElementById("canvas_9");
var context_9 = canvas_9.getContext("2d");

canvas_9.width = 300;
canvas_9.height = 300;

var canvas_9_left = 1*canvas_1.width;
var canvas_9_top = 1*canvas_1.height;

canvas_9.style.position = "absolute";
canvas_9.style.left = canvas_9_left + "px";
canvas_9.style.top = canvas_9_top + "px";
//canvas_9.style.border = "1px solid silver";

var x_0_canvas_9 = canvas_9.width/2;  //x coordinate of the center of canvas 9
var y_0_canvas_9 = canvas_9.height/2; //y coordinate of the center of canvas 9

var angle_circle_start = 0;
var angle_circle_end = 2*Math.PI;

var frequency_min_circle_1_canvas_9 = 1;
var frequency_max_circle_1_canvas_9 = 299;

var r_min_circle_1_canvas_9 = 20;
var r_max_circle_1_canvas_9 = 150;

var r_0_1_min_canvas_9 = 5;
var r_0_1_max_canvas_9 = 50;

var color_circle_1_canvas_9;

while((color_circle_1_canvas_9 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

var x_circle_1_canvas_9 = canvas_9.width/2;  //x-coordinate of the center of circle 1
var y_circle_1_canvas_9 = canvas_9.height/2;  //y-coordinate of the center of circle 1
var r_circle_1_canvas_9 = get_random_integer(r_min_circle_1_canvas_9, r_max_circle_1_canvas_9); 
var color_circle_1_canvas_9 = get_random_color();
var r_0_1_canvas_9 = get_random_integer(r_0_1_min_canvas_9, r_0_1_max_canvas_9);  //distance between the center of the frame and the center of circle 1  
var f_circle_1_canvas_9;  //frequency of circle 1 

while((f_circle_1_canvas_9 = get_random_integer(frequency_min_circle_1_canvas_9, frequency_max_circle_1_canvas_9)) % 5 == 0)
{
	continue;
}

var w_circle_1_canvas_9 = 2*Math.PI*f_circle_1_canvas_9;  //angular frequency of circle 1
var t_circle_1_canvas_9 = 0; 
var dt_circle_1_canvas_9 = 0.01;
var dr_circle_1_canvas_9 = 0.1 * get_random_integer(1, 9);
var dr_0_1_canvas_9 = 0.1 * get_random_integer(1, 9);

function animate_canvas_9()
{
	context_9.beginPath();
	context_9.arc(x_circle_1_canvas_9, y_circle_1_canvas_9, r_circle_1_canvas_9, angle_circle_start, angle_circle_end, counterclockwise);
	context_9.strokeStyle = color_circle_1_canvas_9;
	context_9.lineWidth = 1;
	context_9.stroke();
	context_9.closePath();
	
	x_circle_1_canvas_9 = x_0_canvas_9 + r_0_1_canvas_9 * Math.cos(w_circle_1_canvas_9 * t_circle_1_canvas_9);
	y_circle_1_canvas_9 = y_0_canvas_9 - r_0_1_canvas_9 * Math.sin(w_circle_1_canvas_9 * t_circle_1_canvas_9);
	t_circle_1_canvas_9 = t_circle_1_canvas_9 + dt_circle_1_canvas_9;
	r_0_1_canvas_9 = r_0_1_canvas_9 + dr_0_1_canvas_9;
	
	if(t_circle_1_canvas_9 > 5)
	{
		reset_interval_9();
	}
}	

var interval_9 = setInterval(animate_canvas_9, 5);	

function reset_interval_9()
{
	context_9.clearRect(0, 0, canvas_9.width, canvas_9.height);
	clearInterval(interval_9);	
	x_circle_1_canvas_9 = canvas_9.width/2;
	y_circle_1_canvas_9 = canvas_9.height/2;
	r_circle_1_canvas_9 = get_random_integer(r_min_circle_1_canvas_9, r_max_circle_1_canvas_9);  
	color_circle_1_canvas_9 = get_random_color();
	r_0_1_canvas_9 = get_random_integer(r_0_1_min_canvas_9, r_0_1_max_canvas_9);  
	
	while((f_circle_1_canvas_9 = get_random_integer(frequency_min_circle_1_canvas_9, frequency_max_circle_1_canvas_9)) % 5 == 0)
	{
		continue;
	}

	w_circle_1_canvas_9 = 2*Math.PI*f_circle_1_canvas_9;  
	t_circle_1_canvas_9 = 0; 
	dr_circle_1_canvas_9 = 0.1 * get_random_integer(1, 9);
	dr_0_1_canvas_9 =  0.1 * get_random_integer(1, 9);
	interval_9 = setInterval(animate_canvas_9, 5);
}

//---------------------------------------------------------------------------------------------------

var canvas_10 = document.getElementById("canvas_10");
var context_10 = canvas_10.getContext("2d");

canvas_10.width = 300;
canvas_10.height = 300;

var canvas_10_left = 4*canvas_1.width;
var canvas_10_top = 1*canvas_1.height;

canvas_10.style.position = "absolute";
canvas_10.style.left = canvas_10_left + "px";
canvas_10.style.top = canvas_10_top + "px";
//canvas_10.style.border = "1px solid silver";

var x_0_canvas_10 = canvas_10.width/2;  //x coordinate of the center of canvas 10
var y_0_canvas_10 = canvas_10.height/2; //y coordinate of the center of canvas 10

var frequency_min_circle_1_canvas_10 = 1;
var frequency_max_circle_1_canvas_10 = 299;

var r_min_circle_1_canvas_10 = 20;
var r_max_circle_1_canvas_10 = 100;

var r_0_1_min_canvas_10 = 5;
var r_0_1_max_canvas_10 = 100;

var color_circle_1_canvas_10;

while((color_circle_1_canvas_10 = get_random_color()) == "rgb(" + 255 + "," + 255 + "," + 255 + ")")
{
	continue;
}

var x_circle_1_canvas_10 = canvas_10.width/2;  //x-coordinate of the center of circle 1
var y_circle_1_canvas_10 = canvas_10.height/2;  //y-coordinate of the center of circle 1
var r_circle_1_canvas_10 = get_random_integer(r_min_circle_1_canvas_10, r_max_circle_1_canvas_10); 
var color_circle_1_canvas_10 = get_random_color();
var r_0_1_canvas_10 = get_random_integer(r_0_1_min_canvas_10, r_0_1_max_canvas_10);  //distance between the center of the frame and the center of circle 1  
var f_circle_1_canvas_10;  //frequency of circle 1 

while((f_circle_1_canvas_10 = get_random_integer(frequency_min_circle_1_canvas_10, frequency_max_circle_1_canvas_10)) % 5 == 0)
{
	continue;
}

var w_circle_1_canvas_10 = 2*Math.PI*f_circle_1_canvas_10;  //angular frequency of circle 1
var t_circle_1_canvas_10 = 0; 
var dt_circle_1_canvas_10 = 0.01;
var dr_circle_1_canvas_10 = 0.1 * get_random_integer(1, 9);
var dr_0_1_canvas_10 = 0.1 * get_random_integer(1, 9);

function animate_canvas_10()
{
	context_10.beginPath();
	context_10.arc(x_circle_1_canvas_10, y_circle_1_canvas_10, r_circle_1_canvas_10, angle_circle_start, angle_circle_end, counterclockwise);
	context_10.strokeStyle = color_circle_1_canvas_10;
	context_10.lineWidth = 1;
	context_10.stroke();
	context_10.closePath();
	x_circle_1_canvas_10 = x_0_canvas_10 - r_0_1_canvas_10 * Math.cos(w_circle_1_canvas_10 * t_circle_1_canvas_10);
	y_circle_1_canvas_10 = y_0_canvas_10 + r_0_1_canvas_10 * Math.sin(w_circle_1_canvas_10 * t_circle_1_canvas_10);
	t_circle_1_canvas_10 = t_circle_1_canvas_10 + dt_circle_1_canvas_10;
	r_0_1_canvas_10 = r_0_1_canvas_10 + dr_0_1_canvas_10;
	
	if(t_circle_1_canvas_10 > 5)
	{
		reset_interval_10();
	}
}	

var interval_10 = setInterval(animate_canvas_10, 5);	

function reset_interval_10()
{
	context_10.clearRect(0, 0, canvas_10.width, canvas_10.height);
	clearInterval(interval_10);	
	x_circle_1_canvas_10 = canvas_10.width/2;
	y_circle_1_canvas_10 = canvas_10.height/2;
	r_circle_1_canvas_10 = get_random_integer(r_min_circle_1_canvas_10, r_max_circle_1_canvas_10);  
	color_circle_1_canvas_10 = get_random_color();
	r_0_1_canvas_10 = get_random_integer(r_0_1_min_canvas_10, r_0_1_max_canvas_10); 
	 
	while((f_circle_1_canvas_10 = get_random_integer(frequency_min_circle_1_canvas_10, frequency_max_circle_1_canvas_10)) % 5 == 0)
	{
		continue;
	}
	
	w_circle_1_canvas_10 = 2*Math.PI*f_circle_1_canvas_10;  
	t_circle_1_canvas_10 = 0; 
	dr_circle_1_canvas_10 = 0.1 * get_random_integer(1, 9);
	dr_0_1_canvas_10 =  0.1 * get_random_integer(1, 9);
	interval_10 = setInterval(animate_canvas_10, 5);
}

//---------------------------------------------------------------------------------------------------

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
 	 
 	 while(r >= 253 && g >= 253 && b >= 253)
	 {
	 	r = get_random_integer(0, 255);
		g = get_random_integer(0, 255);
	    b = get_random_integer(0, 255);
	 }

	 return "rgb(" + r + "," + g + "," + b + ")"; 
}

