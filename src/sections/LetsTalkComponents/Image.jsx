import React from "react";

import profileImage from "../../assets/cropped_profile.avif";

export const Image = () => {
  return (
    <img
      src={profileImage}
      alt="profile image"
      aria-label="profile image"
      className="mx-auto size-[164px]"
    />
  );
};
