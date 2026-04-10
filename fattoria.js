var recinto = [
    {
        specie: "Mucca",
        razza: "Chianina",
        zampe: 4,
        foto: "FATTORIA.jpg",
        dieta: {
            ciboPreferito: "erba fresca"
        }
    },
    {
        specie: "Cane",
        razza: "Bassotto",
        zampe: 4,
        foto: "bassotto.jpg"
    },
    {
        specie: "Gallina",
        razza: "Andalusa",
        zampe: 2,
        foto: "Gallo.jpg"
    }
];


for (let i = 0; i < recinto.length; i++) {
    recinto[i].caratteristicheComplete = function() {
        let info = "Questo animale è un " + this.specie + " di razza " + this.razza + " e ha " + this.zampe + " zampe.";
        if (this.dieta) {
            info += " Il suo cibo preferito è: " + this.dieta.ciboPreferito;
        }
        return info;
    };
}

function apriSchedaAnimale(indice) {
    document.getElementById("fattoria-menu").style.display = "none";
    document.getElementById("scheda-animale").style.display = "block";

    let animale = recinto[indice];

    document.getElementById("titolo-animale").innerHTML = animale.specie;
    document.getElementById("foto-animale").src = animale.foto;
    document.getElementById("descrizione-animale").innerHTML = animale.caratteristicheComplete();
}

function tornaAllaFattoria() {
    document.getElementById("fattoria-menu").style.display = "block";
    document.getElementById("scheda-animale").style.display = "none";
}
