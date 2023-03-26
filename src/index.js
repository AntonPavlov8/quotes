const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".quoteAuthor");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e52bcb19emsh65968e54358a7e0p173aa3jsn04868ace3acf",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

async function getQuote() {
  const response = await fetch(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else return response.json();
}

function newQuote() {
  getQuote()
    .then((data) => {
      console.log(data);
      quoteEl.textContent = data.content;
      authorEl.textContent += data.originator.name;
    })
    .catch((err) => console.error(err));
}
newQuote();
