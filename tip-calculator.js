const tipButton = document.getElementsByClassName("per-btn");

function allFunction() {
    /* Getting the value from the Bill Total input section | !!onkeyup!! is very importan in HTML attribut----------*/
    const billTotalInput = document.getElementById("billTotalInput"); /* Get the input element */

    let billTotalValue = billTotalInput.value; /* Find its value */
    /* console.log(billTotalValue);  Just for testing */


    if (billTotalValue > 0) {  /* Checks is the number is positive or not */
        /* Make the tip button function ------------------------------------------------------------- */
        const tipButton = document.getElementsByClassName("per-btn"); /* Get the buttons */
                
        for (let i = 0; i < tipButton.length; i++) {
            let button = tipButton[i]; /* Loop through the buttons before listening for clicks */
            button.addEventListener("click", (event) => { 

                let buttonClicked = event.target.id; /* This event.target finds the exact button we clicked and returns the HTML */
                /* console.log("id" + buttonClicked) Just for testing */



                /* Hightlight active button ------------------- */
                /* We go through all the "per-btn" buttons and if it has the active class we remove it  */
                for (let j = 0; j < tipButton.length; j++) {
                    if (tipButton[j].classList.contains("btn-active")) {
                        tipButton[j].classList.remove("btn-active");
                        continue
                    } else {
                        continue;
                    }
                }
                /* We add the active class to the clicked button */
                event.target.classList.add("btn-active");



                /* Lets creat the necesarry variables */
                let tip = null;
                let billTotalAmount = null;
                let roundedBillTotalValue = null;
                let customTip = null;
                
                switch (buttonClicked) {
                    case "5%":
                        tip = 5; /* Tip amount in intiger  */
                        roundedBillTotalValue = getTotalAmount(tip); /* Call a a function - it adds the tip % to the bill total then rounds it to the closest whole number */
                        setInstuctionBack(); /* Change layout */
                        break;

                    case "10%":
                        tip = 10;
                        roundedBillTotalValue = getTotalAmount(tip);
                        setInstuctionBack();
                        break;

                    case "15%":
                        tip = 15;
                        roundedBillTotalValue = getTotalAmount(tip);
                        setInstuctionBack();
                        break;

                    case "20%":
                        tip = 20;
                        roundedBillTotalValue = getTotalAmount(tip);
                        setInstuctionBack();
                        break;

                    case "25%":
                        tip = 25;
                        roundedBillTotalValue = getTotalAmount(tip);
                        setInstuctionBack();
                        break;

                    case "custom":
                        tip = 0;
                        changeCtLayout();
                        getCustomTip ();                          
                        break;
                    }

                })
            }
            } else if (billTotalValue < 0) {
                alert("You cheeky little bastard! You can't get a negative bill...")
                billTotalInput.value = "";}



    /* Reset function ----------------------------------------------------------------- */
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        tipTotalNumber.innerText = "0 HUF";
        tipTotalPer.innerText = "0%";
        billTotalInput.value = "";
        billTotalNumber.innerText = "0 HUF";
        customInput.value = "";
        setInstuctionBack ();
        for (let j = 0; j < tipButton.length; j++) {
            if (tipButton[j].classList.contains("btn-active")) {
                tipButton[j].classList.remove("btn-active");
                continue
            } else {
                continue;
            }
        }
    })




/* Calculating the Bill total amount ROUNDED-LY ----------------------------------------------------*/
function getTotalAmount(tip) {
    billTotalAmount = billTotalValue * ((100 + tip)/100);
    roundedBillTotalValue = Math.round(billTotalAmount);
    updateTipTotals(roundedBillTotalValue, tip); /* Updating the Tip total Amount with HUF and % */
    updateBillTotalAmount(roundedBillTotalValue); /* Updating the Bill Total Number Amount with the rounded number */

}

/* Update Bill Total Amound ----------------------------*/
function updateBillTotalAmount(roundedBillTotalValue) {
    const billTotalNumber = document.getElementById("billTotalNumber");
    billTotalNumber.innerText = roundedBillTotalValue + " HUF";
} 

/* Update Tip Total Amount Money */
function updateTipTotals(roundedBillTotalValue, tip) {
    const tipTotalNumber = document.getElementById("tipTotalNumber");
    const tipTotalPer = document.getElementById("tipTotalPer");

    let tipAmountNumber = roundedBillTotalValue - billTotalValue;
    tipTotalNumber.innerText = tipAmountNumber + " HUF";

    tipTotalPer.innerText = "You tipped: " + tip + "%";

}

/* Custom Tip -------------------------------------------------------*/

/* Custom Tip layout Change -------*/
function changeCtLayout(){
    const instText = document.getElementsByClassName("instruction")[0];
    const ctTitle = document.getElementsByClassName("custom-tip-title")[0];
    const customInput = document.getElementById("customInput");

    instText.classList.remove("active-ct-input");
    instText.classList.add("remove-ct");

    ctTitle.classList.remove("remove-ct");
    ctTitle.classList.add("active-ct-input");

    customInput.classList.remove("remove-ct");
    customInput.classList.add("active-ct-input");
} 

/* Custom Tip layout show only instruction if the custom button is unselected -------*/

function setInstuctionBack () {
    const instText = document.getElementsByClassName("instruction")[0];
    const ctTitle = document.getElementsByClassName("custom-tip-title")[0];
    const customInput = document.getElementById("customInput");

    if (instText.classList.contains("remove-ct")) {
        instText.classList.add("active-ct-input");

        ctTitle.classList.remove("active-ct-input");
        ctTitle.classList.add("remove-ct");

        customInput.classList.remove("active-ct-input");
        customInput.classList.add("remove-ct");
        
    } else {
        return
    }

}

/* Get Custom Tip value ----------------------*/
function getCustomTip() {
    const customTipInput = document.getElementById("customInput");
    customTipInput.addEventListener("input", () => {
        customTip = customTipInput.value;
        if (customTip > 0) { /* Checks is the number is positive or not */
            tip = parseInt(customTip); /* Makes it an intiger */
/*             console.log(tip) */
            roundedBillTotalValue = getTotalAmount(tip);
        }else if (customTip < 0) {
            alert("Oh bollocks, you just did that, do you? You can't give a negative tip...")
            customTipInput.value = "";}
    })
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

/* Web simplified solution with loops
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () =>  {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active-modal");
    modals.forEach(modal => {
        closeModal(modal)
    })
})


closeModalButtons.forEach(button => {
    button.addEventListener("click", () =>  {
        const modal = button.closest(".modal");
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active-modal");
    overlay.classList.add("active-overlay");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active-modal");
    overlay.classList.remove("active-overlay");
} */