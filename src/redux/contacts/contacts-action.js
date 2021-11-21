import { createAction } from "@reduxjs/toolkit";

export const createContact = createAction("contacts/Create");
export const changeFilter = createAction("contacts/Filter");
