console.time('Perfomance')
const normalMsg = new String('Comece pelo porquê Como tudo na vida, comece sempre pelo porquê... e porque esse porque é importante? Imagine que dê tudo errado, que você não ache a solução para um problema ou não simplesmente consiga progredir com os seus estudos, o que irá te impedir de desistir da programação? O seu Porque … Então responda as essas perguntas: Por que você escolheu estudar programação? O que te encantou por esse mundo? Aonde você quer chegar? Comece pelo motivo de você querer programar, porque não será fácil e não será rápido. Pacote Full-Stack A mentalidade certa como programador A forma como você pensa é a forma como você ver o mundo e as coisas nele. Primeira forma de pensar certa é que você nunca deve se comparar com outros programadores, porque imagine o seguinte: Você conhece o José… Esse camarada tem 23 anos de idade e ele já programa em 3 linguagens, já ganha dinheiro com programação, já tem aplicação no ar e etc … E tem você, com 23 anos e iniciou os estudos há 3 meses... É claro que se você se comparar com ele, você desanima, mas pense numa coisa, o José programa desde os 13 anos de idade e está no trigésimo passo dele como programador enquanto você está no seu terceiro passo como programador, você acha justo que você esteja no nível dele? Claro que não. Então lembre-se sempre que a sua competição é contra você mesmo. Busque aprender e melhorar dia a dia e pense sempre a longo prazo.')
let criptoMsg = '', descriptoMsg ='', x = ''
const criptoFunc = (msg) => {
    for (let i = 0; i < msg.length; i++) {
      criptoMsg +=  (i === 0 ) ? `${msg.charCodeAt(i) + 79}` : `@#${msg.charCodeAt(i) + 79}`
    }
    x = criptoMsg.replace(/@#/g, '')
    return x
}
console.log('CRIPTOGRAFIA')
console.log(criptoFunc(normalMsg))
console.log('DESCRIPTOGRAFIA')
const descriptoFunc = (msg) => {
    for (let i = 0; i <= criptoMsg.match(/@#/g).length; i++) {
        descriptoMsg += String.fromCharCode(msg.split('@#')[i] - 79)
    }
    return descriptoMsg
}
console.log(descriptoFunc(criptoMsg))
console.timeEnd('Perfomance')
