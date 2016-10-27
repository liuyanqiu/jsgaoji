define(["js/lib/c2","js/lib/c3"],function(a,b){


    return {
        age:function(){
            var sum=0;

            for(var i=0;i<arguments.length;i++){
                sum=sum+arguments[i];
                var n=arguments.length;
            }
            var avg=sum/n;
            var a1=arguments[0],a2=arguments[1],a3=arguments[2];
            if(avg>1){
                return avg+ a.f1(a1,a2,a3);
            }
            else if(avg<1){
                return avg+ b.f1(a1,a2,a3);
            }
            else{
                return avg;
            }
        }
    }
});