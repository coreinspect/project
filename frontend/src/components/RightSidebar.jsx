import { images } from '../constants';
import './css/rightsidebar.css';
const RightSidebar = () => {
  return (
    <div className="rightcontainer">
      <div className="right-sidebar">
        <div className="right-sidebar-header">
          <h1 className="right-sidebar-h1">#Web Development</h1>
          <p className="right-sidebar-desc">
            Discussion threads targeting Web Development
          </p>
        </div>
        <div className="right-sidebar-content">
          <div className="right-sidebar-details">
            <div className="right-sidebar-text">
              Learn More and explore the Web Development
            </div>
            <div className="right-sidebar-links">
              <a href="/" className="right-sidebar-link">
                11 Comments
              </a>
              <div className="right-sidebar-imgcontainer">
                <img
                  src={images.NoProfilePicture}
                  alt="Profile Picture"
                  className="right-sidebar-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
