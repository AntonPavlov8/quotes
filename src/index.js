import * as API from './fetchData';
const quoteEl = document.querySelector('.quote');
const authorEl = document.querySelector('.quoteAuthor');
const buttonsBlockEl = document.querySelector('.buttonsBlock');
const randomQuoteEl = document.querySelector('.button[random-quote]');
const moreQuotesEl = document.querySelector('.button[more-quotes]');

let quoteCounter = 0;
let quotesStorage = [];
let page = 0;

function newQuote() {
  API.getQuote()
    .then(data => {
      quoteEl.textContent = data.content;
      authorEl.textContent = '- ';
      authorEl.textContent += data.originator.name;
      buttonsBlockEl.style.display = 'flex';
      buttonsBlockEl.style.position = 'absolute';
      quoteCounter = 0;
      quotesStorage = [];
    })
    .catch(err => console.error(err));
}
newQuote();

randomQuoteEl.addEventListener('click', () => newQuote());

moreQuotesEl.addEventListener('click', () => {
  if (quoteCounter === 0 || quoteCounter === quotesStorage.length) {
    const author = authorEl.textContent.slice(2).toLowerCase();

    API.getMoreQuotes(author, page)
      .then(data => {
        quoteCounter = 0;
        page++;
        quotesStorage = data;
        render();
      })
      .catch(err => console.error(err));
  } else render();
});

function render() {
  quoteEl.textContent = quotesStorage[quoteCounter].quote;
  authorEl.textContent = '- ';
  authorEl.textContent += quotesStorage[quoteCounter].name;
  quoteCounter++;
}
