A comunicação stream readable:

    var Readable = require('stream').Readable;
    var rs = new Readable();

    rs.push('hello');
    rs.push(' ');
    rs.push('world');
    rs.push(null);      // close the stream

    rs.pipe(process.stdout); 

Sempre terminando com NULL para indicar o final do stream. Ou ainda melhor é definir uma função de callback:

    rs._read = function() {    
        setTimeout(
            function() {
                rs.push( (idx < data.length) ? data[idx++] : null );
                },
                1000);
    }

O oposto seria criar um stream writable:

    var Writable = require('stream').Writable;
    var ws = new Writable();

    ws._write = function(chunk, enc, next) {
        console.log(chunk);
        next();
    }

Assim, podemos fazer:

    rs.pipe(ws);
    
A transformação pode ser feita usando a biblioteca through2:

    npm install through2 --save
    
Usamos o through2 para criar streams transform:

    var Through2 = require('through2');

    var ts = Through2(function(chunk, enc, next) {
        var i;
        for(i=0;i<chunk.length;i++) {
            this.push(String.fromCharCode(chunk[i]));
            this.push(' ');    
        }
        next();
    });

    rs.pipe(ts).pipe(process.stdout);

    