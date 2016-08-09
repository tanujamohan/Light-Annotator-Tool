var imageFiles = [];
var mouse_locations = [];
var input = document.getElementById('fileURL');

var canvasDiv = document.getElementById('canvasDiv');
var canvas = document.createElement('canvas');
canvas.setAttribute('width', '400px');
canvas.setAttribute('height', '400px');
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
var context = canvas.getContext("2d");

$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});


input.addEventListener("change", function(e) {
	var files = e.target.files;
	for (var i = 0, len = files.length; i < len; i++) {
		imageFiles[i] = files[i].name;
	}
	console.log(imageFiles);
}, false);