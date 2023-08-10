
// import "simplelightbox/dist/simple-lightbox.js";
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', handlelClick);

function handlelClick (e){
 e.preventDefault();
}

const listItem = addListItem(galleryItems);
addItemToGallery(listItem)

function addListItem(arr){
return arr.map(({preview, original, description})=>`
<li class="gallery__item" style ="list-style : none;">
<a class="gallery__link" href="${original}">
  <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}">
</a>
</li>`).join(''); 
}



function addItemToGallery(item){
return gallery.insertAdjacentHTML('beforeend', item)
}

let lightbox = new SimpleLightbox('.gallery a', {  
  captionsData: "alt",
captionDelay: 250, 
})

