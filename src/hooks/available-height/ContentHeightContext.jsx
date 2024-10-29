import { createContext, useState, useContext } from 'react';

const ContentHeightContext = createContext(null);

export const useContentHeightContext = () => useContext(ContentHeightContext);

export const ContentHeightProvider = ({ children }) => {
  const [isContentHeightUpdated, setIsContentHeightUpdated] = useState(false);

  const recalculateAvailableHeight = () => setIsContentHeightUpdated(prevState => !prevState);

  return (
    <ContentHeightContext.Provider value={{ isContentHeightUpdated, recalculateAvailableHeight }}>
      {children}
    </ContentHeightContext.Provider>
  );
};
