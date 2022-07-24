const pulgada = 2.54;

alert("Guía de tallas para saber cómo medir el pie:\n 1-Para medir la longitud en cm de sus pies correctamente, coloca su pie contra la pared sobre una hoja de papel. Recuerda siempre descalzo y de pie.\n 2-Sitúa bien el talón contra la pared asegurándote que tiene la planta del pie totalmente plana y recta.\n 3-Haz una marca donde finaliza el dedo más largo.\n 4-Mide en cm la distancia desde el final del papel hasta la marca del dedo, en línea recta.");


let cm = parseInt (prompt("Ingrese la medida en cm: ")){
    if (cm){
        let talleUsa= (cm - 1)/ pulgada;
        let talleArg= (cm / 2) * 3;
    }else{
        alert("La medida ingresada no es válida, intente de nuevo");
        return
    }    
}


 /*
while(genero != "hombre"||"mujer"){

    let genero= prompt ("Ingrese género del calzado: hombre o mujer");
}      {
            alert("Por favor, ingrese el género correcto" )
            return genero
        }

        if (genero === "hombre"){
            ;
            }else if (genero === "mujer"){
            talleUsa= parseInt (((cm - 1)/ pulgada)-2);
            }
    */

        

confirm (`Tu número de calzado para ${genero} es:\n Talle Arg ${talleArg}\n Talle USA ${talleUsa}`);