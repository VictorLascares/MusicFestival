const galleryImages = document.querySelector('.gallery-images');
const html = document.querySelector('html');


document.addEventListener('DOMContentLoaded', () => {
    createGallery();
})


function createGallery() {
    if(html.classList.contains('webp')) {
        for (let i = 1; i <= 12; i++) {
            const image = document.createElement('IMG');
            image.src = `build/img/thumb/${i}.webp`;
            const list = document.createElement('LI');
            list.appendChild(image)
            galleryImages.appendChild(list);
        }
    } else {
        for (let i = 1; i <= 12; i++) {
            const image = document.createElement('IMG');
            image.src = `build/img/thumb/${i}.jpg`;
            const list = document.createElement('LI');
            list.appendChild(image)
            galleryImages.appendChild(list);
        }
    } 
}