/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * I've been listening through "The History of Rome" podcast, and just so happened to hit the reign
 * of Marcus Aurelius at the start of this project. I thought it'd be cool to take quotes from his
 * journals (now known as the Meditations) and use them as the quotes for this project! This means
 * there isn't any real variation in author/source/citation, but I figured that's fine since I've
 * correctly define the objects and added the `book` property
***/
let quotes = [
  {
    quote: "A cucumber is bitter. Throw it away. There are briars in the road. Turn aside from them. This is enough. Do not add, \"And why were such things made in the world?\"",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175",
    book: "VIII"
  },
  {
    quote: "Not to feel exasperated or defeated or despondent because your days aren't packed with wise and moral actions. But to get back up when you fail, to celebrate behaving like a human—however imperfectly—and fully embrace the pursuit you've embarked on.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175",
    book: "V"
  },
  {
    quote: "Let opinion be taken away, and no man will think himself wronged. If no man shall think himself wronged, then is there no more any such thing as wrong",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175",
    book: "IV"
  },
  {
    quote: "Whatever happens to you has been waiting to happen since the beginning of time. The twining strands of fate wove both of them together: your own existence and the things that happen to you.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175",
    book: "V"
  },
  {
    quote: "Put an end once for all to this discussion of what a good man should be, and be one.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "c. AD 171-175",
    book: "X"
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
  } if (quote.book) {
    template += `<span class="book">${quote.book}</span>`;
  } if (quote.year) {
    template += `<span class="year">${quote.year}</span>`;
  } 

  document.getElementById('quote-box').innerHTML = (template += "</p>");
  // For exceeds, I call my changebackgroundcolor function
  changeBackgroundColor();
}

/***
 * `changeBackgroundColor` function
 * I looked up how to use getElementsByTagName and update the
 * style of an element on the MDN docs 
***/
function changeBackgroundColor() {
  // Array with the colors we're going to rotate between (to prevent ugly colors)
  let colors = [
    "rgb(58, 193, 98)",
    "rgb(176, 41, 39)",
    "rgb(24, 153, 93)",
    "rgb(29, 161, 161)",
    "rgb(43, 36, 166)",
    "rgb(176, 51, 124)"
  ]
  // The body element of the page (where the color is set in the CSS file)
  // Note that the getElementsByTagName method returns a collection
  let body = document.getElementsByTagName("body")[0];
  // Set the background color to a randomly selected color from the colors array
  body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

// Auto-rotating quores every 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);