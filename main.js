let currentPlayer = "X"; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [2, 5, 8],
  [1, 4, 7],
  [3, 6, 9],
];

function checkForWin(winningCombination, playerSelections) {
  for (let i = 0; i < winningCombination.length; i = i + 1) {
    // creat the match variable
    let match = 0;

    let currentCombination = winningCombination[i];
    console.log(currentCombination);

    for (let j = 0; j < currentCombination.length; j = j + 1) {
      console.log(currentCombination[j]);

      if (playerSelections.includes(currentCombination[j])) {
        match = match + 1;
      }
    }
    if (match === 3) {
      console.log("YOU WIN!");
      return true;
    }
    return false;
  }
}

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll(".grid-cell");

// Loop over each element in our cellElementArray:
for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex += 1
) {
  // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
  const currentCellElement = cellElementArray[elementIndex];

  // Add an event listener to the currentCellElement:
  currentCellElement.addEventListener("click", function (event) {
    // event.target tells us which element the user clicked (see Resources links below):
    const clickedCellElement = event.target;
    // Log the ID of the cell which was just clicked:
    console.log("You clicked on cell number: " + clickedCellElement.id);

    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      playerXSelections.push(Number(clickedCellElement.id));
      let result = checkForWin(winningCombinations, playerXSelections);
      if (result === true) {
        console.log("X Player Wins");
      }
      currentPlayer = "O";
    } else {
      clickedCellElement.innerHTML = "O";
      playerXSelections.push(Number(clickedCellElement.id));
      currentPlayer = "X";
    }
    console.log("xSelection", playerXSelections);
    console.log("oSelction", playerOSelections);
  });
}
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  console.log("");
  let resetButton = 0;
  while (checkForWin < resetButton.value) {
    checkForWin.innerHTML = resetButton;
  }
  resetButton += 1;
  location.reload();
});
