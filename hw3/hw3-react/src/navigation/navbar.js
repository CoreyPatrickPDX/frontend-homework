import { Route, Routes } from 'react-router-dom';

// import views
import Search from '../views/search';
import Home from '../views/home';
import Houses from '../views/houses';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/search">
                Search
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/houses">
                Houses
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home title=" Game of Thrones Enthusiast" />} />

        <Route
          path="/search"
          element={<Search title="Search for your favorite character" />}
        />

        <Route
          path="/houses"
          element={<Houses title="Game of Thrones Family/House Distribution" />}
        />
      </Routes>
    </div>
  );
}

export default Navbar;