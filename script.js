function botao_calcular() {
    //Declaro as constantes de acordo com os inputs
    const cx_distancia = document.getElementById('cx-distancia')
    const cx_eletrico = document.getElementById('cx-eletrico')
    const cx_preco_alc = document.getElementById('cx-preco-alcool')
    const cx_preco_gas = document.getElementById('cx-preco-gasolina')
    const cx_rend_alc = document.getElementById('cx-rend-alc')
    const cx_rend_gas = document.getElementById('cx-rend-gas')

    //Pego o valor dos inputs e transformo em Number
    const distancia = Number(cx_distancia.value)
    const perc_eletrico = Number(cx_eletrico.value)
    const preco_alc = Number(cx_preco_alc.value)
    const preco_gas = Number(cx_preco_gas.value)
    const rend_alc = Number(cx_rend_alc.value)
    const rend_gas = Number(cx_rend_gas.value)

    //Processamento:
    const distancia_eletrico = distancia * (perc_eletrico/100)
    const distancia_combustivel = distancia - distancia_eletrico

    const litros_alc = distancia_combustivel / rend_alc
    const litros_gas = distancia_combustivel / rend_gas

    const gasto_alc = litros_alc * preco_alc
    const gasto_gas = litros_gas * preco_gas

    //Saída:
    const result = `> ÁLCOOL: <
    ⛽Litros: ${litros_alc.toFixed(1)} 
    💵Gasto: R$ ${gasto_alc.toFixed(2)}
    \n> GASOLINA: <
    ⛽Litros: ${litros_gas.toFixed(1)}
    💵Gasto: R$ ${gasto_gas.toFixed(2)}`
    
    alert(result)
}