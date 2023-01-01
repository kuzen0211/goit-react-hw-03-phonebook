import { DeleteBtn, List, Item } from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, deleteContact, upperCaseWord }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            {upperCaseWord(contact.name)}: {contact.number}
            <DeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteBtn>
          </Item>
        );
      })}
    </List>
  );
};

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  upperCaseWord: PropTypes.func.isRequired,
};
