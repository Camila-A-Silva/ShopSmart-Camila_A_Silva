// Captura os inputs uma única vez para reutilizar em outras operações

// valor 01 sempre será o valor do produto
const input01 = document.getElementById('valor01');
// Valor 02 será sempre a base do calculo (quantidade, percentual ou custo)
const input02 = document.getElementById('valor02');

// Captura o conteiner onde o resultado será exibido
const resultado = document.getElementById('resultado');


function calcularTotal() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    console.log(v1);
    const v2 = parseFloat(input02.value);
    console.log(v1);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        alert('Valor 01 ou Valor 02 inválido.')

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Total da Compra </h2>
                <ul>
                    <li>Valor do produto: R$<span>${v1}</span> </li>
                    <li>Quantidade de produtos: <span>${v2}</span></li>
                    <li>O valor total da compra será de R$<span>${v1 * v2.toFixed(2)}</span> </li>
                </ul>
        `
    };

};

function desconto() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        alert('Valor 01 ou Valor 02 inválido.')

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Total da Compra </h2>
                <ul>
                    <li>Valor do produto: R$<span>${v1}</span> </li>
                    <li>Percentual do desconto: <span>${v2}</span></li>
                    <li>O valor total de desconto será de R$<span>${v1-(v1 * v2)/100 .toFixed(2)}</span> </li>
                </ul>
        `
    };

};

function juros() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        alert('Valor 01 ou Valor 02 inválido.')

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Total da Compra </h2>
                <ul>
                    <li>Valor do produto: R$<span>${v1}</span> </li>
                    <li>Percentual de acréscimo: <span>${v2}</span></li>
                    <li>O valor total de acréscimo será de R$<span>${v1+(v1 * v2)/100 .toFixed(2)}</span> </li>
                </ul>
        `
    };

};

function comissao() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        alert('Valor 01 ou Valor 02 inválido.')

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Total da Compra </h2>
                <ul>
                    <li>Valor vendido no dia: R$<span>${v1}</span> </li>
                    <li>Percentual da comissão: <span>${v2}</span></li>
                    <li>Total recebido de comissão R$<span>${(v1 * v2)/100 .toFixed(2)}</span> </li>
                </ul>
        `
    };

};

function lucro() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        alert('Valor 01 ou Valor 02 inválido.')

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Total da Compra </h2>
                <ul>
                    <li>Valor que foi vendido: R$<span>${v1}</span> </li>
                    <li>Valor que o vendedor comprou: <span>${v2}</span></li>
                    <li>O valor total do lucro será de R$<span>${v1 - v2.toFixed(2)}</span> </li>
                </ul>
        `
    };

};

function limpar() {

    // Ocultar a área de resultado sem remov~e-la do DOM
    resultado.style.display = 'none';

    // Limpar o valor digitado
    input01.value = '';
    input02.value = '';

    // Devolver o foco para a primeira página
    input01.focus();

};
