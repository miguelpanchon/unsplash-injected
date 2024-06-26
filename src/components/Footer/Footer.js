
// footer.js

// Import the CSS file
import './Footer.css';
import { paintLogo1 } from '../Header/Logo/Logo1';

// Define the function to paint the footer
export function paintFooter() {
    // Get the footer element
    const footer = document.getElementById("footer");

    //insert logo 
    paintLogo1();



    // Create an unordered list element
    const ul = document.createElement("ul");
    ul.className = "ul";

    // Define the list items
    const listItems = [

        // {
        //     text: "Readme",
        //     link: "https://github.com/miguelpanchon/Pinterest/blob/main/README.md"
        // },
        {
            text: "GitHub",
            link: "https://github.com/miguelpanchon/Pinterest"
        },
        {
            text: "Portfolio",
            link: "https://portfolio-mps.netlify.app"
        },
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/miguelpanchon/"
        }
    ];

    listItems.className = "li";
    // Add list items to the unordered list
    listItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item.text;
        a.href = item.link;
        a.target = "_blank"; // Open link in a new tab
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the unordered list to the footer
    footer.appendChild(ul);
}
