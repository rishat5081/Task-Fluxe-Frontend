import { Icon } from "components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const NavigationBar = (props) => {
  return (
    <div className="App ">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link to="/">
            <Icon name="logo" width={125} height={20} />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            {props.status === true ? (
              <li className="nav-item">
                <a className="nav-link" onClick={() => props.signOutHandler()}>
                  Sign Out
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
