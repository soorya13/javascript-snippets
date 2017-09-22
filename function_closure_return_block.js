var counter=(function(){
    var count=0; //private

    function increment(){//private
        count+=1;
    }

    return{
        set:function(val){//public
            count=val;
        },
        get:function(){
            increment();
            return count;
        } 
        
    }
    
})();

counter.set(10);
counter.get(); //11
counter.get(); //12

