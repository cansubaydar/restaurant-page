import sashimi from "./assets/blackieshoot-FWgqjbiklbc-unsplash.jpg";
import createSection from "./index.js"; 

function contactItem(info, text) {
    const contactTextItem = document.createElement("p");
    contactTextItem.textContent = text;

    const contactInfo = document.createElement("span"); 
    contactInfo.textContent = info; 

    (info.length > 1) ? contactTextItem.prepend(contactInfo) :
                        contactTextItem.textContent = text;
    
    return contactTextItem;
}

function loadContact() {
    const contact = createSection("contact");

    const contactSection = contact.section; 
    const contactTitle = contact.sectionTitle; 
    const contactText = contact.sectionText; 
    const contactImage = contact.sectionImage; 

    const contactSubtitle = document.createElement("h2");
    contactSubtitle.textContent = "Washokuya";
    
    const item1 = contactItem(" ", ("You can make a reservation by calling the number below during our opening hours, or contact us via email at any time. " + "\n" +  
                                "We look forward to welcoming you to our restaurant. Book your table now. "));
    const item2 = contactItem("Tel: ", "+810123456789");
    const item3 = contactItem("Mail: ", "info@restaurantname.com");
    const item4 = contactItem("Address: ", "Shimokitazawa, Setagaya, Tokyo, Japan");
    const item5 = contactItem("Opening Hours: ", ("\n" + "Monday - Friday: 12PM - 9PM" + "\n" + "Saturday: 12PM - 10PM")); 
    
    const allItem = [item1, item2, item3, item4, item5]; 

    const sashimiImage = document.createElement("img");
    sashimiImage.src = sashimi; 
    sashimiImage.alt = "sashimi";

    contactImage.append(sashimiImage)
    contactText.append(contactSubtitle);
    allItem.forEach(item => contactText.append(item)); 
    contactSection.append(contactTitle, contactImage, contactText);
    return contactSection;
}

export default loadContact