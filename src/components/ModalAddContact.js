import axios from "axios";
import React, { useState } from "react";

export default function ModalAddContact(props) {
  const [user, setUser] = useState({
    age: 0,
    firstName: "",
    lastName: "",
    photo: "",
  });

  const checkChanges = () => {
    if (user.firstName) return false;
    if (user.lastName) return false;
    if (user.age) return false;
    if (user.photo) return false;
    return true;
  };

  const createUser = () => {
    axios({
      method: "POST",
      url: `https://simple-contact-crud.herokuapp.com/contact`,
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        photo: "string",
      },
    })
      .then((response) => {
        axios({
          method: "GET",
          url: `https://simple-contact-crud.herokuapp.com/contact`,
        }).then((response) => {
          props.addUser(response.data.data.pop());
          props.setActiveModal("contact-saved");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100vh",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 30,
          borderRadius: 20,
          position: "relative",
        }}
      >
        <button
          style={{ position: "absolute", top: -10, right: -10 }}
          onClick={props.toggle}
        >
          <img
            src="assets/icons/ant-design_close-circle-filled.png"
            alt="Close"
          />
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          <h1 className="text-lg font-bold">Add New Contact</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 50,
            }}
          >
            <img
              src={user.photo}
              onError={(e) => (e.target.src = "assets/images/blank-image.png")}
              alt="Photo"
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  backgroundColor: "#EEEAEA",
                  padding: 10,
                  borderRadius: 10,
                }}
                placeholder="First Name"
                onChange={(e) => {
                  setUser({
                    ...user,
                    firstName: e.target.value.split(" ").join(""),
                  });
                }}
                value={user.firstName}
                className="focus:outline-none mb-4"
              />

              <input
                type="text"
                style={{
                  backgroundColor: "#EEEAEA",
                  padding: 10,
                  borderRadius: 10,
                }}
                placeholder="Last Name"
                onChange={(e) => {
                  setUser({
                    ...user,
                    lastName: e.target.value.split(" ").join(""),
                  });
                }}
                value={user.lastName}
                className="focus:outline-none mb-4"
              />
              <input
                type="number"
                style={{
                  backgroundColor: "#EEEAEA",
                  padding: 10,
                  borderRadius: 10,
                }}
                placeholder="Search"
                onChange={(e) => {
                  setUser({
                    ...user,
                    age: e.target.value,
                  });
                }}
                value={user.age}
                className="focus:outline-none mb-4"
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            {!checkChanges() && (
              <button
                style={{
                  backgroundColor: "#20A4DC",
                  padding: 20,
                  color: "white",
                  borderRadius: 10,
                }}
                onClick={() => {
                  createUser();
                }}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
