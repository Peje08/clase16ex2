const boton = document.querySelector('.button');
const input = document.querySelector('.input');
const contenido = document.querySelector('.content');


console.log(input.value)

boton.addEventListener('click', changeContent)

function changeContent(){
    contenido.textContent = '¡Se están tirando con de todo!'
}

