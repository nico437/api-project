// Step 1 - Selecting the HTML elements I will target
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const contentDiv = document.getElementById("contentDiv");


// Step 2 - Adding the event listener for the submit button click
submitButton.addEventListener("click", () => {


contentDiv.style.display = 'block';


// Step 3 - Storing the location input into a variable
const locationInput = document.getElementById("inputL");
const location = locationInput.value;
getWeather(location);
});


// Step 4 - Adding the event listener for the reset button click
resetButton.addEventListener("click", () => {
   contentDiv.style.display = 'none';


   // Clear the content of the contentDiv by removing all child nodes
   while (contentDiv.firstChild) {
       contentDiv.removeChild(contentDiv.firstChild);
   }
});


// Function that makes the API request and handles the response
function getWeather(location) {


fetch(`http://api.weatherapi.com/v1/current.json?key=5b5395cbf8c14f9da16220948231705&q=${location}`)
.then(response => response.json())
.then(data => {
   // Extract the desired weather information from the API response
   const {temp_c} = data.current;
  
   // Create new element and update its content
   const tempElement = document.createElement('p');
   tempElement.textContent = `Temperature: ${temp_c}°C`;




   // Clear previous weather information
   while (contentDiv.firstChild) {
       contentDiv.removeChild(contentDiv.firstChild);
   }


   // Append the new element to the container
   contentDiv.appendChild(tempElement);


})
.catch(error => {
   console.error('Error fetching weather data:', error);
});


}
