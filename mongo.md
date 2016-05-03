Primeiro passo

instalar o MSI do site (versao 3.2)

Os binários (cliente e servidor) estão no diretório

    C:\Program Files\MondoDB\Server\3.2\bin

O server roda através do daemon:

    mongod
    
Que usa o diretório raiz `c:\data\db` para guardar os dados.


Comandos
=========

Comaçar é fácil: embora seja possível criar tabela (coleção) pelo
comando:

    db.createCollection('novodb')
         
O mais fácil é fazer implicitamente:

    db.novodb.insert({ blablabla: '123'})
    
Updates utilizam o parâmetro de filtro:

    db.novodb.update({ status: 'ok' }, { $set: { pago: 1 } })    
    
Podemos usar diferentes operadores (ex: $unset)

    db.novodb.update({ status: 'invalido' }, { $unset: { pago: 0 } })    

Outro exemplo $inc:

    db.novodb.update({ status: 'pago' }, { $inc: { saldo: 100 } })
    
Por fim, existem as condições de $or e $and

    db.novodb.update( { $or: [{ status: '?'},{ status: '!'}] }, 
        { $set: { status: 'unknown '} })    

O comando de remover:

    db.novodb.remove( { status: '?'} )

Por fim, o comando de SELECT:

    db.novodb.find()   -- SELECT *
    
Também podemos aplicar filtros:

    db.novodb.find( { saldo: { $gt: 0} } )    
    
Podemos fazer projeções (inclusão=1, exclusão=0, não podem ser misturadas exceto _id)

    db.novodb.find({}, { nome:1, saldo:1, _id:0 })    

Podemos aplicar modificadores de cursor:

    db.novodb.find().limit(10)  -- TOP 10
    db.novodb.find().sort( {age:1} )
    
Agregadores:

    db.novodb.count()
    db.novodb.count( { age : { $gt: 10} } )
    
    
Índices e Explain
===================

Os conceitos de índices seguem o mesmo do banco de dados relacional: 

    db.novodb.createIndex( {column: 1} )

Existe inclusive o conceito de covered index:

    db.inventory.createIndex( { type: 1, item: 1 } )
    
    db.inventory.find(
    { type: "food", item:/^c/ },
    { item: 1, _id: 0 }
    )

Entretanto, há restrições para o covered index quando:
- se o campo indexado for um array
- se o campo estiver dentro de um documento embedded (embora o seek seja usado)
- se a coleção for sharded


Storage Engine
================

WiredTarget permite realizar transações simultâneas em coleções.

O processo de escrita é muito similar ao SQL. Checkpoint de dados e journaling
(log) das transações.  
Dados = checkpoints de 60 segundos ou 2GB de log
Log = 100 ms (maximum)

Quando o log é perdido, os dados são restaurados a partir do último checkpoint.


MMAPv1: Record storage reallocation usando power of 2.
MMAP depende do journaling para restaurar 


