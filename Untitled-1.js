var ListaDePecas = ["amortecedor", "motor", "filtro de ar"]

let peso = 100
if (peso < 100){
    console.log("a pesa deve pesar no minimo 100g")
}else{
    console.log("a peça possui peso adequado")
}

var ListaDePecas = ["amortecedor", "motor", "filtro de ar"]

if (ListaDePecas.length <10 ){
    console.log("ainda tem espaço")
} else {
    console.log ("Não possui mais espaço")
}

let nomePeca = "a"
if (nomePeca.length > 3){
    console.log("nome da peça esta adequado")
} else if (nomePeca.length == 0) {
    console.log("nome da peça não pode ser vazio")
} else {
    console.log("nome da peça está inadequado")
}