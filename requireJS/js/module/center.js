define(['../module/utils'],function (utils) {
	var center = function(wrapper,box){
		var wrapper = utils.getClass(wrapper);
		var box = utils.getClass(box);
		var outwidth = wrapper.offsetWidth;
		var outheight = wrapper.offsetHeight;
		var innerWidth = box.offsetWidth;
		var innerHeight = box.offsetHeight;
		var left = (outwidth - innerWidth)/2 +"px";
		var top = (outheight - innerHeight)/2+"px";
		box.style.cssText = "left:"+left+";top:"+top;
	}

	return center;
	

})