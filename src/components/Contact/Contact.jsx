const Contact = ({ data: { name, number, id }, onDelete }) => {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{number}</li>
            </ul>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
};

export default Contact;