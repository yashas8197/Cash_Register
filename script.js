const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#button2");
const message = document.querySelector(".error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextBtn = document.querySelector("#button1");
const divOfCashGiven = document.querySelector(".cash-given-input");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    //billAmount is 12
    if (cashGiven.value >= billAmount.value) {
      //true because cashGiven is 2022 >= 12
      const amountToBeReturned = cashGiven.value - billAmount.value; //2022 - 12 = 2010
      calculateChange(amountToBeReturned); // calling function
    } else {
      displayMessage("Invalid Amount: Do you wanna wash the dishes?");
    }
  } else {
    displayMessage("Invalid Number: The number should be greater than 0");
  }
});

function hideMessage() {
  message.style.display = "none";
}

function displayMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateChange(amountToBeReturned) {
  //amountToBeReturned = 2010
  for (let i = 0; i < availableNotes.length; i++) {
    let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); // Math.trunc(2010 / 2000) = 1
    amountToBeReturned %= availableNotes[i]; //2010 % 2000 = 10
    noOfNotes[i].innerText = numberOfNotes;
  }
}

////////////////////////////////////////////////////////////////////////////////
divOfCashGiven.style.display = "none";
nextBtn.addEventListener("click", function () {
  if ((divOfCashGiven.style.display = "none")) {
    divOfCashGiven.style.display = "block";
  } else {
    divOfCashGiven.style.display = "none";
  }
});
