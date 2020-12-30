import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id="Nav">
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tabs">
            <li>Tabs</li>
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
