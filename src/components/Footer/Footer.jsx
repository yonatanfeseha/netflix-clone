import React from "react";
import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <YouTubeIcon className="icons" />
        <XIcon className="icons" />
        <InstagramIcon className="icons" />
        <FacebookIcon className="icons" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="Copyright-text">1997 - 2023 Netflix, inc.</p>
    </div>
  );
};

export default Footer;
