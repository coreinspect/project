import RightSidebar from "../../components/RightSidebar";
import SidebarLeft from "../../components/SidebarLeft";
import PropTypes from "prop-types";
import "./css/container.css";
const Container = ({ children }) => {
   return (
      <div className="main">
         <div className="left-sidebar-main">
            <SidebarLeft />
         </div>
         <div className="main-container">{children}</div>
         <div className="right-sidebar-main">
            <RightSidebar />
         </div>
      </div>
   );
};

Container.propTypes = {
   children: PropTypes.node.isRequired, // Validate that `children` is required
};

export default Container;
