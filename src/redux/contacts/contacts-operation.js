import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsAsync = createAsyncThunk(
  "contacts/getContact",
  async () => {
    const response = await axios.get(
      "https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts"
    );
    const contacts = response.data;
    return contacts;
  }
);

export const addContactAsync = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(
      "https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts",
      contact
    );
    console.log(response);
    const newContact = response.data;
    return newContact;
  }
);

export const deleteContactAsync = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    const response = await axios.delete(
      `https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/${id}`
    );
    console.log(response);
    const deleteContact = response.data;
    return deleteContact;
  }
);
