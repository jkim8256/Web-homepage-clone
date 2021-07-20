const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
]; //array of objects. each object has quote and an author

const quote = document.querySelector("#quote span:first-child"); //selects tag with id quote, and inside that tag, chosses first span(separated by a space)
const author = document.querySelector("#quote span:last-child"); //there is no such thing as second-child. i guess you can only do last-child

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // there is also a ceiling, which always rounds up, and round.
//above gives me a random quote(it should give a random obj, but i guess it shows the first elt of the obj)
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const REST2 = "rest";
quote.classList.add(REST2);
author.classList.add(REST2);
