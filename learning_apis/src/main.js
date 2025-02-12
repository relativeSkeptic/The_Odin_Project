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
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${searchText.value}`, {mode: 'cors'})
        const giphyData = await response.json();
        if(giphyData.data.length === 0) {
            giphyImg.src = "";
            alert('ERROR');
        } 
        else {
            giphyImg.src = giphyData.data.images.original.url;
        }
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