import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id="Nav">
      <nav>
        <ul className="nav-links">
          <Link to="/nz-noises">
            <li>Home</li>
          </Link>
          <Link to="/chords">
            <li>Chords</li>
          </Link>
          <Link to="/recordings">
            <li>Recordings</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}


export default Nav;
