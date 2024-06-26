import { paintFooter } from "./src/components/Footer/Footer";
import { paintHeader } from "./src/components/Header/Header"


// import { PhotoSearchRandom } from "./src/components/PhotoSearchRandom/PhotoSearchRandom";
import "./style.css";
// import { paintLogo2 } from "./src/components/Header/Logo/Logo2";


startSPA();


async function startSPA() {
  try {

    paintFooter();
    paintHeader();

    // Dynamically import the main photos component
    const { PhotoPaintRandom } = await import(/* webpackChunkName: "main-photos" */ "./src/components/MainPhotos/PhotoPaintRandom");
    PhotoPaintRandom();
  } catch (error) {
    console.error("Error starting the SPA:", error);
    // Optionally show an error message to the user
  }
}

