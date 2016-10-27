define([],function(){


    return {
        age:function(){
            var sum=0;

            for(var i=0;i<arguments.length;i++){
                sum=sum+arguments[i];
               var n=arguments.length;
            }
            return(sum/n);
        }
    }
});