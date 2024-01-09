import { Link } from "react-router-dom";
import "./css/hero.css";
import "./css/responsiveness.css";
const Hero = () => {
   return (
      <div className="container-hero max-w-7xl mx-auto">
         <p className="mx-auto max-w-2xl hero">
            Unleash Your Code, Connect, Innovate.! <br />
            Join our vibrant developer community where innovation knows no
            bounds. Elevate your skills, collaborate with like-minded minds, and
            build the future of technology together.
            <br />
            <span>#CodeAndConnect</span>
         </p>
         <div className="hero-btn">
            <Link to={`/register`}>
               <button className="getstarted">Get Started</button>
            </Link>

            <Link to={`/login`}>
               <button className="signin-hero">Login</button>
            </Link>
         </div>
      </div>
   );
};

export default Hero;
