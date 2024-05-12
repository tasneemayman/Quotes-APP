var QuoteElement=document.getElementById("text");
var AuthorElement=document.getElementById("author");

var NewQuotes=[
    {
        text:"“Be yourself; everyone else is already taken.”",
        author:"--Oscar Wilde",
    },
    {
        text:"“A room without books is like a body without a soul.”",
        author:"-- Marcus Tullius Cicero",
    },
    {
        text:"“You only live once, but if you do it right, once is enough.”",
        author:" -- Mae West",
    },
    {
        text:"“Be the change that you wish to see in the world.”",
        author:"-- Mahatma Gandhi",
    },
    {
        text:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"-- Robert Frost",
    },
];

function Quotes() {
    var RandomNumber=Math.floor(Math.random()*NewQuotes.length);
    var quote= NewQuotes[RandomNumber]
    QuoteElement.innerHTML=quote.text;  
    AuthorElement.innerHTML=quote.author; 
}