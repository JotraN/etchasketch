$(document).ready(function(){
	var cols = 20;
	var rows = 20;
	var board = $("#board");

	setup(cols, rows, board);

	board.on("mouseenter", ".square", function(){
			$(this).css("background", "black");
	});

	$("#button").click(function(){
		$(".square").css("background", "white");
		var size = prompt("Enter new grid size (number of squares per row/column):");
		while(board.width()/size < 3)
			size = prompt("Squares would be too small. Enter valid grid size:");
		setup(size, size, board);
	});

	function setup(cols, rows, board){
		// clear board
		board.empty();
		// Add squares
		for(var i = 0; i < cols; i++){
			for(var j = 0; j < rows; j++){
				board.append("<div class='square'></div>");
			}
		}
		var width = board.width()/(cols);
		var height = board.height()/(rows);
		// Subtract 2 to accomodate for border and set sizes
		$(".square").width(width-2);
		$(".square").height(height-2);
	};
});
