import ramen from "./assets/2148678746.jpg";
import sushi from "./assets/2148348187.jpg"
import createSection from "./index.js"; 

function loadAbout() {
    const about = createSection("about");

    const aboutSection = about.section; 
    const aboutTitle = about.sectionTitle; 
    const aboutText = about.sectionText; 
    const aboutImage = about.sectionImage; 

    const imageDiv1 = document.createElement("div"); 
    imageDiv1.classList.add("about-image-item");

    const ramenImage = document.createElement("img");
    ramenImage.src = ramen; 
    ramenImage.alt = "ramen";

    const imageDiv2 = document.createElement("div"); 
    imageDiv2.classList.add("about-image-item");

    const sushiImage = document.createElement("img");
    sushiImage.src = sushi; 
    sushiImage.alt = "sushi";
    
    const aboutSubtitle = document.createElement("h2"); 
    aboutSubtitle.textContent = "WASHOKUYA"; 
    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "Washokuya is a special restaurant newly opened by Chef Nabe, where the elegance and simplicity of Japanese cuisine are combined with a modern touch. Our chef's unique ramen recipe has quickly become one of the restaurant's favorites. Prepared with hours of meticulous preparation and secret touches, this ramen is designed to offer an unforgettable taste experience. In our sushi and sashimi, prepared using the finest fresh ingredients, freshness and simplicity take centre stage. With every bite, you will savour the taste of the sea and discover the beauty of Japanese cuisine. Our aim is not merely to serve food; it is to take you on a journey into the flavorful world of Japan. With our warm atmosphere and attentive service, we want every visit to be special and memorable. We look forward to having you as our guest and serving you our best dishes.";

    imageDiv1.append(ramenImage);
    imageDiv2.append(sushiImage);
    aboutImage.append(imageDiv1, imageDiv2);
    aboutText.append(aboutSubtitle, aboutParagraph);
    aboutSection.append(aboutTitle, aboutText, aboutImage);

    return aboutSection;
}

export default loadAbout