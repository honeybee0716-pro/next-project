import { createContext, useContext, useState, useEffect } from 'react';
import { getHomePlan } from '../services/home-plans';
// import { ToastNotification } from '../toast';

const AppContext = createContext(null);

export function ContextWrapper({ children }) {

  const [store, setStore] = useState({
    // toastNotif: { type :'', message: '' }
  });

  const [actions, setActions] = useState({
    // showToastNotif: ({ type, message }) => setStore({ ...store, toastNotif: { type, message } }),
  });

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
      {/* <ToastNotification {...store.toastNotif}/> */}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}