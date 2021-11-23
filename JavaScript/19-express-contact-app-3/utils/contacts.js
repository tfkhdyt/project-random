const fs = require('fs');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => {
    return contact.nama.toLowerCase() === nama.toLowerCase()});
  return contact
}

const saveContacts = (contacts) => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

const addContact = (contact) => {
  const contacts = loadContact()
  contacts.push(contact)
  saveContacts(contacts)
}

const cekDuplikat = nama => {
  const contacts = loadContact()
  return contacts.find((contact) => {
    return contact.nama === nama
  })
}

const deleteContact = (nama) => {
  const contacts = loadContact()
  const filteredContacts = contacts.filter((contact) => {
    return contact.nama !== nama
  })
  saveContacts(filteredContacts)
}

const updateContacts = contactBaru => {
  const contacts = loadContact()
  const filteredContacts = contacts.filter(contact => contact.nama !== contactBaru.oldNama)
  delete contactBaru.oldNama
  filteredContacts.push(contactBaru)
  saveContacts(filteredContacts)
}

module.exports = {loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts};
