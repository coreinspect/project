import Header from '../../components/Header';
import SidebarLeft from '../../components/SidebarLeft';

const Login = () => {
  return (
    <div>
      {' '}
      <Header />
      <div className="main">
        <div className="left-sidebar-main">
          <SidebarLeft />
        </div>
        <div className="register-container">
          <div className="register-content">
            <h2 className="register-h2">Login</h2>
            <p className="register-p">
              Login to Connect with Fellow Developers.
            </p>
            <div className="register-form">
              <form className="register-form">
                <input type="email" id="email" placeholder="Email Address" />
                <input type="password" id="password" placeholder="Password" />
                <button type="submit" className="register-btn">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
