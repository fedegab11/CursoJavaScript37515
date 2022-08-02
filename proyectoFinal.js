class calzado {


    constructor (marca, modelo,precio,color, stock){


        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color ;
        this.stock = stock;    
    }

    mostrarDescripcion(){


        return this.marca + this.modelo + " $ "+ this.precio ;
    }




}
let arreglo_calzado = new Array();
arreglo_calzado.push(new calzado("ADIDAS" , "D.O.N ISSUE 3 'SAY CHEESE'", 38500,"Azul", 3)); 
arreglo_calzado.push(new calzado("NIKE" ,"KD 14 'KY-D'",39000,"Negro", 5));
arreglo_calzado.push(new calzado("ADIDAS", "DAME 8 '4TH QUARTER KO'",36000,"Verde Lima", 0));
arreglo_calzado.push(new calzado("NIKE", "ZOOM FREAK 3 'FREEZING TIME'", 41000,"Blanco", 1));
arreglo_calzado.push(new calzado("JORDAN", "ZOOM SEPARATE 'MAVS'",42600,"Azul", 3));
arreglo_calzado.push(new calzado("NIKE","KYRIE 8 'FIRE & ICE'",40000,"Negro", 4));
arreglo_calzado.push(new calzado("NEW BALANCE","KAWHI 'POWER SOURCE'",39800,"Naranja", 2));
arreglo_calzado.push(new calzado("UNDER ARMOUR", "Curry 9 Sesame Street 'Count It'",42800,"Negro", 3));
arreglo_calzado.push(new calzado("NIKE", "LEBRON 19 'MINNEAPOLIS LAKERS'",44500,"Blanco", 3));
arreglo_calzado.push(new calzado("JORDAN", "Air Jordan 36 'Black Infrared'",46300,"Negro", 6));
arreglo_calzado.push(new calzado("ADIDAS", "TRAE YOUNG 1 'PIXELS'",37800,"Negro",2 ));
arreglo_calzado.push(new calzado("ADIDAS","HARDEN VOL.6 'HIGHLIGHTER''",39200,"Celeste", 1));

let respuesta = prompt ("Qué quieres hacer? \n A) Ver todos los modelos \n B) Ordenarlos por precio \n C)Buscar por marca \n D) Ver el Stock") ;

if (respuesta == "A"){
    alert ("Modelos: "+ arreglo_calzado.join(" \n "));

}else if (respuesta == "B"){
    productos.sort(function(a, b) {
        var precioA = a.precio;
        var precioB = b.precio;
        if (precioA < precioB) {
          return -1;
        }
        if (precioA > precioB) {
          return 1;
        }    
       
        return 0;
      });
     // alert(productos)

}else if(respuesta == "C"){
    let porMarca = prompt("Ingrese la marca:");
    
    if (porMarca in marca){
        let resultado = calzado.filter(calzado => calzado.marca == porMarca);
        alert("Productos por marca:"/n + resultado);
    }else{
        alert("Lo sentimos, no trabajamos con esa marca. Por favor, ingrese otra marca.");
        return porMarca;
    } 
}else if(respuesta== "D"){
    
}else{
    alert("No ingresaste una opcion válida, intenta de nuevo");
    return;
}

