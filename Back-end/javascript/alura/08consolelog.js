// log resgistro
// console, por trás da aplicação
// verificar a documentação do node para o console é importante
//verificar documentação é importante em qualquer documentação

const mvar = true;
console.log(232);
console.log("texto1");
console.log(mvar);

// tratamento de erro (console.error/warning/etcetc)

console.error('meu erro');

// estrutura do consol -> error.api


// console.error() para exibir mensagens de erro;

// console.table() para visualizar de forma mais organizada informações tabulares;

// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;

// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

console.log("deu erro");
console.error(new Error("deu erro"));
// new -> classes