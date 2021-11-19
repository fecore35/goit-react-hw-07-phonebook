import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getContactsRequest,
  getContactsSuccesses,
  getContactsError,
  createContact,
  deleteContact,
  changeFilter,
} from "../contacts/contacts-action";

const itemsReducer = createReducer([], {
  [getContactsSuccesses]: (_, action) => [...action.payload],
  [createContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const isLoading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccesses]: () => false,
  [getContactsError]: () => false,
});

const itemsError = createReducer(null, {
  [getContactsError]: (_, action) => action.payload,
});

const filterReducer = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading,
  error: itemsError,
});
