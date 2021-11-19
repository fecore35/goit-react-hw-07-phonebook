import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";
import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/contacts-action";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
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
                  dispatch(deleteContact(e.currentTarget.dataset.id));
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
