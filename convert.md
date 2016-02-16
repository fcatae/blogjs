Conversões implícitas por valueOf e toString:

        igualdade(1=="1");
        igualdade(1.0=="1");
        igualdade(1.0=="1.0");
        
        // .1+.2=='.3' -- FALSE
        
        igualdade(.1 =='0.1')
        igualdade(.1 =='.1')
        igualdade(.1=='00000.1')
        
        var a = 1;        
        a.valueOf();
        a.toString();
        
Mostrando a realidade:

    var b = { valueOf: function() { return 2; }}
    var c = { toString: function() { return 3 }}        

    b == 2 // true
    c == 3 // true
    
   Estranho:
   
   booleans false!