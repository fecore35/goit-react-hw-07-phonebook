import { createAction } from "@reduxjs/toolkit";

const createContact = createAction("contacts/Create");
const deleteContact = createAction("contacts/Delete");
const changeFilter = createAction("contacts/Filter");

export { createContact, deleteContact, changeFilter };
