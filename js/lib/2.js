define(["js/lib/1"],function(a1){


    return {
        add:function(){
            var s=0;
            for(var i=0;i<arguments.length;i++){
                s=s+arguments[i];
            }

            //alert("三个变量的和为："+s);
            //alert("与平均值累加的和为："+s+a1.age());
            return ["三个变量的和为："+s,"与平均值累加的和为："+s+a1.age(arguments[0]+arguments[1]+arguments[2])]
        }
    }
});