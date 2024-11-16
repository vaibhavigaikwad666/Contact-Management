import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ContactForm from '../components/ContactForm';
import ContactsTable from '../components/ContactsTable';

const ContactsPage = () => {
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);

    useEffect(() => {
        api.get('/contacts').then(response => setContacts(response.data));
    }, []);

    const handleSave = async (contactData) => {
        const contact = {
            firstName: contactData.firstName,
            lastName: contactData.lastName,
            email: contactData.email,
            phone: contactData.phone,
            company: contactData.company,
            jobTitle: contactData.jobTitle,
        };
    
        try {
            const duplicateContact = contacts.find(c => c.email === contact.email && !editContact);
            if (duplicateContact) {
                alert("A contact with this email already exists.");
                return;
            }
    
            if (editContact) {
                const response = await api.put(`/contacts/${editContact._id}`, contact);

                setContacts(contacts.map(c => (c._id === editContact._id ? response.data : c)));
            } else {
                const response = await api.post('/contacts', contact);
                setContacts([...contacts, response.data]);
            }
    
            setEditContact(null);
        } catch (error) {
            console.error("Error while saving contact:", error);
            alert(error.response?.data?.error || "Failed to save contact");
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/contacts/${id}`);
            setContacts(contacts.filter(contact => contact._id !== id));
        } catch (error) {
            console.error("Error while deleting contact:", error.response || error.message);
        }
    };

    const handleEdit = (contact) => {
        setEditContact(contact); 
    };

    return (
        <div>
            <ContactForm onSave={handleSave} editContact={editContact} /><br/><br/><br/>
            <ContactsTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default ContactsPage;