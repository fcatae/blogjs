valores em prototypes?



        var ctor_function = function() {};
        alert('ctor_function.prototype: ' + ctor_function.prototype)
        alert('ctor_function.prototype.constructor: ' + ctor_function.prototype.constructor)
                        
        var instance = new ctor_function();
        alert('instance proto: ' + (instance.__proto__ == ctor_function.prototype )); 
        
        
        
        var Class = function() {};
        var instance = new Class();

        Class.prototype.hello = function() { alert('Hello ' + Date.now()) }
        
        instance.hello();
        
        
        
        
// hasOwnProperty       
        var a = { exemplo: 'eu'};
        var b = { nome: 'fabricio'};

        b.__proto__ = a;
        
        alert(b.nome);
        alert(b.exemplo);
        
        dir(b);
        
        
        
        
                var Animal = function() { return { tipo: 'animal'}; }
        
        var Dog = function() {
            var a = Animal();
            a.tipo = 'dog';
            return a;            
        };
        
        var a = Animal();
        
        alert(a.tipo); // animal!
        
        var d = Dog();
        
        alert(d.tipo); // dog
        
        alert(d.__proto__ == a.__proto__);
        alert(d.__proto__ == Object.prototype);        
