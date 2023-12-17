import React from "react";

import "./Weather.css";
export default function Footer() {
  return (
    <div className="footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/grace-onyebueke-0a6288261/"
        target="_blank"
        rel="noreferrer"
      >
        Onyebueke Ogechukwu
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/Hisgraceingrace/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-sourced on GitHub
      </a>
    </div>
  );
}
