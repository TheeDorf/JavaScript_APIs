console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const divImage = document.getElementById("imageContainer");
const img = document.getElementById("img");
const feedbackP = document.createElement("p");
const apiKey = "api_key=CJ5snDcWRg1r0BvaxhBJNKF7W6xi5VjP";

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

searchButton.addEventListener("click", showGif);

function showGif() {
  fetch(`https://api.giphy.com/v1/gifs/translate?${apiKey}&s=${searchInput.value}`)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((object) => {
      console.log(object.data.images.original.url);
      img.src = object.data.images.original.url;
      searchInput.value = ""
      feedbackP.textContent = ""
    })
    .catch((err) => {
      console.error(err);
      feedbackP.textContent = err;
      divImage.appendChild(feedbackP);
      img.src = ""
    });
};