var Fruit=function(name,taste){
    this.name=name;
    this.taste=taste;
    this.getName=function(){
        return name+' '+taste;
    }
}

var mango=new Fruit('mango',8);
var apple=new Fruit('apple',9);

mango;
//apple;
