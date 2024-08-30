import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I am baby quinoa dreamcatcher meditation godard, ramps banh mi
            bicycle rights chartreuse blackbird spyplane praxis +1 messenger bag
            locavore skateboard. Scenester forage tbh, flexitarian mukbang craft
            beer 8-bit tote bag copper mug cornhole lomo artisan flannel.
            Hexagon yr cold-pressed, kale chips semiotics tumeric flannel
            typewriter affogato snackwave farm-to-table kombucha chambray
            sriracha green juice. Vape same palo santo organic DSA.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
