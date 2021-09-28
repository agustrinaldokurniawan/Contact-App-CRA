import React, { useEffect, useState } from "react";
import ListContacts from "../components/ListContacts";
import Container from "./container";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  syncUser,
  setActiveUser,
  toggleModal,
  setActiveModal,
} from "../reducers/users/userSlice";

import Lottie from "react-lottie";
import SpaceAnimation from "../assets/lottie/space";

const Chat = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);

  const selectUser = (user) => {
    dispatch(setActiveUser(user));
    dispatch(toggleModal());
    dispatch(setActiveModal("contact-detail"));
  };

  const addUserModal = () => {
    dispatch(toggleModal());
    dispatch(setActiveModal("contact-add"));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SpaceAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const fetchUsers = async () => {
    const listUsers = await axios.get(
      "https://simple-contact-crud.herokuapp.com/contact"
    );
    dispatch(syncUser(listUsers.data.data));
  };

  return (
    <Container
      styles={{
        display: "flex",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
      }}
    >
      {users.length > 0 && (
        <ListContacts
          users={users}
          selectUser={selectUser}
          className="bg-white flex-1 "
          addUser={addUserModal}
        />
      )}

      <div className="hidden md:flex justify-center items-center w-full">
        <Lottie options={defaultOptions} height={"30%"} width={"30%"} />
      </div>
    </Container>
  );
};

export default Chat;
