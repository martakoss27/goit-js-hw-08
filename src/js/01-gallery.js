import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
      <a class="gallery__link" href="">
        <img
          class="gallery__image"
          src= "${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);
console.log(gallery);

new SimpleLightbox('.gallery a', {
  animationSpeed: 500,
  captionsData: 'data-alt',
  captionDelay: 250,
  download: 'If you want download this picture please click here...',
  doubleTapZoom: 4,
  maxZoom: 20,
  scrollZoomFactor: 0.1,
});
