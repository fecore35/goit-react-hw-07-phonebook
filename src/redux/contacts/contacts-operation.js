import * as actions from "redux/contacts/contacts-action";

export const getContacts = () => (dispatch) => {
  dispatch(actions.getContactsRequest());

  fetch("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts")
    .then((data) => data.json())
    .then((data) => {
      dispatch(actions.getContactsSuccesses(data));
    })
    .catch((error) => dispatch(actions.getContactsError(error)));
};
