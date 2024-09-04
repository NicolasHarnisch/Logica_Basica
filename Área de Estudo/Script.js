let idade = 30
console.log("Valor da minha variavel " + idade)

idade = 30 - 6
console.log("A idade é: " + idade)

let primeiroNumero = 1023
let segundoNumero = 23
    console.log("Resultado da subtração é: " + [primeiroNumero - segundoNumero])

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log("O valor com a taxa é: " + valorComTaxa)

let multiplicador = 3
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("Resultado da multiplicação é: " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("Resultado da multiplicação é: " + produto)

let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("Resultado da divisão é: " + notaDoMercado / pessoasParaDividir )
let calculo = 10 % 3
console.log("operação de módulo " + calculo)

let contador = 1

// '++' incremento
contador++
contador++

// '--' decremento
contador--
contador--
contador--

console.log("Resultado do Contador é: " + contador)
let preco = 10 
preco += 5
console.log("Resultado do preço é: " + preco)

let Resultado = 2 * (5 + 5)
console.log("O Resultado da expressão é: " + Resultado)

let marca = "Apple"
let resultado = marca !== "Samsung"
console.log("É a mesma marca? " + resultado)

let cpfPermitido = "123.456.789-00"
let cpfUsuario = "123.456.789-09"
let cpfBloqueado = cpfUsuario !== cpfPermitido
console.log("O usuário pode embarcar? " + cpfBloqueado)

let idadeMinima = 18
let idadeUsuario = 17
let idadePermitdaValida = idadeUsuario >= idadeMinima
console.log("Essa pessoa tem a idade minima? " + idadePermitdaValida)

let idadeDeCorte = 50
let idadeDeUsuario = 60
let resultadoehTerceiraIdade = idadeDeCorte < idadeUsuario
console.log("Essa pessoa tem a idade maior que a de corte? " + resultadoehTerceiraIdade)

//AND ( && )
let idade1 = 18
let vistoVerificado = false
let resultado1 = (idade1 >= 18) && (vistoVerificado === true)
console.log("Essa pessoa pode viajar? " + resultado1)

//and ( && ) - 100 moedas coletadas e 1 item estrela
let moedasColetadas = 100
let item = "Estrela" 
let resultado2 = (moedasColetadas === 100) && (item === "Estrela" || item === "estrela" )
console.log("Ele coletou 100 moedas e 1 item estrela? " + resultado2)

//or ( || ) - nosso boneco só pode sair se tiver sem chuva ou com guarda chuva
let tempo = "chuva"
let item1 = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item1 === "guarda chuva")
console.log("O personagem pode sair? " + podeSair)

//note ( ! ) - nega uma afirmação
let tempo1 = "chuva"
let resultado3 = tempo1 !== "chuva"
console.log(resultado3)