import React from "react";

import profileImage from "../../assets/cropped_profile.png";

export const Profile = () => {
  return (
    <img
      className="my-[16px] mx-auto min-h-154"
      src={profileImage}
      alt="Profile image"
      aria-label="Profile image"
    />
  );
};
