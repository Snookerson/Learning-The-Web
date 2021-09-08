/* Make sure the page is loaded or not to run js */

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}


function ready() {

    /* remove function */
    let removeOneRowBtns = document.getElementsByClassName("remove-btn"); /* Gets all the remove item buttons */
    console.log(removeOneRowBtns);

    for(let i = 0; i < removeOneRowBtns.length; i++) { /* Goes through all the find buttons */
        let button = removeOneRowBtns[i];
        button.addEventListener("click", removeOneRow); /* Listens for clicks */
 
    }

    /* Add function */
    let inputItemSection = document.getElementById("addItemText");
    let addItemBtn = document.getElementById("addBtn");
    let box = document.getElementById("checkbox");
        addItemBtn.addEventListener("click", function addOneRow()  {
            let itemName = inputItemSection.value; /* getting the value from the input box */

            if (inputItemSection.value != "") {

                let itemRow = document.createElement("div"); /* creating an empty div */
                itemRow.classList.add("item-row");
                let outPutSection = document.getElementsByClassName("output-section")[0]; /* Find the parent element so we know where to put it */
                if (box.checked == true) {
                    console.log(itemName)

                    itemRow.style.fontWeight = "bold";
                    itemRow.style.color = "#FF6964";
                }
                let itemRowContents = `
                    <div class="item">${itemName}</div>
                    <button class="btn remove-btn">Remove</button>` /* putting the content to the div */
                outPutSection.append(itemRow); /* putting the empty div to the end of the output-section */
                itemRow.innerHTML = itemRowContents /* putting all together */

                itemRow.getElementsByClassName("remove-btn")[0].addEventListener("click", removeOneRow);

            } else {
                alert("You need to add a name to your item!");
            }
            inputItemSection.value = "";


        });

}

function removeOneRow(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}


/* remove all function */

let removeAllBtn = document.getElementById("remove-all-btn");
    removeAllBtn.addEventListener("click", () => {
        console.log("working")
        document.querySelectorAll(".item-row").forEach(e => e.remove());
})