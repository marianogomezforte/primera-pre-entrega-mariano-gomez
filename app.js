/* Shift + alt + A */

// Variables
let nota; // recibe la nota que ingresa el usuario
let contadorNota = 0; // contar la cantidad de notas para el promedio, se inicializa en cero para verificar el primer ingreso, (en caso de que el usuario seleccione una opcion distina a ingresar nota)
let suma = 0; // suma las notas para calcular el promedio, se inicializa en cero para poder sumarse a si misma cuando ingrese la primera nota y luego poder hacer el incremento.
let promedio; // para guardar el promedio
let mayor; // guarda la mayor nota ingresada
let menor; // guarda la menor nota ingresada
let opcionMenu; // para guardar la opcion del menu
let opcionNota; // para guardar la opcion de seguir ingresando notas

alert('Bienvenido al Calculador de Promedios!');

do{
    //menu donde pido la opcion:
    opcionMenu = prompt('Seleccione numero de opción:' +'\n'+ 
    '1 - Ingresar una nota' +'\n'+
    '2 - Calcular promedio' +'\n'+
    '3 - Mostrar mayor nota' +'\n'+
    '4 - Mostrar menor nota' +'\n'+ 
    '5 - Salir');

    switch(opcionMenu) // tareas a realizar segun la opcion ingresada
    {
        case '1': 
            nota = Number(prompt('Ingrese nota de 0 a 10'));
            if(nota >= 0 && nota < 11){ //verifico que la nota sea de 0 a 10

                if(contadorNota == 0){ // compruebo que sea el primer ingreso para guardar el mayor y menor para las proximas comparaciones
                    mayor = nota;
                    menor = nota;
                }

                ingresarNota(nota);
                
            } else {
                alert('Por favor ingrese una nota valida, de 0 a 10');
            }
            break;

        case '2':
            if(contadorNota == 0){ // compruebo si no ingreso alguna nota para avisar que no se puede realizar el promedio.
                alert('No se ingreso ninguna nota, no se puede calcular el promedio');
            } else {
                promedio = suma / contadorNota;

                if(contadorNota == 1){ // si ingresa solo un numero cambio el mensaje para que sea mas prolijo
                    alert(`Se ingreso ${contadorNota} nota,` +'\n'+ 
                    `El promedio es: ${promedio}`);
                } else {
                    alert(`Se ingresaron ${contadorNota} notas,` +'\n'+ 
                    `El promedio es: ${promedio}`);
                }
            }
            break;
        
        case '3':
            if(contadorNota == 0){ // compruebo si ingreso alguna nota para avisar
                alert('No se ingreso ninguna nota');
            } else {
                alert('La mayor nota registrada es: ' + mayor);
            }
            break;

        case '4':
            if(contadorNota == 0){ // compruebo si ingreso alguna nota para avisar
                alert('No se ingreso ninguna nota');
            } else {
            alert('La menor nota registrada es: ' + menor);
            }
            break;

        case '5': // salir
            opcionMenu = '5';
            break;

        default: // en caso de que se ingrese cualquier caracter que no corresponda a una opcion
            alert('Por favor ingrese una opcion valida');
            break;
    }

} while (opcionMenu != '5');


/* Cumple el proposito de recibir la nota y dar la opcion de seguir ingresando sin salir al menu principal*/
function ingresarNota(nota){ 
    do{
        suma += nota;
        contadorNota ++;
        calculoMayorMenor(nota); // ver descripcion en la funcion

        do{
            // da opcion de ingresar nueva nota y aseguro de pasar a Minusculas la respuesta para que reconozca 'S', 's', 'N' y 'n'.
            opcionNota = prompt('Desea ingresar otra nota? s/n').toLowerCase(); 

            if(opcionNota != 's' && opcionNota != 'n'){ // compruebo que la opcion sea valida
                alert('Por favor ingrese una opcion valida (s/n)');
            }

            if(opcionNota == 's'){ // compruebo que la opcion es ingresar una nueva nota y comienzo el circuito nuevamente llamando a la misma funcion
                nota = Number(prompt('Ingrese nota de 0 a 10'));
                if(nota >= 0 && nota < 11){
                    ingresarNota(nota);
                } else {
                    alert('Por favor ingrese una nota valida, de 0 a 10');
                }
            }

        } while(opcionNota != 's' && opcionNota != 'n');

    } while(opcionNota == 's');
}

/* Cumple el proposito de almacenar la nota mayor y la nota menor que se haya ingresado.
previa verificacion de que en el primer ingreso valide que la primer nota registrada */
function calculoMayorMenor(nota){
    if (nota > mayor){
        mayor = nota;
    } else if(nota < menor){
        menor = nota;
    }
}
