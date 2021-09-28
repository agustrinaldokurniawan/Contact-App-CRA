import axios from "axios";
import React, { useState } from "react";

export default function ModalUser(props) {
  const [user, setUser] = useState({
    age: props.activeUser.age,
    firstName: props.activeUser.firstName,
    lastName: props.activeUser.lastName,
    photo: props.activeUser.photo,
    id: props.activeUser.id,
  });

  const checkChanges = () => {
    if (user.firstName !== props.activeUser.firstName) return false;
    if (user.lastName !== props.activeUser.lastName) return false;
    if (user.age !== props.activeUser.age) return false;
    if (user.photo !== props.activeUser.photo) return false;
    return true;
  };

  const updateUser = () => {
    axios({
      method: "PUT",
      url: `https://simple-contact-crud.herokuapp.com/contact/${user.id}`,
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        photo: user.photo,
      },
    })
      .then((response) => {
        props.updateUser(response.data.data);
        props.setActiveModal("update-success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = () => {
    axios({
      method: "DELETE",
      url: `https://simple-contact-crud.herokuapp.com/contact/${user.id}`,
    })
      .then((response) => {
        props.deleteUser(user.id);
        props.setActiveModal("delete-success");
      })
      .catch((error) => {
        console.log(user.id);
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
          <h1 className="text-lg font-bold">
            {props.activeUser.firstName} {props.activeUser.lastName}
          </h1>

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
              src={props.activeUser.photo}
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
                defaultValue={props.activeUser.firstName}
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
                defaultValue={props.activeUser.lastName}
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
                defaultValue={props.activeUser.age}
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
                  updateUser();
                }}
              >
                Update
              </button>
            )}
            <button
              style={{
                backgroundColor: "#F96C6C",
                padding: 20,
                color: "white",
                borderRadius: 10,
              }}
              onClick={() => {
                deleteUser();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
