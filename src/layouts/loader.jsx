import React from "react";
import { ImSpinner5 } from "react-icons/im";


import "../styles/loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <ImSpinner5 className="spinner" />
      <p>loading portfolio</p>
    </div>
  );
}
