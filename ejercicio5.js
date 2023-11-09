// Solicitamos el primer número al usuario. Solo tenemos en cuenta que sea un valor numérico pero aceptamos decimales, negativos y positivos
let primervalor = parseFloat(prompt("Introduzca el primer número"));
while(isNaN(primervalor)){
    primervalor = parseFloat(prompt("Valor Incorrecto. El valor debe ser un número.\nIntroduzca el primer número"));
}

// De igual manera solicitamos el segundo número
let segundovalor = parseFloat(prompt("Introduzca el segundo número"));
while(isNaN(segundovalor)){
    segundovalor = parseFloat(prompt("Valor Incorrecto. El valor debe ser un número.\nIntroduzca el segundo número"));
}

// Solicitamos el tipo de operacion al usuario y validamos para asegurarnos de que es correcta la opción escogida
let operacion = parseInt(prompt("Introduzca la operación a realizar\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));
while(isNaN(operacion)){
    operacion = parseInt(prompt("Opción Incorrecta\nIntroduzca la operación a realizar\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));
}

// Comprobamos la opcion escogida y se realiza la operación y acto seguido se muestra por pantalla
switch(operacion){
    case 1:
        document.write("<b>SUMA:</b><br>" + primervalor + " + " + segundovalor + " = <b>" + (primervalor + segundovalor) + "</b>");
        break;
    case 2:
        document.write("<b>RESTA:</b><br>" + primervalor + " - " + segundovalor + " = <b>" + (primervalor - segundovalor) + "</b>");
        break;
    case 3:
        document.write("<b>MULTIPLICACIÓN:</b><br>" + primervalor + " x " + segundovalor + " = <b>" + (primervalor * segundovalor) + "</b>");
        break;
    case 4:
        document.write("<b>DIVISIÓN:</b><br>" + primervalor + " * " + segundovalor + " = <b>" + (primervalor / segundovalor) + "</b>");
        break;
    default:
}