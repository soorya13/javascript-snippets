var outer=10;

function showa(){
    var inner=11;
    //console.log(local);//reference error
    function infun(){
        var local=12;
        console.log('Outer: '+outer);
        console.log('Inner: '+inner);
        console.log('Local: '+local);
    }
    infun();
}
showa();