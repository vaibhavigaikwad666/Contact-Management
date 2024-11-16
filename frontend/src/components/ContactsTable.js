import React from 'react';
    import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

    const ContactsTable = ({ contacts, onEdit, onDelete }) => (
        <TableContainer>
            <Table border="1">
                <TableHead>
                    <TableRow>
                        <TableCell><center><b>First Name</b></center></TableCell>
                        <TableCell><center><b>Last Name</b></center></TableCell>
                        <TableCell><center><b>E-mail</b></center></TableCell>
                        <TableCell><center><b>Phone Number</b></center></TableCell>
                        <TableCell><center><b>Company</b></center></TableCell>
                        <TableCell><center><b>Job Title</b></center></TableCell>
                        <TableCell><center><b>Actions</b></center></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact._id}>
                            <TableCell><center>{contact.firstName}</center></TableCell>
                            <TableCell><center>{contact.lastName}</center></TableCell>
                            <TableCell><center>{contact.email}</center></TableCell>
                            <TableCell><center>{contact.phone}</center></TableCell>
                            <TableCell><center>{contact.company}</center></TableCell>
                            <TableCell><center>{contact.jobTitle}</center></TableCell>
                            <TableCell>
                                <Button onClick={() => onEdit(contact)}>Edit</Button>
                                <Button onClick={() => onDelete(contact._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    export default ContactsTable;
    