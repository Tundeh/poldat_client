import React, {useState} from "react";
import LoginModal from "./Modal/index";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  const [showModal, setshowModal] = useState(false);
  const fontStyle = {marginRight: "8px"}
  const handleClick = () => {
    setshowModal(!showModal);
  }

  return(
    <div className="main">
      <div className="home__header">
        <span className="home__title">Poldat</span>
        <span className="home__button" onClick={handleClick}>Login</span>
      
      </div>
      <div className="home__section">
          <div className="home__about">
            <div className="about__inner">
              <div>Poldat</div>
              <p>Poldat is a software solution that let’s you manage your supporters or political members data easily and hassle free. You can create and edit members data, send sms to targeted demography of the members...</p>
            </div>
            <LoginModal isShowing={showModal} handleClick={handleClick}/>
          </div>

          <div className="home__ft">
            <div className="home__features">
              
                <ul>
                    <li><FontAwesomeIcon style={fontStyle} icon="check-circle"/>Modern online data management
                    </li>
                    <li>
                    <FontAwesomeIcon style={fontStyle} icon="check-circle"/>
                    Role base users
                    </li>
                    <li>
                    <FontAwesomeIcon style={fontStyle} icon="check-circle"/>
                    Data analytics
                    </li>
                    <li>
                    <FontAwesomeIcon style={fontStyle} icon="check-circle"/>
                     Bulk sms and email communication
                    </li>
                    <li>
                    <FontAwesomeIcon style={fontStyle} icon="check-circle"/>
                    Events Management
                    </li>
                  </ul>
                  
            </div>
            <div className="people"></div>
          </div>
      </div>
    <div className="home__footer">
      <div className="footer__list">
        <div>
          <div>Contact</div>
          <div>hello@poldat.com</div>
        </div>
        <div>
          <div>Address</div>
          <span>Ikeja, Lagos, Nigeria</span>
        </div>
      </div>
     
      <div className="footer__copyright"><span>C @ 2020</span></div>
    </div>
    
    </div>
  )
}

export default Home;