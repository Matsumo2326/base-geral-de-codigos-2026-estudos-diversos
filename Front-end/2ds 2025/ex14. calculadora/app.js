
function calculadora(operacao){
    let valor1 = parseFloat(document.calc.valor1.value);
    let valor2 = parseFloat(document.calc.valor2.value);

    let result = eval(valor1 + operacao + valor2);

    document.calc.resultado.value = result;
}

function setFocus(){
    document.forms[0].valor1.focus();
}

