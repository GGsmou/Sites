function randomBG(){
	function getRandomInt(max)
	{
		bg = Math.floor(Math.random() * max+1);
	}
	getRandomInt(5);
	$("body").css("background-image",'url(img/bg'+bg+'.jpg)');
	console.log('url(img/bg'+bg+'.jpg);');
}