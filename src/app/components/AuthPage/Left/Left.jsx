import React from "react";
import Image from "next/image"; // Import with a lowercase "image"
import linkedin from "../../../assets/linkedin.png";
import discord from "../../../assets/discord.png";
import github from "../../../assets/github.png";
import twitter from "../../../assets/twitter.png";

const Left = () => {
  return (
    <div className="container h-screen">
      <div className="logo">LOGO</div>
      <div className="Board">Board.</div>
      <div className="icons">
        <Image
          src={github} // Use the imported image directly
          alt="Github Logo"
          className="bottom-logo"
          style={{ height: "43px", width: "43px" }}
        />

        <Image
          src={twitter} // Use the imported image directly
          alt="Twitter Logo"
          className="bottom-logo"
          style={{ height: "45px", width: "45px" }}
        />
        <Image
          src={linkedin} // Use the imported image directly
          alt="LinkedIn Logo"
          className="bottom-logo"
          style={{ height: "45px", width: "45px" }}
        />

        <Image
          src={discord} // Use the imported image directly
          alt="Discord Logo"
          className="bottom-logo"
          style={{ height: "45px", width: "45px" }}
        />
      </div>
      <div className="triangle "></div>
    </div>
  );
};

export default Left;
