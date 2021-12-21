import React from 'react';
import '../../css/Home.css'
import PSGLogo from "../../assets/img/PSGWhiteLogo.png";
import CodingClubLogo from "../../assets/img/Finalwhitelogo.png";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const goToPage = (page) => {
        if (page === "events-home") history.push("/events-home");
    }
    return (
      <div>
        <nav id="home-navbar">
          <h1 className="logoo heading">
            <img src={PSGLogo} alt="PSG logo" width={"50px"} height={"50px"} /> 
            {/*<span className="text-primary">P</span>SG COLLEGE OF TECHNOLOGY*/}
            PSG COLLEGE OF TECHNOLOGY
          </h1>
        </nav>

        <header id="home-showcase">
          <div className="showcase-content">
            <img className="img" src={CodingClubLogo} alt="Coding club Logo" />
            <h2 className="l-leading">
              <span className="text">CODING </span> CLUB PSGCT
            </h2>
            <p className="lead">“Path To The Land Of Binaries”</p>
            {/*<Link to={"/events-home"} className="btn">Explore</Link>*/}
            <button
              onClick={() => goToPage("events-home")}
              className="btn btn-primary"
            >
              Explore
            </button>
          </div>
        </header>
      </div>
    );
};

export default Home;
