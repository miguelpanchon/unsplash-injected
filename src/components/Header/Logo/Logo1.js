import './Logo1.css';
export function paintLogo1() {
    console.log("entra en paintLogo1");
    const logoElement = document.createElement("img");
    logoElement.src = "./unsplash.jpg";
    logoElement.alt = "unsplash logo...";
    logoElement.className = "Logo1";

    const clickHandler = (event) => {
        console.log('click hecho sobre logo1');
        // Do something else here
    };

    logoElement.addEventListener('click', clickHandler);

    const container = document.getElementById("footer");
    container.appendChild(logoElement);
}
