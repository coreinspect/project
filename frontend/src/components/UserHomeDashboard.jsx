import './css/userhomedashboard.css';
import { images } from '../constants';
const UserHomeDashboard = () => {
  return (
    <div className="user-home-dashboard">
      <div className="user-home-container">
        <div className="user-home-profile">
          <img src={images.NoProfilePicture} alt="" />
        </div>
        <div className="user-home-details">
          <div className="user-home-info">
            <h3 className="user-home-name">Welcome Jury!</h3>
            <p className="user-home-status">Verified</p>
            <p>
              Clean code always looks like it was written by someone who cares.
            </p>
          </div>
          <div className="user-home-links">
            <div className="user-home-btn">
              <button>Add Post</button>
              <button>Profile</button>
              <button>Sign Out</button>
            </div>

            <div className="user-home-input">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomeDashboard;
