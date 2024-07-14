import s from "./Contact.module.css";

const Contact = ({ data: { name, number, id }, onDelete }) => {
    return (
        <div className={s.list}>
            <ul className={s.listItem}>
                <li>{name}</li>
                <li>{number}</li>
            </ul>
            <button className={s.btn} onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
};

export default Contact;