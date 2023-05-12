import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import { backgroundColors, borderColors } from '../utils/chartColors.js';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const styles = {
  width: '60%',
  height: '60%',
  margin: '20px auto',
};

function Houses(props) {
  const [posts, setPosts] = useState([]);
  const { title } = props;
  const url = 'https://thronesapi.com/api/v2/Characters';
  const houseNames = [];
  const houseValues = [];

  useEffect(() => {
    const fetchPost = async () => {
      let response = await axios.get(url);
      setPosts(response.data);
    };
    fetchPost();
  });

  posts.forEach((character) => {
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

  const data = {
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
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className='container'>
      <h1>{title}</h1>
      <div>
        <Doughnut data={data} options={options} style={styles} />
      </div>
    </section>
  );
};

export default Houses;