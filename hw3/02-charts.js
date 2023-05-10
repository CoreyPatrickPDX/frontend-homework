const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const houseNames = [];
const houseValues = [];

document.addEventListener('DOMContentLoaded', async () => {
  const url = 'https://thronesapi.com/api/v2/Characters';
  const response = await fetch(url);
  const data = await response.json();

  data.forEach((character) => {
    let charHouse = character.family.includes('House ') ? character.family.replace('House ', '') : character.family;
    charHouse = charHouse.includes('Targar') ? 'Targaryen' : charHouse;
    charHouse = charHouse.includes('ister') ? 'Lannister' : charHouse;
    charHouse = charHouse.includes('Lorath') ? 'Lorathi' : charHouse;
    if (charHouse === ('') || charHouse === 'Unkown' || charHouse === 'Unknown') {
      charHouse = 'None';
    }
    if (!houseNames.includes(charHouse)) {
      houseNames.push(charHouse);
      houseValues[houseNames.findIndex((house) => house === charHouse)] = 1;
    } else {
      houseValues[houseNames.findIndex((house) => house === charHouse)] += 1;
    }
  });

  const renderChart = () => {
    const donutChart = document.querySelector('.donut-chart');

    new Chart(donutChart, {
      type: 'doughnut',
      data: {
        labels: houseNames,
        datasets: [
          {
            label: 'My First Dataset',
            data: houseValues,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
    });
  };

  renderChart();
});
