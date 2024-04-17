function fetchRandomCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    .then(response => response.json())
    .then(data => {
      // Call displayCatImage function with the fetched URL
      displayCatImage(data[0].url);
    })
    .catch(error => {
      console.error('Error fetching cat image:', error);
    });
}

// Add event listener to the button to fetch image when clicked
document.getElementById('generateBtn').addEventListener('click', fetchRandomCatImage);

function displayCatImage(imageUrl) {
  const catContainer = document.getElementById('catContainer');
  catContainer.innerHTML = '';
  
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Random cat';
  img.classList.add('cat-img');
  
  catContainer.appendChild(img);
}
