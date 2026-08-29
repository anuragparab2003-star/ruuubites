/* =========================================
   SELECT ELEMENTS
========================================= */

const header = document.querySelector(".header");

const mobileMenu = document.getElementById("mobileMenu");

const navLinks = document.getElementById("navLinks");

const topBtn = document.getElementById("topBtn");

const openSearch = document.getElementById("openSearch");

const closeSearch = document.getElementById("closeSearch");

const searchPopup = document.getElementById("searchPopup");

const searchRecipeBtn = document.getElementById("searchRecipeBtn");

const recipeSearch = document.getElementById("recipeSearch");

const newsletterForm = document.getElementById("newsletterForm");

const contactForm = document.getElementById("contactForm");


/* =========================================
   MOBILE MENU
========================================= */

mobileMenu.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});


/* =========================================
   HEADER SCROLL
========================================= */

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* =========================================
   BACK TO TOP
========================================= */

window.addEventListener("scroll", function(){

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* =========================================
   SEARCH POPUP
========================================= */

openSearch.addEventListener("click", function(){

    searchPopup.classList.add("active");

    recipeSearch.focus();

});


closeSearch.addEventListener("click", function(){

    searchPopup.classList.remove("active");

});


searchPopup.addEventListener("click", function(event){

    if(event.target === searchPopup){

        searchPopup.classList.remove("active");

    }

});


/* =========================================
   RECIPE SEARCH
========================================= */

function searchRecipe(){

    const recipe = recipeSearch.value
        .toLowerCase()
        .trim();


    const recipes = {

        "breakfast":"Breakfast Category",

        "poha":"Poha Recipe",

        "idli":"Idli Recipe",

        "dosa":"Dosa Recipe",

        "paneer":"Paneer Masala",

        "butter chicken":"Butter Chicken",

        "lunch":"Lunch Category",

        "dinner":"Dinner Category",

        "snacks":"Snacks Category",

        "desserts":"Desserts Category",

        "drinks":"Drinks Category"

    };


    if(recipe === ""){

        alert("Please enter a recipe name.");

        return;

    }


    if(recipes[recipe]){

        alert("You searched for: " + recipes[recipe]);

    }else{

        alert(
            "Recipe not found! Try: Poha, Idli, Dosa, Paneer or Butter Chicken."
        );

    }

}


searchRecipeBtn.addEventListener("click", searchRecipe);


/* Search using Enter key */

recipeSearch.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchRecipe();

    }

});


/* =========================================
   NEWSLETTER
========================================= */

newsletterForm.addEventListener("submit", function(event){

    event.preventDefault();

    const emailInput =
        document.getElementById("emailInput");


    alert(
        "Thank you! You have successfully subscribed to Ruuu Bitess. 🎉"
    );


    emailInput.value = "";

});


/* =========================================
   CONTACT FORM
========================================= */

contactForm.addEventListener("submit", function(event){

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you " + name +
        "! Your message has been received successfully."
    );


    contactForm.reset();

});