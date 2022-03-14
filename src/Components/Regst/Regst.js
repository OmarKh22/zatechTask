import {NavLink, Link} from 'react-router-dom';
import './Reget.css'
const Regst = () => {
    return (
        <div>
            <h2 className="logo-text">Zatech</h2>
            <h4>Welcome to Zatech</h4>
            <p>please sign in to your account and start the adventure</p>
  <div className="container-fluid d-flex">
    
      <ul className="navbar-nav">
        <li className="nav-item">
        <p>  <Link className="nav-link active" aria-current="page" to="/Customer">Customer</Link></p>
        </li>
        <li className="nav-item">
        <p> <Link className="nav-link" to="/Selaier">Selaier</Link></p>
        </li>
        <li className="nav-item">
        <p> <Link className="nav-link" to="/Servies">Servies</Link></p>
        </li>
      </ul>

  </div>
        </div>
    )
}

export default Regst
