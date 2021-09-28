import React, { useState } from "react";

import Contact from "./Contact";

import Lottie from "react-lottie";
import EmptyBox from "../assets/lottie/empty-box.json";

export default function ListContacts(props) {
  const [keyword, setKeyword] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyBox,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={`shadow-xl ${props.className}`}
      style={{
        ...props.styles,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: 300,
        borderRadius: 25,
        height: "100%",
        padding: 20,
        position: "relative",
      }}
    >
      <h1 className="text-xl font-bold ">Chat</h1>

      <button style={{ position: "absolute", right: "20px" }}>
        <img
          src="assets/icons/akar-icons_circle-plus-fill.png"
          alt="add"
          width={36}
          height={36}
          onClick={props.addUser}
        />
      </button>

      <input
        type="text"
        style={{ backgroundColor: "#EEEAEA", padding: 10, borderRadius: 10 }}
        placeholder="Search"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        className="focus:outline-none mb-4"
      />

      <div
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {props.users.map((user, key) => {
          return (
            JSON.stringify(user).toLowerCase().includes(keyword) && (
              <Contact user={user} key={key} selectUser={props.selectUser} />
            )
          );
        })}
      </div>

      {props.user && (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </div>
  );
}
