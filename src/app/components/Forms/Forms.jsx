"use client";
import React, { useState } from "react";
import "./Form.css";
function MyForm({ formData, handleInputChange, handleSubmit }) {
  const [open, setOpen] = useState(false);
  const [activeHr, setActiveHr] = useState(1);
  // Define state variables for form fields

  // Handle form submission
  
  const toggleHrColor = () => {
    if (activeHr === 1) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    setActiveHr(activeHr === 1 ? 2 : 1);
  };

  const handleNextClick = () => {
    setOpen(true);
    setActiveHr(2);
  };

  const handleBackClick = () => {
    setOpen(false);
    setActiveHr(1);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 text-center form-heading" onClick={toggleHrColor}>
          Basic <br />
          <hr className={activeHr === 1 ? "blue-hr" : "grey-hr"} />
        </div>
        <div className="w-1/2 text-center form-heading" onClick={toggleHrColor}>
          Contact
          <br />
          <hr className={activeHr === 2 ? "blue-hr" : "grey-hr"} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {!open && (
          <>
            <div>
              <label htmlFor="name">Enter Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Eg. John Doe"
              />
            </div>
            <div>
              <label htmlFor="email">Enter Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Eg. John@xyz.com"
              />
            </div>
            <div>
              <label htmlFor="phone">Enter Phone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Eg.  9123456789"
              />
            </div>

            <button
              //   type="submit"
              className="next-button"
              onClick={() => handleNextClick()}
            >
              Next
            </button>
          </>
        )}
        {open && (
          <>
            <div>
              <label htmlFor="instagramLink">Instagram Link (Optional) </label>
              <input
                type="text"
                id="instagramLink"
                name="instagramLink"
                value={formData.instagramLink}
                onChange={handleInputChange}
                placeholder="Eg. ..instagram.com/username"
              />
            </div>
            <div>
              <label htmlFor="youtubeLink">Youtube Link (Optional)</label>
              <input
                type="text"
                id="youtubeLink"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleInputChange}
                placeholder="Eg. ..youtebe/username"
              />
            </div>

            <button type="submit" className="next-button">
              Done
            </button>

            <button className="back-button" onClick={() => handleBackClick()}>
              back
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default MyForm;
