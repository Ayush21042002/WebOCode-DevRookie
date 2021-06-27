var listQuotes = [
  { quote: "By 2021, global esports gaming revenue will soar to $3.5 billion" },
  { quote: "The US legally recognizes esports pros as professional athletes" },
  {
    quote:
      "Fortnite and DOTA Championships cash prize pools top $30 million dollars",
  },
  {
    quote:
      "Esports is so popular, Comcast is constructing a $50 million arena so fans can watch live! ",
  },
  { quote: " Kids of all ages can compete (and make money!) through esports" },
  { quote: "The first esports tournament took place in 1972." },
  {
    quote:
      "The 2019 League of Legends World Championship Grand Finals had more viewers than this year’s Super Bowl.",
  },
  { quote: "THE FOURTH BIGGEST SPORT IN THE WORLD" },
  {
    quote:
      "There are currently about 222.9m esports enthusiasts in the entire world",
  },
  {
    quote:
      "The League of Legends World Championships 2020 brought in a record breaking 139m hours in viewership, and peaked at around 3.8m viewers",
  },
  {
    quote:
      "Live esports events brought in around 1209.6m viewers across 25 titles, with League of Legends topping the list.",
  },
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 40);
var progressWidth = 0;

// var timeDisplayed = 10000;
// var timer = setInterval(changeQuote, timeDisplayed);

function timerProgress() {
  $(".quote-progress").width(progressWidth + "%");
  if (progressWidth < 100) {
    progressWidth += 0.1;
  } else {
    changeQuote();
    progressWidth = 0;
  }
}

function setQuote() {
  $(".quote").html('"' + listQuotes[currentQuote].quote + '"');
  $(".author-name").html(listQuotes[currentQuote].author);
  tweetQuote();
}

function getRandomQuote() {
  currentQuote = Math.round(Math.random() * listQuotes.length);
  setQuote();
}

function changeQuote() {
  // $("blockquote").fadeToggle( "slow", "linear" );
  if (currentQuote < listQuotes.length - 1) {
    currentQuote++;
  } else {
    currentQuote = 0;
  }
  setQuote();
}

$(".previous").click(function () {
  if (currentQuote > 0) {
    currentQuote--;
  } else {
    currentQuote = listQuotes.length - 1;
  }
  setQuote();
  progressWidth = 0;
});

$(".next").click(function () {
  changeQuote();
  progressWidth = 0;
});

$(".random").click(function () {
  getRandomQuote();
  progressWidth = 0;
});

/* Twitter API */
window.twttr = (function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };

  return t;
})(document, "script", "twitter-wjs");

function tweetQuote() {
  $("#quote-tweet").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quote,inspiration&text=" +
      encodeURIComponent(
        '"' +
          listQuotes[currentQuote].quote +
          '" ' +
          listQuotes[currentQuote].author
      )
  );
}

setQuote();
