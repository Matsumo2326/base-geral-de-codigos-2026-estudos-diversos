// var, qualquer parte, pode ser declarada a qualquer momento
// Escopo de função (não respeita blocos {})
// Pode ser redeclarada e reatribuída
// Sofre "hoisting" (é içada para o topo, inicializada como undefined)

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;




// let
//Escopo de bloco (respeita {})
// Pode ser reatribuída, mas não redeclarada no mesmo escopo
// Também sofre hoisting, mas fica em "temporal dead zone" (não pode ser usada antes da declaração)
// em resumo, declarar primeiro 
// recomendado para blocos

let forma = 'retângulo';
let num1 = 8;
let num2 = 3;
let area2; 

if(forma === 'retângulo') {
 area2 = num1 * num2;
} else {area2 = (num1 * num2)/2;}
console.log(area2)




//const 
//Escopo de bloco, igual ao let
//Não pode ser reatribuída nem redeclarada
//Precisa ser inicializada na declaração
//Atenção: objetos e arrays const ainda podem ter suas propriedades/itens alterados — o que é imutável é a referência, não o conteúdo
// em resumo, não pode ser alterada

const forma2 = 'retângulo'
const num3 = 3;
const num4 = 9;
let area3;

if(forma2 === 'retângulo') {
 area3 = num3 * num4;
} else {area3 = (num3 * num4)/2;}
console.log(area3)