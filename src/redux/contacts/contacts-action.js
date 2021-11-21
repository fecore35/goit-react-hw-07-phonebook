import { createAction } from "@reduxjs/toolkit";

/* Get */
// export const getContactsRequest = createAction("contacts/GetContactsRequest");
// export const getContactsSuccesses = createAction(
//   "contacts/GetContactsSuccesses"
// );
// export const getContactsError = createAction("contacts/GetContactsError");

/* Create */
// export const addContactRequest = createAction("contacts/addContactRequest");
// export const addContactSuccesses = createAction("contacts/addContactSuccesses");
// export const addContactError = createAction("contacts/addContactError");

/* Delete */
// export const deleteContactRequest = createAction(
//   "contacts/deleteContactRequest"
// );
// export const deleteContactSuccesses = createAction(
//   "contacts/deleteContactSuccesses"
// );
// export const deleteContactError = createAction("contacts/deleteContactError");

export const createContact = createAction("contacts/Create");
export const changeFilter = createAction("contacts/Filter");
