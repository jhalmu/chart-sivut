import { NavLink } from 'react-router-dom'
import { FaHome, FaQuestion, FaChartBar } from 'react-icons/fa'
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="secondary" data-tooltip="To Home Page">
              <FaHome />
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h1>Chart Thing</h1>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="/chartjs"
              className="secondary"
              data-tooltip="To ChartJs page"
            >
              <FaChartBar /> ChartJS
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/rechart"
              className="secondary"
              data-tooltip="To Rechart page"
            >
              <FaChartBar /> Rechart
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/about"
              className="secondary"
              data-tooltip="To About page"
            >
              <FaQuestion /> About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
