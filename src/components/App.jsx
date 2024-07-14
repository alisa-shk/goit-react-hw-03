import { useState, useEffect } from "react";
import initialContacts from "../contacts.json";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";


const App = () => {
    const startedContacts =
    JSON.parse(localStorage.getItem("contacts")) || initialContacts;

    const [contacts, setContacts] = useState(startedContacts);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem("contacts"));
        console.log(storedContacts);
    if (storedContacts && storedContacts.length > 0) {
        setContacts(storedContacts);
    } else {
        setContacts(initialContacts);
    }
    }, []);

    useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);


    const addContact = (newContact) => {
    setContacts((prevContacts) => {
        return [...prevContacts, newContact];
    });
    };

    const deleteContact = (contactId) => {
        setContacts(prevContacts => {
            return prevContacts.filter(contact => contact.id !=contactId)
        });
    };

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={search} onSearch={setSearch} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
    )
};

export default App;


