const dogs = document.querySelectorAll("#animal-dog");
const cats = document.querySelectorAll("#animal-cat");
const pigs = document.querySelectorAll("#animal-pig");

let numberOfPets = document.querySelector("#number");
let animalContainer = document.getElementById("animals-container");
numberOfPets.innerHTML = `(${animalContainer.childElementCount})`; // Updating the number dynamically

const navContainer = document.querySelectorAll("#header-container div");

navContainer.forEach((item) => {
    item.addEventListener("click", (e) => {
        // Check if the actual div is clicked (ignore clicks on child elements)
        if (e.target === e.currentTarget || e.target.tagName === "IMG" || e.target.tagName === "H3") {
    
            navContainer.forEach((others) => {
                others.style.backgroundColor = "transparent";
            });

            item.style.backgroundColor = "#fed7aa";
            let target = e.target;

            // showing the corresponding items based on the clicked button
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
        }
    });
});

// Showing clicked item function
function showItems(items) {
    items.forEach((item) => {
        item.style.display = "block";
    });
}

// Hide other items function
function hideItems(items) {
    items.forEach((item) => {
        item.style.display = "none";
    });
}
