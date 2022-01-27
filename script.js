function rebendoPalavra() {
    const titulo = alert(`Desafio - Palindromo. Click no ok para continuar!`)

    let palav = prompt('Digite uma palavra:');

    return verificacaoDePalindromo(palav);
}

rebendoPalavra();

function verificacaoDePalindromo(string) {

    var palavra = string.split("").reverse().join("") === string;

    if (!string)
        return alert(`
        String Inexistente
        `), novamente();

    else if (!palavra) return alert(`
    A palavra ${string} não é um palindromo!
    `), novamente();

    else return alert(`
    A palavra ${string} é um palindromo!
    `), novamente();

    function novamente() {
        let opcao = prompt('Deseja verificar outro valor?\n 1 - Sim\n 2 - Não');

        opcao == 1 ? rebendoPalavra() : opcao == 2 ? alert('Ok, até mais!') : alert('Digite uma opção válida!') + novamente();
    }
}