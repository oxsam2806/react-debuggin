import React from "react";

function UserProfile({ name, profession, age }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>

      <p>
        <strong>Profession:</strong> {profession}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default UserProfile;