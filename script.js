var precoCupcake = 14.0;
var precoDonut = 18.0;
var precoCapuccino = 10.0;

function simularCompra() {
    var qtdCupcake = Number(prompt("Quantos Cupcakes de Ursinho você quer? (R$ 14,00)"));
    var qtdDonut = Number(prompt("Quantos Donuts Fofos você quer? (R$ 18,00)"));
    var qtdCapuccino = Number(prompt("Quantos Capuccinos de Ursinho você quer? (R$ 10,00)"));

    if (isNaN(qtdCupcake) || isNaN(qtdDonut) || isNaN(qtdCapuccino)) {
        alert("Ops! Você digitou uma letra em vez de número. Por favor, tente novamente digitando apenas números! 🧸");
        return;
    }

    if (qtdCupcake === 0 && qtdDonut === 0 && qtdCapuccino === 0) {
        alert("Nenhum produto foi selecionado! Volte sempre 🧸");
        return;
    }

    var totalCupcake = precoCupcake * qtdCupcake;
    var totalDonut = precoDonut * qtdDonut;
    var totalCapuccino = precoCapuccino * qtdCapuccino;

    var valorGeral = totalCupcake + totalDonut + totalCapuccino;

    alert(
        "🧾 Resumo da Compra, Beary Sweet Café 🐻\n\n" +
        "Cupcake Charmoso: " + qtdCupcake + "x = R$ " + totalCupcake + "\n" +
        "Donut Fofo: " + qtdDonut + "x = R$ " + totalDonut + "\n" +
        "Capuccino Preguiçoso: " + qtdCapuccino + "x = R$ " + totalCapuccino + "\n\n" +
        "💰 Total da Compra: R$ " + valorGeral + "\n\n" +
        "Obrigada pela preferência! ✨"
    );
}