/*RETO 1*/


function zodiaco(dia:number, mes: number): string{

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

/*RETO 2*/

function Continente(Pais:String):String{

    let continente: String = ''

    if(Pais == "Spain" || Pais =="France" || Pais =="Germany" || Pais =="Italy" || Pais =="Portugal"){

        continente += "Europe"
    }

    else if (Pais == "China" || Pais =="Japon" ||Pais == "Corea" || Pais =="Taiwan" || Pais =="Filipinas"){

        continente += "Asia"
    }

    else if (Pais == "Canada" || Pais =="EEUU" || Pais =="Mexico" || Pais =="Peru" || Pais =="Brasil"){

        continente+= "America"
    }

    else if (Pais == "Argelia" || Pais =="Egipto" || Pais =="Libia" || Pais =="Marruecos" || Pais =="Ghana"){

        continente += "Africa"
    }

    else if (Pais == "Australia" || Pais == "Fiji" || Pais =="Nueva Zelanda" || Pais =="Samoa" || Pais =="Papua Nueva Guinea"){

        continente += "Oceania"
    }

    else {

        continente += "no ha introducido un Pais Valido"
    }

    return continente
}

console.log(Continente("Samoa"))

/* RETO 3 */

function buscaimpares(limite: number): Array<number>{

    let impares: Array<number> = []
    for (let i= 0; i< limite;i++){
        if(i%2 == 1)

        impares.push(i)

    }
    return impares
}

console.log(buscaimpares(12))

/*RETO 4*/

function Revertir(texto:Array<String>): Array<String>{

    let textorevert:Array<String> = []
    
    for(let i:number = (texto.length-1); i>=0; i--){

        textorevert.push(texto[i])

    }
    
    return textorevert

}

console.log(Revertir(["hola","que","tal","marino","pepino"]))

/*RETO 5*/

function arcoiris(colores: Array<String>): String{

    let resumen: String = '';
    for(let i:number = 0; i<colores.length; i++){

        if (colores[i] == "Rojo" || colores[i] == "Naranja" || colores[i] == "Amarillo" || colores[i] == "Verde" || colores[i] == "Azul" ||
            colores[i] == "Añil" || colores[i] == "Violeta")

        resumen += `\nel color: ${colores[i]} es un color del arcoiris`

        else {

            resumen += `\nel color: ${colores[i]} no es un color del arcoiris`
        }

    }

    return resumen;
}

console.log(arcoiris(["Amarillo","Negro","Verde","Violeta","Marron","Rojo"]))