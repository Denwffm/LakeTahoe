(function() {
    "use strict";
    
<<<<<<< HEAD
    console.log("Javascript basics");
    
    var test01 = function() {
        console.log("Unary plus test");
=======
    console.log("***Javascript basics***");
    
    var test01 = function() {
        console.log("-Unary plus test-");
>>>>>>> origin/master
        
        console.log( +(1-2)); // -1
        
        var a = "3"; // string
        console.log( typeof a ); // string
        console.log( typeof (+a) ); // number
    };
<<<<<<< HEAD
    
    test01();

    
    var test02 = function() {
        console.log("Binary plus test");
        
        
    };
    test02();
=======
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
        var access=parseInt("10110", 2);
        console.log(access);
    }
    test08();
    
    var test0 = function() {
        
        console.log("***variables***");
        var admin;
        var name = "Vasiliy";
        admin = name;
        console.log(admin);
    };
    test0();
>>>>>>> origin/master
    
})();
