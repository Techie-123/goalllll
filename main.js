var canvas = new.fabric.Canvas("canvas1");

block_image_width = 5;
block_image_height = 5;

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function (Img){
		hole.obj = Img;
		hole.obj.scaletoWidth(50);
		hole.obj.scaletoHeight(50);
		hole.obj.set({
			top:hole_y;
            left:hole_x 
		});
		canvas.add(hole.obj)
		);	}
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img){
		ball.obj = Img;
		ball.obj.scaletoWidth(50);
		ball.obj.scaletoHeight(50);
		ball.obj.set({
			top:ball_y;
            left:ball_x 
		});
		canvas.add(ball.obj)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if(ball_x == hole_x) && (ball_y == hole_y)
	{
		canvas.remove(ball_obj);

		document.getElementById("hd3").innerHTML == "You Have Hit The Goal (IT'S A GOOOOOOOOOOOAAAAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLLL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
		document.getElementById("canvas1").style.borderColor == "blue";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >= 0)
		{
			ball_y = ball_y - block_image_height;
			console.log("block_image_height = " + block_image_height)
			console.log("When UP Arrow pressed, X = " + block_image_width + " | Y = " + block_image_height);
			UP();
		}
	}

	function down()
	{
		if(ball_y <= 450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block_image_height = " + block_image_height)
			console.log("When DOWN Arrow pressed, X = " + block_image_width + " | Y = " + block_image_height);
			down();
		}
	}

	function left()
	{
		if(ball_x > 5)
		{
			ball_x = ball_x - block_image_height;
			console.log("block_image_width = " + block_image_width)
			console.log("When LEFT Arrow pressed, X = " + block_image_width + " | Y = " + block_image_height);
			left();
		}
	}

	function right()
	{
		if(ball_x <= 1050)
		{
			ball_x = ball_x + block_image_height;
			console.log("block_image_width = " + block_image_width)
			console.log("When RIGHT Arrow pressed, X = " + block_image_width + " | Y = " + block_image_height);
			right();
		}
	}
	
}

