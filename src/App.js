import './App.css';
import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

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
          <ContactList />
        </section>
      </div>
    </>
  );
}
