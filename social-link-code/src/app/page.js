"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import Profile from "./profile.jpeg";
import details from "./details.json";
export default function Home() {
  const [data, setData] = useState(null);
  const [activeButton, setactiveButton] = useState("");
  useEffect(() => {
    fetch({ details })
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <main className="sc_main">
      <div className="sc_card">
        <div className="sc_profile">
          <Image
            src={Profile}
            width={200}
            height={200}
            alt="Picture of the profile"
          />
        </div>
        <div className="sc_name">
          <h2 className="sc_name-font">Jessica Randall</h2>
          <h6 className="sc_place-font">London, United Kingdom</h6>
        </div>
        <div className="sc_work">
          <h6 className="sc_work-font">
            "Front-end developer and avid reader."
          </h6>
        </div>
        <div className="sc_profile-link">
          {details.map((item, index) => (
            <div
              className="sc_profile-name"
              key={index}
              onClick={() => {
                setactiveButton(index);
                console.log(index);
              }}
              style={{
                backgroundColor:
                  activeButton === index ? "#02a921" : "hsl(0, 0%, 12%)",
              }}
            >
              <a className="sc_profile-name-font" href={item.link}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
