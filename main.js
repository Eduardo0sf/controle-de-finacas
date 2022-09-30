let moneyInitial = Number(prompt(`Qual é a quantia inicial
`))
function bank(){

let DepositMoney = Number(prompt(`R$ ${moneyInitial}

1-Depositar dinheiro
2-Sacar dinheiro
3-Encerrar
`))

if(DepositMoney === 1) {
    let Deposit = Number(prompt(`Qual o valor a depositar`))

    value = moneyInitial + Deposit
    moneyInitial = value
    alert(moneyInitial)
    return bank()

}

if(DepositMoney === 2) {
    let Deposit = Number(prompt(`Qual o valor a sacar`))

    value = moneyInitial - Deposit
    moneyInitial = value
    alert(moneyInitial)
    return bank()
 
}
if(DepositMoney > 2) {
    alert(`encerrando...`)

}



}

bank()

