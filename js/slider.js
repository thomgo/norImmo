// Store the paths of your image in an array and the associated descriptions
var paths = ["img/rouen.jpg","img/architecture.jpg", "img/residence.jpg"];
var descriptions = ["first description", "second description", "third description"];
var maxIndex = paths.length - 1;

// Get the image and the description paragraphe from the DOM
var imageContainer = document.getElementById("slider_image");
var description = document.getElementById("description");

// Set the image and the description according to the slider index
function setCurrentContent() {
 imageContainer.src = paths[currentIndex];
 description.innerHTML = descriptions[currentIndex];
}

// Function to update the index and display the associated image and description
function setIndex() {
 currentIndex < maxIndex ? currentIndex +=1 : currentIndex = 0;
 setCurrentContent();
}

// Initialize the slider with the first image and description
var currentIndex = 0;
setCurrentContent();

// Launches the setimage function every 3 secondes
var sliderTurn = setInterval(setIndex, 3000);

// Function to show next or previous content
function show(direction = false) {
 clearInterval(sliderTurn);
 direction === true ? (currentIndex < maxIndex ? currentIndex ++ : currentIndex = 0) : (currentIndex > 0 ? currentIndex -- : currentIndex = maxIndex);
 setCurrentContent();
 sliderTurn = setInterval(setIndex, 3000);
}
