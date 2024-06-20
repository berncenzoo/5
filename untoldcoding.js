const text =
  "Hello Baby, happy five months of love palangga ko. It's been a challenging month for us because of the situations we've encountered together. Long distance isn't for me; I can't stay far away from you; I want to be by your side. Despite the distance, my love for you gets stronger every day. I constantly miss you and think about our times together, and yeah, we argue sometimes but I'm glad we've conquered it together. Thank you, Langga, for always being there for me, for having my back, and for sticking around. This is only the beginning of everything we're working on together, my love, so hold on tight and let's sail through this relationship together, stronger and still inlove with each other. I'd like to spend not just months, but a lifetime with you. I love you so much, palangga. Let us enjoy this moment together here in my hometown, I hope you have a wonderful time baby. :*";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
