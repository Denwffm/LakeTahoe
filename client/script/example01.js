(function() {
    "use strict";
    
//    console.log("***Javascript basics***");
//    
//    var test01 = function() {
//        console.log("-Unary plus test-");
//        
//        console.log( +(1-2)); // -1
//        
//        var a = "3"; // string
//        console.log( typeof a ); // string
//        console.log( typeof (+a) ); // number
//    };
//    test01();

//    
//    var test02=function(){
//        console.log("-Unary minus test-")
//        var x=1;
//        x=-x;
//        console.log(x);//-1
//    };
//    test02();
//    
//    var test03 = function() {
//        console.log("-Binary plus test-");
//        var a="my"+"string";
//        console.log(a);
//        
//    console.log(2+"1");//"21"
//        var apples="2";
//        var oranges ="3";
//        };
//    test03();
//    
//    var test04=function(){
//        console.log("-Binary minus test-");
//        console.log(2-"1");//1
//    }
//    test04();
//    
//    console.log("-Inkrement-");
//    var test05=function(){
//        var i=1;
//        var a=++i;
//        console.log(a);    
//    }
//    test05();
//    
//    var test06=function(){
//        console.log("-task1-")
//        var a=1, b=1, c,d;
//        c=++a; console.log(c);//c=2
//        d=b++;console.log(d);//d=1
//        c=(2+ ++a); console.log(c);//c=5
//        d=(2+ b++); console.log(d);//d=4
//        console.log(a);//3
//        console.log(b);//3
//        console.log("-task2-")
//        var a=2;
//        var x=1+(a*=2);
//        console.log(x);//5
//    }
//    test06();
//    
//    var test07=function(){
//        console.log("-null-");
//        var a=null>0;
//        var b=null==0;
//        var c=null>=0;
//        console.log(a);//false
//        console.log(b);//false
//        console.log(c);//true
//    }
//test07();
    
    
//  var test08=function(){
//          console.log("-UI Operations-");//Hello
//        var a="Hello";
//        alert(a);
//    }
//    test08();
//    
//    
//    var test10=function(){
//        console.log("-UI Operations(prompt, years)-");//prompt
//        var years=prompt("how old are you", "1-100");
//        alert("you are "+years+" years old");
//    }
//    test10();
//    
//    var test09=function(){
//        var access=parseInt("10110", 2);
//        console.log(access);
//    }
//    test09();
//    var test11=function(){
//        console.log("-UI Operations(confirm,admin)-");
//        var isAdmin=confirm("are u admin?");
//        alert(isAdmin);
//    }
//    test11();
//    
//    var test12=function(){
//        console.log("-task3(name)-")
//        var name=prompt("what is your name", "-your name-");
//        alert("welcome "+name);
//    }
//     test12();
//    var test13=function(){
//        console.log("opearator if(ecma)")
//        var year=prompt("in which year ecma-262 was based?", "")
//        if(year!=2011){
//        alert("and this is..")
//        alert("incorrect")
//        }
//        else{
//            alert("wright!")
//        }
//    }
//    test13();
//    
//    var test14=function(){
//        console.log("-opeator else if-");
//        var year=prompt("in which year ecma-262 was based?", "");
//        if(year<2011){
//            alert("this is too early")
//        }
//        else if(year>2011){
//            alert("this is too late")
//        }
//        else{
//            alert("thats wright!")
//        }
//    }
//    test14();
//    
//    var test15=function(){
//        console.log("-operator ?-");
//        var access;
//        var age=prompt("how old are u?", "");
//        access=(age>14) ? true:false;
//        alert(access);
//    }
//    test15();
//    
// var test16=function(){
//        console.log("-a few   *?*   operators-");
//        var age=prompt("how old are u?", "");
//        var message=(age<3) ? "hello baby" :
//        (age<18) ? "hello !" :
//        (age<100) ? "good day" :
//        "what r u?)";
//        
//        alert(message);
//    }
//    test16();
//    
// var test17=function(){
//     var message=prompt("what is real name of JS", "");
//        if(message=="EcmaScript"){
//            alert("Thats wright")
//        }
//        else{
//            alert("dont know?? EcmaScript!!!")
//        }
//    
//    }
////    test17();
//    var test18=function(){
//        var message=prompt("kjfhksjhf?", "");
//        if(message>0){
//            alert("1")
//        }
//        else if(message<0)
//            {
//                alert("-1")
//            }
//        else{alert("0")}
//    }
//
//    test18();
//    
//    
//    var test19=function(){
//        console.log("-login inspection-");
//        var answer=prompt("enter your login", "");
//        if(answer=="admin")
//            {
//                var pass=prompt("enter your password","");
//                if(pass=="black vlastelin")
//                    {alert("welcome")}
//                else if(pass==null)
//                    {alert("access error")}
//                else{alert("password incorrect")}
//            }
//        else if(answer==null)
//            {alert("access error")}
//        else{alert("i dont know u")}
//        
//        
//    }
//    test19();
//    
//    var test20=function(){
//        console.log("-operators && || !-")
//        var age=prompt("enter age pls", "");
//        if(!(age > 14 && age < 90)){
//            alert("correct!");
//        }
//            else {
//                alert("incorrect");
//            }
//        }
//    test20();
//    
//    var test21=function(){
//        console.log("Preobrazovanie");
//        var a=123;
//        alert(a);
//    }
//    test21();
    
//var test22=function(){
//    console.log("sravnenie tipov");
//    var a=""+1+0;
//    alert("1 is");
//    alert(a);
//    var b=""-1+0;
//    alert("2 is");
//    alert(b);
//    var c=true+false;
//    alert("3 is");
//    alert(c);
//    var d=6/"3";
//    alert("4 is");
//    alert(d);
//    var e="2"*"3";
//    alert("5 is");
//    alert(e);
//    var f=4+5+"px";
//    alert("6 is");
//    alert(f);
//    var g="$"+4+5;
//    alert("7 is");
//    alert(g);
//    var h="4"-2;
//    alert("9 is");
//    alert(i);
//    var i="4px"-2;
//    alert("11 is: " + (typeof i));
//    alert(i);
    
    
//    var j=7/0;
//    alert("13 is");
//    alert(j);
//    var k="  -9\n"+5;
//    alert("15 is");
//    alert(k);
//    var l="  -9\n"-5;
//    alert("16 is");
//    alert(l);
//    var m=5&&2;
//    alert("17 is");
//    alert(m);
//    var n=2&&5;
//    alert("19 is");
//    alert(n);
//    var o=5||0;
//    alert("21 is");
//    alert(o);
//    var p=0||5;
//    alert("23 is");
//    alert(p);
//    var q=null+1;
//    alert("24 is");
//    alert(q);
//    var r=undefined +1;
//    alert("25 is");
//    alert(r);
//    var s=null=="\n0\n";
//    alert("26 is");
//    alert(s);
//    var t=+null==+"\n0\n";
//    alert("27 is");
//    alert(t);
    
//}
//test22();
//    var test23=function(){
//        var a=true;
//        alert("\n"==false);
//    }
//    test23();
//
// var test23=function(){
//     var i;
//     for(var i=0; i<3;i++)
//     {
//         alert(i);    
//     }
//     alert("after cycle");
//     alert(i);
// }
//test23();
    
//    var test24=function(){
//    console.log("suma + preruvanie");
//        var sum=0;
//        while(true){
//            var value=+prompt("enter the digit", "");
//            if(!value){
//                break;
//            }
//            sum+=value;
//        }
//        alert("sum is" + sum);
//    }
//    test24();
    
//    var test25=function(){
//        console.log("nechentue chisla")
//        for(var i=0; i<10;i++){
//            if(i%2==0){
//                continue;
//            }
//            alert(i);
//        }
//        
//    }
//    test25();
     
//    var test26=function(){
//        outer:for(var i=0;i<3;i++){
//            for(var j=0;j<3;j++){
//                var input=prompt(' znachenie v koordinatah '+i+','+j,'');
//                if(!input)break outer;
//            }
//        }
//        alert("finish");
//    }
//    test26();
    
//    var test27=function(){
//        console.log("tasks on cycles test27-test32");
//        var i=3;
//        while(i){
//            alert(i--);
//        }
//    }
//    test27();
    
//    var test28=function(){
//     for(var i=0;i<5;++i){
//         alert(i);
//     }   
//    }
//    test28();
    
//    var test29=function(){
//        for(var i=0;i<=10;i++){
//            if(i%2==0)
//            alert(i);
//        }
//    
//    }
//    test29();
    
//    var test30=function(){
//        var i=0;
//        while(i<3){
//            alert("number"+i+"!");
//            i++;
//        }
//    }
//    test30();
    
//    var test31=function(){
//        //question!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//        while(true){
//            var i=prompt("ent the digit bigger 100", "");
//            if(i>100){
//                alert("done");
//                break;
//            }
//            else if(i<100||i==null){
//                alert("try again");
//            }
//        }
//    }
//    test31();
      
    
    
//var test32=function(){
//    out:for(var i=2;i<10;i++){
//        for(var j=2;j<i;j++){
//            
//        if(i%j==0)continue out;
//        }
//        
//       
//    alert(i);
//    }
//}
//test32();
    
//    
//    var test33=function(){
//        var a=2+2;
//        switch(a){
//            case 3:
//                alert("malo");
//                break;
//            case 4:
//                alert("v tochku");
//                break;
//            case 5:
//                alert("perebor");
//                break;
//            default:
//                alert("i dont know");
//        }
//    }
//    test33();
        
//    
//    var test34=function(){
//        var arg=prompt("ent arg");
//        switch (arg){
//            case '0':
//            case '1':
//                alert("one or zero");
//            case 2:
//                alert("two");
//                break;
//            case 3:
//                alert("never complete");
//            default:
//                alert("unknown digit:"+arg);
//        }
//    }
//    test34();
        
//    
//    var test35=function(){
//        alert("from switch to if...else")
//        var x=prompt("choose your browser");
//        if(x=="IE"){
//            alert("Oh yea, u got IE");
//        }
//        else if(x=="Chrome"||x=="FireFox"||x=="Safari"||x=="Opera"){
//            alert("Yea, we support this browsers too");
//        }
//        else{
//            alert("we hope, your browser is ok");
//        }
//    }
//    test35();
//    
//    
//    var test36=function(){
//        alert("from if...else to switch");
//        var a=+prompt("a?");
//        switch(a){
//            case 0:
//                alert(0);
//                break;
//            case 1:
//                alert(1);
//                break;
//            case 2:
//            case 3:
//                alert('2,3');
//                break;
//        }
//    }
//    test36();
    
  
//        function showMessage(from, text) {
//        from = '**' + from + '**'; // меняем локальную переменную from
//        alert( from + ': ' + text );
//            }
//
//        var from = "Маша";
//
//        showMessage(from, "Привет");
//
//        alert( from ); // старо
    
    
//    function checkAge1(age){
//        return (age>18) ? true : confirm("did parents agree?");
//    }
//    checkAge();
//    
//    function checkAge2(age){
//        return (age>18||confirm("did parents agreee?"));!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//    }
//        checkAge2();
//    
    
//    function min(a,b){ // ***** минимальное число *****
//        var a=prompt("ent 1st digit");
//        var b=prompt("ent 2nd digit");
//        alert( "your digits are: " + a + "," + b);
//        if(a<b){
//            alert("min is "+a);
//        }
//            else{
//                alert("min is "+b);
//            }
//        }
//    
//    min();
//
//     function pow(x, n) { // ***** возведение в степень *****
//        var result = x;
//
//        for (var i = 1; i < n; i++) {
//        result *= x;
//        }
//
//        return result;
//        }
//
//        var x = prompt("x?", '');
//        var n = prompt("n?", '');
//
//        if (n <= 1) {
//        alert("degree" + n + "doesnt support");
//        } 
//        else {
//        alert( pow(x, n) );
//        }
  
//    
//    
        
//    function sumTo(n){ // ***** сумма от 1 до n с помощью цикла *****
//        var sum=0;
//        for(var i=1;i<=n;i++){
//            sum+=i;
//        }
//        return sum;
//    }
//    var n=+prompt("ent n");
//    alert(sumTo(n));
    
    
//    function sumTo(n){ //  ***** сумма от 1 до n с помощью рекурсии *****
//        if(n>1){
//            return n + sumTo(n-1);
//        }
//        else{
//            return n;
//        }
//    }
//    var n=+prompt("ent n");
//    alert(sumTo(n));
    
//    function factorial(n){ // ***** нахождение факториала n-числа с помощью рекурсии *****
//        if(n>1){
//            return n*factorial(n-1);
//        }
//        else{
//            return n;
//        }
//    }
//    var n=+prompt("ent n");
//    alert(factorial(n));
//////    
//    function fib (n){  // вычисление чисел фибоначчи с помощью рекурсии
//        if(n>1){
//            return fib(n-1) + fib(n-2);
//        }
//        else{
//            return n;
//        }
//    }
//    var n = +prompt("ent n");
//    alert(fib(n));
    
    
//    function fib(n){ // updated, не забыть!!! решить fib с помощью math.pow()
//     var a=1;
//     var b=1;
//        for(var i=3; i<=n; i++){
//            var c=a+b;
//            a=b;
//            b=c;
//        }
//        return b;
//    }
//        var n=+prompt("ENT N");
//        alert(fib(n));
//        
    
    
//    function pow(x,n){ // возведение в степень
//       var res=x;
//       for(var i=1; i<n; i++){
//           res*=x;
//       }
//       return res;
//   }
//    var x=prompt("ent x");
//    var n=prompt("ent n");
//    alert(pow(x,n));
    
//    function area(a,b,c){ // площадь квадрата 
//        return a*b;
//    }    
//  var a=+prompt("a?");
//    var b=+prompt("b?");
// alert("area is " + area(a,b));
// 
//    function cylarea(h,d){ // площадь цилиндра
//        return 3.14 * h * d;
//    }
//    var h=prompt("ent h");
//    var d=prompt("ent d");
//    alert("cylarea is " + cylarea(h,d));
//    
    
//    function Pif(n,m){ // гипотенуза
//        return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
//    }
//    var n=prompt("ent n");
//    var m=prompt("ent m");
//    alert("gep in square is "+ Pif(n,m));
    
  
//    function credit(Pereplata, MonthPay, UPay){ // переплата по ипотечному кредиту
//    var MonthPay = (D*(i/m)) / (1 - (1 / Math.pow(1+(i/m), n*m)));
//    var UPay = MonthPay*(n*m);
//    var Pereplata = UPay-D;
//    return Pereplata;
//    }
//    var D=+prompt("sum of credit?");
//    var i=+prompt("rate?");
//    var m=12;
//    var n=+prompt("time?(in years)");
//    alert("pereplata is " + credit());
//    
                 
  })();
    