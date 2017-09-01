var a=[2,4,6];
for(i in a){
    console.log(a[i]);
}
var b=new Array(3,4,5);
/*b[0]=1;
b[1]=2;
b[2]=3;*/
b[4]=6;
console.log(b)
console.log(a.length)
console.log(b.length)

a['key']='value';
console.log(a)
//Mutators 
a.push(7);
a.pop();

a.shift();
a.unshift(0);

a.sort();
a.reverse();
//a.splice(start,deleteCount,item1,item2)

//Accessor
a.slice(1,2);
a.join('&')
//a.includes() returns true if some element is found.
a.indexOf(6);
a.lastIndexOf(6);



