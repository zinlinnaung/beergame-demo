import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    outletId: "",
    userId: "",
    name: "",
    phone: "",
    productId: "",
  });
  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
