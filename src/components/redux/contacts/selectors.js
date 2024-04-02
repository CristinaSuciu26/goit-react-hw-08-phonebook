import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    console.log('Contacts:', contacts);
    console.log('Filter:', filter);

    if (!filter) {
      return contacts || [];
    }

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    console.log('Filtered contacts:', filteredContacts);

    return filteredContacts;
  }
);
