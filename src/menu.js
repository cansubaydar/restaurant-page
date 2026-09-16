import ramen from "./assets/2148678741.jpg";
import sushi from "./assets/2148631177.jpg";
import sashimi from "./assets/tadahiro-higuchi-6ZLJkVvqcB4-unsplash.jpg";
import set from "./assets/tracy-xu-LnSwmV4c558-unsplash.jpg";
import createSection from "./index.js";

const menuList = {
    "Ramen": [
        { image: ramen, name: "Miso Ramen", description: "Fresh ramen noodles, miso, ramen egg, bean sprouts", price: "¥400" },
        { image: ramen, name: "Tonkotsu Ramen", description: "Fresh ramen noodles, chashu, kikurage, spring onion, bean sprouts, garlic, sesame seeds", price: "¥400"},
        { image: ramen, name: "Tantanmen", description: "Fresh ramen noodles, tahini and chicken mince, leafy green, chicken stock, spice", price: "¥400"},
        { image: ramen, name: "Chef’s Special Ramen", description: "Fresh ramen noodles, special soup broth and sauce, egg, bean sprouts, bonita flakes, shiitake mushrooms", price: "¥400"}
    ], 
    "Sushi": [
        { image: sushi, name: "Kanpyo maki", description: "Rice, dried bottle gourd, roasted seaweed, vinegar, sugar", price: "¥500"},
        { image: sushi, name: "Eho maki", description: "Rice, thick omelet, cucumber, mitsuba (Japanese parsley), conger eel, dried shiitake mushrooms, dried gourd strips, shrimp, eel kabayaki (grilled in soy sauce), seaweed", price: "¥500"},
        { image: sushi, name: "Kappa maki", description: "Rice, cucumber, vinegar, sugar", price: "¥500"},
        { image: sushi, name: "Inari Zushi", description: "Fried thin tofu, rice", price: "¥500"}
    ], 
    "Sashimi-Nigiri Sushi": [
        { image: sashimi, name: "Maguro", description: "Tuna", price: "¥500"},
        { image: sashimi, name: "Suzuki", description: "Sea bass", price: "¥500"},
        { image: sashimi, name: "Unagi", description: "Rice, eel", price: "¥500"},
        { image: sashimi, name: "Tamago", description: "Rice, Japanese omelette, nori", price: "¥500"},
        { image: sashimi, name: "Ebi", description: "Rice, shrimp, nori", price: "¥500"}
    ], 
    "Set Menu": [
        { image: set, name: "Set Menu 1", description: "Sushi and sashimi set", price: "¥1000"},
        { image: set, name: "Set Menu 2", description: "Ramen, nigiri sushi set", price: "¥1000"},
        { image: set, name: "Set Menu 2", description: "Ramen, sushi, sashimi set", price: "¥1500"}
    ]
}

function menuItem(name, description, price) {
    const foodList = document.createElement("ul");
    const foodListItem = document.createElement("li");
    const foodSpan = document.createElement("span"); 
    const foodName = document.createElement("b");
    const foodDescription = document.createElement("i");
    const foodPrice = document.createElement("b");

    foodName.textContent = name; 
    foodDescription.textContent = description; 
    foodPrice.textContent = price; 

    foodSpan.append(foodName, foodDescription)
    foodListItem.append(foodSpan, foodPrice);
    foodList.append(foodListItem); 

    return foodList;
}

function loadMenu() { 
    const menu = createSection("menu"); 
    const menuSection = menu.section; 
    const menuTitle = menu.sectionTitle; 

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    Object.keys(menuList).forEach(food => {
        const foodsContainer = document.createElement("div");
        foodsContainer.classList.add("food-container"); 

        const foodsDiv = document.createElement("div");
        foodsDiv.classList.add("food-list")
        const foodsTitle = document.createElement("h2");
        const foodsImageDiv = document.createElement("div"); 
        foodsImageDiv.classList.add("food-image");
        const foodsImage = document.createElement("img");
        
        foodsTitle.textContent = food; 
        foodsDiv.append(foodsTitle);
        
        for(let i = 0; i < menuList[food].length; i++) {
            let menu = menuItem(menuList[food][i].name, menuList[food][i].description, menuList[food][i].price
            );
            foodsImage.src = menuList[food][i].image;
            foodsImageDiv.append(foodsImage);
            
            foodsDiv.append(menu);
        }
        foodsContainer.append(foodsImageDiv, foodsDiv);
        menuContainer.append(foodsContainer);
        return menuContainer;
    });

    menuSection.append(menuTitle, menuContainer);
    return menuSection;
}

export default loadMenu; 