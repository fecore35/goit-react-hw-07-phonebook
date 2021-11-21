import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsAsync = createAsyncThunk(
  "contacts/getContact",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts"
      );
      const contacts = response.data;
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getContacts = () => (dispatch) => {
//   dispatch(actions.getContactsRequest());

//   fetch("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts")
//     .then((data) => data.json())
//     .then((data) => {
//       dispatch(actions.getContactsSuccesses(data));
//     })
//     .catch((error) => dispatch(actions.getContactsError(error)));
// };

export const addContactAsync = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts",
        contact
      );
      const newContact = response.data;
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const addContact = (contact) => (dispatch) => {
//   dispatch(actions.addContactRequest());
//   console.log(contact);

//   fetch("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(contact),
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       dispatch(actions.addContactSuccesses(data));
//     })
//     .catch((error) => {
//       dispatch(actions.addContactError(error));
//     });
// };

export const deleteContactAsync = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/${id}`
      );
      const deleteContact = response.data;
      return deleteContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(actions.deleteContactRequest());

//   fetch(`https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/${id}`, {
//     method: "DELETE",
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//       dispatch(actions.deleteContactSuccesses(data));
//     })
//     .catch((error) => dispatch(actions.deleteContactError(error)));
// };
