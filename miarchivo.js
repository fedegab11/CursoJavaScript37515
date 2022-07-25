const PULGADA = 2.54;

alert("Guía de tallas para saber cómo medir el pie:\n 1-Para medir la longitud en cm de sus pies correctamente, coloca su pie contra la pared sobre una hoja de papel. Recuerda siempre descalzo y de pie.\n 2-Sitúa bien el talón contra la pared asegurándote que tiene la planta del pie totalmente plana y recta.\n 3-Haz una marca donde finaliza el dedo más largo.\n 4-Mide en cm la distancia desde el final del papel hasta la marca del dedo, en línea recta.");


let cm = parseInt(prompt("Ingrese la medida en cm: "));
    while(isNaN(cm)) {
        cm= prompt("La medida ingresada no es válida, intente de nuevo");
    } 
let talleUsa = parseInt((cm - 1) / PULGADA);
let talleArg = (cm / 2) * 3;
    
let genero = prompt("ingrese un género");
while(genero.toLowerCase() != 'femenino' && genero.toLowerCase() != 'masculino') {
genero = prompt("Debe seleccionar Masculino o Femenino. Por favor vuelva a itentar");
}
 
    if(genero === "femenino"){
        talleUsa= parseInt(((cm - 1)/ PULGADA)-2);
    }
    
        

confirm(`Tu número de calzado para ${genero} es:\n Talle Arg ${talleArg}\n Talle USA ${talleUsa}`);