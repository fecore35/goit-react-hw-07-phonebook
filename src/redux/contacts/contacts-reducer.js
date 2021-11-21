import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { changeFilter } from "../contacts/contacts-action";

import {
  getContactsAsync,
  addContactAsync,
  deleteContactAsync,
} from "redux/contacts/contacts-operation";

const itemsReducer = createReducer([], {
  /* Get */
  [getContactsAsync.fulfilled]: (_, action) => [...action.payload],

  /* Create */
  [addContactAsync.fulfilled]: (state, action) => [...state, action.payload],

  /* Delete */
  [deleteContactAsync.fulfilled]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  /* Get */
  [getContactsAsync.pending]: () => true,
  [getContactsAsync.fulfilled]: () => false,
  [getContactsAsync.rejected]: () => false,

  /* Create */
  [addContactAsync.pending]: () => true,
  [addContactAsync.fulfilled]: () => false,
  [addContactAsync.rejected]: () => false,

  /* Delete */
  [deleteContactAsync.pending]: () => true,
  [deleteContactAsync.fulfilled]: () => false,
  [deleteContactAsync.rejected]: () => false,
});

const itemsError = createReducer(null, {
  /* Get */
  [getContactsAsync.rejected]: (_, action) => action.payload,

  /* Create */
  [addContactAsync.rejected]: (_, action) => action.payload,

  /* Delete */
  [deleteContactAsync.rejected]: (_, action) => action.payload,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading,
  error: itemsError,
});
