
function addDetour(func, before, after) {
	return function() {
		
		if(before) {
			before();
		}
		
		var result = func.apply(this, arguments);
		
		if(after) {
			after();
		}
		
		return result;	
	};
}

WebGLRenderingContext.prototype.viewport = function() {
	alert("hah!");
};


//alert(Object.getOwnPropertyNames(a).join(','));

var canvas = document.getElementById("c");
var ctx = canvas.getContext('webgl');

var FabGL = function() {
};
FabGL.prototype = WebGLRenderingContext.prototype;
var fabgl = new FabGL();

fabgl.viewport();
alert(fabgl.drawingBufferHeight);

