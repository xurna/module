define("module/range",function (require,exports,module){
      //为了解决当div放到窗口下面而带来的滚动条问题  
        function range(iNum,iMax,iMin){
            
            if( iNum > iMax ){
                return iMax;
            }
            else if( iNum < iMin ){
                return iMin;
            }
            else{
                return iNum;
            }
            
        }
        
        exports.range = range;
        
    });