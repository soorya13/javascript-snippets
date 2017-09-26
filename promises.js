var promise=new Promise((resolve,reject)=>{
   var flag=true; //async task
   if(flag) {
       resolve("Yehh! Success!");
   }
   else{
       reject("Err! Go back!!");
   }
});

promise.then(function(res){
    res+=' concat1';
    return res;
}).then(function(res){
    res+=' concat2';
    return res;
}).then(function(res){
    console.log(res);
})

