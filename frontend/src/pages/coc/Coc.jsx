import MainLayout from "../../components/MainLayout";
import Container from "../container/Container";
import "./coc.css";

const CodeOfConduct = () => {
   return (
      <MainLayout>
         <Container>
            <div className="coc-area">
               <div className="coc-content">
                  <h1 className="coc-h1">CodeDiv Code of Conduct</h1>

                  <p className="coc-post">
                     Welcome to CodeDiv! Our mission is to foster a supportive
                     and inclusive community for all members. To ensure a
                     positive experience for everyone, we ask that you adhere to
                     the following code of conduct:
                  </p>
                  <p className="coc-title">1. Be Respectful</p>
                  <p className="coc-post">
                     Treat others with kindness and respect. Do not engage in
                     any form of harassment, discrimination, or offensive
                     behavior. Remember that diverse opinions are welcome, but
                     personal attacks or insults are not tolerated.
                  </p>

                  <p className="coc-title">2. Keep it Civil</p>

                  <p className="coc-post">
                     Disagreements are a natural part of any community, but
                     express your opinions in a constructive and civil manner.
                     Avoid offensive language, trolling, and disruptive
                     behavior.
                  </p>

                  <p className="coc-title">
                     3. No Hate Speech or Discrimination
                  </p>
                  <p className="coc-post">
                     CodeDiv is committed to providing a safe space for
                     everyone. Hate speech, discrimination, and any form of
                     intolerance will not be tolerated. This includes, but is
                     not limited to, racism, sexism, homophobia, and religious
                     discrimination.
                  </p>

                  <p className="coc-title">4. Respect Privacy</p>
                  <p className="coc-post">
                     Respect the privacy of others. Do not share personal
                     information without explicit consent. Be mindful of the
                     content you post and ensure it complies with privacy laws
                     and standards.
                  </p>

                  <p className="coc-title">5. Stay on Topic</p>
                  <p className="coc-post">
                     Keep discussions relevant to the web development and other
                     technologies. Avoid spamming or posting content unrelated
                     to the subject matter. If you have a new topic to discuss,
                     consider starting a new thread or post.
                  </p>
                  <p className="coc-title">6. No Plagiarism</p>
                  <p className="coc-post">
                     Respect intellectual property rights. Do not plagiarize or
                     use content without proper attribution. If you share
                     someone else{`'`}s work, give credit where it is due.
                  </p>
                  <p className="coc-title">7. Report Inappropriate Behavior</p>
                  <p className="coc-post">
                     If you witness any violations of this code of conduct,
                     report it to the moderators or administrators promptly.
                     Help us maintain a positive and respectful environment for
                     everyone.
                  </p>
                  <p className="coc-title">8. Follow Site Guidelines</p>
                  <p className="coc-post">
                     Adhere to any additional guidelines or rules specified by
                     CodeDiv. This may include specific rules for posting,
                     commenting, or participating in certain sections of the
                     website.
                  </p>
                  <p className="coc-title">Consequences of Violation</p>
                  <p className="coc-post">
                     Violations of this code of conduct may result in warnings,
                     temporary suspension, or permanent ban from CodeDiv,
                     depending on the severity and recurrence of the behavior.
                  </p>

                  <p className="coc-consent">
                     Thank you for being part of the CodeDiv community. Let{`'`}
                     s work together to create a welcoming and supportive space
                     for all members.
                  </p>
               </div>
            </div>
         </Container>
      </MainLayout>
   );
};

export default CodeOfConduct;
