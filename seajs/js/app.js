define("app",["module/drag","module/scale"],function (require,exports,module){
	var oInput = document.getElementById('input1');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');

    require("module/drag.js").drag(oDiv3);
    oInput.onclick = function(){
    	oDiv1.style.display = "block";
    	require("module/scale.js").scale(oDiv1,oDiv2);
    	//require 是同步往下执行，require.async 则是异步回调执行。require.async 一般用来加载可延迟异步加载的模块。
    	require.async("module/scale.js",function(ex){
    		ex.scale(oDiv1,oDiv2);
    	})
    }
})








