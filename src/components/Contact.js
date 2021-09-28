import React from "react";
import { useSelector } from "react-redux";

export default function Contact(props) {
  const { photo, firstName, lastName, id } = props.user;
  const activeUser = useSelector((state) => state.users.activeUser);

  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        borderLeft: activeUser.id === id && "5px solid #20A4DC",
      }}
      onClick={() => {
        props.selectUser(props.user);
      }}
    >
      <img
        src={photo}
        onError={(e) => (e.target.src = "assets/images/blank-image.png")}
        alt={`${firstName} ${lastName}`}
        style={{ borderRadius: 100, width: 50, height: 50, marginLeft: 10 }}
      />
      <p className="font-semibold">
        {firstName} {lastName}
      </p>
    </button>
  );
}
