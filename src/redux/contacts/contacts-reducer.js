import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getContactsRequest,
  getContactsSuccesses,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccesses,
  deleteContactError,
  createContact,
  changeFilter,
} from "../contacts/contacts-action";

const itemsReducer = createReducer([], {
  [getContactsSuccesses]: (_, action) => [...action.payload],
  [createContact]: (state, action) => [action.payload, ...state],
  [deleteContactSuccesses]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  /* Get */
  [getContactsRequest]: () => true,
  [getContactsSuccesses]: () => false,
  [getContactsError]: () => false,

  /* Delete */
  [deleteContactRequest]: () => true,
  [deleteContactSuccesses]: () => false,
  [deleteContactError]: () => false,
});

const itemsError = createReducer(null, {
  [getContactsError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
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
