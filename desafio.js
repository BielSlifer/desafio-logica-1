const nome = "Gabriel"
let XP = 200000

if (XP < 1000) {
    console.log("O Herói de nome " + nome + " está no nível Ferro");
} else if (XP >= 1000 && XP <= 2000) { 
    console.log("O Herói de nome " + nome + " está no nível Bronze");
} else if (XP >= 2001 && XP <= 5000) { 
    console.log("O Herói de nome " + nome + " está no nível Prata");
} else if (XP >= 5001 && XP <= 7000) { 
    console.log("O Herói de nome " + nome + " está no nível Ouro");
} else if (XP >= 7001 && XP <= 8000) { 
    console.log("O Herói de nome " + nome + " está no nível Platina");
} else if (XP >= 8001 && XP <= 9000) { 
    console.log("O Herói de nome " + nome + " está no nível Ascendente");
} else if (XP >= 9001 && XP <= 10000) { 
    console.log("O Herói de nome " + nome + " está no nível Imortal");
} else if (XP >= 10001) { 
    console.log("O Herói de nome " + nome + " está no nível Radiante");
}