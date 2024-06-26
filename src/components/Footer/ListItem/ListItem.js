import './ListItem.css';
// ListItem.js

// Define the function to create a list item
export function createListItem(text, link) {
    // Create a list item element
    const li = document.createElement("li");

    // Create an anchor element
    const a = document.createElement("a");
    a.href = link; // Set the href attribute to the provided link
    a.textContent = text; // Set the text content of the anchor element

    // Append the anchor element to the list item
    li.appendChild(a);

    // Return the created list item
    return li;
}
