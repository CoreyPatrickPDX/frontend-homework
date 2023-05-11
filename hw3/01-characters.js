// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const app = document.querySelector('#results');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const row = document.createElement('div');
    row.classList.add('row', 'g-2');

    data.forEach((character) => {
      const element = document.createElement('div');
      element.classList.add('col-sm-6', 'col-md-3');

      const charDiv = document.createElement('div');
      charDiv.classList.add('text-center', 'p-2', 'character');

      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = character.fullName;
      image.classList.add('charImage', 'img-fluid');

      const charName = document.createElement('h4');
      charName.textContent = character.fullName;
      charName.classList.add('w-75', 'mx-auto');

      const charTitle = document.createElement('h5');
      charTitle.innerHTML = character.title;
      charTitle.classList.add('w-75', 'mx-auto');

      charDiv.append(image);
      charDiv.append(charName);
      charDiv.append(charTitle);
      element.append(charDiv);
      row.append(element);
    });
    app.append(row);
  })
  .catch((error) => {
    const element = document.createElement('div');
    element.textContent = `${error}: An error occurred. Please reload the page.`;
    app.append(element);
  });
