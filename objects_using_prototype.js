function Fruit(name,taste){
    

}

Fruit.prototype={ 
    name:'Fruit',
    taste:0,   
    getName:getName
}

function getName(){
return this.name+' '+this.taste;
}

var mango=new Fruit('mango',8);
var apple=new Fruit('apple',9);

apple;
mango;