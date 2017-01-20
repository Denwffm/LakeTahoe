(function() {
    "use strict";
    
    console.log("Javascript basics");
    
    var test01 = function() {
        console.log("Unary plus test");
        
        console.log( +(1-2)); // -1
        
        var a = "3"; // string
        console.log( typeof a ); // string
        console.log( typeof (+a) ); // number
    };
    
    test01();

    
    var test02 = function() {
        console.log("Binary plus test");
        
        
    };
    test02();
    
})();
