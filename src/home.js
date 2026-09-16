import img1 from "./assets/ruben-mavarez-dH3fMfGWcss-unsplash.jpg";
import img2 from "./assets/ramen-bowl.svg";
import createSection from "./index.js"; 

function loadHome() {
    const home = createSection("home");
    const homeSection = home.section;
    const homeText = home.sectionText;
    const homeImage = home.sectionImage; 

    homeSection.classList.add("active");
    
    const h1 = document.createElement("h1");
    const span  = document.createElement("span");

    h1.textContent = "Welcome to ";
    span.textContent = "JAPANESE RESTAURANT";

    const p = document.createElement("p");
    p.textContent = "The most delicious dishes of Japanese cuisine are at Washokuya. ";

    const button = document.createElement("button");
    button.textContent = "Make a Reservation";
    button.setAttribute("data-tab-target", "#contact");
    const openingHours = document.createElement("div"); 
    openingHours.classList.add("open-hours");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.textContent = "Opening Hours: ";
    p2.textContent = "[Mon-Sat] 12:00-21:00 ";
    p3.textContent = "[Sat] 12:00-22:00";
    
    const imageDiv1 = document.createElement("div");
    imageDiv1.classList.add("home-image-item");

    const image1 = document.createElement("img");
    image1.src = img1
    image1.alt = "restaurant";
    
    const imageDiv2 = document.createElement("div");
    imageDiv2.classList.add("home-image-item");

    const image2 =  document.createElement("img");
    image2.src = img2;
    image2.alt = "ramen bowl";

    
    openingHours.append(p1, p2, p3);
    h1.append(span); 
    homeText.append(h1, p, button, openingHours);
    imageDiv1.append(image1);
    imageDiv2.append(image2);
    homeImage.append(imageDiv1, imageDiv2);
    homeSection.append(homeText, homeImage);
    return homeSection;
}

export default loadHome;