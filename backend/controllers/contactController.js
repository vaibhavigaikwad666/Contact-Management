const Contact = require('../models/Contact');

    
exports.addContact = async (req, res) => {
    try {
        const { email } = req.body;
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ error: 'A contact with this email already exists.' });
        }
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        console.error("Error during contact creation:", error);
        res.status(400).json({ error: 'Failed to add contact', details: error.message });
    }
};

    
    exports.getContacts = async (req, res) => {
        try {
            const contacts = await Contact.find();
            res.json(contacts);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch contacts' });
        }
    };
 
    exports.updateContact = async (req, res) => {
        try {
            const { email } = req.body;
            const contactId = req.params.id;
    
            const existingContact = await Contact.findOne({ email });
            if (existingContact && existingContact._id.toString() !== contactId) {
                return res.status(400).json({ error: 'A contact with this email already exists.' });
            }
    
            const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
            res.json(updatedContact);
        } catch (error) {
            res.status(400).json({ error: 'Failed to update contact' });
        }
    };

    exports.deleteContact = async (req, res) => {
        try {
            await Contact.findByIdAndDelete(req.params.id);
            res.json({ message: 'Contact deleted' });
        } catch (error) {
            res.status(400).json({ error: 'Failed to delete contact' });
        }
    };
    