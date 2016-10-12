window.onload = function(){

	console.log("Line Detection");

	$(document).ready(function(){
		main();
	});
}


main = function(){


	console.log("Main");

	// Run at start
	edgeDetector.imgElement = $('#image')[0];
	edgeDetector.init();
	edgeDetector.findEdges();
	  
	// Run when the threshold changes
	$('#threshold').change(function(){
		edgeDetector.threshold = $(this).val();
		edgeDetector.findEdges();
	});



}


