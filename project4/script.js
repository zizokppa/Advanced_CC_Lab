function fetchRandomDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
          // Update the image source with the fetched URL
          document.getElementById('dogImage').src = data.message;
      })
      .catch(error => {
          console.error('Error fetching dog image:', error);
      });
}

// Add event listener to the image to fetch image when clicked
document.getElementById('dogImage').addEventListener('click', fetchRandomDogImage);
