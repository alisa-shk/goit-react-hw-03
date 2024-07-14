import initialContacts from "../contacts.json";
import { useState, useEffect } from "react";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";


const App = () => {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem("contacts");
        return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    });
    const [search, setSearch] = useState("");

    useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
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


