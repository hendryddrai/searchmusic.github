const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('input[name="search"]');
const songList = document.querySelector('.song-list');

// Event listener for search form submission
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  
  // Perform search and display results
  performSearch(searchTerm);
});

// Function to perform the search and display results
function performSearch(searchTerm) {
  // Here, you can implement the logic to fetch search results from your API or an external music service API
  // Once you have the search results, you can dynamically generate HTML elements to display the results

  // Clear previous search results
  songList.innerHTML = '';

  // Example: Mock data for search results
  const mockResults = [
    { title: 'Song 1', artist: 'Artist 1', image: 'song1.jpg' },
    { title: 'Song 2', artist: 'Artist 2', image: 'song2.jpg' },
    // Add more mock results as needed
  ];

  // Generate HTML elements for search results
  mockResults.forEach(result => {
    const songElement = document.createElement('div');
    songElement.classList.add('song');

    const imageElement = document.createElement('img');
    imageElement.src = result.image;
    imageElement.alt = result.title;

    const titleElement = document.createElement('h3');
    titleElement.textContent = result.title;

    const artistElement = document.createElement('p');
    artistElement.textContent = result.artist;

    songElement.appendChild(imageElement);
    songElement.appendChild(titleElement);
    songElement.appendChild(artistElement);

    songList.appendChild(songElement);
  });
}
