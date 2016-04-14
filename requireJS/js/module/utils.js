define(function(){
	var getClass = function(className){
			var el = document.getElementsByTagName("*");
			len = el.length;
			var arrClass = [];
			for(var i = 0;i<len;i++){
				if (el[i].className == className) {
					arrClass[arrClass.length] = el[i];
				}
			}
			return arrClass[0];
		}
	return  {
		getClass :getClass
	}
})