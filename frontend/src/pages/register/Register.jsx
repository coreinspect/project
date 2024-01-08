import Header from '../../components/Header';
import SidebarLeft from '../../components/SidebarLeft';
import './regsiter.css';
const Register = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="left-sidebar-main">
          <SidebarLeft />
        </div>
        <div className="register-container">
          <div className="register-content">
            <h2 className="register-h2">Register</h2>
            <p className="register-p">
              Create an Account to Connect with Fellow Developers.
            </p>
            <div className="register-form">
              <form className="register-form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                />

                <input type="email" id="email" placeholder="Email Address" />

                <input type="password" id="password" placeholder="Password" />

                <input
                  type="password"
                  id="verifyPassword"
                  placeholder="Confirm Password"
                />

                <button type="submit" className="register-btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
