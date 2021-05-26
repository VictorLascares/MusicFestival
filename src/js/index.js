const galleryImages = document.querySelector('.gallery-images');
const html = document.querySelector('html');
let webp; 

document.addEventListener('DOMContentLoaded', () => {
    createGallery();
}) 

function createGallery() {
    webp = html.classList.contains('webp');
    if(webp) {
        for (let i = 1; i <= 12; i++) {
            const image = document.createElement('IMG');
            image.src = `build/img/thumb/${i}.webp`;
            image.dataset.imageId = i;
            // Funcion mostrar imagen
            image.onclick = showImage;
            const list = document.createElement('LI');
            list.appendChild(image)
            galleryImages.appendChild(list);
        } 
    } else {
        for (let i = 1; i <= 12; i++) {
            const image = document.createElement('IMG');
            image.src = `build/img/thumb/${i}.jpg`;
            image.onclick = showImage;
            const list = document.createElement('LI');
            list.appendChild(image)
            galleryImages.appendChild(list);
        }
    } 
}

function showImage(e) {
    let typeOfImage;
    if (webp) {
        typeOfImage = '.webp';
    } else {
        typeOfImage = '.jpg';
    }
    const id = parseInt( e.target.dataset.imageId );
    // Generar la imagen
    const image = document.createElement('IMG');
    image.src = `build/img/grande/${id}${typeOfImage}`

    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fix-body');
    }
    // Boton para cerrar la imagen
    const closeImage = document.createElement('P');
    closeImage.textContent = 'X';
    closeImage.classList.add('btn-close');

    // cerrar imagen
    closeImage.onclick = function() {
        overlay.remove();
        body.classList.remove('fix-body');
    }
    overlay.appendChild(closeImage);

    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fix-body')
}