// Store the paths of your image in an array and the associated descriptions
const PATHS = ["img/rouen.jpg","img/architecture.jpg", "img/residence.jpg"];
const DESCRIPTIONS = [
  "Rénovation d'une maison ancienne et de charme en plein coeur de rouen",
  "Construction d'une maison traditionnelle dans un endroit calme et arboré",
  "Construction contemporaine aux prestations hors normes en plein coeur du Havre"
];
const maxIndex = PATHS.length - 1;

// Get the image and the description paragraphe from the DOM
const imageContainer = document.getElementById("slider_image");
const description = document.getElementById("description");

// Set the image and the description according to the slider index
function setCurrentContent() {
  imageContainer.src = PATHS[currentIndex];
  centerImage();
  description.innerHTML = `<p>${DESCRIPTIONS[currentIndex]}</p>`;
}

// Center the image in the div by calculating it's height
function centerImage() {
  let container = document.getElementById("sliderImages");
  const containerHeight = parseInt(window.getComputedStyle(container,null).getPropertyValue("height"), 10);
  const topPos = (imageContainer.height - containerHeight)/2;
  if(topPos > 0) {
    imageContainer.style.top = `-${topPos}px`;
  }
}

// Function to update the index and display the associated image and description
function setIndex() {
  currentIndex < maxIndex ? currentIndex +=1 : currentIndex = 0;
  setCurrentContent();
}

// Function to show next or previous content
function show(direction = false) {
  clearInterval(sliderTurn);
  direction === true ? (currentIndex < maxIndex ? currentIndex ++ : currentIndex = 0) : (currentIndex > 0 ? currentIndex -- : currentIndex = maxIndex);
  setCurrentContent();
  sliderTurn = setInterval(setIndex, 3000);
}

// Initialize the slider with the first image and description
let currentIndex = 0;
setCurrentContent();

// Launches the setimage function every 3 secondes
var sliderTurn = setInterval(setIndex, 3000);
