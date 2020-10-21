/*RETO 1*/

let dia: number
let mes: number

function zodiaco(dia, mes){

    if((dia>=22 && mes == 12) || (dia<=20 && mes == 1)){

        return "Capricornio"
    }

    else if((dia >= 21 && mes == 1) || (dia <=19 && mes == 2)){

        return "Acuario"
    }

    else if((dia >= 20 && mes == 2) || (dia<=20 && mes == 3)){

        return "Piscis"
    }

    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){

        return "Aries"
    }

    else if((dia >= 21 && mes ==4) || (dia <= 21 && mes == 5)){

        return "Tauro"
    }

    else if((dia >= 22 && mes == 5) || (dia<=21 && mes == 6)){

        return "Geminis"
    }

    else if((dia >= 22 && mes == 6) || (dia <= 23 && mes == 7)){

        return "Cancer"
    }

    else if((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)){

        return "Leo"
    }

    else if((dia >= 24 && mes == 8) || (dia <=23 && mes == 9)){

        return "Virgo"
    }

    else if((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)){

        return "Libra"
    }

    else if((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)){

        return "Escorpio"
    }

    else if((dia >= 23 && mes == 11) || (dia <=21 && mes == 12)){

        return "Sagitario"
    }

    else{

        return "Fecha no valida"

    }

}

console.log("el horoscopo es: " + zodiaco(13,2))