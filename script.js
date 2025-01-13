// 1. Valor da variável SOMA
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

document.getElementById('soma').innerText = `Valor da variável SOMA: ${SOMA}`;

// 2. Sequência de Fibonacci
function isFibonacci(n) {
    let a = 0;
    let b = 1;
    while (a < n) {
        [a, b] = [b, a + b];
    }
    return a === n;
}

let numero = 21;
let fibonacciMsg = isFibonacci(numero) ?
    `O número ${numero} pertence à sequência de Fibonacci.` :
    `O número ${numero} não pertence à sequência de Fibonacci.`;

document.getElementById('fibonacci').innerText = fibonacciMsg;

// 3. Faturamento diário
const dados = [
    { dia: 1, valor: 100 },
    { dia: 2, valor: 200 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 300 },
    { dia: 5, valor: 0 },
    { dia: 6, valor: 400 },
    { dia: 7, valor: 500 }
];

const faturamentos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

const menorFaturamento = Math.min(...faturamentos);
const maiorFaturamento = Math.max(...faturamentos);
const mediaMensal = faturamentos.reduce((acc, val) => acc + val, 0) / faturamentos.length;
const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;

document.getElementById('faturamento').innerText =
    `Menor faturamento: ${menorFaturamento}\n` +
    `Maior faturamento: ${maiorFaturamento}\n` +
    `Dias com faturamento acima da média: ${diasAcimaDaMedia}`;

// 4. Percentual de faturamento por estado
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

const percentuais = {};
for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / total) * 100;
}

let percentMsg = '';
for (const estado in percentuais) {
    percentMsg += `${estado}: ${percentuais[estado].toFixed(2)}%\n`;
}

document.getElementById('percentual').innerText = percentMsg;

// 5. Inverter string
function inverterString(s) {
    let invertida = "";
    for (let char of s) {
        invertida = char + invertida;
    }
    return invertida;
}

let string = "exemplo";
document.getElementById('inversao').innerText = `String invertida: ${inverterString(string)}`;