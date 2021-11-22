import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

// export const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const search = filter.toUpperCase();
//   return contacts.filter((contact) =>
//     contact.name.toUpperCase().includes(search)
//   );
// };

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const search = filter.toUpperCase();
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(search)
    );
  }
);
