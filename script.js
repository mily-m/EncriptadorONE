const textArea = document.querySelector(".mensaje");
const mensaje = document.querySelector(".respuesta");
const btnCopiar = document.querySelector(".btncopiar");
const placeholder = document.querySelector(".placeholder");
const placeholderb = document.querySelector(".placeholderb");
const image = document.querySelector(".image");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.classList.remove("hidden");
    btnCopiar.classList.remove("hidden");
    
    // Ocultar elementos de placeholder
    placeholder.style.display = "none";
    placeholderb.style.display = "none";
    image.style.display = "none";
  }

  // La letra "e" es convertida para "enter"
  // La letra "i" es convertida para "imes"
  // La letra "a" es convertida para "ai"
  // La letra "o" es convertida para "ober"
  // La letra "u" es convertida para "ufat"

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensaje.value);
  textArea.value = textoDesencriptado;
  mensaje.value = "";
  textArea.style.backgroundImage = "none";
  textArea.classList.remove("hidden");
  btnCopiar.classList.remove("hidden");
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    
    mensaje.classList.add("hidden");
    btnCopiar.classList.add("hidden");
    placeholder.style.display = "block";
    placeholderb.style.display = "block";
  }
  
  btnCopiar.addEventListener("click", copiar);