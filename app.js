console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const submitSearch = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
const image = document.getElementById("imageContainer");
const feedback = document.getElementById("feedback");
const apiKey= "CJ5snDcWRg1r0BvaxhBJNKF7W6xi5VjP";
let searchQuery = searchInput.value;
let url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchInput.value}`
//  https://api.giphy.com/v1/gifs/translate?api_key=CJ5snDcWRg1r0BvaxhBJNKF7W6xi5VjP&s=dogs
function gitGiph(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchInput.value}`)
    .then((res)=> {
        console.log(res);
    //    response.json()
       let x = res.json();
       console.log(x);
       return x;
        
    })
    .then((data)=>{
        console.log(data);
        console.log(searchInput.value);
        
    })
    .catch((error) => {console.error(error)})
}
// gitGiph()

submitSearch.addEventListener("click", gitGiph);