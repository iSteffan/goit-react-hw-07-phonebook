import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contactSlice';
import { setFilter, getFilter } from 'redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { Wrapper, MainTitle, Title, TextError } from './App.styled';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const filteredArr = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const doDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const doAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSave={doAddContact} />
      <Title>Contacts</Title>
      <Filter filter={filter} handleInputChange={handleInputChange}></Filter>
      {isLoading && <Loader />}
      {error && <TextError>Oops, something wrong is going on...</TextError>}
      <ContactList
        contacts={filteredArr()}
        onDelete={doDeleteContact}
      ></ContactList>
    </Wrapper>
  );
};
