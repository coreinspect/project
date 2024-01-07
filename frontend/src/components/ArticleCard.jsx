import { images } from '../constants';
import UserHomeDashboard from './UserHomeDashboard';
import './css/articlecard.css';
import './css/responsiveness.css';
import { BsCalendar2MinusFill, BsChatRightDotsFill } from 'react-icons/bs';
const ArticleCard = () => {
  return (
    <div className="main-content">
      <UserHomeDashboard />
      <section className="article-container">
        <div className="article-image">
          <img
            src={images.SampleImage}
            alt=""
            className="article-image-preview"
          />
        </div>
        <div className="article-content">
          <h2 className="article-title">The Importance of Open Source</h2>
          <p className="article-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsa Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsa
          </p>
          <div className="article-links">
            <div className="read-area">
              <button className="read-button">Read More</button>
              <div className="comment-date-links">
                <a href="/" className="comment-date">
                  <BsChatRightDotsFill /> 23 Comments
                </a>
                <a href="/" className="comment-date">
                  <BsCalendar2MinusFill /> 6 January
                </a>
              </div>
            </div>
            <div className="article-user">
              <img
                src={images.NoProfilePicture}
                alt=""
                className="article-user-picture"
              />
              <p className="article-user-name">Jury Gregorio Jr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleCard;
