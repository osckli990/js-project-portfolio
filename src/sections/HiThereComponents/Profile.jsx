import React from "react";

import profileImage from "../../assets/cropped_profile.png";

export const Profile = () => {
  return (
    <img
      className="my-4 mx-auto h-154" //min height!!
      src={profileImage}
      alt="Profile image"
      aria-label="Profile image"
    />
  );
};
