var str='JavaScript';
var reg=/a/;
reg.test(str);
reg.exec(str);

var str1='JavaScrJipt';
var str2='Java';
var str3='C++'
var pattern=new RegExp('j','i');
pattern.test(str1);
pattern.exec(str2);
//pattern.exec(str3);

var str='JavaScript';
str.search(/scr/);
str.replace(/scr/i,'language');

/*
var str = "\nIs th\nis it?";
    var patt1 = /is/mig;
    var result = str.match(patt1);
*/