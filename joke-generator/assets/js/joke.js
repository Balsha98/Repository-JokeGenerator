// ***** DOM ELEMENTS ***** //
const categorySpan = document.querySelector(".span-category");
const refreshIcon = document.querySelector(".icon-refresh");
const responseDiv = document.querySelector(".div-response");

// ***** VARIABLES ***** //
let degrees = 0;

// ***** FUNCTIONS ***** //
const getRandomJoke = async function () {
    const response = fetch("https://v2.jokeapi.dev/joke/any").then((response) => response.json());
    return await response.json();
};

const renderJoke = async function () {
    const randomJoke = await getRandomJoke();

    let response = "";
    if (randomJoke.type === "twopart") {
        response = `
            <p>${randomJoke.setup}</p>
            <span>${randomJoke.delivery}</span>
        `;
    } else {
        response = `
            <p>${randomJoke.joke}</p>
        `;
    }

    // Reset visuals.
    responseDiv.innerHTML = "";
    responseDiv.innerHTML = response;
    categorySpan.textContent = randomJoke.category;

    if (this) this.style = `transform: rotate(${(degrees += 360)}deg);`;
};

// Start off.
renderJoke();

// ***** EVENT LISTENERS ***** //
refreshIcon.addEventListener("click", renderJoke);
