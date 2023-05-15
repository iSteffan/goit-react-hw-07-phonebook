import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  return { ...state, isLoading: true };
};

const handleRejected = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContactsSuccess,
    [addContact.fulfilled]: handleAddContactSuccess,
    [deleteContact.fulfilled]: handleDeleteContactSuccess,
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items = [...state.items, action.payload];
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(item => item.id !== action.payload);
  //   },
  // },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;

// Selector
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
