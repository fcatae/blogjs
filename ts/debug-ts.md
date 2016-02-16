# TSC command line

1. Compilando

    tsc file1.ts file2.ts file3.ts 
    tsc file1.ts file2.ts file3.ts --outDir output  

2. Concatenando o arquivo de saida 

    tsc --outFile package.js

3. Watch mode

    tsc --watch
    tsc -w
        
4. Compilando TSX

    tsc --jsx react

5. Compilando Javascript (Typescript 1.8)

    tsc --allowJs


# TSconfig.json

O arquivo de configuração TSconfig.json indica qual o diretório raiz para
compilar os arquivos Typescript.

    tsc file1.ts file2.ts file3.ts

1. Crie um arquivo chamado `tsconfig.json` no diretório raiz.
    
    tsc
    
2. Arquivo `tsconfig.json` possui suporte a Intellisense no VSCode.

3. CompilerOptions:
* module: commonJS ou AMD
* outDir: Especifica o diretório de saída
* outFile: Ao invés de gerar arquivos individuais, gera um único arquivo
* target: es3 (default), es5, es6
 
* removeComments

4. Sempre especifique: Files ou Exclude. Caso contrário você ficará louco
com o node_modules.
  

# Debugging

VSCode pode depurar arquivos Typescripts através dos arquivos de "source maps".
Para isso, é importante adicionar os seguintes parâmetros de configuração:

Launch.json: Ler os arquivos MAP

    configurations.sourceMaps = true

TSconfig.json: Gerar os arquivos MAP

    compilerOptions.sourceMap = true
    

# Build Tools

## Gulp 
    npm install gulp-typescript

    var gulp = require("gulp");
    var ts = require("gulp-typescript");

    gulp.task("default", function () {
    var tsResult = gulp.src("src/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            out: "output.js"
        }));
    return tsResult.js.pipe(gulp.dest('built/local'));
    });
    

# Typings

Antigo `tsd` foi descontinuado em favor do `Typings`.  

    npm install typings --global
    
Podemos criar um arquivo typings.json:

    typings init

A sintaxe continua praticamente idêntica ao TSD adicionando o
parâmetro `--ambient`.

    typings install react --save --ambient
    
O diretório typings será criado com main.d.ts e browser.d.ts. 
É necessário decidir somente um deles usando files ou exclude
do tsconfig.json.

[Discussão no Github sobre o assunto](https://github.com/typings/typings/issues/151)

