import React from "react";

export default function ProfileMenu({ avatar, title }) {
  return (
    <div>
      <img src={avatar} alt={title} />
    </div>
  );
}
