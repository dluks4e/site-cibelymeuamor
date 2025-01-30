// Defina a data final da contagem regressiva (ano, mês-1, dia, hora, minuto, segundo)
const dataFinal = new Date(2025, 5, 17, 1, 0, 0); // Exemplo: 25 de dezembro de 2024, 18:00

function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('contagem-regressiva').innerHTML = `
        Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos!
    `;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();