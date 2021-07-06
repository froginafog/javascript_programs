var canvas = document.getElementById("canvas_1");
var context = canvas.getContext("2d");

var x_square = 0;
var y_square = 0;
var square_width = 200;
var square_height = 200;

var interval;
var row_num = 0;
var col_num = 0;
var square_colors = [];
var num_rows = 8;
var num_columns = 8;
var color;

var swap_color_interval;

context.lineWidth = 5;
context.strokeStyle = "black";

for(var i = 0; i < num_rows; i++)
{
	square_colors.push(new Array(num_columns));
}

for(var i = 0; i < num_rows; i++)
{
	for(var j = 0; j < num_columns; j++)
	{
		square_colors[i][j] = "rgb(" + 255 + "," + 255 + "," + 255 + ")"; 
	}
}

function draw_board()
{
	if(row_num % 2 == 0)
	{
		context.strokeRect(x_square, y_square, square_width, square_height);
		if(x_square % 400 == 0)
		{
			color = get_random_color();
			context.fillStyle = color;
			context.fillRect(x_square, y_square, square_width, square_height);
			square_colors[row_num][col_num] = color;
			col_num = col_num + 2;
		}
		x_square = x_square + 200;
		
		if(x_square >= 1600)
		{
			x_square = 0;
			y_square = y_square + 200;
			if(y_square >= 1600)
			{
				clearInterval(draw_board_interval);
				swap_color_interval = setInterval(swap_square_color, 500); 
			}
			row_num++;
			col_num = 1;
		}
	}
	else
	{
		context.strokeRect(x_square, y_square, square_width, square_height);
		if(x_square % 400 != 0)
		{
			color = get_random_color();
			context.fillStyle = color;
			context.fillRect(x_square, y_square, square_width, square_height);
			square_colors[row_num][col_num] = color;
			col_num = col_num + 2;
		}
		x_square = x_square + 200;
		if(x_square >= 1600)
		{
			x_square = 0;
			y_square = y_square + 200;
			if(y_square >= 1600)
			{
				clearInterval(draw_board_interval);
				swap_color_interval = setInterval(swap_square_color, 500); 
			}
			row_num++;
			col_num = 0;
		}
	}
}

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
	 var b = get_random_integer(0, 255);
	 var g = get_random_integer(0, 255);
 	 var color;
 	 
 	 while(r == 255 && b == 255 & g == 255)
	 {
	 	r = get_random_integer(0, 255);
		b = get_random_integer(0, 255);
	    g = get_random_integer(0, 255);
	 }
	 
	 color = "rgb(" + r + "," + b + "," + g + ")"; 

	 return color;
}

function swap_square_color()
{
	var i_1;
	var j_1;
	var i_2;
	var j_2;
	var temp;
	
	i_1 = get_random_integer(0, 7);
	j_1 = get_random_integer(0, 7);
	i_2 = get_random_integer(0, 7);
	j_2 = get_random_integer(0, 7);
	
	while((i_1 == i_2 && j_1 == j_2) 
	      || ((i_1 % 2 == 0) && (j_1 % 2 != 0))
	      || ((i_2 % 2 == 0) && (j_2 % 2 != 0))
	      || ((i_1 % 2 != 0) && (j_1 % 2 == 0))
	      || ((i_2 % 2 != 0) && (j_2 % 2 == 0))
	      || (Math.abs(i_1 - i_2) > 1)
	      || (Math.abs(j_1 - j_2) > 1))
	{
		i_1 = get_random_integer(0, 7);
		j_1 = get_random_integer(0, 7);
		i_2 = get_random_integer(0, 7);
		j_2 = get_random_integer(0, 7);
	}
	
	temp = square_colors[i_1][j_1];
	square_colors[i_1][j_1] = square_colors[i_2][j_2];
	square_colors[i_2][j_2] = temp;
	
	draw_new_board();
}

function draw_new_board()
{
	x_square = 0;
	y_square = 0;
	for(var i = 0; i < num_rows; i++)
	{
		for(var j = 0; j < num_columns; j++)
		{
			context.strokeRect(x_square, y_square, square_width, square_height);
			context.fillStyle = square_colors[i][j];
			context.fillRect(x_square, y_square, square_width, square_height);
			x_square = x_square + 200;
		}
		y_square = y_square + 200;
		x_square = 0;
	}
}

draw_board_interval = setInterval(draw_board, 100); 




