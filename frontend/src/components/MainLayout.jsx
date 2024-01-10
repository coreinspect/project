import Header from "./Header";
import PropTypes from "prop-types";
import SidebarLeft from "./SidebarLeft";
import RightSidebar from "./RightSidebar";
import "./css/mainlayout.css";
const MainLayout = ({ children }) => {
   return (
      <div>
         <Header />
         <div className="main">
            <div className="left-sidebar-main">
               <SidebarLeft />
            </div>
            <div className="main-container">{children}</div>
            <div className="right-sidebar-main">
               <RightSidebar />
            </div>
         </div>
      </div>
   );
};

MainLayout.propTypes = {
   children: PropTypes.node.isRequired, // Validate that `children` is required
};

export default MainLayout;
