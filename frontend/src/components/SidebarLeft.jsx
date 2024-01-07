import './css/sidebarleft.css';
import {
  AiFillHome,
  AiFillTags,
  AiFillWechat,
  AiFillQuestionCircle,
  AiOutlineCodeSandbox,
  AiFillBook,
  AiFillContainer,
} from 'react-icons/ai';

const navItemsInfo = [
  { icon: <AiFillHome />, name: 'Home', type: 'link', href: '/' },
  { icon: <AiFillWechat />, name: 'Topics', type: 'link', href: '/articles' },
  { icon: <AiFillTags />, name: 'Tags', type: 'link', href: '/tags' },
  { icon: <AiFillQuestionCircle />, name: 'Faq', type: 'link', href: '/faq' },
  {
    icon: <AiOutlineCodeSandbox />,
    name: 'Code of Conduct',
    type: 'link',
    href: '/coc',
  },
  {
    icon: <AiFillBook />,
    name: 'Privacy',
    type: 'link',
    href: '/privacy',
  },
  {
    icon: <AiFillContainer />,
    name: 'Terms',
    type: 'link',
    href: '/tos',
  },
];
const SidebarLeft = () => {
  const navItems = navItemsInfo.map((item) => (
    <li key={item.name}>
      <span>{item.icon}</span>
      <a href={item.href}>{item.name}</a>
    </li>
  ));
  return (
    <div className="leftcontainer shadow-md shadow-gray-600/50">
      <div className="left-sidebar">
        <ul className="sidebar-items">{navItems}</ul>
        <div className="copyright">
          <p className="copyright-text">
            Enter a world where code transforms into connections. Our developer
            community, crafted with passionate about web development, is where
            innovation and brilliance come alive. Join us and be part of the
            journey.
          </p>
          <p className="copyright-right">
            CoderDiv © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
