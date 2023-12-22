import { Link } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </div>
  )
}
export default Navbar