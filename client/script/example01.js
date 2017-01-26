(function() {
    "use strict";
    
    console.log("***Javascript basics***");
    
    var test01 = function() {
        console.log("-Unary plus test-");
        
        console.log( +(1-2)); // -1
        
        var a = "3"; // string
        console.log( typeof a ); // string
        console.log( typeof (+a) ); // number
    };
    test01();
    
    var test02=function(){
        console.log("-Unary minus test-")
        var x=1;
        x=-x;
        console.log(x);//-1
    };
    test02();
    
    var test03 = function() {
        console.log("-Binary plus test-");
        var a="my"+"string";
        console.log(a);
        
    console.log(2+"1");//"21"
        var apples="2";
        var oranges ="3";
        };
    test03();
    
    var test04=function(){
        console.log("-Binary minus test-");
        console.log(2-"1");//1
    }
    test04();
    
    console.log("-Inkrement-");
    var test05=function(){
        var i=1;
        var a=++i;
        console.log(a);    
    }
    test05();
    
    var test06=function(){
        console.log("-task1-")
        var a=1, b=1, c,d;
        c=++a; console.log(c);//c=2
        d=b++;console.log(d);//d=1
        c=(2+ ++a); console.log(c);//c=5
        d=(2+ b++); console.log(d);//d=4
        console.log(a);//3
        console.log(b);//3
        console.log("-task2-")
        var a=2;
        var x=1+(a*=2);
        console.log(x);//5
    }
    test06();
    
    var test07=function(){
        console.log("-null-");
        var a=null>0;
        var b=null==0;
        var c=null>=0;
        console.log(a);//false
        console.log(b);//false
        console.log(c);//true
    }
test07();
    
    
  var test08=function(){
          console.log("-UI Operations-");//Hello
        var a="Hello";
        alert(a);
    }
    test08();
    
    
    var test10=function(){
        console.log("-UI Operations(prompt, years)-");//prompt
        var years=prompt("how old are you", "1-100");
        alert("you are "+years+" years old");
    }
    test10();
    
    var test09=function(){
        var access=parseInt("10110", 2);
        console.log(access);
    }
    test09();
    var test11=function(){
        console.log("-UI Operations(confirm,admin)-");
        var isAdmin=confirm("are u admin?");
        alert(isAdmin);
    }
    test11();
    
    var test12=function(){
        console.log("-task3(name)-")
        var name=prompt("what is your name", "-your name-");
        alert("welcome "+name);
    }
     test12();
    var test13=function(){
        console.log("opearator if(ecma)")
        var year=prompt("in which year ecma-262 was based?", "")
        if(year!=2011){
        alert("and this is..")
        alert("incorrect")
        }
        else{
            alert("wright!")
        }
    }
    test13();
    
    var test14=function(){
        console.log("-opeator else if-");
        var year=prompt("in which year ecma-262 was based?", "");
        if(year<2011){
            alert("this is too early")
        }
        else if(year>2011){
            alert("this is too late")
        }
        else{
            alert("thats wright!")
        }
    }
    test14();
    
    var test15=function(){
        console.log("-operator ?-");
        var access;
        var age=prompt("how old are u?", "");
        access=(age>14) ? true:false;
        alert(access);
    }
    test15();
    
 var test16=function(){
        console.log("-a few   *?*   operators-");
        var age=prompt("how old are u?", "");
        var message=(age<3) ? "hello baby" :
        (age<18) ? "hello !" :
        (age<100) ? "good day" :
        "what r u?)";
        
        alert(message);
    }
    test16();
    
 var test17=function(){
     var message=prompt("what is real name of JS", "");
        if(message=="EcmaScript"){
            alert("Thats wright")
        }
        else{
            alert("dont know?? EcmaScript!!!")
        }
    
    }
//    test17();
    var test18=function(){
        var message=prompt("kjfhksjhf?", "");
        if(message>0){
            alert("1")
        }
        else if(message<0)
            {
                alert("-1")
            }
        else{alert("0")}
    }

    test18();
    
    
    var test19=function(){
        console.log("-login inspection-");
        var answer=prompt("enter your login", "");
        if(answer=="admin")
            {
                var pass=prompt("enter your password","");
                if(pass=="black vlastelin")
                    {alert("welcome")}
                else if(pass==null)
                    {alert("access error")}
                else{alert("password incorrect")}
            }
        else if(answer==null)
            {alert("access error")}
        else{alert("i dont know u")}
        
        
    }
    test19();
    
    var test20=function(){
        console.log("-operators && || !-")
        var age=prompt("enter age pls", "");
        if(!(age > 14 && age < 90)){
            alert("correct!");
        }
            else {
                alert("incorrect");
            }
        }
    test20();
    
    var test21=function(){
        
    }
    

    

})();



