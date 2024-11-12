// const silliname = require("sillyname");
import generateName from "sillyname";
import { getCurrentJoke, getRandomJoke } from 'hindi-jokes';

var generatedSilliName = generateName();
console.log("My name is " + generatedSilliName + ".");

async function fetchRandomJoke() {
    try {
        const joke = await getRandomJoke();
        console.log('Random Joke:', joke);
    } catch (error) {
        console.error('Error fetching a random joke:', error);
    }
}

async function fetchJoke(jokeNo) {
    try {
        const joke = await getCurrentJoke(jokeNo);
        console.log('Joke:', joke);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

fetchJoke(5);
fetchRandomJoke();