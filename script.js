const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const finalGifElement = document.getElementById('final-gif');

function showStory(question, choices) {
  storyElement.innerText = question;
  choicesElement.innerHTML = ''; // Clear previous choices
  choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerText = choice.text;
    button.onclick = choice.onClick;
    choicesElement.appendChild(button);
  });
}

// Define the onClick functions for each choice
const question2 = () => showStory("Are you sure?", [
  { text: "Super Yes", onClick: question2b },
  { text: "Giga Yes", onClick: question3 },
]);

const question2b = () => showStory("WRONG. Should've said GIGA yes. Anyways, are you SUUREEE u like me???", [
  { text: "on second thought EHHHH", onClick: question4c },
  { text: "YOU SMELL.", onClick: question4 },
]);

const question3 = () => showStory("Positive?", [
  { text: "NEGATIVE. YOU STINK.", onClick: question3b },
  { text: "on second thought.. YOU SMELL.", onClick: question4 },
]);

const question3b = () => showStory("AT LEAST I DON'T PICK MY NOSE IN PUBLIC :p Anyways... are you ready?", [
  { text: "DON'T CHANGE THE SUBJECT. You stink.", onClick: question4b },
  { text: "for what?", onClick: question6 },
]);

const question4 = () => showStory("What the. YOU smell.", [
  { text: "No, YOU", onClick: question3b },
  { text: "Okay I smell :(", onClick: question5 },
]);

const question4c = () => showStory("Whatever no take backs. You smell.", [
  { text: "No, YOU", onClick: question3b },
  { text: "Okay I smell :(", onClick: question5 },
]);

const question4b = () => showStory("Fine i stink.. anyways are you ready?", [
  { text: "For what?", onClick: question6 },
  { text: "Yes.", onClick: question6 },
]);

const question5 = () => showStory("Jk, so since you love me are you ready?", [
  { text: "For what?", onClick: question6 },
  { text: "Yes.", onClick: question6 },
]);

const question6 = () => showStory("I SAID ARE YOU READY", [
  { text: "FOR WHAT", onClick: question7 },
  { text: "YESSSSSSSSS", onClick: question7 },
]);

const question7 = () => showStory("Will u be my valentine?", [
  { text: "Of course", onClick: end },
  { text: "U stink, but I guess", onClick: end },
]);

// Function to call at the end of the adventure or to display a final message
const end = () => {
  storyElement.innerText = "Happy Valentine's Day!";
  choicesElement.innerHTML = ''; // Clear the choices
  finalGifElement.classList.remove("hide");
}

// Starting point of the story
const start = () => {
  showStory("Do you love your boyfriend?", [
    { text: "Yes", onClick: question2 },
    { text: "Omega Yes", onClick: question2 },
  ]);
};

// Initialize the story
start();

