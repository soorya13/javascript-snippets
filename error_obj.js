try{

    console.log(('Hello));
    //(3).toUpperCase();//TypeError
    //console.log(a);ReferenceError
    //decodeURI("%%%%")//URIError
    //(3).toPrecision(200); //RangeError
}
catch(err){
    console.log(err.name);
}

try{
    eval("alert('hello')");
}
catch(err){
    console.log(err.name);
}