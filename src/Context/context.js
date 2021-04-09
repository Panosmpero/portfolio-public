import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [showFcc, setShowFcc] = useState(false);
  const [showAws, setShowAws] = useState(false);
  const [awsNotification, setAwsNotification] = useState(true);
  return (
    <Context.Provider
      value={{
        showFcc,
        showAws,
        setShowAws,
        setShowFcc,
        awsNotification,
        setAwsNotification,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
