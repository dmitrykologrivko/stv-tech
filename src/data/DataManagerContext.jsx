import { createContext, useState, useContext } from 'react';
import { DataManager } from './DataManager.js';

const DataManagerContext = createContext(null);

export const useDataManager = () => useContext(DataManagerContext);

export const DataManagerProvider = ({ dataManager, children }) => {
  const value = dataManager || new DataManager();
  return (
    <DataManagerContext.Provider value={value}>
      {children}
    </DataManagerContext.Provider>
  );
};
