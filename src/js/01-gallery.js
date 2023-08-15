import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryEl = document.querySelector('.gallery')

const item = galleryItems.map(({preview, original, description})=>`
<li class="gallery__item" style ="list-style : none;">
<a class="gallery__link" href="${original}">
  <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}">
</a>
</li>`).join(''); 

galleryEl.insertAdjacentHTML('beforeend',item);

let lightbox = new SimpleLightbox('.gallery a', {  
  captionsData: "alt",
captionDelay: 250, 
})
