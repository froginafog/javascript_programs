//To understand the control point in the command
//context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y)
//draw 2 tangent lines: 1 line tangent to the starting point of the curve 
//and 1 line tangent to the ending point of the curve.
//The control point is the point at the intersection of these 2 tangent lines.

function main()
{
	var canvas = document.getElementById("canvas_1");
	var context = canvas.getContext("2d");
	
	var control_point_x;
	var control_point_y;
	var start_point_x;
	var start_point_y;
	var end_point_x;
	var end_point_y;
	var colors = ["red", "green", "blue", "gold", "purple"];
	var total_num_strokes = 5;
	
	start_point_x = 100;
	start_point_y = 100;
	control_point_x = 200;
	control_point_y = 200;
	end_point_x = 100;
	end_point_y = 100;
	context.lineWidth = 5;
	
	for(var i = 0; i < total_num_strokes; i++) 
	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_x = 200;
		}
		else
		{
			control_point_x = 0;
		}
		control_point_y = end_point_y + 100;
		end_point_y = end_point_y + 200;
		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
	
	start_point_x = 100;
	start_point_y = 100;
	control_point_x = 200;
	control_point_y = 200;
	end_point_x = 100;
	end_point_y = 100;
	context.lineWidth = 5;
	
	for(var i = total_num_strokes - 1; i >= 0; i--) 
	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_x = 0;
		}
		else
		{
			control_point_x = 200;
		}
		control_point_y = end_point_y + 100;
		end_point_y = end_point_y + 200;
		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
	
	//----------------------------------------------------
	
	start_point_x = 1100;
	start_point_y = 100;
	control_point_x = 200;
	control_point_y = 200;
	end_point_x = 1100;
	end_point_y = 100;
	context.lineWidth = 5;
	
	for(var i = 0; i < total_num_strokes; i++) 
	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_x = 1200;
		}
		else
		{
			control_point_x = 1000;
		}
		control_point_y = end_point_y + 100;
		end_point_y = end_point_y + 200;
		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
	
	start_point_x = 1100;
	start_point_y = 100;
	control_point_x = 200;
	control_point_y = 200;
	end_point_x = 1100;
	end_point_y = 100;
	context.lineWidth = 5;
	
	for(var i = total_num_strokes - 1; i >= 0; i--) 

	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_x = 1000;
		}
		else
		{

			control_point_x = 1200;
		}
		control_point_y = end_point_y + 100;
		end_point_y = end_point_y + 200;

		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
	
	//----------------------------------------------------
	
	start_point_x = 100;
	start_point_y = 100;
	control_point_x = 200;
	control_point_y = 200;
	end_point_x = 100;
	end_point_y = 100;
	context.lineWidth = 5;
	
	for(var i = 0; i < total_num_strokes; i++) 
	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_y = 200;
		}
		else
		{
			control_point_y = 0;
		}
		control_point_x = end_point_x + 100;
		end_point_x = end_point_x + 200;
		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
	
	start_point_x = 100;
	start_point_y = 100;
	control_point_x = 200;
	control_point_y = 200;
	end_point_x = 100;
	end_point_y = 100;

	context.lineWidth = 5;
	
	for(var i = total_num_strokes - 1; i >= 0; i--) 

	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_y = 0;

		}
		else
		{

			control_point_y = 200;
		}
		control_point_x = end_point_x + 100;
		end_point_x = end_point_x + 200;

		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
	
	//----------------------------------------------------
	
	start_point_x = 100;
	start_point_y = 1100;
	control_point_x = 200;
	control_point_y = 1200;
	end_point_x = 100;
	end_point_y = 1100;
	context.lineWidth = 5;
	
	for(var i = 0; i < total_num_strokes; i++) 

	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{
			control_point_y = 1200;
		}
		else
		{
			control_point_y = 1000;
		}
		control_point_x = end_point_x + 100;
		end_point_x = end_point_x + 200;
		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();

	}
	
	start_point_x = 100;
	start_point_y = 1100;
	control_point_x = 200;
	control_point_y = 1200;
	end_point_x = 100;
	end_point_y = 1100;
	context.lineWidth = 5;
	
	for(var i = total_num_strokes - 1; i >= 0; i--) 
	{
		context.beginPath();
		start_point_x = end_point_x;
		start_point_y = end_point_y;
		context.moveTo(start_point_x, start_point_y);
		context.strokeStyle = colors[i];
		if(i % 2 == 0)
		{

			control_point_y = 1000;

		}
		else
		{

			control_point_y = 1200;
		}
		control_point_x = end_point_x + 100;
		end_point_x = end_point_x + 200;
		context.quadraticCurveTo(control_point_x, control_point_y, end_point_x, end_point_y);
		context.stroke();
	}
}

main();


