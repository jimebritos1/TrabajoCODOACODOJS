

/*function resumen(){

    console.log(categoria.value)
    console.log(categoriaEntradas.value)
    cantidadEntradas.value


}
*/
// FUNCION TICKETPRECIO //

function ticketPrecio() {
// console.log() ;//
// Uso el preventDefault() para que no se refresque la página //

//evento.preventDeFault();//

// leemos el valor del input cantidad

let ticketCantidad = document.querySelector(".cantidad");

if (Number(ticketCantidad.value)) {

    let ticketCategoria = document.querySelector (".estudiante");
    let totalAPagar; 

    switch(ticketCategoria.value){

        case "Estudiante":{
            totalAPagar = 200 * ticketCantidad.value * 0.2;
            break;
        }

        case "Trainee":{
            totalAPagar = 200 * ticketCantidad.value * 0.50;
            break;

        }


        case "Junior":{
             totalAPagar = 200 * ticketCantidad.value * 0.85;
             break;   

        }

    }

    const totalPago1=  totalAPagar;
    
     document.querySelector(".totalPago").textContent = "Total a Pagar:$ "+ (totalPago1);


}

}

/* Reseteo del contador --- BORRAR */

function reset () {
     
    valorFinal = ticketPrecio()
    valorFinal = 0;

    document.querySelector(".totalPago").textContent = "Total a Pagar:$ "+ (valorFinal );
   
}




/*Valor de las Cards*/ 
function ticketEstudiante() {

totalAPagar = 200 * 1 * 0.2;
const totalPago1=  totalAPagar;
        
document.querySelector(".totalPago").textContent = "Total a Pagar:$ "+ (totalPago1);

}

function ticketTrainee() {

    totalAPagar = 200 * 1 * 0.50;
    const totalPago1=  totalAPagar;
            
    document.querySelector(".totalPago").textContent = "Total a Pagar:$ "+ (totalPago1);
    
}
    
function ticketJunior() {

    totalAPagar = 200 *1 * 0.85;
        const totalPago1=  totalAPagar;
                
     document.querySelector(".totalPago").textContent = "Total a Pagar:$ "+ (totalPago1);
    
    
}
        
 
    
   
    
