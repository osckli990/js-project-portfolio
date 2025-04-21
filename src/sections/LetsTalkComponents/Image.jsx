import React from "react";

import profileImage from "../../assets/cropped_profile.png";

export const Image = () => {
  return (
    <img
      src={profileImage}
      alt="profile image"
      aria-label="profile image"
      className="mt-4 mb-16 mx-auto w-3/4"
    />
  );
};
