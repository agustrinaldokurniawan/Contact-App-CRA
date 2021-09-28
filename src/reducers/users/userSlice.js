import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  activeUser: {},
  modal: false,
  activeModal: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    syncUser: (state, action) => {
      if (state.users !== action.payload.users) {
        state.users = action.payload;
      }
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    updateUser: (state, action) => {
      const userIdx = state.users.findIndex((e) => e.id === action.payload.id);
      if (userIdx > -1) {
        state.users[userIdx] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      const userIdx = state.users.findIndex((e) => e.id === action.payload.id);
      if (userIdx > -1) {
        state.users.slice(userIdx, 1);
      }
    },
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    },
    addContact: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const {
  syncUser,
  setActiveUser,
  toggleModal,
  updateUser,
  deleteUser,
  setActiveModal,
  addContact,
} = userSlice.actions;

export default userSlice.reducer;
