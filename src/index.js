import "./styles.css";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import logo1 from "./assets/restaurant-logo.svg";
import logo2 from "./assets/restaurant-logo-2.svg"; 

const year = document.getElementById("year"); 
year.textContent = new Date().getFullYear(); 

function createSection (name) { 
    const section = document.createElement("div");
    section.id = name;
    section.setAttribute("data-tab-content", "");
    section.classList.add(`${name}-section`);

    const sectionText = document.createElement("div");
    const sectionImage =  document.createElement("div");
    sectionText.classList.add(`${name}-text`);
    sectionImage.classList.add(`${name}-image`);

    const sectionTitle = document.createElement("h1"); 
    sectionTitle.classList.add("title");
    sectionTitle.textContent = `${name}`.toUpperCase();

    return { section, sectionTitle, sectionImage, sectionText } ;
}

export default createSection;

const createContent = () => {
    const contentDiv = document.getElementById('content');
    
    contentDiv.append(loadHome(), loadAbout(), loadMenu(), loadContact());
};

createContent();   

const tabs = document.querySelectorAll('[data-tab-target]'); 
const tabContents = document.querySelectorAll("[data-tab-content]");

let body = document.querySelector("body");
const buttons = document.querySelectorAll("nav button");

tabs.forEach(tab => { 
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active");
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        target.classList.add("active"); 

        let logoImg = document.querySelector(".logo img"); 
        const logoTitle = document.querySelector(".logo h1"); 

        if(target.id === "home" || target.id === "menu") {
            body.style.background = "#FAF8CE";
            logoImg.src = logo1;
            logoTitle.style.color = "#D45546";
            buttons.forEach(button => button.style.color = "#D45546");
        } else if (target.id === "about" || target.id === "contact") {
            body.style.background = "#D45546";
            logoImg.src = logo2;
            logoTitle.style.color = "#FAF8CE";
            buttons.forEach(button => button.style.color = "#FAF8CE");
        } 
    })
})