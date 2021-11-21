import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getContactsRequest,
  getContactsSuccesses,
  getContactsError,
  addContactRequest,
  addContactSuccesses,
  addContactError,
  deleteContactRequest,
  deleteContactSuccesses,
  deleteContactError,
  changeFilter,
} from "../contacts/contacts-action";

import { getContactsAsync } from "redux/contacts/contacts-operation";

const itemsReducer = createReducer([], {
  /* Get */
  [getContactsAsync.fulfilled]: (_, action) => [...action.payload],

  /* Create */
  [addContactSuccesses]: (state, action) => [...state, action.payload],

  /* Delete */
  [deleteContactSuccesses]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  /* Get */
  [getContactsAsync.pending]: () => true,
  [getContactsAsync.fulfilled]: () => false,
  [getContactsAsync.rejected]: () => false,

  /* Create */
  [addContactRequest]: () => true,
  [addContactSuccesses]: () => false,
  [addContactError]: () => false,

  /* Delete */
  [deleteContactRequest]: () => true,
  [deleteContactSuccesses]: () => false,
  [deleteContactError]: () => false,
});

const itemsError = createReducer(null, {
  [getContactsAsync.rejected]: (_, action) => action.payload,
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
