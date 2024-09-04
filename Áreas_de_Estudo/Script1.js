//if, else if, else
let possuiOvos = false
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
}
else{
    console.log("passou na sessão de alimentos congelados ")
    itensComprados = "Lasanha congelada"
}
console.log("item comprado: " + itensComprados);

let nivelDeFome = 12

if(nivelDeFome === 1){
    console.log("Pouca fome")
}else if(nivelDeFome === 2){
    console.log("fome média")
}else{
    console.log("Você está com muita fome")
}
// estrutura de decisão
// switch/ case/ break / default

let fruta = "laranja"

switch (fruta){
    case "laranja":
        console.log("Suco de laranja")
        console.log("Segunda mensagem")
        break

        case "banana":
            case "morango":
            console.log("Vitamina de " + fruta)
            break

            case "maçã":
                console.log("Suco de maçã")
                break

                default:
                    console.log("Não possuimos esse Suco no momento")
}

//for
for (let contador = 0; contador <= 10; contador++)
{
    console.log(contador)
}
let pontosDeVida = 0

for(let i = 0; i <= 11; i++){
    pontosDeVida += 1
    console.log("Tomou poção de vida ")
}

console.log(pontosDeVida + " Pontos de vidas totais ")
