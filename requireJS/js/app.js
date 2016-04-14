//alert("加载成功！");
require.config({
	baseUrl:"js/lib",
	paths:{
		"jquery":"jquery.min",
		"underscore":"underscore.min",
		"backbone":"backbone.min",
		"myLib":"../module/myLib",
		"utils":"../module/utils",
		"center":"../module/center"
	},
	waitSeconds: 0, //解决timeout问题
	shim: {
		"underscore":{
			exports:"_"
		},
		"backbone":{
			deps:["underscore","jquery"],
			exports:"Backbone"
		}
	}
});

require(['jquery','underscore','backbone'],function($, _, Backbone){
	console.log($(".box").width());
});

require(['myLib'],function(myLib){
	console.log(myLib);
})

require(["center"],function(center){
	center("wrapper","box");
	window.onresize = function(){
		center("wrapper","box");
	}
	
})









