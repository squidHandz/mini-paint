$(document).ready(function() {
	var color = 'white';
	var colors = 'red blue green yellow white';
	
	$('.box').on('click', function() {
		$(this).addClass(color);
	})
	$('.box').on('dblclick', function() {
		$(this).removeClass(color);
	})
	$('#reset').on('click', function() {
		$('.box').removeClass(colors),
		alert('Colors Reset!');
	})
	$('#red').on('click', function() {
		color = 'red',
		alert("Color set to to " + color +"!");
	})
	$('#green').on('click', function() {
		color = 'green',
		alert("Color set to to " + color +"!");
	})
	$('#blue').on('click', function() {
		color = 'blue',
		alert("Color set to to " + color +"!");
	})
	$('#yellow').on('click', function() {
		color = 'yellow',
		alert("Color set to to " + color +"!");
	})
	$('#white').on('click', function() {
		color = 'white',
		alert("Color set to to " + color +"!");
	})
});