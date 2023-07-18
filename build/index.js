const dogs = document.querySelectorAll("#animal-dog");
const cats = document.querySelectorAll("#animal-cat");
const pigs = document.querySelectorAll("#animal-pig");

let numberOfPets = document.querySelector("#number");
let animalContainer = document.getElementById("animals-container");
numberOfPets.innerHTML = `(${animalContainer.childElementCount})`; //Updating the number dynamically

const navItems = document.querySelectorAll("#header-container div");

function changeBackgrounColor() {
    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            let target = e.target;
            console.log(target.style.display);

            // Calling the showItems and hideItems functions to display and hide the corresponding items
            if (target.id === "nav-dog") {
                showItems(dogs);
                hideItems(cats);
                hideItems(pigs);
                numberOfPets.innerHTML = `(${dogs.length})`;
            } else if (target.id === "nav-cat") {
                showItems(cats);
                hideItems(dogs);
                hideItems(pigs);
                numberOfPets.innerHTML = `(${cats.length})`;
                
            } else if (target.id === "nav-pig") {
                showItems(pigs);
                hideItems(dogs);
                hideItems(cats);
                numberOfPets.innerHTML = `(${pigs.length})`;
            }

            // Remove background color from other items
            navItems.forEach((others) => {
                others.style.backgroundColor = "transparent";
            });

            // Adding background to the clicked element
            item.style.backgroundColor = "#fed7aa";
        });
    });
}

//Showing clicked item function
function showItems(items) {
    items.forEach((item) => {
        item.style.display = "block";
    });
}

// Hide other items function
function hideItems(items) {
    items.forEach((item) => {
        item.style.display = "none";
    })
}

changeBackgrounColor();





