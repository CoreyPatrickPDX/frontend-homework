import React, { useState, useEffect } from 'react';

function Search(props) {
  const [post, setPost] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [match, setMatch] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { title } = props;

  let [name, setName] = useState('');
  let [pic, setPic] = useState('');
  let [alt, setAlt] = useState('');

  const url = 'https://thronesapi.com/api/v2/Characters';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((characters) => {
        setData(characters);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handleClick = () => {
    setMatch(false);
    setToggle(false);
    setName('');

    data.forEach((character) => {
      if (post === character.fullName) {
        setMatch(true);
        setToggle(true);
        setName(character.fullName);
        setPic(character.imageUrl);
        setAlt(character.fullName);
      }
    });
  };

  return (
    <main className="container">
      <h1 className="text-black">{title}</h1>

      <div className="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleClick}
        >
          search
        </button>
      </div>

      {!isLoaded && <div>Loading...</div>}

      <h1>{name}</h1>
      {toggle && <img src={pic} alt={alt} width="225" height="225"></img>}
      {!match && <div>Sorry, no match ...</div>}
    </main>
  );
}

export default Search;