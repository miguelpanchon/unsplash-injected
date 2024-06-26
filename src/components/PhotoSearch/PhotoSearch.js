
import { apiKey } from "../../../Config";

const apiKeyParam = apiKey;


export async function PhotoSearch(inputText) {
    const searchTerm = inputText;
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=30&client_id=${apiKeyParam}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log("entrando en photoSearch");
    console.log('API Response:', data);

    if (data && data.results && Array.isArray(data.results)) {
        const photos = data.results;

        console.log(`****Searching for: ${searchTerm}`);
        console.table(photos.map(photo => ({
            // Description: photo.description || "No description",
            // URL: photo.links.html,
            AltText: photo.alt_description
        })));

        return photos;
    } else {
        console.log('Invalid API response:', data);
        return [];
    }
}



// return photos;

//****Photos -> properties are:*****
// id: the unique identifier of the photo
// created_at: the date and time when the photo was created
// updated_at: the date and time when the photo was last updated
// width: the width of the photo
// height: the height of the photo
// color: the dominant color of the photo
// likes: the number of likes for the photo
// liked_by_user: a boolean indicating whether the current user has liked the photo
// urls: an object containing URLs for different sizes of the photo
// links: an object containing links to the photo on Unsplash
// user: an object containing information about the user who uploaded the photo
// description: a description of the photo (optional)
// alt_description: an alternative description of the photo (optional)
