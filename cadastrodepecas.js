var ListaDePecas = ["abddddddddddddddddddnode", "peca2", "peca3", "pecas4", "pecas5", "pecas6", "pecas7", "pecas8", "pecas9", "pecas10", "pecas11"];
console.log("quantidadedepecas");

if (ListaDePecas.length > 10) { console.log("capacidade insuficiente"); }

else { console.log("capacidade suficiente!"); }

console.log("Quatidade de Caracteres");

for (contador = 0; contador < ListaDePecas.length; contador++) {

    var PecaAtual = ListaDePecas[contador];

    if (PecaAtual.length < 3) { console.log(PecaAtual + ": a peca possui nome inferior a 3 caracteres e não pode ser cadastrado!") }

    else { console.log(PecaAtual + ": a peça pode ser cadastrada!") }
}
console.log("peso da peça");

var pesodapecaemgramas = 50;

if (pesodapecaemgramas >= 100){console.log("peso suficiente!")}

else {console.log ("Valor Insuficiente!")}

