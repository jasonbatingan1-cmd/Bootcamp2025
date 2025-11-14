//get document elements
let catBtn = document.getElementById("catBtn");
let catContainer = document.getElementById("catContainer");
let stopBtn = document.getElementById("stopBtn");
let upVoteBtn = document.getElementById("upvote");
let downVoteBtn = document.getElementById("downvote");
const breedSelect = document.getElementById("breed");

//define global variables
let breeds = []; // store breed list globally
const apiKey = "live_bS21zuxMrtRBbprtorfBe07bIGnfcq5tDeZBs2JR9OQc8UZZCn0maVv1vfBOS6Gz"; // replace with your key
let currentCatId = ""; // will store the image ID from the API

// 1️⃣ Load all breeds once at startup
async function loadBreeds() {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    breeds = await res.json();

    // Populate the dropdown
    breeds.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed.name; // readable for the user
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
}

//Send a vote via POST
async function voteCat(value) {
    let url = "https://api.thecatapi.com/v1/votes";

    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        },
        body: JSON.stringify({
            image_id: currentCatId,
            value: value
        })
    });

    let result = await response.json();
    console.log("Vote result:", result);
    alert(value === 1 ? "You liked this cat!" : "You disliked this cat!");
}

catBtn.addEventListener("click", async () => {
    const selectedName = breedSelect.value;

    // Find the breed object by name
    const selectedBreed = breeds.find(breed => breed.name === selectedName);

    if (!selectedBreed) {
        catContainer.innerHTML = "<p>Please select a valid breed 😿</p>";
        return;
    }

    const breedId = selectedBreed.id;
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

    try {
        catContainer.innerHTML = "<p>Loading 🐾...</p>";

        const res = await fetch(url);
        const data = await res.json();

        catContainer.innerHTML = "";

        if (data.length === 0) {
            catContainer.innerHTML = "<p>No cats found for this breed 😿</p>";
            return;
        }

        //create img element and add cat image inside
        const catImg = document.createElement("img");
        catImg.src = data[0].url;
        catImg.style.width = "300px";
        catContainer.appendChild(catImg);
        const voteMsg = document.createElement("p");
        voteMsg.innerHTML = "Do you like this cat ? Leave an Upvote / Downvote!";
        catContainer.appendChild(voteMsg);

        //store cat ID for voting
        const cat = data[0];
        currentCatId = cat.id;

    } catch (err) {
        console.error("Error:", err);
        catContainer.innerHTML = "<p>Failed to load cat 😿</p>";
    }
});

//stop button event to stop the images loading
stopBtn.addEventListener("click", () => {
    catContainer.innerHTML = '';
});

//add listeners to vote
upVoteBtn.addEventListener("click", () => voteCat(1));
downVoteBtn.addEventListener("click", () => voteCat(0));


loadBreeds();