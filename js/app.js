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
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Erro de validação </h2><br>
                    <p>Por favor, informe valores numéricos válidos nos dois campos.</p>
        `

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Total da Compra </h2>
            <br>
            <p>Valor do produto: R$<span>${v1.toFixed(2)}</span> </p>
            <br>
            <p>Quantidade de produtos: <span>${v2}</span></p>
            <br>
            <p>O valor total da compra será de R$<span>${(v1 * v2).toFixed(2)}</span> </p>
                
        `
    };

};

function desconto() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Erro de validação </h2><br>
                    <p>Por favor, informe valores numéricos válidos nos dois campos.</p>
        `

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Desconto Aplicado </h2></br>
                    <p>Foi aplicado um desconto <span>${v2}</span>% sobre um valor de R$<span>${v1.toFixed(2)}</span></p></br>
                    <p>Valor final com desconto: R$<span>${(v1-(v1 * v2)/100).toFixed(2)}</span> </p>
              
        `
    };

};

function juros() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

       // Display para exibir a área de resultado
       resultado.style.display = 'flex';

       // Exibe o resultado final
       resultado.innerHTML = `
           <h2> Erro de validação </h2><br>
                   <p>Por favor, informe valores numéricos válidos nos dois campos.</p>
       `
    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Juros Aplicado </h2></br>
                    <>Foi aplicado um acrécimo de <span>${v2}</span>% sobre o valor de R$<span>${v1.toFixed(2)}</span> </p></br>
                    <>Valor final com juros R$<span>${(v1+(v1 * v2)/100).toFixed(2)}</span> </p>
               
        `
    };

};

function comissao() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Erro de validação </h2><br>
                    <p>Por favor, informe valores numéricos válidos nos dois campos.</p>
        `

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Comissão Calculada </h2></br>
                    <p>Comissão de <span>${v2}</span>% sobre uma venda de R$<span>${v1.toFixed(2)}</span></li></br>
                    <p>Valor da comissão: R$<span>${((v1 * v2)/100).toFixed(2)}</span> </li>
                
        `
    };

};

function lucro() {

    // Converte os valores digitados para número
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // Vai verificar se algum valor não é número (isNaN)
    if (isNaN(v1) || isNaN(v2)) {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Erro de validação </h2><br>
                    <p>Por favor, informe valores numéricos válidos nos dois campos.</p>
        `

    } else {

        // Display para exibir a área de resultado
        resultado.style.display = 'flex';

        // Exibe o resultado final
        resultado.innerHTML = `
            <h2> Lucro Obtido </h2>
                    <p>Preço de venda: R$<span>${v1.toFixed(2)} | Custo: R$<span>${v2.toFixed(2)}</span> </span> </p>
                    <p>Resultado financeiro: R$<span>${(v1 - v2).toFixed(2)}</span> </p>
                
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
