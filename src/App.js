import React from 'react';
import './App.css';
import ContactForm from "./ContactForm.js"
import ContactsList from "./ContactsList.js"
function App() {
  return (
    <div className="App">
      <h1>Книга контактов</h1>
      <ContactForm />
      <ContactsList />
    </div>
  );
}

export default App;
