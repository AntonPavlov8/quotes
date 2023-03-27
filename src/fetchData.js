async function getQuote() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6e52bcb19emsh65968e54358a7e0p173aa3jsn04868ace3acf',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };
  const response = await fetch(
    'https://quotes15.p.rapidapi.com/quotes/random/',
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else return response.json();
}

async function getMoreQuotes(author, page) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '6e52bcb19emsh65968e54358a7e0p173aa3jsn04868ace3acf',
      'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com',
    },
    body: `{"pageSize":10,"page":${page},"searchString":"${author}"}`,
  };
  const response = await fetch(
    'https://quotel-quotes.p.rapidapi.com/search',
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else return response.json();
}
export { getQuote, getMoreQuotes };
