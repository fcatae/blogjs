        var ctor_function = function() {};
        alert('ctor_function.prototype: ' + ctor_function.prototype)
        alert('ctor_function.prototype.constructor: ' + ctor_function.prototype.constructor)
                        
        var instance = new ctor_function();
        alert('instance proto: ' + (instance.__proto__ == ctor_function.prototype )); 
        
        
        
        var Class = function() {};
        var instance = new Class();

        Class.prototype.hello = function() { alert('Hello ' + Date.now()) }
        
        instance.hello();