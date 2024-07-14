import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={s.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
};
export default ContactList;