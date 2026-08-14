// tipo de dados 

//coversão implicita
const num1 = 12;
const nums = "12";
console.log(num1 == nums);
console.log(num1 + nums);
//bug rsrs

// 3 iguais vê o tipo do dado junto
// 2 iguais vê só o valor
// 1 igual atribuir valor variavel


//conversão explicita 

//Number()
//String()
//sempre letras maiuscula
//pode ser colocada dentro da variavel tbm, garantindo que vai ser um número 

const numstring = Number("422");
console.log(num1 + Number(nums));
console.log(numstring+numstring);

const string = "AA";
const string2 = "AA";
console.log(string*string2);