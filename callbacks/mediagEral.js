const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia ( notasSala ) {//Reduce significa reduzir
    const somaDasNotas = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)//Esse 0 é o valor de Acumulador
    const media = somaDasNotas / notasSala.length;
    return media
}
console.log(`Â média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`Â média da sala de JavaScript é ${calculaMedia(salaJS)}`)
console.log(`Â média da sala de Python é ${calculaMedia(salaPython)}`)