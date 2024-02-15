// one click of each button cycle through the array of words or phrases that are unique to each button
// Define an array of words or phrases for each button
const nounOne = ["The Turkey", "Mom", "Dad", "The Dog", "The Cat"];
const verb = ["sat on", "ate", "danced with", "laughed at", "does not like"];
const adjective = ["a funny", "a scary", "a goofy", "a slimy", "a fat"];
const nounTwo = ["goat", "monkey", "fish", "cow", "frog"];
const nounThree = ["oen the moon", "on the chair", "in my spaghetti", "on the grass", "in my room"];

// Add an event listener to each button
document.getElementById("NounOne").addEventListener("click", () => {
  // Get the selected noun from the array
  const selectedNoun = nounOne[Math.floor(Math.random() * nounOne.length)];
  document.querySelector(".NounOne p").innerHTML = selectedNoun;
});

document.getElementById("verb").addEventListener("click", () => {
  // Get the selected verb from the array
  const selectedVerb = verb[Math.floor(Math.random() * verb.length)];
  document.querySelector(".Verb p").innerHTML = selectedVerb;
});

document.getElementById("adjective").addEventListener("click", () => {
  // Get the selected adjective from the array
  const selectedAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  document.querySelector(".Adjective p").innerHTML = selectedAdjective;
});

document.getElementById("NounTwo").addEventListener("click", () => {
  // Get the selected noun from the array
  const selectedNoun = nounTwo[Math.floor(Math.random() * nounTwo.length)];
  document.querySelector(".NounTwo p").innerHTML = selectedNoun;
});

document.getElementById("NounThree").addEventListener("click", () => {
  // Get the selected noun from the array
  const selectedNoun = nounThree[Math.floor(Math.random() * nounThree.length)];
  document.querySelector(".NounThree p").innerHTML = selectedNoun;
});
// add event listener to the form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // get the values from the form
    const nounOne = document.querySelector(".NounOne p").textContent;
    const verb = document.querySelector(".Verb p").textContent;
    const adjective = document.querySelector(".Adjective p").textContent;
    const nounTwo = document.querySelector(".NounTwo p").textContent;
    const nounThree = document.querySelector(".NounThree p").textContent;
    // build the story
    const story = `${nounOne} ${verb} ${adjective} ${nounTwo} ${nounThree}.`;
    // display the story
    document.querySelector(".story p").textContent = story;
    console.log(story);
});