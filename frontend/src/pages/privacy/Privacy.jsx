import MainLayout from "../../components/MainLayout";
import Container from "../container/Container";

import "./privacy.css";

const PrivacyPolicy = () => {
   return (
      <MainLayout>
         <Container>
            <div className="privacy-area">
               <div className="privacy-content">
                  <h1 className="privacy-h1">Privacy Policy</h1>
                  <p className="privacy-date">Last Updated: January 9, 2024</p>
                  <p className="privacy-post">
                     Welcome to CodeDiv! This Privacy Policy outlines the ways
                     in which we collect, use, disclose, and protect your
                     personal information when you visit or interact with our
                     website, CodeDiv. Please read this Privacy Policy carefully
                     to understand how we handle your information.
                  </p>
                  <p className="privacy-title">1. Information We Collect:</p>
                  <p className="privacy-post">
                     <span className="privacy-span">
                        A. Personal Information:
                     </span>
                     When you register on CodeDiv, we may collect personal
                     information such as your name, email address, and any other
                     information you provide voluntarily.
                  </p>
                  <p className="privacy-post">
                     <span className="privacy-span">
                        B. Non-Personal Information:
                     </span>
                     We may collect non-personal information, including but not
                     limited to your IP address, browser type, device
                     information, and usage patterns when you visit our website.
                  </p>
                  <p className="privacy-title">
                     2. How We Use Your Information:
                  </p>

                  <p className="privacy-post">
                     <span className="privacy-span">
                        A. Personal Information:
                     </span>
                     We use your personal information to provide you with a
                     personalized experience on CodeDiv, including account
                     management, communication, and user authentication.
                  </p>
                  <p className="privacy-post">
                     <span className="privacy-span">
                        B. Non-Personal Information:
                     </span>
                     Non-personal information is utilized to analyze trends,
                     administer the site, track user movements, and gather
                     demographic information for aggregate use.
                  </p>
                  <p className="privacy-title">
                     3. Cookies and Tracking Technologies:
                  </p>
                  <p className="privacy-post">
                     <span className="privacy-span">A. Cookies:</span>
                     We use cookies to enhance your browsing experience and
                     provide personalized content. You can control cookie
                     preferences through your browser settings.
                  </p>
                  <p className="privacy-post">
                     <span className="privacy-span">
                        B. Tracking Technologies:
                     </span>
                     We may use other tracking technologies, such as web beacons
                     and analytics tools, to collect information about your
                     interactions with our website.
                  </p>
                  <p className="privacy-title">4. Sharing Your Information:</p>
                  <p className="privacy-post">
                     <span className="privacy-span">
                        A. Third-Party Service Providers:
                     </span>
                     We may share your information with trusted third-party
                     service providers who assist us in operating CodeDiv. These
                     providers are bound by confidentiality agreements and are
                     prohibited from using your information for unauthorized
                     purposes.
                  </p>
                  <p className="privacy-post">
                     <span className="privacy-span">B. Legal Compliance:</span>
                     We may disclose your information if required by law or in
                     response to valid requests from public authorities.
                  </p>

                  <p className="privacy-title">5. Security Measures:</p>
                  <p className="privacy-post">
                     We implement reasonable security measures to protect your
                     information from unauthorized access, disclosure,
                     alteration, and destruction.
                  </p>
                  <p className="privacy-title">6. Your Choices:</p>
                  <p className="privacy-post">
                     You have the right to review, update, or delete your
                     personal information. You may also opt-out of certain
                     communications or services.
                  </p>
                  <p className="privacy-title">7. Children Privacy:</p>
                  <p className="privacy-post">
                     CodeDiv is not directed at individuals under the age of 13.
                     If you believe that we have inadvertently collected
                     personal information from a child under 13, please contact
                     us to remove the information.
                  </p>
                  <p className="privacy-title">
                     8. Changes to this Privacy Policy:
                  </p>
                  <p className="privacy-post">
                     We reserve the right to update this Privacy Policy
                     periodically. We will notify you of any material changes by
                     posting the updated policy on CodeDiv.
                  </p>
                  <p className="privacy-title">9. Contact Us:</p>
                  <p className="privacy-post">
                     If you have any questions, concerns, or requests regarding
                     this Privacy Policy, please contact us at
                     [support@codediv.com].
                  </p>

                  <p className="privacy-consent">
                     By using CodeDiv, you consent to the terms outlined in this
                     Privacy Policy.
                  </p>
               </div>
            </div>
         </Container>
      </MainLayout>
   );
};

export default PrivacyPolicy;
