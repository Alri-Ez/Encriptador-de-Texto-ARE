//Función para codificar
function codificar(mensaje){
    let array = mensaje.split("");
    let arraycod = [];
    for (let i = 0; i <= array.length - 1; i++){
        if ((array[i] != 'a') && (array[i] != 'e') && (array[i] != 'i') && (array[i] != 'o') && (array[i] != 'u')){
            arraycod.push(array[i]);
        } else{
            if (array[i] == 'a'){
                arraycod.push('ai');
            }else if (array[i] == 'e'){
                arraycod.push('enter');
            }else if (array[i] == 'i'){
                arraycod.push('imes');
            }else if (array[i] == 'o'){
                arraycod.push('ober');
            }else if (array[i] == 'u'){
                arraycod.push('ufat');
            }
        }
    }
    return arraycod.join('');
}

//Función para decodificar
function decodificar(mensaje){
    let array = mensaje.split("");
    let arraydec = [];
    for (let i = 0; i <= array.length - 1; i++){
        if ((array[i] != 'a') && (array[i] != 'e') && (array[i] != 'i') && (array[i] != 'o') && (array[i] != 'u')){
            arraydec.push(array[i]);
        }else{
            if (array[i] == 'a'){
                arraydec.push('a');
                i+=1;
            }else if (array[i] == 'e'){
                arraydec.push('e');
                i+=4;
            }else if (array[i] == 'i'){
                arraydec.push('i');
                i+=3;
            }else if (array[i] == 'o'){
                arraydec.push('o');
                i+=3;
            }else if (array[i] == 'u'){
                arraydec.push('u');
                i+=3;
            }
        }
    } 
    return arraydec.join('');
}

//Función para ocultar la pantalla principal y poner el resultado
function ocultar(){
    var inicio = document.getElementById('resultado-antes');
    var resultado = document.getElementById('resultado-despues');
    if (inicio.style.display === 'block') {
        resultado.style.display = 'block';
        inicio.style.display = 'none';
        return;
    } else {
        resultado.style.display = 'none';
        inicio.style.display = 'block';
        return;
    }
}

//Función para el texto del resultado
function asignarTextoElemento(elemento, texto) {
    return document.getElementById(elemento).innerHTML = texto;
}

//Función para copiar
function copiar(){
    return navigator.clipboard.writeText(document.getElementById('resultado').innerHTML);
}

//Función para validar que no está vacío el campo de escritura.
function validar(funcion){
    if (document.getElementById("campo_cifrar_descifrar").value.length == 0){
        return asignarTextoElemento('resultado', 'Ningún mensaje fue encontrado');
    }else{
        return funcion;
    }
}

//Función para boton cifrar
function cifrar(){
    ocultar();
    validar(asignarTextoElemento('resultado', codificar(document.getElementById('campo_cifrar_descifrar').value)))
    return;
}

//Función para boton descifrar
function decifrar(){
    ocultar();
    validar(asignarTextoElemento('resultado', decodificar(document.getElementById('campo_cifrar_descifrar').value)));
    return;
}
