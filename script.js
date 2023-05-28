

const textArea =document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const btnCopiar = document.getElementById("btnCopiar");
btnCopiar.addEventListener("click", copiarTextoEncriptado);



/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value ="";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i <matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
        
    }

    return stringEncriptado

}

function btnDsencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value ="";

}

function desencriptar(stringDsencriptado){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDsencriptado = stringDsencriptado.toLowerCase()

    for (let i = 0; i <matrizCodigo.length; i++) {
        if(stringDsencriptado.includes(matrizCodigo[i][1])){
            stringDsencriptado = stringDsencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
        
    }

    return stringDsencriptado

}

function copiarTextoEncriptado() {
    mensaje.select();
    document.execCommand("copy");
}

