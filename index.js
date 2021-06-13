// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

const text = document.querySelector("#text");

document.addEventListener("DOMContentLoaded", function () {
  return (text.textContent = "This is really cool!");
});
