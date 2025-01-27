// Select the button and the text element
const button = document.getElementById("sayHiButton");
const text = document.getElementById("text");

// Add a click event listener to the button
button.addEventListener("click", () => {
  text.textContent = "Hi";
});
