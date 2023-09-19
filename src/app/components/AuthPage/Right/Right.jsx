"use client";
import React from "react";
import Image from "next/image"; // Import with a lowercase "image"
import Google from "../../../assets/google.png";
import Apple from "../../../assets/apple.png";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Right = () => {
  const session = useSession();
  // const router = useRouter();
  console.log(session);
  const handleClick = () => {
    signIn("google");
  };

  // if (session.status === "loading") return <div>Loading...</div>;

  if (session.status === "authenticated") {
    // redirect to dashboard
    redirect("/dashboard");
  }

  return (
    <div>
      <div className="bg-white right">
        <div className="box">
          <div className="top-header">Sign In</div>
          <div className="sub-heading">Sign in to your account</div>

          <div className="right-buttons">
            <button className="google" onClick={handleClick}>
              <div style={{ display: "inline" }}>
                <Image
                  src={Google} // Use the imported image directly
                  alt="Google Logo"
                  className="bottom-logo"
                />
              </div>
              <div className="title">Sign in with Google</div>
            </button>
            <button className="google">
              <Image
                src={Apple} // Use the imported image directly
                alt="Apple Logo"
                className="bottom-logo"
              />
              <div className="title">Sign in with Apple</div>
            </button>
          </div>

          <div className="input-box">
            <form action="">
              <label for="email">Email address</label>
              <input type="email" id="email" name="email" required />

              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />
              <div style={{ marginTop: "10px" }}>
                <a href="#">Forgot password?</a>
              </div>

              <div>
                <button className="sign-in-button">Sign In</button>
              </div>
            </form>
          </div>

          <div className="bottom-line">
            <span style={{ color: "#858585" }}>
              Don’t have an account?{" "}
              <span style={{ color: "#346BD4" }}>Register here</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
