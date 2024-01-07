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
            <h3>Welcome to CoderDiv John</h3>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomeDashboard;
