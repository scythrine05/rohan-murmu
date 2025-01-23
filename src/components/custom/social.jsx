import React from "react";

import { FaGithub, FaFacebook, FaLinkedin, FaFile } from "react-icons/fa";

import "../../styles/social.css";

export default function Social() {
  return (
    <div className="social-group">
      <a href="https://www.linkedin.com/in/rohan-murmu/" target="_blank">
        <FaLinkedin size={26} />
      </a>
      <a href="https://github.com/scythrine05" target="_blank">
        <FaGithub size={26} />
      </a>
      <a href="https://www.facebook.com/rohan.murmu.39/" target="_blank">
        <FaFacebook size={26} />
      </a>
      <a
        href="https://drive.google.com/file/d/1e9D-ouF2phBDi-GMjxC7Lnk2pzo_oi4Z/view?usp=sharing"
        target="_blank"
      >
        <FaFile size={24} />
      </a>
    </div>
  );
}
