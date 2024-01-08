import Header from '../../components/Header';
import RightSidebar from '../../components/RightSidebar';
import SidebarLeft from '../../components/SidebarLeft';
import './tos.css';
const TermsOfService = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="left-sidebar-main">
          <SidebarLeft />
        </div>
        <div className="tos-area">
          <div className="tos-content">
            <h1 className="tos-h1">Terms of Service</h1>
            <p className="tos-date">Last Updated: January 9, 2024</p>
            <p className="tos-p1">
              Welcome to CodeDiv, a platform designed for coding enthusiasts and
              professionals to share ideas, knowledge, and experiences related
              to programming. The following terms of service govern your use of
              the CodeDiv website and services. By accessing or using CodeDiv,
              you agree to comply with and be bound by these terms.
            </p>
            <p className="tos-p2">
              <span className="tos-span">1. Acceptance of Terms</span> By
              accessing or using CodeDiv, you agree to be bound by these Terms
              of Service. If you do not agree with any part of these terms, you
              may not use the services provided by CodeDiv.
            </p>
            <p>
              <span className="tos-span">2. User Registration </span>To fully
              participate in CodeDiv, you must register for a user account. You
              agree to provide accurate, current, and complete information
              during the registration process and to update such information to
              keep it accurate, current, and complete.
            </p>
            <p className="tos-p3">
              <span className="tos-span">3. User Conduct</span>
              <ul>
                <li>Violate any laws, third-party rights, or our policies.</li>
                <li>
                  Post any content that is harmful, offensive, or inappropriate.
                </li>
                <li>Impersonate others or provide false information.</li>
                <li>
                  Engage in spamming, phishing, or any other malicious
                  activities.
                </li>
                <li>
                  Attempt to gain unauthorized access to CodeDiv or its users
                  accounts.
                </li>
                <li>
                  Use CodeDiv for any commercial purposes without our prior
                  written consent.
                </li>
              </ul>
            </p>
            <p>
              <span className="tos-span">4. Content Ownership </span>
              You retain ownership of the content you post on CodeDiv. By
              posting content, you grant CodeDiv a worldwide, non-exclusive,
              royalty-free license to use, reproduce, modify, adapt, publish,
              translate, create derivative works from, distribute, and display
              such content.
            </p>
            <p>
              <span className="tos-span">
                5. Moderation and Content Removal
              </span>
              CodeDiv reserves the right to moderate content and remove any
              material that violates these terms or is otherwise objectionable.
              We may also suspend or terminate accounts of users who violate
              these terms.
            </p>
            <p>
              <span className="tos-span">6. Intellectual Property</span>
              CodeDiv and its content are protected by copyright, trademark, and
              other laws. You may not use CodeDiv name, logo, or any other
              proprietary information without our prior written consent.
            </p>
            <p>
              <span className="tos-span">7. Privacy</span>
              7. Privacy Your privacy is important to us. Please review our
              Privacy Policy to understand how we collect, use, and disclose
              information.
            </p>
            <p>
              <span className="tos-span">8. Termination</span>
              CodeDiv reserves the right to terminate or suspend your account at
              any time for any reason, without notice.
            </p>
            <p>
              <span className="tos-span">9. Changes to Terms</span>
              CodeDiv may modify these terms at any time. You are responsible
              for reviewing these terms regularly to stay informed of any
              changes.
            </p>
            <p>
              <span className="tos-span">Contact Information:</span>
              If you have any questions or concerns about these terms, please
              contact us at [support@codediv.com].
            </p>
            <p>Thank you for using CodeDiv!</p>
          </div>
        </div>
        <div className="right-sidebar-main">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
