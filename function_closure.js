var counter=(function(){
    var count=0; //private
    return function(){ //public
        return count+=1;
    }
})();

counter();
counter();
counter();
