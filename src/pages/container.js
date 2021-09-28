import React, { useState } from "react";
import Menu from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import ModalUser from "../components/ModalUser";
import {
  toggleModal,
  updateUser,
  deleteUser,
  setActiveModal,
  addContact,
} from "../reducers/users/userSlice";
import ModalUpdate from "../components/ModalUpdate";
import ModalAddContact from "../components/ModalAddContact";
import ModalAddSuccess from "../components/ModalAddSuccess";

const Container = (props) => {
  const activeUser = useSelector((state) => state.users.activeUser);
  const activeModal = useSelector((state) => state.users.activeModal);
  const show = useSelector((state) => state.users.modal);
  const dispatch = useDispatch();

  const dispatchUpdateUser = (user) => {
    dispatch(updateUser(user));
  };

  const dispatchAddUser = (user) => {
    dispatch(addContact(user));
  };

  const dispatchDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const dispatchsetActiveModal = (id) => {
    dispatch(setActiveModal(id));
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#20A4DC",
        flexDirection: "row",
      }}
    >
      {show && activeUser.id && activeModal === "contact-detail" && (
        <ModalUser
          activeUser={activeUser}
          toggle={() => {
            dispatch(toggleModal());
            dispatch(setActiveModal(""));
          }}
          updateUser={dispatchUpdateUser}
          deleteUser={dispatchDeleteUser}
          setActiveModal={dispatchsetActiveModal}
        />
      )}

      {show && activeModal === "delete-success" && (
        <ModalUpdate
          toggle={() => {
            dispatch(toggleModal());
            dispatch(setActiveModal(""));
          }}
        />
      )}

      {show && activeModal === "update-success" && (
        <ModalUpdate
          toggle={() => {
            dispatch(toggleModal());
            dispatch(setActiveModal(""));
          }}
        />
      )}

      {show && activeModal === "contact-add" && (
        <ModalAddContact
          toggle={() => {
            dispatch(toggleModal());
            dispatch(setActiveModal(""));
          }}
          addUser={dispatchAddUser}
          setActiveModal={dispatchsetActiveModal}
        />
      )}

      {show && activeModal === "contact-saved" && (
        <ModalAddSuccess
          toggle={() => {
            dispatch(toggleModal());
            dispatch(setActiveModal(""));
          }}
        />
      )}

      <Menu />
      <div
        className="content"
        style={{
          ...props.styles,
          backgroundColor: "#F9FDFF",
          width: "95%",
          height: "95vh",
          borderRadius: 25,
          margin: 10,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Container;
