import { PhotoSearch } from '../PhotoSearch/PhotoSearch';
import './Photos.css';

// Define the paintImages function
export async function PhotoPaint(textSearch) {
    try {
        const inputText = textSearch.toString();
        const photos = await PhotoSearch(inputText);
        const appContainer = document.getElementById("app");

        //clean MainPhotos
        if (appContainer.hasChildNodes()) {
            appContainer.innerHTML = "";
        }
        console.log(`entrando en PhotoPaint: buscando ${textSearch}`);
        photos.forEach(photo => {
            const photoElement = document.createElement("a");
            photoElement.href = photo.links.html;
            photoElement.target = "_blank";
            const imgElement = document.createElement("img");
            imgElement.src = photo.urls.regular;
            imgElement.alt = photo.alt_description;
            imgElement.classList.add("photo");
            photoElement.appendChild(imgElement);
            appContainer.appendChild(photoElement);
        });

        if (photos.length === 0) {
            const noPhotosMessage = document.createElement('p');
            noPhotosMessage.className = "no-photo";
            noPhotosMessage.add
            noPhotosMessage.innerHTML = 'No photos found';
            noPhotosMessage.innerHTML += "<br>Use a different word"
            // Append new paragraph element to appContainer
            appContainer.appendChild(noPhotosMessage);
        }

        return [];

    } catch (error) {
        console.error('Error displaying random photos:', error);
    }


}
