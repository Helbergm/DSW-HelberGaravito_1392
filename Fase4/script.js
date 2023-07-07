function ProcesarRespuestas() {
    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let RespuestasCorrectas = ["b", "a", "a", "c", "a"];

    for (let i = 1; i <= total; i++) {
        if (myForm["r" + i].value == null || myForm["r" + i].value == '') {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, responde todas las preguntas',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return false;
        } else {
            if (myForm["r" + i].value === RespuestasCorrectas[i - 1]) {
                puntos++;
            }
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Obtuviste ' + puntos + ' puntos de ' + total + ' posibles';

    Swal.fire({
        title: 'Respuestas procesadas',
        html: resultado.innerHTML,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    return false;
}
