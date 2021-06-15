import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [showFcc, setShowFcc] = useState(false);
  const [showAws, setShowAws] = useState(false);
  const [awsNotification, setAwsNotification] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [hired, setHired] = useState(true);
  const [emuNotification, setEmuNotification] = useState(true);
  return (
    <Context.Provider
      value={{
        showFcc,
        showAws,
        setShowAws,
        setShowFcc,
        awsNotification,
        setAwsNotification,
        hired,
        emuNotification,
        setEmuNotification
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
