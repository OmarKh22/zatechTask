import "./Login.css";
import {NavLink, Link} from 'react-router-dom';

const LogIn = () => {
    
    return (
        <div className="Login">
            <h2 className="logo-text">Zatech</h2>
            <h4>Welcome to Zatech</h4>
            <p>please sign in to your account and start the adventure</p>
            <label className="form-label">Email</label>
            <input
                type="email"
                className="form-control  w-75"
                placeholder="Enter your Email"
            />
            <label className="form-label">Password</label>
            
            <input
                type="password"
                className="form-control  w-75 "
                placeholder="Enter your Password"
                
            />

            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label" for="exampleCheck1">Remember Me</label> <br></br>
            <button type="submit" className="btn btn-primary w-75">Submit</button>

            <div>
                <p className="m-3">New on our plateform?</p>
                <p><Link className="linkey" to="/Regst">Create an account</Link></p> 

            </div>
            
        </div>
    )
}

export default LogIn
