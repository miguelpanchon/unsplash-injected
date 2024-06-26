import './InputButton.css';
import { PhotoPaintRandom } from '../../MainPhotos/PhotoPaintRandom';
import { PhotoPaint } from '../../MainPhotos/PhotoPaint';
import { PhotoSearch } from '../../PhotoSearch/PhotoSearch'


export function InputButton() {
    // Create the input element

    console.log("entra en InputButton");
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.placeholder = "Search images...";
    inputElement.className = "search-input";
    inputElement.value = "";


    // Create the button element
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Search";
    buttonElement.className = "search-button";

    // Create a container element to hold the input and button
    const containerElement = document.createElement("div");
    containerElement.classList.add("input-button-container");

    // Append the input and button to the container
    containerElement.appendChild(inputElement);
    containerElement.appendChild(buttonElement);

    // Append the container to the DOM
    const container = document.getElementById("header");
    container.appendChild(containerElement);



    // Add event listener for button click
    buttonElement.addEventListener("click", function () {
        console.log("clidk on the button")

        const textSearch = inputElement.value.toString().trim();
        console.log("estoy buscando: " + textSearch);
        if (textSearch.trim() !== "") {
            // Perform search and paint images
            PhotoPaint(textSearch);
        } else {
            console.log("Please enter a search term.");
        }

    });


    // Event listener for the input box
    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const textSearch = inputElement.value.toString().trim();
            console.log("estoy buscando: " + textSearch);
            if (textSearch.trim() !== "") {
                // Perform search and paint images
                PhotoPaint(textSearch);
            } else {
                console.log("Please enter a search term.");
            }
        }
    });

}
