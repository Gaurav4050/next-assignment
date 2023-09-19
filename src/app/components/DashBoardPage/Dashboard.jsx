"use client";
import React from "react";
import "../DashBoardPage/DashBoard.css";
import Image from "next/image"; // Import with a lowercase "image"

import DashBoard from "../../assets/dashboard_icon.png";
import Transaction from "../../assets/transaction_icon.png";
import Schedule from "../../assets/schedule_icon.png";
import User from "../../assets/user_icon.png";
import Setting from "../../assets/setting_icon.png";
import Search from "../../assets/Search_icon.png";
import Bell from "../../assets/bell.png";
import Profile from "../../assets/prifile.png";
import Revenue from "../../assets/Revenue.png";
// import Revenue from "../../assets/revenue.png";
import Plus from "../../assets/plus.png";
import Circle from "../../assets/circle.png";
import Item from "../Item/Item";
import DonutChart from "./../DonutChart/DonutChart";
import ApexChart from "../ApexChart/ApexChart";
import Close from "../../assets/close.png";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";
import Envelope from "../../assets/envelope.png";
import Whatsapp from "../../assets/whatsapp.png";
import MyForm from "../Forms/Forms";
import Hamburger from "../../assets/hmburger.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import thumb from "../../assets/thumb.png";
import label from "../../assets/label.png";
import user from "../../assets/user.png";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const [show, setShow] = React.useState(false);
  const [bar, setBar] = React.useState(true);
  const [flag, setFlag] = React.useState(true);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    instagramLink: "",
    youtubeLink: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now access the form data in the formData object
    setShow(!show);
    console.log(formData);
    // Add your code here to submit the form data to a server or perform other actions
  };

  const handleOnClick = () => {
    setBar(!bar);
    setFlag(!flag);
  };
  const updateFlag = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  // Add an event listener to handle window resize
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      updateFlag(); // Call the function once to set the initial flag value

      // Add an event listener to check and update the flag on window resize
      window.addEventListener("resize", updateFlag);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", updateFlag);
      };
    }
  }, []);

  const handleLogout = () => {
    signOut("google");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="hamburgur">
        {bar ? (
          <FaBars onClick={handleOnClick} style={{ color: "black" }} />
        ) : (
          <RxCross1 onClick={handleOnClick} style={{ color: "black" }} />
        )}
      </div>

      <div className="w-full">
        <div className="flex p-8 h-[97vh] dasboaard-container">
          {flag && (
            <>
              <div className="lg:w-1/5 w-2/6 p-8 mr-5 dashboard-left">
                <div className="h-[10%] board">Board.</div>
                <div className="h-[75%] list">
                  <div>
                    {" "}
                    <Image
                      src={DashBoard} // Use the imported image directly
                      alt="DashBoard Logo"
                      className="side-icon"
                      //   style={{ height: "45px", width: "45px" }}
                    />{" "}
                    Dashboard
                  </div>
                  <div>
                    {" "}
                    <Image
                      src={Transaction} // Use the imported image directly
                      alt="DashBoard Logo"
                      className="side-icon"
                      //   style={{ height: "45px", width: "45px" }}
                    />{" "}
                    Transaction
                  </div>

                  <div>
                    <Image
                      src={Schedule} // Use the imported image directly
                      alt="Schedule Logo"
                      className="side-icon"
                      //   style={{ height: "45px", width: "45px" }}
                    />{" "}
                    Schedules
                  </div>
                  <div>
                    <Image
                      src={User} // Use the imported image directly
                      alt="User Logo"
                      className="side-icon"
                      //   style={{ height: "45px", width: "45px" }}
                    />{" "}
                    Users
                  </div>
                  <div>
                    <Image
                      src={Setting} // Use the imported image directly
                      alt="Setting Logo"
                      className="side-icon"
                      //   style={{ height: "45px", width: "45px" }}
                    />{" "}
                    Settings
                  </div>
                  <div onClick={handleLogout} className="cursor-pointer">
                    <AiOutlineLogout className="side-icon " />
                    Logout
                  </div>
                </div>
                <div className="h-[15%] side-bottom">
                  <div>Help</div>
                  <div>Contact Us</div>
                </div>
              </div>
            </>
          )}

          <div className="md:w-4/5 w-full p-4 dashboard-right overflow-scroll overflow-x-hidden">
            <div className="flex justify-between mb-3">
              <div className="dash-right-heading">Dashboard</div>
              <div className="flex">
                <div className="search">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                  />
                  <span className="search-icon">
                    <Image
                      src={Search} // Use the imported image directly
                      alt="Search Logo"
                    />
                  </span>
                </div>
                <div style={{ margin: "6px 15px" }}>
                  <Image
                    src={Bell} // Use the imported image directly
                    alt="Bell Logo"
                  />
                </div>

                <div>
                  <Image
                    src={Profile} // Use the imported image directly
                    alt="Profile Logo"
                  />
                </div>
              </div>
            </div>
            <div>
              {/* <Item /> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="box">
                  <div className="round bg-[#7FCD93]">
                    <Image
                      src={Revenue} // Use the imported image directly
                      alt="Revenue Logo"
                    />
                  </div>
                  <div className="total-revenue">Total Revenues</div>
                  <div className="flex justify-between">
                    <div className="value">$2,129,430</div>
                    <div className="value-button">
                      <button>+2.5%</button>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="round bg-[#DEBF85]">
                    <Image
                      src={label} // Use the imported image directly
                      alt="label Logo"
                    />
                  </div>
                  <div className="total-revenue">Total Revenues</div>
                  <div className="flex justify-between">
                    <div className="value">$2,129,430</div>
                    <div className="value-button">
                      <button>+2.5%</button>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="round bg-[#ECA4A4]">
                    <Image
                      src={thumb} // Use the imported image directly
                      alt="thumb Logo"
                    />
                  </div>
                  <div className="total-revenue">Total Revenues</div>
                  <div className="flex justify-between">
                    <div className="value">$2,129,430</div>
                    <div className="value-button">
                      <button>+2.5%</button>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="round bg-[#A9B0E5]">
                    <Image
                      src={user} // Use the imported image directly
                      alt="user Logo"
                    />
                  </div>
                  <div className="total-revenue">Total Revenues</div>
                  <div className="flex justify-between">
                    <div className="value">$2,129,430</div>
                    <div className="value-button">
                      <button>+2.5%</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px] rounded-[15px] p-4 bg-[#FFFFFF]">
              <ApexChart />
            </div>
            <div>
              <div className="flex mt-3 gap-3  flex-col xl:flex-row">
                <div className="bottom-box1 lg:w-1/2 w-full">
                  <div className="flex justify-between mb-[15px]">
                    <div className="top-product">Top products</div>
                    <div className="months">May - June 2021</div>
                  </div>

                  <DonutChart />
                </div>
                {formData.name && (
                  <>
                    <div className="bottom-box3 lg:w-1/2 w-full">
                      <div className="text1">{formData.name}</div>

                      <div className="div-container">
                        <div className="flex justify-between">
                          <div className=" flex bottom-div">
                            <Image
                              src={Whatsapp}
                              alt="Youtube Logo"
                              className="inline"
                            />

                            <div>Whatsapp</div>
                          </div>
                          <div className="flex bottom-div">
                            <Image
                              src={Instagram}
                              alt="Instagram Logo"
                              className="inline"
                            />

                            <div>Instagram</div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex bottom-div">
                            <Image src={Envelope} alt="Envelope Logo" />

                            <div>Email</div>
                          </div>
                          <div className="flex bottom-div ">
                            <Image src={Youtube} alt="Youtube Logo" />

                            <div>Youtube</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {!formData.name && (
                  <>
                    <div className="bottom-box2 w-full">
                      <button onClick={() => setShow(!show)}>
                        <div className="circle">
                          <Image
                            src={Plus} // Use the imported image directly
                            alt="Plus Logo"
                          />
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <div className="dialogbox ">
          <div className="dialog-container">
            <div className="dialog-header flex justify-between">
              <div className="dialog-title">Add New Product</div>
              <div className="dialog-close">
                <button onClick={() => setShow(!show)}>
                  <Image
                    src={Close} // Use the imported image directly
                    alt="Close Logo"
                  />
                </button>
              </div>
            </div>
            <hr className="w-full p-0 m-0 mt-3" />
            <div className="form">
              <div className="form-container">
                {/* <MyForm formData={formData} /> */}
                <MyForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
