let vitorias = 75
let derrotas = 30

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


// Versão 2 da mesma função, só que ao meu ver mais legível e mais natural com o inglês

function between(value, initial, final) {
    return value >= initial && value <= final
}

vitorias = 85
derrotas = 30

function classifyByStats2(victories, loses) {
    const saldo = victories - loses
    const finalResponse = []

    if(saldo <= 10) {
        finalResponse.push("Ferro")
    } else if(between(saldo, 11, 20)) {
        finalResponse.push("Bronze")
    } else if(between(saldo, 21, 50)) {
        finalResponse.push("Prata")
    } else if(between(saldo, 51, 80)) {
        finalResponse.push("Ouro")
    } else if(between(saldo, 81, 90)) {
        finalResponse.push("Diamante")
    } else if(between(saldo, 91, 100)) {
        finalResponse.push("Lendário")
    } else {
        finalResponse.push("Imortal")
    }

    finalResponse.push(saldo)
    return finalResponse
}

const rankStatus = classifyByStats2(vitorias, derrotas)

console.log(`O herói tem o saldo de ${rankStatus[1]} e está no nível de ${rankStatus[0]}`)