'use strict';

//import { Contact } from './Contact.js';

class Contact {
    _Name;
    _City;
    _Email;
  
    constructor(name, city, email) {
      this._Name = name;
      this._City = city;
      this._Email = email;
    }
  
    set name(name) {
      this._Name = name;
    }
    set city(city) {
      this._City = city;
    }
    set email(email) {
      this._Email = email;
    }
  
    get name() {
      return this._Name;
    }
    get city() {
      return this._City;
    }
    get email() {
      return this._Email;
    }
  }
  const contact = new Contact();

// Utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Main Code

const input = select('.input');
const addBtn = select('.add-btn');
const deleteBtn = select('.delete-btn')
const output = select('.output');
const info = select('.info');
const counter = select('.counter');



addBtn.addEventListener('click', function () {
  if (validateContact()) {
    insertContact();
  }
});

const contacts = [];
let divCounter = 0;

function insertContact() {
  const inputValues = input.value.split(',');

  const newContact = new Contact(...inputValues);
  contacts.unshift(newContact);

  const contactDiv = document.createElement('div');
  contactDiv.className = 'contact-container';

  const insertParagraph = document.createElement('p');
  insertParagraph.textContent = `Name: ${newContact.name}`;
  contactDiv.appendChild(insertParagraph);

  const cityP = document.createElement('p');
  cityP.textContent = `City: ${newContact.city}`;
  contactDiv.appendChild(cityP);

  const emailP = document.createElement('p');
  emailP.textContent = `Email: ${newContact.email}`;
  contactDiv.appendChild(emailP);

  // Add delete btn
  const deleteBtn = document.createElement('delete-btn');
  deleteBtn.textContent = 'x';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function () {
    deleteContact(contactDiv);
  });
  contactDiv.appendChild(deleteBtn);

  output.insertBefore(contactDiv, output.firstChild);
  divCounter++;
  counter.innerHTML = `<p>Contacts saved: ${divCounter}</p>`;
  validateContact();
}

function validateContact() {
    const inputValue = input.value.trim();
  
    if (!inputValue) {
      info.textContent = 'Please fill in the requested information.';
      return false;
    }
  
    if (!inputValue.includes(',')) {
      info.textContent = 'Separate the information with commas.';
      return false;
    }
  
    const newContact = new Contact(...inputValue.split(','));
  
    if (!newContact.email.includes('@')) {
      info.textContent = 'Include a valid email.';
      return false;
    }
  
    info.textContent = '';
    return true;
  }
function deleteContact (contactDiv) {
  output.removeChild(contactDiv);
  divCounter--;
  counter.innerHTML = `<p>Contacts saved: ${divCounter}</p>`;
}
