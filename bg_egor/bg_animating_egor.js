function animateBackground(speed, angleSpeed){
	
	document.body.innerHTML += '<div id="bg-egor"></div>';
	
	var width = document.body.clientWidth, 
	height = parseInt(document.getElementById('bg-egor').scrollHeight);
	var egors = [];
	var EGORHEIGHT = 150, EGORWIDTH = 100, MARGIN = 50;
	var rows = Math.floor(height / EGORHEIGHT) + (height % EGORHEIGHT != 0),
	cols = Math.floor(width / (EGORWIDTH + MARGIN)) + (width % EGORWIDTH != 0);
	var angle = 0;
	speed = speed || 10;
	angleSpeed = angleSpeed || 0;
	
	
	var innerStr = ''
	for (var i = 0; i<rows; i++)
	for (var j = 0; j<cols; j++)
		innerStr += '<div id="egor'+i+'-'+j+'"></div>';
	document.getElementById('bg-egor').innerHTML = innerStr;
	
	for (var i = 0;i<rows;i++)
	{
		egors[i] = [];
		for (var j = 0;j<cols;j++)
		{
			egors[i][j] = document.getElementById('egor'+i+'-'+j);
			egors[i][j].style.left = (EGORWIDTH + MARGIN) * j + 'px';
			egors[i][j].style.top = EGORHEIGHT * i + 'px';
		}
	}
	
	setInterval(function(){
		for (var i = 0;i<rows;i++)
		for (var j = 0;j<cols;j++)
		{
			var xEgor = parseInt(egors[i][j].style.left) + speed*(i%2 == 0 ? 1 : -1);
			if (i % 2 == 0 && xEgor >= width) xEgor = -EGORWIDTH;
			if (i % 2 == 1 && xEgor <= -EGORWIDTH) xEgor = width;
			egors[i][j].style.left = xEgor+'px';
			
			if (angleSpeed) 
				egors[i][j].style.transform = 'rotate('+(i%2 == 0 ? 1 : -1)*angle+'rad)';
			angle += angleSpeed;
		}
	},50);
}