define("module/scale", ["range"], function (require,exports,mudule){
	function scale(obj1,obj2){
		var disX = 0;
        var disY = 0;
        var disW = 0;
        var disH = 0;
		obj2.onmousedown = function(ev){
	            var ev = ev || window.event;
	            disX = ev.clientX;
	            disY = ev.clientY;
	            disW = obj1.offsetWidth;
	            disH = obj1.offsetHeight;
	            
	            document.onmousemove = function(ev){
	                var ev = ev || window.event;
	                
	                var W = require('range').range(ev.clientX - disX + disW , 500 , 100);
	                var H = require('range').range(ev.clientY - disY + disH , 500 , 100);
	                
	                obj1.style.width = W + 'px';
	                obj1.style.height = H + 'px';
	            };
	            document.onmouseup = function(){
	                document.onmousemove = null;
	                document.onmouseup = null;
	            };
	            return false;
	        };
	        
	    }
	    
	    exports.scale = scale;
});

