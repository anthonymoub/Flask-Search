const form = document.getElementById('search-form');
const responseElement = document.getElementById('response');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    const searchQuery = document.getElementById('search-bar').value;


    console.log(searchQuery)
    
    // Send POST request to the Flask API backend
    fetch('http://127.0.0.1:8080/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search_query: searchQuery })
    })
    .then(response => response.json())
    .then(data => {

        console.log({data})
        responseElement.textContent = data.response;  // Display the response from the API
    });
});
