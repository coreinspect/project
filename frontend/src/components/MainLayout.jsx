import Header from './Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that `children` is required
};

export default MainLayout;
