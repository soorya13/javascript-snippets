//Iterators
var a=[2,3,4,5,6,7,8,9];
a.filter(function(ele){
    var mod=ele%2;
    if(mod==0) return ele;
})

a.find(function(ele){
    if(ele>6) return ele;
})

a.forEach(function(ele){
    console.log(ele);
})

a.map(function(ele){

    return (ele+1)
})