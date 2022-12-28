import React, { useContext, useState } from 'react';
import sublinks from '../Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setToggleSidebar(true);
  };
  const closeSidebar = () => {
    setToggleSidebar(false);
  };

  const openSubmenu = (text, coordinates) => {
    const pageFind = sublinks.find((link) => link.page === text);
    setPage(pageFind);
    setLocation(coordinates);
    setToggleSubmenu(true);
  };
  const closeSubmenu = () => {
    setToggleSubmenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        toggleSubmenu,
        toggleSidebar,
        location,
        page,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
