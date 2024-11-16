const express = require('express');
    const { addContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');
    const router = express.Router();

    router.post('/contacts', addContact);
    router.get('/contacts', getContacts);
    router.put('/contacts/:id', updateContact);
    router.delete('/contacts/:id', deleteContact);

    module.exports = router;