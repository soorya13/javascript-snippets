var Fruit=new Object();

Fruit.name='Fruit';
Fruit.prototype.taste=0;
Fruit.prototype.getName=function(){
    return this.name+' '+taste;
}

var mango=new Fruit();

//mango.name='mango';

mango.hasOwnProperty('name');
mango.name;

Fruit.prototype.isPrototypeOf(mango);
mango;
