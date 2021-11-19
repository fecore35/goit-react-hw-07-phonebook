import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/GetContactsRequest");
export const getContactsSuccesses = createAction(
  "contacts/GetContactsSuccesses"
);
export const getContactsError = createAction("contacts/GetContactsError");

export const createContact = createAction("contacts/Create");
export const deleteContact = createAction("contacts/Delete");
export const changeFilter = createAction("contacts/Filter");
