let letsPlay = () => {

    let trys = 4;
    let correctAnswer = 'Jeronimo Luis de Cabrera';
    let correct = false;
    let answer;
    
        while (trys > 0 && correct != true) {
            trys--;
            answer = prompt("¿Quien fue el fundador de la provincia de cordoba? \n Ingrese la respuesta");
            if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
                alert( `Felicidades, acertaste! Ganaste 10% de descuento en tu proxima reserva.`);
                correct = true;
            } else if (trys == 3) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: su nombre empieza con J`);
            } else if (trys == 2) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Nació en 1528 en la ciudad de Sevilla  \n Ingrese la nueva respuesta:`);
            } else if (trys == 1) {
                alert(`Incorrecto, te queda ${trys} intento, pista: Fue un militar, explorador, conquistador, colonizador, comendador, adelantado interino1​ y gobernante español en Sudamérica.  \n Ingrese la nueva respuesta`);
            } else if (trys == 0) {
               alert(`Perdiste! La respuesta correcta era ${correctAnswer}.`);
            }
        }        
    }

function validateForm(){
    alert("Gracias por realizar su reserva!");
}