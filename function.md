Podemos criar uma função:

    function a() {
        function b(msg) { console.log(msg); }        
        return b;
    }

    var b1 = a();
    var b2 = a();
    
    console.log(b1 == b2) // FALSE
    
Se mudarmos para:

    function b(msg) { console.log(msg); }
        
    function a() {
        return b;
    }

    var b1 = a();
    var b2 = a();
    
    console.log(b1 == b2)

Qual a diferença?

Ficaria claro se fizermos:

    function a() {
        var msg = Date.now();
        function b() { console.log(msg); }        
        return b;
    }

    var b1 = a();
    var b2 = a();
    
    console.log(b1 == b2) // FALSE
    
Ou então:

    function a() {
        return new FuncB();
    }
    
Isso significa que sempre estou ocupando espaço!!!

    function a() {
        var msg = Date.now();
        
        this.b = function b() { console.log(str); }
        
        function c() {}
        this.c = c;
    }

    var bs = [];
    for(var i=0; i<10000; i++) {
        bs.push( new a() );
    }
    
O ideal seria fazer:

       function a() {
           var msg = Date.now();
           
           //this.b = function b() { console.log(str); }
           //this.c = c;
       }
       a.prototype.b = function b() { console.log(str); };
       a.prototype.c = function c() {};
       
Mostrar graficamente que as funções são movidas do __proto__ para o prototype
da classe pai.       