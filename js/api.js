fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    
    const firstThreeUsers = data.slice(0, 3);

    let dropdown = '<div class="dropdown">';
    dropdown += '<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Gebruikers</button>';
    dropdown += '<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">';
    firstThreeUsers.forEach(user => {
      dropdown += `<li><a class="dropdown-item" href="#">${user.name} - ${user.email}</a></li>`;
    });
    dropdown += '</ul></div>';

    document.getElementById('apiData').innerHTML = dropdown;
  })
  .catch(error => console.error('Error:', error));
