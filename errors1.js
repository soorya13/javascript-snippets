try{
adalert('how is it?');
}
catch(err){
    console.log(err.message);
}

function func(){
    try{
    throw 20151;
    console.log('End of try');
}
catch(err){
    console.log('Inside catch');
    console.log(err);
}
finally
{
    console.log('Inside finally');
}
console.log('Sucess');
}
func();