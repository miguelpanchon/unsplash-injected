import { PhotoSearchRandom } from '../PhotoSearchRandom/PhotoSearchRandom';
import './Photos.css';

// Define the paintImages function
export async function PhotoPaintRandom() {
    try {
        const photos = await PhotoSearchRandom();
        const appContainer = document.getElementById("app");
        photos.forEach(photo => {
            const photoElement = document.createElement("img");
            photoElement.src = photo.urls.regular;
            photoElement.alt = photo.alt_description;
            photoElement.classList.add("photo");
            appContainer.appendChild(photoElement);
        });
    } catch (error) {
        console.error('Error displaying random photos:', error);
    }
}

