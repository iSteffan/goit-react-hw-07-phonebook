import {
  List,
  ListItem,
  Btn,
  ContactName,
  ContactPhone,
} from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactName>{contact.name}:</ContactName>
            <ContactPhone>{contact.phone}</ContactPhone>
            <Btn type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </Btn>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
