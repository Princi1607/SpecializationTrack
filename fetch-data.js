document.getElementById('fetchData').addEventListener('click', fetchDogImage);

function fetchDogImage() {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';
  const dataDiv = document.getElementById('data');
  
  // Clear previous data
  dataDiv.innerHTML = '';

  fetch(apiUrl)
    .then(response => {
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display the fetched dog image
      const imgElement = document.createElement('img');
      imgElement.src = data.message;
      dataDiv.appendChild(imgElement);
    })
    .catch(error => {
      // Display the error message
      const errorMsg = document.createElement('p');
      errorMsg.textContent = `Error: ${error.message}`;
      errorMsg.classList.add('error');
      dataDiv.appendChild(errorMsg);
    });
}
