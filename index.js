const vitorias = 75
const derrotas = 30

function classifyByStats(victories, loses) {
    const saldoVitorias = victories - loses
    if(saldoVitorias <= 10) {
        return "Ferro"
    } else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        return "Bronze"
    } else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        return "Prata"
    } else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        return "Ouro"
    } else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        return "Diamante"
    } else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}
let rank = classifyByStats(vitorias, derrotas)


console.log(`O héroi(na) tem o saldo de ${vitorias - derrotas}, e está no nível ${rank}`)