function allFunction() {
    /* Getting the value from the Bill Total input section | !!onkeyup!! is very importan in HTML attribut----------*/
    const billTotalInput = document.getElementById("billTotalInput"); /* Get the input element */

    let billTotalValue = billTotalInput.value; /* Find its value */
    console.log(billTotalValue); /* Just for testing */


    if (billTotalValue > 0) {
        /* Make the tip button function ------------------------------------------------------------- */
        const tipButton = document.getElementsByClassName("per-btn"); /* Get the buttons */
        for (let i = 0; i < tipButton.length; i++) {
            let button = tipButton[i]; /* Loop through the buttons before listening for clicks */
            button.addEventListener("click", (event) => { 

                let buttonClicked = event.target.id; /* This event.target finds the exact button we clicked and returns the HTML */
                console.log("id" + buttonClicked) /* Just for testing */

                /* Lets creat the necesarry variables */
                let tip = null;
                let billTotalAmount = null;
                let roundedBillTotalValue = null;
                switch (buttonClicked) {
                    case "5%":
                        tip = 5; /* Tip amount in intiger  */
                        roundedBillTotalValue = getTotalAmount(tip); /* Call a a function - it adds the tip % to the bill total then rounds it to the closest whole number */
                        updateBillTotalAmount(roundedBillTotalValue); /* Updating the Bill Total Number Amount with the rounded number */
                        updateTipTotals(roundedBillTotalValue, tip); /* Updating the Tip total Amount with HUF and % */
                        break;

                    case "10%":
                        tip = 10;
                        roundedBillTotalValue = getTotalAmount(tip);
                        updateBillTotalAmount(roundedBillTotalValue);
                        updateTipTotals(roundedBillTotalValue, tip);
                        break;

                    case "15%":
                        tip = 15;
                        roundedBillTotalValue = getTotalAmount(tip);
                        updateBillTotalAmount(roundedBillTotalValue);
                        updateTipTotals(roundedBillTotalValue, tip);
                        break;

                    case "20%":
                        tip = 20;
                        roundedBillTotalValue = getTotalAmount(tip);
                        updateBillTotalAmount(roundedBillTotalValue);
                        updateTipTotals(roundedBillTotalValue, tip);
                        break;

                    case "25%":
                        tip = 25;
                        roundedBillTotalValue = getTotalAmount(tip);
                        updateBillTotalAmount(roundedBillTotalValue);
                        updateTipTotals(roundedBillTotalValue, tip);
                        break;

                    case "custom":
                        console.log("ok custom");
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
    })




/* Calculating the Bill total amount ROUNDED-LY ----------------------------------------------------*/
function getTotalAmount(tip) {
    billTotalAmount = billTotalValue * ((100 + tip)/100);
    roundedBillTotalValue = Math.round(billTotalAmount);
    return roundedBillTotalValue;
}

/* Update Bill Total Amound */
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

/* Update Tip Total Amount percentage*/



}