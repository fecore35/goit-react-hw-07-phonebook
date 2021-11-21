import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";
import s from "./ContactList.module.css";
import { getVisibleContacts } from "redux/contacts/contacts-selectors";
import {
  getContactsAsync,
  deleteContactAsync,
} from "redux/contacts/contacts-operation";

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone: number }) => {
          const tel = `tel:` + number.replace(/^(\+)|\D/g, "$1");
          return (
            <li key={id} className={s.item}>
              <p>
                {name}: <a href={tel}>{number}</a>
              </p>
              <button
                className={s.button}
                type="button"
                data-id={id}
                onClick={(e) => {
                  dispatch(deleteContactAsync(e.currentTarget.dataset.id));
                }}
              >
                <IoCloseCircleSharp />
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
