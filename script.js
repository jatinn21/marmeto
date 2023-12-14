let selectedOption = null;
// Default setting of size = "small" and color = "Red";
let productSize = "Small",
  productColor = "Red";

const product_PresentPrice =
  +document.querySelector(".currentPrice").textContent;
const product_Discount = document.querySelector(".discount");
const product_PreviousPrice =
  +document.querySelector(".previousPrice").textContent;

// finding the discount = (previousAmount-currentAmount)/previousAmount *100
let discount =
  ((product_PreviousPrice - product_PresentPrice) / product_PreviousPrice) *
  100;

//Two ways to store the way, either using toFixed or toPrecision = 35, To get the integer rather than a floating Number
console.log(discount.toFixed(0));
console.log(discount.toPrecision(2));

// Printing the number
product_Discount.textContent = discount.toFixed(0);

// To select the chosen size option
function selectOption(optionNumber, size) {
  console.log(size);
  productSize = size;

  // Reset all circles
  let NumberOfOptions = Number(document.querySelectorAll(".option").length);
  for (let i = 1; i <= NumberOfOptions; i++) {
    document.getElementById(`option${i}Circle`).innerHTML = "";
    document.getElementById(`option${i}Circle`).style.borderColor = "#000";
    document.getElementById(`option${i}`).style.color = "rgb(30, 30, 30)";
    document.getElementById(`option${i}`).style.backgroundColor =
      "rgba(219, 219, 219, 0.877)";
  }

  // Set the selected circle
  selectedOption = optionNumber;
  document.getElementById(`option${optionNumber}Circle`).innerHTML =
    '<div class="dot"></div>';
  document.getElementById(`option${optionNumber}Circle`).style.borderColor =
    " rgb(20, 49, 137)";
  document.getElementById(`option${optionNumber}`).style.color =
    "rgb(20, 49, 137)";
  document.getElementById(`option${optionNumber}`).style.backgroundColor =
    "rgba(56, 94, 207, 0.877)";
}

// To select the chosen color option and show the tick
function ShowTick(colorNumber, colorName) {
  console.log(colorName);
  productColor = colorName;

  // hide all ticks on the color
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`tick${i}`).style.opacity = "0";
    document.querySelectorAll(`.color`)[i - 1].style.outline = "transparent";
  }

  // Show the tick on that selected color
  document.getElementById(`tick${colorNumber}`).style.opacity = "1";
  document.querySelectorAll(`.color`)[colorNumber - 1].style.outline = "auto";
}

// Create the Note or the message
function note() {
  let noteElement = document.querySelector(".note");
  let message = `Embrace Sideboard with color  ${productColor} and Size ${productSize} added to cart `;
  noteElement.textContent = message;
  noteElement.classList.add("showNote");
}
