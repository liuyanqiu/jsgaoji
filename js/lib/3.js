define(["js/lib/1"],function(a1){


    return {
        add:function(){
            var j=0;
            for(var i=0;i<arguments.length;i++){
                j=arguments[i]-j;
            }
            //return [s,s+a1.age()]
            alert("三个变量的差为："+j);
            alert("与平均值累加的和为："+j+a1.age());
        }
    }
});