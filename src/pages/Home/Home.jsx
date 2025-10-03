import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/hero_banner.PNG";
import herotitle from "../../assets/hero_title.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={herotitle} alt="" className="caption-img" />
          <p>
            Smart, sarcastic and a little dead inside, Wednesday Addams
            investigates twisted mysteries while making new friends — and foes —
            at Nevermore Academy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <PlayArrowIcon className="icon" /> Play
            </button>
            <button className="btn dark-btn">
              <InfoIcon className="icon" /> more info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" catgory={"top_rated"} />
        <TitleCards title="Only on Netflix" catgory={"popular"} />
        <TitleCards title="Upcoming" catgory={"upcoming"} />
        <TitleCards title="Top Pics For you" catgory={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
