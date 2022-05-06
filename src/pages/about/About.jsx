import { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillWechat,
  AiOutlineClose,
} from "react-icons/ai";
import hehemade from "../../images/hehemade.png";
import barcode from "../../images/barcode.png";
import "./About.css";

const About = () => {
  const [barCode, setBarcode] = useState(false);
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>
              Dreamcatcher austin chillwave kale chips, yr fingerstache tofu
            </h3>
            <p>
              organic succulents hot chicken occupy tbh tumblr trust fund.
              Mlkshk four dollar toast polaroid, mustache irony edison bulb yes
              plz neutra craft beer crucifix gochujang cliche. Fixie roof party
              praxis pop-up cornhole direct trade venmo. Meditation jianbing
              retro hella locavore plaid vinyl venmo. Vice squid hashtag
              activated charcoal, ramps bespoke craft beer echo park 90's marfa
              cronut skateboard blue bottle thundercats hell of.
            </p>
            <div className="button">
              <a href="https://www.instagram.com/hehemade/?hl=en">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/Hehemade/">
              <AiFillFacebook />
            </a>
            <a href="https://www.instagram.com/hehemade/?hl=en">
              <AiFillInstagram />
            </a>

            <AiFillWechat className="wechat" onClick={() => setBarcode(true)} />
            {barCode ? (
              <div className="wechat-barcode">
                <AiOutlineClose onClick={() => setBarcode(false)} />
                <img src={barcode} alt="barcode" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="image-section">
          <img src={hehemade} alt="hehemade" />
        </div>
      </div>
    </div>
  );
};
export default About;
