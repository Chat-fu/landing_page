import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
type ChangingPageContextType = {
    changingPage: boolean;
    startChangingPage: () => void;
    endChangingPage: () => void;
};

// Create the context
const ChangingPageContext = createContext<ChangingPageContextType | undefined>(undefined);

// Provider component
export const ChangingPageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [changingPage, SetChangingPage] = useState(false);

  const startChangingPage = () => {
    SetChangingPage(true);
  };

  const endChangingPage = () => {
    SetChangingPage(false);

  }

  return (
    <ChangingPageContext.Provider value={{ changingPage, startChangingPage, endChangingPage }}>
      {children}
    </ChangingPageContext.Provider>
  );
};

// Hook for child components to get the context
export const useChangingPage = () => {
  const context = useContext(ChangingPageContext);
  if (!context) {
    throw new Error('useMyBool must be used within a MyBoolProvider');
  }
  return context;
};

// Export the context as well, in case you need direct access
export default ChangingPageContext;
