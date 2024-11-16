import React, { useState, useEffect } from 'react';
    import { TextField, Button } from '@mui/material';

    const ContactForm = ({ onSave,editContact }) => {
        const [contact, setContact] = useState({
            firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: ''
        });

        useEffect(()=>{
            if(editContact){
                setContact(editContact);
            }
        },[editContact]);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setContact({ ...contact, [name]: value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onSave(contact);
            setContact({ firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '' });
        };
        return (
            <div>
                <h1><center>Contact Management- Mini Feature of a CRM</center></h1><br/>
                <h2>Add Your Contact Here!!</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="First Name" name="firstName" value={contact.firstName} onChange={handleChange} />
                <TextField label="Last Name" name="lastName" value={contact.lastName} onChange={handleChange} />
                <TextField label="Email" name="email" value={contact.email} onChange={handleChange} />
                <TextField label="Phone" name="phone" value={contact.phone} onChange={handleChange} />
                <TextField label="Company" name="company" value={contact.company} onChange={handleChange} />
                <TextField label="Job Title " name="jobTitle" value={contact.jobTitle} onChange={handleChange} />
                <Button type="submit">Save</Button>
            </form>
            </div>
        );
    };

    export default ContactForm;