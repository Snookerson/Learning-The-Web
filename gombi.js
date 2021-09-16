/* This section is about setting up the dark or light theme by a button press */

/* We get the :root from the CSS */
const root = document.documentElement;

/* We find the button in the HTML by classname so later we can check if the id is "dark" or "light".
This is the way we are gonna know which theme to applie
If id == light  --> apply dark.
If id == dark  --> apply light. */
const themeBtn = document.getElementsByClassName("theme-selector-btn")[0];

/* Creating a clickevent with a pre defind function - which contains the stlyle and ID changes */
themeBtn.addEventListener("click", themeChanger);

function themeChanger() {
    if (themeBtn.id == "darkTheme") {
            root.style.setProperty
            ("--background-color", "hsl(0, 0%, 16%)");
            
            root.style.setProperty
            ("--text-color", "hsla(0, 0%, 100%, 0.9)");
    
            root.style.setProperty
            ("--header-color", "hsl(0, 0%, 9%)");
    
            root.style.setProperty
            ("--btn-color", "hsl(0, 0%, 12%)");
    
            root.style.setProperty
            ("--mobile-btn-color", "hsl(0, 0%, 12%)");
    
            root.style.setProperty
            ("--article-background-color", "hsl(0, 0%, 19%)");

            root.style.setProperty
            ("--btn-theme-background", "hsla(0, 0%, 5%, 0.9)")

            root.style.setProperty
            ("--footer-color", "hsl(0, 0%, 9%)")

            /* Here we find the theme img to change the icon */
            document.getElementById("themeIcon").src = "Images/light theme logo.svg";

            /* Here we find the insta img to change the icon */
            document.getElementById("insta").src = "Images/dark-insta-logo.png";
            
            /* Setting (changing the html) a new id so the button could work multiple times*/
            themeBtn.id = "lightTheme";

        

    } else if (themeBtn.id == "lightTheme") {
        root.style.setProperty
        ("--background-color", "linear-gradient(180deg, rgba(104,141,135,1) 0%, rgba(68,90,112,1) 100%)");
        
        root.style.setProperty
        ("--text-color", "hsla(0, 0%, 5%, 0.9)");

        root.style.setProperty
        ("--header-color", "hsl(171, 15%, 46%)");

        root.style.setProperty
        ("--btn-color", "linear-gradient(180deg, rgba(100,135,130,1) 0%, rgba(126,170,163,1) 100%)");

        root.style.setProperty
        ("--mobile-btn-color", "hsl(171, 15%, 56%)");

        root.style.setProperty
        ("--article-background-color", "hsl(0, 0%, 93%)");

        root.style.setProperty
        ("--btn-theme-background", "hsl(0, 0%, 93%)")

        root.style.setProperty
        ("--footer-color", "hsla(240, 100%, 99%, 0.2)")
        
        document.getElementById("themeIcon").src = "Images/dark theme logo.svg";

        document.getElementById("insta").src = "Images/light-insta-logo.png";

        themeBtn.id = "darkTheme";

    }
}

/* Modal Section ------------------------------------------- */


const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
    openModal(modal);
})

closeModalButton.addEventListener("click", () => {
    closeModal(modal);
})

overlay.addEventListener("click", ( )=> {
    modal.classList.remove("active-modal");
    overlay.classList.remove("active-overlay");
})

function openModal(modal) {
    modal.classList.add("active-modal");
    overlay.classList.add("active-overlay");
}

function closeModal(modal) {
    modal.classList.remove("active-modal");
    overlay.classList.remove("active-overlay");
}
