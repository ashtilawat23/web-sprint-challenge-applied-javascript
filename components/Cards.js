// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios';

let articlesArray = ['javascript','bootstrap','technology','jquery','node'];


const cardContainer = document.querySelector('.cards-container');

const URL = `https://lambda-times-api.herokuapp.com/articles`
axios
    .get(URL)
    .then((res) => {
    const received = res.data
    received.articles.bootstrap.forEach(element => {
        const newCard = cardMaker(element);
        cardContainer.append(newCard);
    });
    })


function cardMaker(obj){
    const div_card = document.createElement('div');
    const div_headline = document.createElement('div');
    const div_author = document.createElement('div');
    const div_img = document.createElement('div');
    const imgAuthor = document.createElement('img');
    const spanAuthor = document.createElement('span');

    div_card.classList.add('card');
    div_headline.classList.add('headline');
    div_author.classList.add('author');
    div_img.classList.add('img-container');

    div_card.appendChild(div_headline);
    div_card.appendChild(div_author);
    div_card.appendChild(div_img);
    div_img.appendChild(imgAuthor);
    div_card.appendChild(spanAuthor);
    
    div_headline.textContent = obj.headline;
    imgAuthor.src = obj.authorPhoto;
    spanAuthor.textContent = `By ${obj.authorName}`;

    div_headline.addEventListener('click', function(){
        console.log(obj.headline)
    })

    return div_card;
}