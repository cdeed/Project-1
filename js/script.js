/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175"
  },
  {
    quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175"
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175"
  },
  {
    quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175"
  },
  {
    quote: "Waste no more time arguing about what a good man should be. Be one.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  return quotes[Math.floor(Math.random()*quotes.length)];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote();

  let template = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`

  if (quote.citation) {
    template += `<span class="citation">${quote.citation}</span>`;
  } if (quote.year) {
    template += `<span class="year">${quote.year}</span>`;
  }

  document.getElementById('quote-box').innerHTML = (template += "</p>");
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);