// não existe em muitas linguagens
//praticamente um if 

const idade = 18;
const idadec = 17;

if (idadec >= idade){
    console.log("pode acessar");
} else {
    console.log("Não pode acessar");
}
                            //true  //false
           // condição        //saida
console.log(idadec >= idade ? "bebida" : "suco");

// ternario não recomendado, boas praticas, if else
// se for curta, pode ser util

//ternario, por ter três operadores, condição, ? e :