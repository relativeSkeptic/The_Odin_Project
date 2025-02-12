import "./styles.css";
import { generate, count } from "random-words";
import { apiKeys } from "../../api_keys";

const giphyAPI = apiKeys.get('giphy');
const searchButton = document.getElementById('searchButton');
const randomButton = document.getElementById('randomButton');
const searchText = document.getElementById('searchText');
const giphyImg = document.getElementById('giphyImg');

searchText.value = 'cats';

async function getImgData() {
    try {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${searchText.value}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
          })
        .then(function(response) {
            console.log(response);
            if(response.data.length === 0) {
                giphyImg.src = "";
                alert('ERROR');
            } 
            else {
                giphyImg.src = response.data.images.original.url;
            }
        });
    }
    catch(error) {
        console.log(error);
    }
}

randomButton.onclick = function() {
    searchText.value = generate();
}

searchButton.onclick = function() {
    getImgData();
};

getImgData();