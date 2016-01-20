Assim como nas outras linguagens, 
o javascript possui primitivas baseadas
em números e string.
A linguagem possui suporte a objeto.

Tudo no Javascript é objeto e a declaração é feita usando:
    
    var obj = {}

Mas nem tudo é realmente objeto:

    var n = 1.1
    var str = 'Hello'
    
Óbvio?

Mas tudo no Javascript é derivado de objeto no Javascript!

String é objeto:

    objeto.prototype.quem = () => 'sou objeto'

    "Hello World".quem();
    
Number é objeto.
Double é objeto.
Array é objeto.

Então qual é o resultado disso:

    var num = new Number(1);
    console.log(num instanceof Object);

    // TRUE!

Number.__proto__ aponta para Object.prototype.

Então que tal criarmos um testeObjetividade?

    function testeObjetividade(o) {
        console.log(o instanceof Object);
    }

Agora podemos validar:

    testeObjetividade('a') // FALSE
    testeObjetividade(1) // FALSE
    testeObjetividade([]) // TRUE
    testeObjetividade({}) // TRUE
    
E o que seria entao:

    testeObjetividade(new Number(1)) // TRUE
