export const getContacts = () => (dispatch) => {
  fetch("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts")
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: "contacts/GetContacts", payload: data });
    })
    .catch((error) => error);
};
