function add(){
    var sum=0;
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

add(1,2);
add(1,2,3);


function factorial(num){
    
    if(num===1){
        return num;
    }
    else{
      return num*=factorial(num-1);
    }
};
factorial(3);