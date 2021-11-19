import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  createContact,
  deleteContact,
  changeFilter,
} from "../contacts/contacts-action";

const itemsReducer = createReducer([], {
  [createContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
