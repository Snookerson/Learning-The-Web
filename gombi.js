


/* Accessing the :root from CCS, so we can give it another style */
const root = document.documentElement;
const darkThemeBtn = document.getElementById("darkTheme");
const lightThemeBtn = document.getElementById("lightTheme");


/* Set up dark theme */
if (darkThemeBtn != null) {
    darkThemeBtn.addEventListener("click", () => {
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
        
        /* Next steps
            - change button elements ID to lightTheme
            - change img element src to the light icon
                */

    })
    } else  {

    /* Set up light theme */
            lightThemeBtn.addEventListener("click", () => {
                root.style.setProperty
                ("--background-color", "linear-gradient(180deg, rgba(104,141,135,1) 0%, rgba(68,90,112,1) 100%);");
                
                root.style.setProperty
                ("--text-color", "hsla(0, 0%, 5%, 0.9)");

                root.style.setProperty
                ("--header-color", "hsl(171, 15%, 46%)");

                root.style.setProperty
                ("--btn-color", "linear-gradient(180deg, rgba(100,135,130,1) 0%, rgba(126,170,163,1) 100%);");

                root.style.setProperty
                ("--mobile-btn-color", "hsl(171, 15%, 56%)");

                root.style.setProperty
                ("--article-background-color", "hsl(0, 0%, 93%)");
                
            })
    }