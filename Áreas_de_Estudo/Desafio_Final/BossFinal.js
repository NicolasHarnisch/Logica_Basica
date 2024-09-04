let nomeHeroi = prompt("Digite o nome do herói:"); // Você pode mudar o nome aqui
let xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói:"), 10); // Defina aqui o valor de XP

function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    alert(`O ${nome} é Nível ${nivel}`);
}

classificarHeroi(nomeHeroi, xpHeroi);
