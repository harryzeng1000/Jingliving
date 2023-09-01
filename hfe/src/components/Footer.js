import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>JingLiving</h1>
            <p>Choose your favourite Saunas Tools.</p>
          </div>
          <div>
            <a href="https://www.amazon.com/Royal-Saunas-Extensible-Infrared-Sauna/dp/B08B4FP6FM/ref=sr_1_5?keywords=Royal+Saunas&qid=1693568936&sr=8-5">
              <i className="fa-brands fa-amazon"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-weixin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <footer className="footer">
          @copy; 2023 JingLiving, Inc. All rights reserved.
        </footer>
        
      </div>
    </>
  );
};

export default Footer;
