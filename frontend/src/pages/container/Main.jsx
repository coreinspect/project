import ArticleCard from '../../components/ArticleCard';
import RightSidebar from '../../components/RightSidebar';
import SidebarLeft from '../../components/SidebarLeft';
import './css/main.css';
import './css/responsiveness.css';

const Main = () => {
  return (
    <div className="main">
      <div className="left-sidebar-main">
        <SidebarLeft />
      </div>
      <div className="article-main">
        <ArticleCard />
      </div>
      <div className="right-sidebar-main">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Main;
