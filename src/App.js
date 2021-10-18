import './App.css';
import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter.jsx';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <section className="phonebook">
          <h1 className="phonebook__title">Phonebook</h1>
          <ContactForm />
        </section>
        <section className="contacts">
          <h2 className="contacts__title">Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </>
  );
}
